const BaseElement = require("../UITestFramework/BaseObjects/BaseElement");
const BasePage = require("../UITestFramework/BaseObjects/BasePage");
const Header = require("./PageElements/CommonElements/Header");

class MainPage extends BasePage {
    header = new Header(this.getBy().xpath("//*[@id='header']"));

    body = new BaseElement(this.getBy().xpath("//*[@id='body']"));
}

module.exports = MainPage;
