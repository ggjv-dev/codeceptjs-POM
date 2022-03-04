const { I, HomePage } = inject();

Given('I am on the home page', () => {
  I.amOnPage('/');
});

When('I click on the {string} button', (button) => {
  switch (button) {
    case 'Create an account':
      I.click(HomePage.buttons.CreateAccount);
      break;
    case 'Sign In':
      I.click(HomePage.buttons.SignIn);
      break;
    default:
      break;
  }
});

When('I fill in the {string} field with {string}', (field, value) => {
  I.waitForElement(HomePage.fields.EmailAddress);
  I.fillField(HomePage.fields.EmailAddress, value);
});

Then('I should see the {string} message', (message) => {
  I.wait(5);
  I.see(message);
});
