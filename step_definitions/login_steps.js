const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

let driver;

Given('I navigate to the "Registration" page', async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:8080/register');
});

When('I fill in "username" with "{string}"', async function (username) {
    await driver.findElement(By.id('username')).sendKeys(username);
});

When('I fill in "email" with "{string}"', async function (email) {
    await driver.findElement(By.id('email')).sendKeys(email);
});

When('I fill in "password" with "{string}"', async function (password) {
    await driver.findElement(By.id('password')).sendKeys(password);
});

When('I fill in "confirm password" with "{string}"', async function (confirmPassword) {
    await driver.findElement(By.id('confirm')).sendKeys(confirmPassword);
});

When('I click on the "Register Now" button', async function () {
    await driver.findElement(By.id('register')).click();
});

Then('I should land on the "Home" page', async function () {
    const url = await driver.getCurrentUrl();
    assert.equal(url, 'http://localhost:8080/');
});


AfterAll('end', async function(){
  await driver.quit();
});