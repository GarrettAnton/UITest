const { WebElement } = require("selenium-webdriver");
const BasePage = require("./BaseObjects/BasePage");
const BaseElement = require("./BaseObjects/BaseElement");

class PageFactory {
    constructor(driver) {
        this.driver = driver;
    }

    async GetPage(Page) {
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
                NewPage[props[i]] = await this.GetElements(Page[props[i]]);
            }
        } else {
            throw `The page ${Page} is not a BasePage object`;
        }
        return NewPage;
    }

    async GetElements(prop) {
        let newElement;
        try {
            newElement = await this.driver.findElement(prop.ByValue);
        } catch (err) {
            console.log(err.message);
        }
        let subProps = Object.getOwnPropertyNames(prop).filter(
            (p) => prop[p] instanceof BaseElement
        );
        if (subProps.length != 0) {
            for (let i = 0; i < subProps.length; i++) {
                try {
                    newElement[subProps[i]] = await this.GetElements(
                        prop[subProps[i]]
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
