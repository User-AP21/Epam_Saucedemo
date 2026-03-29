class detailsPage {
  
  async getDetailsPrice() {
    const price = await $('.inventory_details_price').getText();
    return price;
   }
 
   async getDetailsDescription() {
    const detailsDescription = await $('.inventory_details_desc.large_size').getText();
    return detailsDescription;
   }

   async getAddToCartButtonText() {
        const addToCartButton = await $('//button[text()="Add to cart"]');
        return addToCartButton;
      }

}
module.exports = new detailsPage();