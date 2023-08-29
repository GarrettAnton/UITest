const BaseTestFrameworkClass = require("./BaseTestFrameworkClass");
const Config = require("./ConfigPrivider");
const InnerWebDriver = require("./InnerWebDriver");

const capabilities = {
    platform: Config.PLATFORM,
    browserName: Config.BROWSER,
    timeouts: {
        implicit: Config.IMPLICITY_WAIT,
        pageLoad: Config.PAGE_LOAD_TIMEOUT,
    },
};

class DriverFactory extends BaseTestFrameworkClass {
    constructor(logger) {
        super(logger);
    }

    getDriver() {
        this.logger.info(
            "Method getDriver tries to create instanse of InnerWebDriver"
        );
        this.logger.info(
            `Uses for it such object ${JSON.stringify(capabilities)}`
        );
        let driver = new InnerWebDriver(
            capabilities,
            Config.URL,
            Config.EXPLICITY_WAIT,
            this.logger
        );
        return driver;
    }
}

module.exports = DriverFactory;
