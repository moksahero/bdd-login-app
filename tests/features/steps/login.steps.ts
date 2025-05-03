import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Page } from 'playwright';

let page: Page;

Given('ログインページを開いている', async () => {
  const browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:3000/login');
});

When('ユーザーが {string} と {string} を入力してログインボタンを押す', async (email, password) => {
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
});

Then('「ようこそ」というメッセージが表示される', async () => {
  await page.waitForSelector('h1');
  const content = await page.textContent('h1');
  expect(content).toContain('ようこそ');
});
