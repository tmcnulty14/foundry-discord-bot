// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

class DiscordBot {
    static CLIENT = new Client({ intents: [GatewayIntentBits.Guilds] });

    static CLIENT_READY = false

    static async initialize() {
        Logging.debug("Initializing.");

        this.createSettings();

        if (game.user.role !== 4) { // USER_ROLES.GAMEMASTER = 4
            Logging.log("Not logged in as GM. Discord bot only runs when logged in as the GM.");
            return;
        }

        const token = game.settings.get('discord-bot', 'discordToken');
        if (!token) {
            Logging.log('No discord token configured, skipping bot login.');
            return;
        }

        // Login the discord bot client.
        CLIENT.once(Events.ClientReady, readyClient => {
            Logging.log(`Discord client ready! Logged in as ${readyClient.user.tag}`);
            CLIENT_READY = true
        });
        CLIENT.login(token);
    }

    static createSettings() {
        game.settings.register('discord-bot', 'discordToken', {
            name: 'Discord Token',
            hint: 'The discord bot token to use for authenticating as the bot user.',
            scope: 'client',
            config: true,
            type: String,
            default: "",
            onChange: value => { },
            requiresReload: true,
        })
    }

    static async onReady() {
        Logging.debug("Ready.");
    }
}



Logging.debug("Loaded.");

Hooks.once("init", DiscordBot.initialize);
Hooks.once("ready", DiscordBot.onReady);
