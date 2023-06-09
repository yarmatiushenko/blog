// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const fs = require('fs').promises;

async function getScreenshot (driver, name) {
  let screenshot = await driver.takeScreenshot();
  await fs.writeFile(`screenshot/${name}.png`, screenshot, 'base64');
}

describe('LoginAndPostTest', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })

  afterEach(async function() {
    await driver.quit();
  })
  it('LoginAndPostTest', async function() {
    await driver.get("http://localhost:8080/login")
    await driver.manage().window().setRect({ width: 868, height: 672 })
    await driver.findElement(By.id("username")).sendKeys("Kadmus16")
    await driver.findElement(By.id("password")).sendKeys("Vbajkjubz16")
    await driver.findElement(By.id("login")).click()
    getScreenshot(driver, 'AfterLogin');
    await driver.findElement(By.css(".btn")).click()
    getScreenshot(driver, 'AddNewPost');
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("Post")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("Description")
    await driver.findElement(By.id("body")).click()
    await driver.findElement(By.id("body")).sendKeys("Body")
    await driver.findElement(By.id("author")).click()
    await driver.findElement(By.id("author")).sendKeys("yar.matiushenko@gmail.com")
    await driver.findElement(By.id("post")).click()
  })
})
