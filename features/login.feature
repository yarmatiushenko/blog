@Registration
Feature: Registration
  As an Un-registered User of the application
  I want to validate the Registration functionality
  In order to check if it works as desired
  
  Background: User navigates to Registration page
  	Given I navigate to the "Registration" page

	@SuccessfulRegistration
  Scenario Outline: Successful Registration using valid credentials
    When I fill in "username" with "<username>"
    And I fill in "email" with "<email>"
    And I fill in "password" with "<password>"
    And I fill in "confirm password" with "<confirm password>"
    And I click on the "Register Now" button
    And I should land on the "Home" page
    Examples:
	    | username			|	email										|	password		|	confirm password	|
	    |	asdf.asdf			|	asdf.asdf@example.com		|	Asdf@1234		|	Asdf@1234					|