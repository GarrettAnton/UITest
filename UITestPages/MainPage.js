const BaseElement = require("../UITestFramework/BaseObjects/BaseElement");
const BasePage = require("../UITestFramework/BaseObjects/BasePage");
const Header = require("./PageElements/CommonElements/Header");

class MainPage extends BasePage {
    Header = new Header(this.GetBy().xpath("//*[@id='header']"));

    Body = new BaseElement(this.GetBy().xpath("//*[@id='body']"));
}

module.exports = MainPage;
