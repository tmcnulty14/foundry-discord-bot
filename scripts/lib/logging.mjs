const ID = 'discord-bot';

/**
 * Log helper.
 **/
export function info(...args) {
    console.log(`[${ID}]`, ...args);
}

/**
 * Log helper.
 **/
export function debug(...args) {
    console.debug(`[${ID}]`, ...args);
}

/**
 * Warning log helper.
 **/
export function warn(...args) {
    console.warn(`[${ID}]`, ...args);
}

/**
 * Error log helper.
 **/
export function error(...args) {
    console.error(`[${ID}]`, ...args);
}