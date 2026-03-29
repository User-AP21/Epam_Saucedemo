

describe('UC-1 Product Details Verification', () => {
  const productName = 'Sauce Labs Fleece Jacket';
  

  beforeEach(async () => {
    await browser.url('/');
    const usernameInput = await $('#user-name');
    const passwordInput = await $('#password');
    const loginButton = await $('#login-button');

    await usernameInput.setValue('standard_user');
    await passwordInput.setValue('secret_sauce');
    await loginButton.click();
  })
  
  it ('The Price should match on the Details Page', async () =>
  {

    const product = await $(`//div[text()='${productName}']`);
    const productPrice = await $$('.inventory_item_price');

    const priceText = await productPrice[3].getText();

    await product.click();

    const detailsPrice = await $('.inventory_details_price').getText();

    expect(priceText).toBe(detailsPrice);
  });

  it("The Description should match on the Details Page", async () => {

    const product = await $(`//div[text()='${productName}']`);
    const productDescription = await $$('.inventory_item_desc');

    const descriptionText = await productDescription[3].getText();

    await product.click();

    const detailsDescription = await $('.inventory_details_desc.large_size').getText();

    expect(descriptionText).toBe(detailsDescription);
  });

  it("The item should be added to the cart from the Details Page", async () => {

    const product = await $(`//div[text()='${productName}']`);
    
    await product.waitForDisplayed();
    await product.click();

    const addToCartButton = await $('//button[text()="Add to cart"]');
    await addToCartButton.waitForDisplayed();
    await addToCartButton.click();
    const cartBadge = await $('.shopping_cart_badge').getText();

    expect(cartBadge).toBe('1');
    expect(addToCartButton).toHaveText('Remove');

  });

  describe('UC-2 Footer & Social Links', () => {


  

    it('The Footer should be visible on the page', async () => {
    const footer = await $('.footer').isDisplayed();
    expect(footer).toBe(true);
    });

    it('The Twitter link should open the correct page', async () => {
      await browser.url('/');
    const usernameInput = await $('#user-name');
    const passwordInput = await $('#password');
    const loginButton = await $('#login-button');

    await usernameInput.setValue('standard_user');
    await passwordInput.setValue('secret_sauce');
    await loginButton.click();


      const twitterLink = await $('a[href="https://twitter.com/saucelabs"]');
      await twitterLink.waitForDisplayed({ timeout: 10000 });
      const oldHandles = await browser.getWindowHandles();
      await twitterLink.click();
      const handles = await browser.getWindowHandles();
      const newTab = handles.find(h => !oldHandles.includes(h));
      await browser.switchToWindow(newTab);
      await expect(browser).toHaveUrl('https://x.com/saucelabs');
      await expect(browser).toHaveTitle('Sauce Labs (@saucelabs) / X');

      });

      it('The Facebook link should open the correct page', async () => {

      
    await browser.url('/');
    const usernameInput = await $('#user-name');
    const passwordInput = await $('#password');
    const loginButton = await $('#login-button');

    await usernameInput.setValue('standard_user');
    await passwordInput.setValue('secret_sauce');
    await loginButton.click();

      const facebookLink = await $('a[href="https://www.facebook.com/saucelabs"]');
       await facebookLink.waitForDisplayed({ timeout: 10000 });
      const oldHandles = await browser.getWindowHandles();
      await facebookLink.click();
      const handles = await browser.getWindowHandles();
      const newTab = handles.find(h => !oldHandles.includes(h));
      await browser.switchToWindow(newTab);

      await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
      await expect(browser).toHaveTitle('Sauce Labs | Facebook');

      
      it('The LinkedIn link should open the correct page', async () => {

        await browser.url('/');
    const usernameInput = await $('#user-name');
    const passwordInput = await $('#password');
    const loginButton = await $('#login-button');

    await usernameInput.setValue('standard_user');
    await passwordInput.setValue('secret_sauce');
    await loginButton.click();

      const linkedinLink = await $('a[href="https://www.linkedin.com/company/sauce-labs/"]');
      await linkedinLink.waitForDisplayed({ timeout: 10000 });
      const oldHandles = await browser.getWindowHandles();
      await linkedinLink.click();
      const handles = await browser.getWindowHandles();
      const newTab = handles.find(h => !oldHandles.includes(h));
      await browser.switchToWindow(newTab);

      await expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/');
      await expect(browser).toHaveTitle('Sauce Labs | Facebook');
      
    });
  });
});
});