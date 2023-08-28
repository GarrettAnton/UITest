const BaseElement = require("../../BaseElement");
const SearchLine = require("./SearchLine");

class Header extends BaseElement {
    constructor(ByValue) {
        super(ByValue);
    }

    SearchLine = new SearchLine(this.GetBy().xpath("//*[@id='srch']"));
}

module.exports = Header;
