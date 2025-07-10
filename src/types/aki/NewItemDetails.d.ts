class NewItemDetailsBase {
    /**
     * @param {number} fleaPriceRoubles Price of the item on flea market
     * @param {number} handbookPriceRoubles Price of the item in the handbook
     * @param {string} handbookParentId Handbook ParentId for the new item
     * @param {Record<string, LocaleDetails>} locales Locale settings (language keys)
     */
    constructor(fleaPriceRoubles, handbookPriceRoubles, handbookParentId, locales) {
        this.fleaPriceRoubles = fleaPriceRoubles;
        this.handbookPriceRoubles = handbookPriceRoubles;
        this.handbookParentId = handbookParentId;
        this.locales = locales;
    }
}

class NewItemFromCloneDetails extends NewItemDetailsBase {
    /**
     * @param {string} itemTplToClone Id of the item to copy
     * @param {object} overrideProperties Properties to override
     * @param {string} parentId ParentId for the new item
     * @param {string} newId New item id (leave blank to auto-generate)
     */
    constructor(itemTplToClone, overrideProperties, parentId, newId, ...args) {
        super(...args);
        this.itemTplToClone = itemTplToClone;
        this.overrideProperties = overrideProperties;
        this.parentId = parentId;
        this.newId = newId;
    }
}

class NewItemDetails extends NewItemDetailsBase {
    /**
     * @param {object} newItem Full item template
     */
    constructor(newItem, ...args) {
        super(...args);
        this.newItem = newItem;
    }
}

class LocaleDetails {
    /**
     * @param {string} name
     * @param {string} shortName
     * @param {string} description
     */
    constructor(name, shortName, description) {
        this.name = name;
        this.shortName = shortName;
        this.description = description;
    }
}

class CreateItemResult {
    constructor() {
        this.success = false;
        this.itemId = "";
        this.errors = [];
    }
}

module.exports = {
    NewItemDetailsBase,
    NewItemFromCloneDetails,
    NewItemDetails,
    LocaleDetails,
    CreateItemResult
};
