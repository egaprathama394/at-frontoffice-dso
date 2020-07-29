import * as base from '../../common/base-functions';

const { client } = require('nightwatch-api');
const fs = require('fs');
const path = require('path');

const elements = {
    fieldJudul: '#updateTitle',
    fieldKonten: '.updateContentPromo .note-editable',
    //monthYear: '.datepicker-days .datepicker-switch',
    startDate: '#updatePromoDate',
    chooseStartDate: 'tr:nth-child(3) td:nth-child(3)[class="day"]',
    endDate: '#updateEndDate',
    chooseEndDate: 'tr:nth-child(3) td:nth-child(4)[class="day"]',
    validateDate: 'tr:nth-child(3) td:nth-child(2)[class="disabled day"]',
    filedUpload: '#updateInputFile',
    filedBerlaku: '.select2-container--above .select2-selection__rendered',
    slideStatus: '.custom-control-label',
    imagePromo: '',
    editPromoButton: '.odd:nth-child(1) .update-promo',
    simpanButton: '#updatePromo',
    dropDownWeb: '.select2-results__option:nth-child(1)',
    dropDownAplikasi: '.select2-results__option:nth-child(2)',
    dropDownDealer: '.select2-results__option:nth-child(3)',
    notificationAdd: '.toast-message',
    mandatoryEditJudul: '[for="updateTitle"].error',
    mandatoryEditStartDate: '[for="updatePromoDate"].error',
    mandatoryEditEndDate: '[for="updateEndDate"].error',
    mandatoryEditKonten: '[for="updatePromoContent"].error',
    errorEditUploadGambar: '.modal-body[style="color: red;"]',
    dataJudul: '.odd:nth-child(1) td:nth-child(1)'
};
var judulPromo = '';
export const editPromoForm = async () => {
    await client.getText('.odd:nth-child(1) td:nth-child(1)', (res) => {
        return judulPromo = res.value;
    });
    await client.click(elements.editPromoButton);
    await client.pause(3000);
};

export const verifyFiledFilled = async () => {
    await client.assert.value(elements.fieldJudul, judulPromo);
    await client.expect.element(elements.startDate).to.have.value.not.equal('');
    await client.expect.element(elements.endDate).to.have.value.not.equal('');
};

function setDataPromo(currdate, randstr){
    const folderUpload = __dirname + '/../../upload/promo';
    values.judul = 'PROMO' + ` ${currdate}`;
    values.konten = 'KONTEN' + ` ${currdate}`;
    values.gambar = 'success' + `${randstr}` + '.jpg';
    elements.imagePromo = `[src*="${values.gambar}"]`;
    //values.dateFrontOffice = `${currdate.substring(0, 10)}` + ' 00:00:00 WIB' + ` ${currdate.substring(11, 15)}`;
    var fileUpload = [];
    fs.readdirSync(folderUpload).forEach(file => {
        fileUpload.push(file);
    });
    fs.rename(`${ __dirname }`  
                + '/../../upload/promo/' 
                + `${fileUpload[1]}`, `${__dirname}` 
                + '/../../upload/promo/success' + `${randstr}` 
                + '.jpg', function (err) {
                    if (err) throw err;
                }
    ); 
};

function convertDay (day) {
    if(day == 'Su') return 'Sun';
    else if(day == 'Mo') return 'Mon';
    else if(day == 'Tu') return 'Tue';
    else if(day == 'We') return 'Wed';
    else if(day == 'Th') return 'Thu';
    else if(day == 'Fr') return 'Fri';
    else return 'Sat';
};
var values = {
    judul: '',
    konten: '',
    berlaku: 'Website',
    startDate: '',
    endDate: '',
    gambar: '',
    dateFrontOffice: '',
};

