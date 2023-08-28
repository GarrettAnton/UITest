const { WebDriver, Builder } = require("selenium-webdriver");

class InnerWebDriver extends WebDriver {
    #driver;
    #defaultURL;
    constructor(capabilities, URL) {
        super();
        this.#driver = new Builder().withCapabilities(capabilities).build();
        this.#defaultURL = URL;
    }

    async Get() {
        await this.#driver.get(this.#defaultURL);
    }

    async Quit() {
        await this.#driver.quit();
    }
}

module.exports = InnerWebDriver;
