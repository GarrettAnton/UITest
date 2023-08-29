const { WebDriver, Builder } = require("selenium-webdriver");

class InnerWebDriver extends WebDriver {
    driver;
    #logger;
    #defaultURL;
    #defaultExplicityWait;
    constructor(capabilities, URL, explicityWait = 60, logger) {
        super();
        this.driver = new Builder().withCapabilities(capabilities).build();
        this.#defaultURL = URL;
        this.#defaultExplicityWait = explicityWait;
        this.#logger = logger;
    }

    async get() {
        await this.#logger.info(
            `Method get tries to get to the URL ${this.#defaultURL}`
        );
        await this.driver.get(this.#defaultURL);
    }

    async wait(condition, timeout = this.#defaultExplicityWait, message) {
        await this.#logger.info(
            `Method wait tries to wait with such conditions ${condition} for ${timeout} ms`
        );
        await this.driver.wait(condition, timeout, message);
    }

    async quit() {
        await this.#logger.info("Method quit tries to close browser");
        await this.driver.quit();
    }

    async waitTillPageLoad() {
        await this.#logger.info(
            "Method waitTillPageLoad tries to wait till page will be loaded"
        );
        await this.driver.wait(async () => {
            let value = await this.driver.executeScript(
                "return document.readyState;"
            );
            return value == "complete";
        });
    }

    async maximize() {
        await this.#logger.info(
            "Method maximize tries to make browser full screen"
        );
        await this.driver.manage().window().maximize();
    }
}

module.exports = InnerWebDriver;
