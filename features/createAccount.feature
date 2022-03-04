Feature: Create Account
  As a user
  I want to create an account
  So that I can use the app
    
    @prueba
  Scenario: Create Account
    Given I am on the home page
    When I click on the "Sign In" button
    And I fill in the "Emaill Address" field with "ejemplo23@gabo.com"
    And I click on the "Create an account" button
    Then I should see the "YOUR PERSONAL INFORMATION" message
    #Then I should see the "YOUR PERSONAL INFORMATION" message