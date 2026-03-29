class inventoryPage {
  //Common Selectors
  async clickProduct(name) {
    const productSelector = $(`//div[text()='${name}']`);
    await productSelector.waitForDisplayed();
    await productSelector.click();
  }

  //The Price should match on the Details Page
  async getPrice() {
    const PriceSelector = $$(".inventory_item_price");
    const price = await PriceSelector[3].getText();
    return price;
  }

  //The Description should match on the Details Page
  async getDescription() {
    const descriptionSelector = $$(".inventory_item_desc");
    const description = await descriptionSelector[3].getText();
    return description;
  }
}

module.exports = new inventoryPage();
