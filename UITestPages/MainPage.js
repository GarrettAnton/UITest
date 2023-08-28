const BasePage = require("./BasePage");
const Header = require("./PageElements/CommonElements/Header");

class MainPage extends BasePage {
    Header = new Header(this.GetBy().xpath("//*[@id='header']"));
}

module.exports = MainPage;
