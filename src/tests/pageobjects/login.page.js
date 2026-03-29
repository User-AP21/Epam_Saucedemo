class LoginPage {
    
   async open () {
        await browser.url('/');
    }

    get usernameInput () {
        return $('#user-name');
    }

    get passwordInput () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }

    async login (username, password) {
        await this.usernameInput.waitForDisplayed();
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.waitForClickable();
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();

