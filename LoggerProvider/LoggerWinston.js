const winston = require("winston");
const path = require("path");
const fs = require("fs");

class LoggerWinston {
    logger;

    constructor() {
        let config;
        try {
            config = JSON.parse(
                fs.readFileSync(
                    path.join(__dirname, "..", "logger.json"),
                    "utf8"
                )
            );
        } catch (err) {
            console.error(
                `During reading logger.json this error occurred :${err.message}`
            );
            throw `During reading logger.json this error occurred :${err.message}`;
        }
        let dirName = config.FOLDER ? config.FOLDER : "logs";
        let infoFileName = path.join(
            __dirname,
            "..",
            dirName,
            config.APP_LOG_NAME ? config.APP_LOG_NAME : "info.log"
        );
        let errorFileName = path.join(
            __dirname,
            "..",
            dirName,
            config.ERROR_LOG_NAME ? config.ERROR_LOG_NAME : "error.log"
        );

        if (!fs.existsSync(path.join(__dirname, "..", dirName))) {
            fs.mkdirSync(path.join(__dirname, "..", dirName));
        }

        this.logger = winston.createLogger({
            level: "info",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.File({
                    filename: errorFileName,
                    level: "warn",
                }),
                new winston.transports.File({
                    filename: infoFileName,
                }),
            ],
        });
    }

    async info(message, callback) {
        console.log("info: " + message);
        await this.logger.info(message, callback);
    }

    async warn(message, callback) {
        console.log("warn: " + message);
        await this.logger.warn(message, callback);
    }

    async error(message, callback) {
        console.log("error: " + message);
        await this.logger.error(message, callback);
    }
}

module.exports = LoggerWinston;
