import * as promoPage from '../../pages/promo/promoPage';
import * as base from '../../common/base-functions';

const { Given, When, Then } =  require('cucumber');
const { client } = require('nightwatch-api');

When('a admin click field Berlaku', async () => {
    await addPromo.clickFieldBerlaku();
});

Then('a admin can see dropdown Website, Aplikasi, and Dealer', async () => {
    await addPromo.verifyFieldBerlaku();
});

When('a admin access Promo Page from menu Promo', async () => {
    await client.click('.has-treeview:nth-child(4) [href="#"]');
    await client.pause(2000);
    await client.click('[href="/frontoffice/promo"]');
    await client.pause(2000);
});

Then('a admin can see data promo {string}', async (auth) => {
    if(auth == 'HO' || auth == 'Group Dealer') await promoPage.verifyFiledPromoHO();
    await promoPage.verifyFiledPromo();
});

When('a admin insert text on serach field', async () => {
    await promoPage.fillSearchFiled();
});

Then('a admin can see the data realated by search', async () => {
    await promoPage.verifySearch();
});

When('a admin click sync button', async () => {
    await promoPage.clickSyncButton();
});

Then('a admin can see sync success notification', async () => {
    await promoPage.verifyNotificationSync();
});

Given('at Promo Page Daytona Web', async () => {
    await client.url(base.urlDaytona() + 'promotion-list');
});

Given('at Promo Page', async () => {
    await client.url(base.urlFrontOffice() + 'promo');
});