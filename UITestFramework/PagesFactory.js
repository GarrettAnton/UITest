const BasePage = require("./BaseObjects/BasePage");
const BaseElement = require("./BaseObjects/BaseElement");

class PageFactory {
    constructor(driver) {
        this.driver = driver;
    }

    async getPage(Page) {
        let NewPage;
        if (Page instanceof BasePage) {
            let props = Object.getOwnPropertyNames(Page).filter(
                (p) => Page[p] instanceof BaseElement
            );
            if (props.length == 0) {
                throw `The page ${Page} does not have elements`;
            }
            NewPage = {};
            for (let i = 0; i < props.length; i++) {
                NewPage[props[i]] = await this.getElements(Page[props[i]]);
            }
        } else {
            throw `The page ${Page} is not a BasePage object`;
        }
        return NewPage;
    }

    async getElements(prop, parent) {
        let newElement;
        try {
            if (parent) {
                newElement = await parent.findElement(prop.byValue);
            } else {
                newElement = await this.driver.findElement(prop.byValue);
            }
        } catch (err) {
            console.log(err.message);
        }
        let subProps = Object.getOwnPropertyNames(prop).filter(
            (p) => prop[p] instanceof BaseElement
        );
        if (subProps.length != 0) {
            for (let i = 0; i < subProps.length; i++) {
                try {
                    newElement[subProps[i]] = await this.getElements(
                        prop[subProps[i]],
                        newElement
                    );
                } catch (err) {
                    console.log(err.message);
                }
            }
        }
        return newElement;
    }
}

module.exports = PageFactory;
