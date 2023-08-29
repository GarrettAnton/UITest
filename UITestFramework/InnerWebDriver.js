const { WebDriver, Builder } = require("selenium-webdriver");

class InnerWebDriver extends WebDriver {
    driver;
    #defaultURL;
    #defaultExplicityWait;
    constructor(capabilities, URL, explicityWait = 60) {
        super();
        this.driver = new Builder().withCapabilities(capabilities).build();
        this.#defaultURL = URL;
        this.#defaultExplicityWait = explicityWait;
    }

    async get() {
        await this.driver.get(this.#defaultURL);
        this.driver.findElement;
    }

    wait(condition, timeout = this.#defaultExplicityWait, message) {
        this.driver.wait(condition, timeout, message);
    }

    async quit() {
        await this.driver.quit();
    }

    async waitTillPageLoad() {
        await this.driver.wait(async () => {
            let value = await this.driver.executeScript(
                "return document.readyState;"
            );
            return value == "complete";
        });
    }

    maximize() {
        this.driver.manage().window().maximize();
    }
}

module.exports = InnerWebDriver;
