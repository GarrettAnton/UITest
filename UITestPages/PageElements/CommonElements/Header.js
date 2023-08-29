const BaseElement = require("../../../UITestFramework/BaseObjects/BaseElement");
const SearchLine = require("./SearchLine");

class Header extends BaseElement {
    constructor(byValue) {
        super(byValue);
    }

    searchLine = new SearchLine(this.getBy().xpath("//*[@id='srch']"));

    logo = new BaseElement(this.getBy().xpath("//*[@id='logo']"));
}

module.exports = Header;
