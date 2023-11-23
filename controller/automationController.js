import puppeteer from 'puppeteer'
import details from '../details.js'

const automationController = async function (req,res) {
  try {
    // Launch site as headless through puppeteer
    // Keep headless: false if you want to see the visualization
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
      // slowMo: 10,   // If web rendering time is slow then we can use it
      args: ['--no-sandbox']
    })
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation({ waitUntil: 'load' }) // Waits for page/element to finish loading
    // Change the defualt wait time  for
    page.setDefaultTimeout(120000)

    // Change the defualt naviagation wait time
    page.setDefaultNavigationTimeout(120000)

    // Site URL
    await page.goto(`${details['siteUrl']}`, {
      waitUntil: 'networkidle0'
    })
    await new Promise(resolve => setTimeout(resolve, 100))

    // Code for Login into page if required

    // const userName = 'user@gmail.com'
    // const passWord = 'pass@1244'
    // // await page.waitForSelector('#username')
    // await page.$eval(
    //   '#username',
    //   (el, userName) => {
    //     el.value = `${userName}`
    //   },
    //   userName
    // )

    // // Clicks on login button
    // await page.$eval(
    //   '#password',
    //   (el, passWord) => {
    //     el.value = `${passWord}`
    //   },
    //   passWord
    // )
    // await page.waitForSelector('#selector')
    // await page.click('#selector')
    // await navigationPromise

    // await (await page.waitForSelector('#name')).type('Rajnikant');
    await page
      .waitForSelector('#name')
      .then(name => name.type(`${details['name']}`))

    await page
      .waitForSelector('#email')
      .then(email => email.type(`${details['email']}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(4) > span > div > div > div.bl-text-field__boxed > div > input'
      )
      .then(element => element.type(`${details['ipName']}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(5) > span > div > div > div.bl-text-field__boxed > div > input'
      )
      .then(element => element.type(`${details['resistrationNumber']}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(6) > span > div > div > div.bl-text-field__boxed > div > input'
      )
      .then(element => element.type(`${details['ownerName']}`))

    // Waiting for radio button selector and then click
    // Note:  We can use a conditional operator to select a radio button based on requirements.

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(7) > span > div > div > label:nth-child(1) > span.bl-radio-button__label > span'
      )
      .then(element => element.click(`${element}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(8) > span > div > div > div.bl-text-field__boxed > div > input'
      )
      .then(element => element.type(`${details['infoRelationRightsOwner']}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(9) > span > div > div > div.bl-text-field__boxed > div > input'
      )
      .then(element => element.type(`${details['companyName']}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(10) > span > div > div > div.bl-text-field__boxed > div > input'
      )
      .then(element => element.type(`${details['companyWebsite']}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(11) > span > div > div > div.bl-text-field__boxed > div > input'
      )
      .then(element => element.type(`${details['companyAddress']}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(12) > span > div > div > div.bl-text-field__boxed > div > input'
      )
      .then(element => element.type(`${details['informantEmail']}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(13) > span > div > div > div.bl-text-field__boxed > div > input'
      )
      .then(element => element.type(`${details['informantPhoneNumber']}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(14) > span > div > div > div.bl-text-field__boxed > div > input'
      )
      .then(element => element.type(`${details['productLink']}`))

    await page.waitForSelector('#body')
    await page.click('#body')

    await page.keyboard.sendCharacter(`${details['problemDetails']}`)

    // Uploading files
    await page
      .waitForSelector('#link_barang_banyak')
      .then(element => element.uploadFile(`${details['filePath']}`))

    await page
      .waitForSelector('#surat_kepemilikan_merek')
      .then(element => element.uploadFile(`${details['filePath']}`))

    await page
      .waitForSelector('#bukti_surat_kuasa')
      .then(element => element.uploadFile(`${details['filePath']}`))

    await page
      .waitForSelector('#bukti_surat_izin_usaha')
      .then(element => element.uploadFile(`${details['filePath']}`))

    // Ensuring the checkbox is selected before submitting
    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(21) > div.bl-flex-container.align-items-flex-start > label'
      )
      .then(element => element.click(`${element}`))

    await page
      .waitForSelector(
        '#app-container > div:nth-child(2) > div.bl-container.u-padding-vertical--huge > div.bl-flex-container.is-gutter-16 > div.bl-flex-item.is-col-8 > div > div > span > form > div > div:nth-child(21) > button'
      )
      .then(element => element.click(`${element}`))
    console.log('Form submitted successfully!')
    res.send(`Form submitted successfully for the user ${req.params.id}`)
    await new Promise(resolve => setTimeout(resolve, 2000))
    await browser.close()
  } catch (error) {
    console.error(error)
    return error
  }
}

export default automationController

