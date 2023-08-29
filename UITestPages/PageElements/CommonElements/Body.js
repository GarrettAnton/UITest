const BaseElement = require("../../../UITestFramework/BaseObjects/BaseElement");
const PageNotification = require("./PageNotification");

class Body extends BaseElement {
    constructor(byValue) {
        super(byValue);
    }

    pageNotification = new PageNotification(
        this.getBy().xpath("//*[@id='basket-prompt']")
    );
}

module.exports = Body;
