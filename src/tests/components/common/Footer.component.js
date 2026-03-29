class Footer {

  //The Footer should be visible on the page
async isFooterVisible() {
    const footer = await $('.footer').isDisplayed();
    return footer;
  }

  //Common function to get window handles before clicking on any social link

  async getwindowHandles() {
  const oldHandles = await browser.getWindowHandles();
  return oldHandles;
}

 async clickTwitterLink() { 
  const twitterLink = await $('a[href="https://twitter.com/saucelabs"]');
  await twitterLink.waitForDisplayed({ timeout: 10000 });
  await twitterLink.click();
}


async switchToNewTab(oldHandles) {
  const handles = await browser.getWindowHandles();
  const newTab = handles.find(h => !oldHandles.includes(h));
  await browser.switchToWindow(newTab);
}

//The Twitter link should open the correct page

async clickTwitterLink() { 
  const twitterLink = await $('a[href="https://twitter.com/saucelabs"]');
  await twitterLink.waitForDisplayed({ timeout: 10000 });
  await twitterLink.click();
}

//The Facebook link should open the correct page

async clickFacebookLink() {
  const facebookLink = await $('a[href="https://www.facebook.com/saucelabs"]');
  await facebookLink.waitForDisplayed({ timeout: 10000 });
  await facebookLink.click();
}

//The LinkedIn link should open the correct page

async clickLinkedInLink() {
  const linkedinLink = await $('a[href="https://www.linkedin.com/company/sauce-labs/"]');
  await linkedinLink.waitForDisplayed({ timeout: 10000 });
  await linkedinLink.click();

}
}

module.exports = new Footer();