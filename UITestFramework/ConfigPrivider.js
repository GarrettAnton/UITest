const fs = require("fs");
const path = require("path");

let Config;

try {
    Config = JSON.parse(
        fs.readFileSync(path.join(__dirname, "..", "config.json"), "utf8")
    );
} catch (err) {
    console.error(
        `During reading config.json this error occurred :${err.message}`
    );
    throw `During reading config.json this error occurred :${err.message}`;
}

module.exports = Config;
