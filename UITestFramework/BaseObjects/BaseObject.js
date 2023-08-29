const webDriver = require("selenium-webdriver");

class BaseObject {
    getBy() {
        return webDriver.By;
    }
}

module.exports = BaseObject;
