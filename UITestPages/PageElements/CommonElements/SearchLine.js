const BaseElement = require("../../../UITestFramework/BaseObjects/BaseElement");

class SearchLine extends BaseElement {
    constructor(byValue) {
        super(byValue);
    }

    line = new BaseElement(this.getBy().xpath("//*[@id='q']"));

    submit = new BaseElement(this.getBy().xpath("//*[@id='find']"));
}

module.exports = SearchLine;
