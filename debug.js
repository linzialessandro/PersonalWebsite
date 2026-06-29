import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  
  console.log('Navigating to http://localhost:5173...');
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
    console.log('Navigation complete. Waiting 2 seconds...');
    await new Promise(r => setTimeout(r, 2000));
  } catch (err) {
    console.log('Navigation error:', err);
  }
  
  await browser.close();
})();
