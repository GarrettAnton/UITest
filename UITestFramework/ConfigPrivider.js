const fs = require("fs");
const path = require("path");

let Config;

Config = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "config.json"), "utf8")
);

module.exports = Config;
