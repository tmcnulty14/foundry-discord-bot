// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

import * as log from './lib/logging.mjs';

class DiscordBot {
    static CLIENT = new Client({ intents: [GatewayIntentBits.Guilds] });

    static CLIENT_READY = false;

    static async initialize() {
        log.debug('Initializing.');

        this.createSettings();

        // USER_ROLES.GAMEMASTER = 4
        if (game.user.role !== 4) {
            log.info('Not logged in as GM. Discord bot only runs when logged in as the GM.');
            return;
        }

        const token = game.settings.get('discord-bot', 'discordToken');
        if (!token) {
            log.info('No discord token configured, skipping bot login.');
            return;
        }

        // Login the discord bot client.
        CLIENT.once(Events.ClientReady, readyClient => {
            log.info(`Discord client ready! Logged in as ${readyClient.user.tag}`);
            this.CLIENT_READY = true;
        });
        this.CLIENT.login(token);
    }

    static createSettings() {
        game.settings.register('discord-bot', 'discordToken', {
            name: 'Discord Token',
            hint: 'The discord bot token to use for authenticating as the bot user.',
            scope: 'client',
            config: true,
            type: String,
            default: '',
            onChange: value => { },
            requiresReload: true,
        });
    }

    static async onReady() {
        log.debug('Ready.');
    }
}


log.debug('Loaded.');

Hooks.once('init', DiscordBot.initialize);
Hooks.once('ready', DiscordBot.onReady);
