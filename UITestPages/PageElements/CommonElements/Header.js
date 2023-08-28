const BaseElement = require("../../../UITestFramework/BaseObjects/BaseElement");
const SearchLine = require("./SearchLine");

class Header extends BaseElement {
    constructor(ByValue) {
        super(ByValue);
    }

    SearchLine = new SearchLine(this.GetBy().xpath("//*[@id='srch']"));

    Logo = new BaseElement(this.GetBy().xpath("//*[@id='logo']"));
}

module.exports = Header;
