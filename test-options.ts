import { test as base, expect } from '@playwright/test';

type TestFixtures = {
  SprodevLogin: void;
};

export const test = base.extend<TestFixtures>({
  SprodevLogin: async ({ page }, use) => {
    // Navigate to login page
    await page.goto('/');
    
    // Perform login - adjust credentials/selectors as needed for your application
    // This is a placeholder - update with actual login logic
    await page.fill('input[name="username"]', process.env.TEST_USERNAME || 'testuser');
    await page.fill('input[name="password"]', process.env.TEST_PASSWORD || 'testpass');
    await page.click('button[type="submit"]');
    
    // Wait for navigation to complete
    await page.waitForURL('**/dashboard/**', { timeout: 10000 }).catch(() => {
      // Login may have different redirect, continue anyway
    });
    
    await use();
  },
});

export { expect };
