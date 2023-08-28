const BaseElement = require("../../BaseElement");

class SearchLine extends BaseElement {
    constructor(ByValue) {
        super(ByValue);
    }

    Line = new BaseElement(this.GetBy().xpath("//*[@id='q']"));
    Submit = new BaseElement(this.GetBy().xpath("//*[@type='submit']"));
}

module.exports = SearchLine;
