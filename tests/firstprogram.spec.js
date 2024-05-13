//importing test and expect packages from  '@playwright\test' module 
const {test, expect } =require('@playwright/test')
//first method to launch specsavers GB
test('myfirsttest', async ({ page }) => {

    await page.goto('https://saucelabs.com/')
    await page.getByText("Test it all. Free").click()
    const titleofpage = await page.title()
    console.log('titleis'+ titleofpage)
    //const result = await expect(page).toHaveURL('https://saucelabs.com/sign-up')
   // console.log(result)

})







