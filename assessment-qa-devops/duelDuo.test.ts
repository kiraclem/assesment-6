
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw', async() => {
   await driver.findElement(By.id('draw')).click()
   await driver.sleep(2000)
  const choices = await driver.findElement(By.id('choices')).isDisplayed()

   expect(choices).toBe(true)

})

test('Add to duo', async() => {
    await driver.sleep(3000)
    await driver.findElement(By.xpath(`//div/button[@onclick='chooseBot(0)]`)).click()
    const playerDuo = await driver.findElement(By.id('player-duo')).isDisplayed()
  
    expect(playerDuo).toBe(true)
})