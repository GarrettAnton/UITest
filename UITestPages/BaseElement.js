const BaseObject = require("./BaseObject");

class BaseElement extends BaseObject {
    constructor(ByValue) {
        super();
        this.ByValue = ByValue;
    }
}

module.exports = BaseElement;
