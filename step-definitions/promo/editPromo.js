import * as editPromo from '../../pages/promo/editPromo';
import * as base from '../../common/base-functions';

const { client } = require('nightwatch-api');
const { Given, When, Then } =  require('cucumber');

Given('at edit promo form', async () => {
    await client.url(base.urlFrontOffice() + 'promo');
    await client.setValue('[type="search"]', 'Tunas Daihatsu Cilegon');
    await editPromo.editPromoForm();
});

Given('all filed edit promo is blank', async() => {
    await editPromo.setBlank();
});

Then('a admin see all field is filled', async () => {
    await editPromo.verifyFiledFilled();
});

Given('all field has changed', async () => {
    await editPromo.changeAllField();
});

When('a admin click edit simpan button', async () => {
    await editPromo.clickSimpan();
});

Then('a admin can see notification success edit promo', async () => {
    await editPromo.verifyNotificaionEdit();
});

Then('a admin can see notification mandatory field at edit promo page', async () => {
    await editPromo.verifyMandatoryField();
});

When('open detail promo that was edited', async () => {
    await editPromo.clickPromo();
});

Then('can found the data promo that was edited', async () => {
    await editPromo.verifyPromoDetail();
});

Then('a admin can found data Promo was edited', async () => {
    await editPromo.verifyDataPromo();
});

Given('data promo changed to inactive', async () => {
    await editPromo.changeToInactive();
});

Then('can\'t found the data promo that was edited', async (auth) => {   
    await editPromo.verifyPromoNotFound();
});
