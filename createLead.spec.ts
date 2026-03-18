import { test, expect } from '@playwright/test';

test('Create a Lead in Leaftaps', async ({ page }) => {
   
    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();

    // Click CRM/SFA (Link Text via CSS)
    await page.locator('text=CRM/SFA').click();

    // Click Leads tab
    await page.locator('a:has-text("Leads")').click();

    // Click Create Lead
    await page.locator('a:has-text("Create Lead")').click();

    // Basic Details (using ID selectors)
    await page.locator('#createLeadForm_companyName').fill('TestLeaf');
    await page.locator('#createLeadForm_firstName').fill('Guna');
    await page.locator('#createLeadForm_lastName').fill('R');

    await page.locator('#createLeadForm_personalTitle').fill('Mr.');

    await page.locator('#createLeadForm_generalProfTitle').fill('Automation Engineer');

    await page.locator('#createLeadForm_annualRevenue').fill('500000');

    await page.locator('#createLeadForm_departmentName').fill('Testing');

    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');

    await page.locator('input[name="submitButton"]').click();

    await expect(page).toHaveTitle(/View Lead/);
    
    // Verify the Page Title
    const title = await page.title();
    console.log(`The Final Page Title is: ${title}`);
   
});