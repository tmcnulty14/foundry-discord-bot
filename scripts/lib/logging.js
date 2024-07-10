class Logging {
    static ID = 'discord-bot'

    /**
     * Log helper.
     **/
    static log(...args) {
        console.log(`[${this.ID}]`, ...args);
    }

    /**
     * Log helper.
     **/
    static debug(...args) {
        console.debug(`[${this.ID}]`, ...args)
    }

    /**
     * Warning log helper.
     **/
    static warn(...args) {
        console.warn(`[${this.ID}]`, ...args);
    }

    /**
     * Error log helper.
     **/
    static error(...args) {
        console.error(`[${this.ID}]`, ...args);
    }
}