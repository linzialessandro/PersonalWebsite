import { chromium } from 'playwright';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 10000 });
    console.log('Taking screenshot...');
    await page.screenshot({ path: '/Users/alessandro/.gemini/antigravity/brain/8b001cb8-82e5-46ad-b685-641486c3f4ac/browser/screenshot.png', fullPage: true });
    
    const html = await page.content();
    console.log('Body HTML size:', html.length);
  } catch (err) {
    console.log('Navigation error:', err);
  }
  
  await browser.close();
})();
