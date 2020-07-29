import * as login from '../pages/login';
import * as base from '../common/base-functions';
import { client } from 'nightwatch-api/lib';

const { Given } = require('cucumber');

Given('login Frontoffice as admin {string}', async (auth) => {
    await client.url(base.urlFrontOffice());
    await login.loginAdmin(auth);
});