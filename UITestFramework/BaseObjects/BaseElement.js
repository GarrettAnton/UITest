const BaseObject = require("./BaseObject");

class BaseElement extends BaseObject {
    constructor(byValue) {
        super();
        this.byValue = byValue;
    }
}

module.exports = BaseElement;
