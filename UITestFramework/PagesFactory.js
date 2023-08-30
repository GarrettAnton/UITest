const BasePage = require("./BaseObjects/BasePage");
const BaseElement = require("./BaseObjects/BaseElement");
const BaseTestFrameworkClass = require("./BaseTestFrameworkClass");

class PageFactory extends BaseTestFrameworkClass {
    constructor(driver, logger) {
        super(logger);
        this.driver = driver;
    }

    async getPage(Page) {
        await this.logger.info(
            `Method getPage starts working with page ${Page.constructor.name}`
        );
        let NewPage;
        if (Page instanceof BasePage) {
            let props = Object.getOwnPropertyNames(Page).filter(
                (p) => Page[p] instanceof BaseElement
            );
            if (props.length == 0) {
                await this.logger.error(
                    `The page ${Page.constructor.name} does not have elements`
                );
                throw `The page ${Page.constructor.name} does not have elements`;
            }
            NewPage = {};
            for (let i = 0; i < props.length; i++) {
                let newElement = await this.getElements(Page[props[i]]);
                if (newElement) {
                    NewPage[props[i]] = newElement;
                } else {
                    await this.logger.warn(
                        `The the element ${props[i]} for the page ${Page.constructor.name} was not found`
                    );
                }
            }
        } else {
            await this.logger.error(
                `The page ${Page.constructor.name} is not a BasePage object`
            );
            throw `The page ${Page.constructor.name} is not a BasePage object`;
        }
        return NewPage;
    }

    async getElements(prop, parent) {
        await this.logger.info(
            `Method getElements starts working with element ${prop.constructor.name}`
        );
        let newElement;
        try {
            if (parent) {
                newElement = await parent.findElement(prop.byValue);
            } else {
                newElement = await this.driver.findElement(prop.byValue);
            }
        } catch (err) {
            await this.logger.warn(
                `The element ${prop.constructor.name} was not made.`
            );
            return null;
        }
        let subProps = Object.getOwnPropertyNames(prop).filter(
            (p) => prop[p] instanceof BaseElement
        );
        if (subProps.length != 0) {
            for (let i = 0; i < subProps.length; i++) {
                await this.logger.info(
                    `Method getElements tries to make recursive call with element ${
                        prop[subProps[i]].constructor.name
                    } which has parent ${prop.constructor.name}`
                );
                let newSubElement = await this.getElements(
                    prop[subProps[i]],
                    newElement
                );
                if (newSubElement) {
                    newElement[subProps[i]] = newSubElement;
                }
            }
        }
        return newElement;
    }
}

module.exports = PageFactory;
