const BasePage = require("../UITestFramework/BaseObjects/BasePage");
const Body = require("./PageElements/CommonElements/Body");
const Header = require("./PageElements/CommonElements/Header");

class MainPage extends BasePage {
    header = new Header(this.getBy().xpath("//*[@id='header']"));

    body = new Body(this.getBy().xpath("//*[@id='body']"));
}

module.exports = MainPage;
