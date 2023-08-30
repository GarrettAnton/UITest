const LoggerWinston = require("../LoggerProvider/LoggerWinston");
const DriverFactory = require("../UITestFramework/DriverFactory");
const PageFactory = require("../UITestFramework/PagesFactory");
const MainPage = require("../UITestPages/MainPage");
const expect = require("chai").expect;

const searchPhrase = "EcoFlow";
const expectPartOfUrl = "?q=EcoFlow";

let logger = new LoggerWinston();
let driverFactory = new DriverFactory(logger);
let driver;
let pageFactory;
let myPage;

// let test = async () => {
//     await driver.get();
//     driver.maximize();
//     await driver.waitTillPageLoad();
//     myPage = await getPage(new MainPage());
//     await myPage.body.pageNotification.close.click();

//     await myPage.header.searchLine.line.sendKeys(searchPhrase);
//     await myPage.header.searchLine.submit.click();
//     await driver.waitTillPageLoad();
//     myPage = await getPage(new MainPage());
//     let newUrl = await driver.driver.getCurrentUrl();
//     await logger.info(newUrl);
//     expect(newUrl).to.contain(expectPartOfUrl);
//     await myPage.header.logo.click();
//     let newOneUrl = await driver.driver.getCurrentUrl();
//     await logger.info(newOneUrl);
//     expect(newOneUrl).to.be.equal(driver.defaultURL);

//     await driver.quit();
// };
// test();

describe("First test block", () => {
    beforeEach(async () => {
        driver = driverFactory.getDriver();
        pageFactory = new PageFactory(driver.driver, logger);
        await driver.get();
        await driver.maximize();
        await driver.waitTillPageLoad();
        myPage = await pageFactory.getPage(new MainPage());
        await myPage.body.pageNotification.close.click();
    });

    afterEach(async () => {
        await driver.quit();
    });

    it("First test", async () => {
        await myPage.header.searchLine.line.sendKeys(searchPhrase);
        await myPage.header.searchLine.submit.click();
        await driver.waitTillPageLoad();
        let newUrl = await driver.driver.getCurrentUrl();
        await logger.info(newUrl);
        expect(newUrl).to.contain(expectPartOfUrl);
    });

    it("Second test", async () => {
        await myPage.header.searchLine.line.sendKeys(searchPhrase);
        await myPage.header.searchLine.submit.click();
        await driver.waitTillPageLoad();
        myPage = await getPage(new MainPage());
        let newUrl = await driver.driver.getCurrentUrl();
        await logger.info(newUrl);
        expect(newUrl).to.contain(expectPartOfUrl);
        await myPage.header.logo.click();
        let newOneUrl = await driver.driver.getCurrentUrl();
        await logger.info(newOneUrl);
        expect(newOneUrl).to.be.equal(driver.defaultURL);
    });
});

async function getPage(page) {
    return await pageFactory.getPage(page);
}
