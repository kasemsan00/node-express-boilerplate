const { createLogger, format, transports } = require("winston");

const logger = createLogger({
    level: "debug",
    format: format.combine(format.colorize(), format.splat(), format.simple()),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: "./logs/combined.log",
        }),
        new transports.File({
            filename: "./logs/warn.log",
            level: "warn",
        }),
        new transports.File({
            filename: "./logs/info.log",
            level: "info",
        }),
        new transports.File({
            filename: "./logs/errors.log",
            level: "error",
        }),
        new transports.File({
            filename: "./logs/debug.log",
            level: "debug",
        }),
    ],
});
module.exports = logger;
