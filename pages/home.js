const { I } = inject();

module.exports = {
  fields:{
    EmailAddress: '//*[@id="email_create"]',
  },
  buttons:{
    CreateAccount: '//button[@name="SubmitCreate"]',
    SignIn: '//*[@class="header_user_info"]',
  },
}
