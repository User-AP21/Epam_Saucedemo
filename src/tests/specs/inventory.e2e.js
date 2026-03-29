const { LoginPage, inventoryPage, detailsPage, Links } = require("../pageobjects/index")

beforeEach(async () => {
  await LoginPage.open();
  await LoginPage.login("standard_user", "secret_sauce");
});

describe("UC-1 Product Details Verification", () => {
  it("The Price should match on the Details Page", async () => {
    //Given I am on the inventory page and I pay attention to the price of the product "Sauce Labs Fleece Jacket"
    const price = await inventoryPage.getPrice();

    //When I select the product "Sauce Labs Fleece Jacket"
    await inventoryPage.clickProduct("Sauce Labs Fleece Jacket");

    //Then The Price should match on the Details Page
    const detailsPrice = await detailsPage.getDetailsPrice();

    console.log("Price on Inventory Page:", price);
    console.log("Price on Details Page:", detailsPrice);
    expect(price).toBe(detailsPrice);
  });

  it("The Description should match on the Details Page", async () => {
    //Given I am on the inventory page and I pay attention to the description of the product "Sauce Labs Fleece Jacket"
    const descriptionText = await inventoryPage.getDescription();

    //When I select the product "Sauce Labs Fleece Jacket"
    await inventoryPage.clickProduct("Sauce Labs Fleece Jacket");

    //Then The Description should match on the Details Page
    const detailsDescription = await detailsPage.getDetailsDescription();

    console.log("Description on Inventory Page:", descriptionText);
    console.log("Description on Details Page:", detailsDescription);
    expect(descriptionText).toBe(detailsDescription);
  });

  it("The item should be added to the cart from the Details Page", async () => {
    //Given I am on the inventory page and I select the product "Sauce Labs Fleece Jacket"
    await inventoryPage.clickProduct("Sauce Labs Fleece Jacket");
    //When I click on the "Add to Cart" button
    await detailsPage.addToCart();
    //Then The item should be added to the cart from the Details Page
    const cartBadge = await detailsPage.getCartBadge();
    const addToCartButton = await detailsPage.getAddToCartButtonText();

    console.log("Cart Badge:", cartBadge);
    console.log("Add to Cart Button Text:", addToCartButton);
    expect(cartBadge).toBe("1");
    expect(addToCartButton).toHaveText("Remove");
  });

  describe("UC-2 Footer & Social Links", () => {
    it("The Twitter, Facebook, and LinkedIn links should exist", async () => {
      //When I am on the inventory page
      const footer = await Links.isFooterVisible();
      const twitterLinkExists = await Links.existTwitterLink();
      const facebookLinkExists = await Links.existFacebookLink();
      const linkedInLinkExists = await Links.existLinkedInLink();
      //Then The links should exist
      console.log("Footer Visible:", footer);
      console.log("Twitter Link Exists:", twitterLinkExists);
      console.log("Facebook Link Exists:", facebookLinkExists);
      console.log("LinkedIn Link Exists:", linkedInLinkExists);
      expect(twitterLinkExists).toBe(true);
      expect(facebookLinkExists).toBe(true);
      expect(linkedInLinkExists).toBe(true);
      expect(footer).toBe(true);
    });

    it("The Twitter link should open the correct page", async () => {
      //Given I am on the inventory page
      const handles = await Links.getwindowHandles();
      //When I click on the Twitter link in the footer
      await Links.clickTwitterLink();
      //Then The Twitter link should open the correct page
      await Links.switchToNewTab(handles);

      console.log(
        "Current URL after clicking Twitter link:",
        await browser.getUrl(),
      );
      await expect(browser).toHaveUrl("https://x.com/saucelabs");
      // await expect(browser).toHaveTitle('Sauce Labs (@saucelabs) / X');
    });

    it("The Facebook link should open the correct page", async () => {
      //Given I am on the inventory page
      const handles = await Links.getwindowHandles();
      //When I click on the Facebook link in the footer
      await Links.clickFacebookLink();
      //Then The Facebook link should open the correct page
      await Links.switchToNewTab(handles);
      console.log(
        "Current URL after clicking Facebook link:",
        await browser.getUrl(),
      );
      await expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");
      // await expect(browser).toHaveTitle('Sauce Labs | Facebook');
    });

    it("The LinkedIn link should open the correct page", async () => {
      //Given I am on the inventory page
      const handles = await Links.getwindowHandles();
      //When I click on the LinkedIn link in the footer
      await Links.clickLinkedInLink();
      //Then The LinkedIn link should open the correct page
      await Links.switchToNewTab(handles);
      console.log(
        "Current URL after clicking LinkedIn link:",
        await browser.getUrl(),
      );
      await expect(browser).toHaveUrl(
        "https://www.linkedin.com/company/sauce-labs/",
      );
      // await expect(browser).toHaveTitle('Sauce Labs | LinkedIn');
    });
  });
});
