const BaseElement = require("../../../UITestFramework/BaseObjects/BaseElement");

class PageNotification extends BaseElement {
    constructor(byValue) {
        super(byValue);
    }

    allow = new BaseElement(this.getBy().xpath("//*[@id='subscribe-allow']"));

    deny = new BaseElement(this.getBy().xpath("//*[@id='subscribe-deny']"));

    close = new BaseElement(this.getBy().xpath("//*[@id='subscribe-close']"));
}

module.exports = PageNotification;
