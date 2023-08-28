const webDriver = require("selenium-webdriver");

class BaseObject {
    GetBy() {
        return webDriver.By;
    }
}

module.exports = BaseObject;
