import * as base from '../../common/base-functions';
import * as outlet from '../../pages/outlet/outlet';

const { Given, Then, When } = require('cucumber');
const { client } = require('nightwatch-api');

Given('at outlet page by outlet menu', async() =>{
    await client.click('[href="/frontoffice/outlet"] p');
});

Then('admin ho can see data outlet', async() =>{
    await outlet.verifyTableName();
});

Then('admin dealer group can see data outlet', async() =>{
    await outlet.verifyTableName();
});

Then('admin ho can see detail outlet', async() =>{
    await outlet.verifyFieldDetail();
});

Then('admin dealer gorup can see detail outlet', async() =>{
    await outlet.verifyFieldDetailDealerGroup();
});

Given('at Outlet Page', async() => {
    await client.url(base.urlFrontOffice() + 'outlet');
});

When('admin ho click detail outlet', async() => {
    await outlet.clickDetail();
});

When('admin dealer group click detail outlet', async() => {
    // await client.setValue('[type="search"]', 'Tunas Daihatsu Cilegon');
    // await client.pause(1000);
    await outlet.clickDetail();
});

Given('at Detail Outlet form', async() => {
    await  client.url(base.urlFrontOffice() + 'outlet')
    await outlet.clickDetail();
});

Given('at Detail Outlet Tunas Cilegon form', async() => {
    await  client.url(base.urlFrontOffice() + 'outlet')
    await client.setValue('[type="search"]', 'Tunas Daihatsu Cilegon');
    await client.pause(1000);
    await outlet.clickDetail();
});

Given('url and logo updated', async() => {
    await outlet.updateUrlLogo();
});

When('admin ho save data outlet', async() => {
    await client.click('#updateOutlet');
});

When('admin dealer group save data outlet', async() => {
    await client.click('#updateOutlet');
});

Then('admin can see notification success update outlet data', async() => {
    await outlet.notificationSuccessUpdate();
});

When('admin access url outlet that was updated', async() => {
    await outlet.accessUpdatedUrl();
});

Then('admin can see outlet page and logo updated', async() => {
    await outlet.verifyUpdatedLogo();
});

Then('admin can see url outlet updated', async() => {
    await outlet.verifyUpdatedUrl();
});

Then('admin can see data outlet', async() => {
    await outlet.verifyDataOutlet();
});

Given('gambar outlet updated', async() => {
    await outlet.changeGambar();
});

When('admin save data outlet', async() => {
    await client.moveToElement('#updateOutlet', 0, 0);
    await client.pause(2000);
    await client.click('#updateOutlet');
});

Then('admin can see outlet images updated', async() => {
    await outlet.verifyUpdatedImages();
});