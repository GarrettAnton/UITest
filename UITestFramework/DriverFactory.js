const Config = require("./ConfigPrivider");
const InnerWebDriver = require("./InnerWebDriver");

const capabilities = {
    platform: Config.PLATFORM,
    browserName: Config.BROWSER,
};

class DriverFactory {
    GetDriver() {
        return new InnerWebDriver(capabilities, Config.URL);
    }
}

module.exports = DriverFactory;
