class detailsPage {
  //The Price should match on the Details Page
  async getDetailsPrice() {
    const price = await $(".inventory_details_price").getText();
    return price;
  }

  //The Description should match on the Details Page
  async getDetailsDescription() {
    const detailsDescription = await $(
      ".inventory_details_desc.large_size",
    ).getText();
    return detailsDescription;
  }

  //The item should be added to the cart from the Details Page
  async addToCart() {
    const addToCartButton = await $('//button[text()="Add to cart"]');
    await addToCartButton.waitForDisplayed();
    await addToCartButton.click();
  }

  async getCartBadge() {
    const cartBadge = await $(".shopping_cart_badge").getText();
    return cartBadge;
  }

  async getAddToCartButtonText() {
    const addToCartButton = await $(
      '[class="btn btn_secondary btn_small btn_inventory"]',
    );
    const buttonText = await addToCartButton.getText();
    return buttonText;
  }
}
module.exports = new detailsPage();