export const changeAllField = async () => {
    const date = new Date();
    setDataPromo(date.toString(), require('randomstring').generate(10));
    date.setMonth(date.getMonth()+1);
    const currdate = date.toString();
    var monthYear = `${currdate.substring(4,7)}` + ` ${currdate.substring(11,15)}`;
    if(monthYear == 'May') monthYear = 'Mei' + ` ${currdate.substring(11,15)}`
    else if(monthYear == 'Aug') monthYear = 'Agu' + ` ${currdate.substring(11,15)}`
    else if(monthYear == 'Oct') monthYear = 'Okt' + ` ${currdate.substring(11,15)}`
    await client.pause(3000);
    // const currdate = new Date().toString();
    // const monthYear = currdate.substring(4,7);
    // setDataPromo(currdate, require('randomstring').generate(10));
    var countBerlaku = 0;
    await client.clearValue(elements.fieldJudul);
    await client.setValue(elements.fieldJudul, values.judul);
    await client.clearValue(elements.fieldKonten);
    await client.click(elements.fieldKonten);
    await client.keys(values.konten);
    await client.elements('css selector', '.select2-selection__choice', (res) => {
        countBerlaku = res.value.length;
    });
    for(let i = 0; i < countBerlaku; i++){
        await client.click('.select2-selection__choice:nth-child(1) .select2-selection__choice__remove');
    };
    await client.setValue('.col-md-3 .select2-selection', ['website', client.Keys.ENTER]);
    await client.click(elements.startDate);
    await client.keys([client.Keys.CONTROL, 'a']);
    await client.keys([client.Keys.BACK_SPACE]);
    await client.click('.datepicker-days .next:nth-child(3)');
    await client.getText(elements.chooseStartDate, (res) => {
        values.startDate = res.value + ` ${monthYear}` + ` ${monthYear}`;
        client.getText('tr:nth-child(3) th:nth-child(3)', (res2) => {
            values.dateFrontOffice = `${convertDay(res2.value)}` + ` ${currdate.substring(4,7)}` + ` ${res.value}` + ' 00:00:00 WIB' + ` ${currdate.substring(11, 15)}`;
        });
    });
    await client.click(elements.chooseStartDate);
    await client.click(elements.endDate);
    // await client.keys([client.Keys.CONTROL, 'a']);
    // await client.keys([client.Keys.BACK_SPACE]);
    // await client.click('.datepicker-days .next:nth-child(3)');
    await client.getText(elements.chooseEndDate, (res) => {
        values.endDate = res.value + ` ${monthYear}` + ` ${monthYear}`
    });
    await client.expect.element(elements.validateDate).to.be.visible;
    await client.click(elements.chooseEndDate);
    await client.getValue('#updateVisible', (res) => {
        if(res.value == 'false') client.click(elements.slideStatus);
    });
    await client.setValue(elements.filedUpload, path.resolve(__dirname + '/../../upload/promo/' + values.gambar));
};

export const clickSimpan = async () => {
    await client.waitForElementVisible(elements.simpanButton);
    await client.click(elements.simpanButton);
};

export const verifyNotificaionEdit = async () => {
    await client.pause(5000);
    await client.assert.visible(elements.notificationAdd);
    await client.pause(2000);
    // await client.assert.containsText(elements.notificationAdd, 'Update promo success');
};

export const verifyMandatoryField = async () => {
    await client.pause(3000);
    await client.expect.element(elements.mandatoryEditJudul).to.be.visible;
    await client.expect.element(elements.mandatoryEditKonten).to.be.visible;
    await client.expect.element(elements.mandatoryEditStartDate).to.be.visible;
    await client.expect.element(elements.mandatoryEditEndDate).to.be.visible;
    await client.setValue('#updateInputFile', path.resolve(__dirname + '/../../upload/promo/failed.jpg'));
    await client.expect.element('[class="modal-body text-center"] p').to.be.visible;
};

export const setBlank = async () => {
    await client.clearValue(elements.fieldJudul);
    await client.clearValue(elements.fieldKonten);
    await client.clearValue(elements.startDate);
    await client.clearValue(elements.endDate);
};

export const clickPromo = async () => {
    // await client.waitForElementVisible(elements.imagePromo);
    await client.moveToElement(elements.imagePromo);
    await client.pause(3000);
    await client.click(elements.imagePromo);
};

export const verifyPromoDetail = async () => {
    await client.pause(3000);
    await client.expect.element(elements.imagePromo).to.be.visible;
    await client.assert.containsText(elements.judulPromoDaytona, values.judul);
    await client.assert.containsText(elements.kontenPromo, values.konten);
    await client.assert.containsText(elements.datePromo, values.startDate + ' - ' + values.endDate);
    await client.assert.containsText(elements.berlakuPromo, values.berlaku);
};

export const verifyDataPromo = async () => {
    await client.expect.element(elements.dataJudul).text.to.contain(values.judul);
    // await client.expect.element(elements.dataTanggal).text.to.contain(values.dateFrontOffice);
    // await client.assert.containsText(elements.dataJudul, values.judul);
    // await client.assert.containsText(elements.dataTanggal, values.dateFrontOffice);
    // await client.clik('.odd:nth-child(1) button');
    // await client.assert.containsText(elements.fieldJudulEdit, values.judul);
    // await client.assert.containsText(elements.fieldKontenEdit, values.konten);
    // await client.assert.containsText(elements.startDateEdit, values.startDate);
    // await client.assert.containsText(elements.endDateEdit, values.endDate);
    // await client.assert.containsText(elements.fieldBerlakuEdit, values.berlaku);
};

export const changeToInactive = async () => {
    const currdate = new Date().toString();
    setDataPromo(currdate, require('randomstring').generate(10));
    await client.setValue(elements.filedUpload, path.resolve(__dirname + '/../../upload/promo/' + values.gambar));
    await client.getValue('#updateVisible', (res) => {
        if(res.value == 'true') client.click(elements.slideStatus);
    });
};

export const verifyPromoNotFound = async () => {
    await client.expect.element(values.gambar).to.not.be.visible;
};