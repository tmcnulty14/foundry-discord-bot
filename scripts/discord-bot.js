Logging.debug("Loaded.");

Hooks.on("init", function() {
    DiscordBot.initialize()
});

Hooks.on("ready", function() {
});

class DiscordBot {
    static initialize() {
        Logging.debug("Initializing.");

        // Nothing to do right now.
        // Might be used for registering settings later.
    }

    static onReady() {
        Logging.debug("Ready. Hello World!");

        // Nothing to do right now.
        // Might be used to connect the discord bot later.
    }
}

class Logging {
    static ID = 'discord-bot'

    /**
     * Log helper.
     **/
    static log(...args) {  
        console.log(this.ID, '|', ...args);
    }

    /**
     * Log helper.
     **/
    static debug(...args) {  
        const shouldLog = game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);

        if (shouldLog) {
            console.log(this.ID, '|', ...args);
        }
    }

    /**
     * Warning log helper.
     **/
    static warn(...args) {
        console.warn(this.ID, '|', ...args);
    }

    /**
     * Error log helper.
     **/
    static error(...args) {
        console.error(this.ID, '|', ...args);
    }
}
