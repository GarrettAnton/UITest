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

class DriverFactory {
    getDriver() {
        let driver = new InnerWebDriver(
            capabilities,
            Config.URL,
            Config.EXPLICITY_WAIT
        );
        return driver;
    }
}

module.exports = DriverFactory;
