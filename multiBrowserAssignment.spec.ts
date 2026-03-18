import { test, chromium, firefox } from '@playwright/test';

test('To launch Red Bus and Flipkart', async () => {
    
    // --- 1. Edge Browser Instance (Red Bus) ---
    const edgeBrowser = await chromium.launch({ headless: false, channel: 'msedge' });
    const edgeContext = await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();

    await edgePage.goto('https://www.redbus.in');
    const redBusTitle = await edgePage.title();
    const redBusUrl = edgePage.url();

    console.log(`Red Bus Title: ${redBusTitle}`);
    console.log(`Red Bus URL: ${redBusUrl}`);

  // Launch firefox browser
    const firefoxBrowser = await firefox.launch({ headless: false });
    const firefoxContext = await firefoxBrowser.newContext();
    const firefoxPage = await firefoxContext.newPage();

    await firefoxPage.goto('https://www.flipkart.com');
    const flipkartTitle = await firefoxPage.title();
    const flipkartUrl = firefoxPage.url();

    console.log(`Flipkart Title: ${flipkartTitle}`);
    console.log(`Flipkart URL: ${flipkartUrl}`);

    await edgeBrowser.close();
    await firefoxBrowser.close();
});


