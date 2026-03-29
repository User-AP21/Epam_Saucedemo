class inventoryPage {

  //Common Selectors
  async clickProduct(name) {
    const productSelector = $(`//div[text()='${name}']`);
    await productSelector.waitForDisplayed();
    await productSelector.click();
   }
  
  //The Price should match on the Details Page
   async getPrice() {
   const PriceSelector = $$('.inventory_item_price');
   const price = await PriceSelector[3].getText();
   return price;
   }


   //The Description should match on the Details Page
   async getDescription() {
    const descriptionSelector = $$('.inventory_item_desc');
    const description = await descriptionSelector[3].getText();
    return description;
   }


   
   //The item should be added to the cart from the Details Page
    async addToCart() {
      const addToCartButton = await $('//button[text()="Add to cart"]');
      await addToCartButton.waitForDisplayed();
      await addToCartButton.click();
    }

     async getCartBadge() {
      const cartBadge = await $('.shopping_cart_badge').getText();
      return cartBadge;
     }

      async getAddToCartButtonText() {
        const addToCartButton = await $('//button[text()="Add to cart"]');
        return addToCartButton;
      }
}

module.exports = new inventoryPage();