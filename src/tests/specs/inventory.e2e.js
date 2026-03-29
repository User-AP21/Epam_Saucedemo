const  LoginPage  = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');
const detailsPage = require('../pageobjects/details.page');
const Footer = require('../components/common/Footer.component');

beforeEach (async () => {
  await LoginPage.open();
  await LoginPage.login('standard_user', 'secret_sauce');
 });

describe('UC-1 Product Details Verification', () => {
  
  
  it('The Price should match on the Details Page', async () =>{
    //Given I am on the inventory page and I pay attention to the price of the product "Sauce Labs Fleece Jacket"
    const price = await inventoryPage.getPrice();

    //When I select the product "Sauce Labs Fleece Jacket"
    await inventoryPage.clickProduct('Sauce Labs Fleece Jacket');

    //Then The Price should match on the Details Page
    const detailsPrice = await detailsPage.getDetailsPrice();
    expect(price).toBe(detailsPrice);
  });

  it("The Description should match on the Details Page", async () => {
    //Given I am on the inventory page and I pay attention to the description of the product "Sauce Labs Fleece Jacket"
    const descriptionText = await inventoryPage.getDescription();

    //When I select the product "Sauce Labs Fleece Jacket"
    await inventoryPage.clickProduct('Sauce Labs Fleece Jacket');

    //Then The Description should match on the Details Page
    const detailsDescription = await detailsPage.getDetailsDescription();
    expect(descriptionText).toBe(detailsDescription);
  });

  it("The item should be added to the cart from the Details Page", async () => {
    //Given I am on the inventory page and I select the product "Sauce Labs Fleece Jacket"
    await inventoryPage.clickProduct('Sauce Labs Fleece Jacket');
    //When I click on the "Add to Cart" button
    await inventoryPage.addToCart();
    //Then The item should be added to the cart from the Details Page
    const cartBadge = await inventoryPage.getCartBadge();
    const addToCartButton = await detailsPage.getAddToCartButtonText();
    expect(cartBadge).toBe('1');
    expect(addToCartButton).toHaveText('Remove');
  });

  describe('UC-2 Footer & Social Links', () => {

    it('The Footer should be visible on the page', async () => {
    //When I am on the inventory page
    const footer = await Footer.isFooterVisible();
    //Then The Footer should be visible on the page
    expect(footer).toBe(true);
    });

    it('The Twitter link should open the correct page', async () => {

      //Given I am on the inventory page
      const handles = await Footer.getwindowHandles();
      //When I click on the Twitter link in the footer
      await Footer.clickTwitterLink();
      //Then The Twitter link should open the correct page
      await Footer.switchToNewTab(handles);
      await expect(browser).toHaveUrl('https://x.com/saucelabs');
      // await expect(browser).toHaveTitle('Sauce Labs (@saucelabs) / X');
      });

      it('The Facebook link should open the correct page', async () => {
      
      //Given I am on the inventory page
      const handles = await Footer.getwindowHandles();
      //When I click on the Facebook link in the footer
      await Footer.clickFacebookLink();
      //Then The Facebook link should open the correct page
      await Footer.switchToNewTab(handles);
      await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
      // await expect(browser).toHaveTitle('Sauce Labs | Facebook');
});

      it('The LinkedIn link should open the correct page', async () => {

      //Given I am on the inventory page
      const handles = await Footer.getwindowHandles();
      //When I click on the LinkedIn link in the footer
      await Footer.clickLinkedInLink();
      //Then The LinkedIn link should open the correct page
      await Footer.switchToNewTab(handles);
      await expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/');
      // await expect(browser).toHaveTitle('Sauce Labs | LinkedIn');
    });
  });
});