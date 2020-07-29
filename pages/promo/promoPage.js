import * as base from '../../common/base-functions';

const { client } = require('nightwatch-api');

const elements = {
    textJudulFiled: '[aria-label^="Judul"]',
    textTanggalDibuatFiled: '[aria-label^="Tanggal Dibuat"]',
    textTanggalDiperbaruiFiled: '[aria-label^="Tanggal Diperbarui"]',
    textStatus: '[aria-label^="Status Penayangan"]',
    textUpdateFiled: '[aria-label^="Update"]',
    textOutletField: '[aria-label^="Outlet"]',
    searchFiled: '.dataTables_filter [type="search"]',
    syncButton: '#sync-promo',
    firstRowPromo: '.odd:nth-child(1) .sorting_1',
    notificationSync: '.toast-message',
    filedBerlaku: '.appliedAt-container .select2-selection__rendered',
    dropDownWeb: '.select2-results__option:nth-child(1)',
    dropDownAplikasi: '.select2-results__option:nth-child(2)',
    dropDownDealer: '.select2-results__option:nth-child(3)',
};

export const verifyFiledPromo = async () => {
   await client.waitForElementVisible(elements.textJudulFiled);
   await client.assert.containsText(elements.textJudulFiled, 'Judul');
   await client.assert.containsText(elements.textTanggalDibuatFiled, 'Tanggal Dibuat');
   await client.assert.containsText(elements.textTanggalDiperbaruiFiled, 'Tanggal Diperbarui');
   await client.assert.containsText(elements.textStatus, 'Status Penayangan');
   await client.assert.containsText(elements.textUpdateFiled, 'Update');
};

export const verifyFiledPromoHO = async () => {
    await client.waitForElementVisible(elements.textJudulFiled);
    await client.assert.containsText(elements.textJudulFiled, 'Judul');
    await client.assert.containsText(elements.textTanggalDibuatFiled, 'Tanggal Dibuat');
    await client.assert.containsText(elements.textTanggalDiperbaruiFiled, 'Tanggal Diperbarui');
    await client.assert.containsText(elements.textStatus, 'Status Penayangan');
    await client.assert.containsText(elements.textOutletField, 'Outlet');
    await client.assert.containsText(elements.textUpdateFiled, 'Update');
 };

var serachText = '';
export const fillSearchFiled = async () => {
    await client.waitForElementVisible(elements.firstRowPromo);
    await client.getText(elements.firstRowPromo, async (res) => {
        return serachText = res.value;
    });
    await client.setValue(elements.searchFiled, serachText);
}

export const verifySearch = async () => {
    await client.waitForElementVisible(elements.firstRowPromo);
    await client.assert.containsText(elements.firstRowPromo, serachText)
};

export const clickSyncButton = async () => {
    await client.click(elements.syncButton);
};

export const verifyNotificationSync = async () => {
    await client.pause(3000)
    await client.assert.visible(elements.notificationSync);
    await client.assert.containsText(elements.notificationSync, 'Sync promo success');
};

export const clickFieldBerlaku =  async () => {
    await client.waitForElementVisible(elements.filedBerlaku);
    await client.click(elements.filedBerlaku);
};

export const verifyFieldBerlaku =  async () => {
    await client.assert.containsText(elements.dropDownWeb, 'Website');
    await client.assert.containsText(elements.dropDownAplikasi, 'Aplikasi');
    await client.assert.containsText(elements.dropDownDealer, 'Dealer');
};