import * as addPromo from '../../pages/promo/addPromo';
import * as base from '../../common/base-functions';
import { client } from 'nightwatch-api/lib';

const { Given, When, Then } = require('cucumber');

Then('a admin {string} see all field blank', async(auth) => {
    await addPromo.verifyBlankFiled(auth);
});

Given('all field has filled by {string}', async (auth) => {
    await addPromo.fillAllField(auth);
});

Then('a admin can see notification success add new promo', async () => {
    await addPromo.verifyNotificaionAdd();
});

When('a admin click add simpan button', async () => {
    await addPromo.clickAdd();
});

When('open detail promo that was added', async () => {
    await addPromo.clickPromo();
});
Then('can found the data promo that was added', async () => {
    await addPromo.verifyPromoDetail();
});

Given('at add promo form', async () => {
    await client.url(base.urlFrontOffice() + 'promo');
    await addPromo.addPromoForm();
});

When('a admin search data Promo', async () => {
    await addPromo.searchPromo();
});

Then('a admin can\'t found the data Promo', async () => {
    await addPromo.verifyEmptyDataPromo();
});

Then('a admin {string} can see notification mandatory field at add promo form', async (auth) => {
    await addPromo.verifyMandatoryField(auth);
});

Then('a admin sync promo data', async () => {
    await addPromo.syncPromo();
});

Then('a admin {string} can found the data Promo', async (auth) => {
    if(auth == 'HO') await addPromo.verifyDataPromoHO();
    await addPromo.verifyDataPromo();
});

Given('at {string} Page Daytona Web', async (auth) => {
    await base.urldDaytonaOutlet(auth);
});

Then('can\'t found the data promo that was added', async (auth) => {   
    await addPromo.verifyPromoNotFound();
});
