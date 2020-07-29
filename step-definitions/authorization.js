import * as auths from '../pages/authorization';

const { Then } = require('cucumber');

Then('admin can see menu for authorization {string}', async(auth) => {
    await auths.verifyMenu(auth);
});