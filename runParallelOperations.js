import puppeteer from 'puppeteer';
import details from './details.js';

const runParallelOperations = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    slowMo: 10,
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();
  const navigationPromise = page.waitForNavigation({ waitUntil: 'load' });
  page.setDefaultTimeout(120000);
  page.setDefaultNavigationTimeout(120000);

  try {
    await page.goto(`${details['siteUrl']}`, { waitUntil: 'networkidle0' });
    await new Promise(resolve => setTimeout(resolve, 100));

    const operations = [
      page.waitForSelector('#name').then(element => element.type(`${details['name']}`)),
      page.waitForSelector('#email').then(element => element.type(`${details['email']}`)),
      // Add more parallel operations as needed

      // Example: Uncomment the following line for parallel operation
      // page.waitForSelector('#username').then(element => element.type('your_username')),
    ];

    // Run all operations in parallel
    await Promise.all(operations);

    // Continue with the rest of the code

    await page.waitForSelector('#body');
    await page.click('#body');
    await page.keyboard.sendCharacter(`${details['problemDetails']}`);

    // Add more sequential operations if needed

    console.log('All parallel operations completed successfully!');

  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
  }
};

runParallelOperations();
