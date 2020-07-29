const { client } = require('nightwatch-api');
const fs = require('fs');
const path = require('path');

const elements = {
    fieldJudulEdit: '#updateTitle',
    fieldKontenEdit: '.updateContentPromo .note-editable',
    startDateEdit: '#updatePromoDate',
    endDateEdit: '#updateEndDate',
    // fieldBerlakuEdit: '.select2-selection__choice',
    //FRONTOFFICE-HO
    dataJudul: '.odd:nth-child(1) td:nth-child(1)',
    dataTanggal: '.odd:nth-child(1) td:nth-child(2)',
    dataOutlet: '.odd:nth-child(1) td:nth-child(3)',
    fieldJudul: '#title',
    fieldKonten: '#promotionForm .note-editable',
    startDate: '#promoDate',
    chooseStartDate: 'tr:nth-child(3) td:nth-child(3)[class="day"]',
    endDate: '#endDate',
    chooseEndDate: 'tr:nth-child(3) td:nth-child(4)[class="day"]',
    validateDate: 'tr:nth-child(3) td:nth-child(2)[class="disabled day"]',
    filedUpload: '#inputFile',
    // filedBerlaku: '.appliedAt-container .select2-selection__rendered',
    // blankBerlaku: '.select2-selection__choice',
    filedOutlet: '#outletList',
    addPromoButton: '.add .btn',
    simpanButton: '#addPromo',
    dropDownWeb: '.select2-results__option:nth-child(1)',
    dropDownAplikasi: '.select2-results__option:nth-child(2)',
    dropDownDealer: '.select2-results__option:nth-child(3)',
    notificationAdd: '.toast-message',
    searchField: 'label [type="search"]',
    emptyField: '.dataTables_empty',
    mandatoryAddJudul: '[for="title"].error',
    mandatoryAddStartDate: '[for="promoDate"].error',
    mandatoryAddEndDate: '[for="endDate"].error',
    mandatoryAddKonten: '[for="promoContent"].error',
    mandatoryOutlet: '[for="outletList"].error',
    errorEditUploadGambar: '.modal-body[style="color: red;"]',
    syncButton: '#sync-promo',
    notificationSync: '.toast-message',
    //DAYTONA
    imagePromo: '',
    judulPromoDaytona: '.title-responsive',
    kontenPromo: '.promo-detail-text',
    datePromo: '[class="col-sm-12 col-md-6 promo-info-desc-value"]',
    berlakuPromo: '[class="col promo-info-desc-value"]'
};

export const addPromoForm = async () => {
    await client.moveToElement(elements.addPromoButton, 0, 0);
    await client.pause(3000);
    await client.click(elements.addPromoButton);
};

export const verifyBlankFiled = async (auth) => {
    await client.assert.value(elements.fieldJudul, '');
    await client.assert.value(elements.startDate, '');
    await client.assert.value(elements.endDate, '');
    await client.assert.containsText(elements.filedUpload, '');
    if(auth == 'Group Dealer') await client.expect.element(elements.filedOutlet).to.have.value.that.equals('');
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
    outletName: ''
};

export const fillAllField = async (auth) => {
    const date = new Date();
    setDataPromo(date.toString(), require('randomstring').generate(10));
    date.setMonth(date.getMonth()+1);
    const currdate = date.toString();
    var monthYear = `${currdate.substring(4,7)}` + ` ${currdate.substring(11,15)}`;
    if(monthYear == 'May') monthYear = 'Mei' + ` ${currdate.substring(11,15)}`;
    else if(monthYear == 'Aug') monthYear = 'Agu' + ` ${currdate.substring(11,15)}`;
    else if(monthYear == 'Oct') monthYear = 'Okt' + ` ${currdate.substring(11,15)}`;
    await client.pause(3000);
    await client.getText('.col-sm-6 h1' , (res) =>{
        if(res.value == 'List Promo')values.outletName = 'H0';
        else values.outletName = res.value.substring(11);
    });
    await client.setValue(elements.fieldJudul, values.judul);
    await client.click(elements.fieldKonten);
    await client.keys(values.konten);
    // await client.setValue('.col-md-4 .select2-selection', ['web', client.Keys.ENTER]);
    await client.click(elements.startDate);
    await client.click('.datepicker-days .next:nth-child(3)');
    await client.getText(elements.chooseStartDate, (res) => {
        values.startDate = res.value + ` ${monthYear}`;
        client.getText('tr:nth-child(3) th:nth-child(3)', (res2) => {
            values.dateFrontOffice = `${convertDay(res2.value)}` + ` ${currdate.substring(4,7)}` + ` ${res.value}` + ' 00:00:00 WIB' + ` ${currdate.substring(11, 15)}`;
        });
    });
    await client.click(elements.chooseStartDate);
    await client.click(elements.endDate);
    await client.getText(elements.chooseEndDate, (res) => {
        values.endDate = res.value + ` ${monthYear}`;
    });
    await client.pause(2000);
    await client.expect.element(elements.validateDate).to.be.visible;
    await client.click(elements.chooseEndDate);
    await client.setValue(elements.filedUpload, path.resolve(__dirname + '/../../upload/promo/' + values.gambar));
    if (auth == 'Group Dealer') {
        await client.click(elements.filedOutlet);
        await client.keys(client.Keys.DOWN_ARROW);
        await client.keys(client.Keys.DOWN_ARROW);
        await client.keys(client.Keys.ENTER);
    };
};

export const clickAdd = async () => {
    await client.waitForElementVisible(elements.simpanButton);
    await client.click(elements.simpanButton);
};

export const verifyNotificaionAdd = async () => {
    await client.waitForElementVisible(elements.notificationAdd);
    await client.assert.visible(elements.notificationAdd);
    await client.pause(5000);
    //await client.assert.containsText(elements.notificationAdd, 'success'); //Update promo success
};

export const clickFieldBerlaku = async () => {
    await pause(2000);
    await client.click(elements.filedBerlaku);
};

export const clickPromo = async () => {
    await client.waitForElementVisible(elements.imagePromo);
    await client.moveToElement(elements.imagePromo, 0, 0);
    await client.pause(3000);
    await client.click(elements.imagePromo);
};

export const verifyPromoDetail = async () => {
    await client.pause(3000);
    await client.expect.element(elements.imagePromo).to.be.visible;
    await client.assert.containsText(elements.judulPromoDaytona, values.judul);
    await client.assert.containsText(elements.kontenPromo, values.konten);
    await client.assert.containsText(elements.datePromo, values.startDate + ' - ' + values.endDate);
    //await client.assert.containsText(elements.berlakuPromo, values.berlaku);
};

export const searchPromo = async () => {
    await client.setValue(elements.searchField, values.judul);
};

export const verifyEmptyDataPromo = async () => {
    await client.expect.element(elements.emptyField).to.be.visible;
};

export const verifyMandatoryField = async (auth) => {
    await client.pause(3000);
    await client.expect.element(elements.mandatoryAddJudul).to.be.visible;
    await client.expect.element(elements.mandatoryAddKonten).to.be.visible;
    await client.expect.element(elements.mandatoryAddStartDate).to.be.visible;
    await client.expect.element(elements.mandatoryAddEndDate).to.be.visible;
    if(auth == 'Group Dealer') await client.expect.element(elements.mandatoryOutlet).to.be.visible;
    await client.setValue('#inputFile', path.resolve(__dirname + '/../../upload/promo/failed.jpg'));
    await client.expect.element('[class="modal-body text-center"] p').to.be.visible;
};

export const syncPromo = async () => {
    await client.click(elements.syncButton);
    await client.pause(3000);
    await client.assert.visible(elements.notificationSync);
    await client.assert.containsText(elements.notificationSync, 'Sync promo success');
}


export const verifyDataPromo = async () => {
    await client.expect.element(elements.dataJudul).text.to.contain(values.judul);
    //await client.assert.containsText(elements.dataTanggal, values.dateFrontOffice);
    // await client.click('.odd:nth-child(1) button');
    // await client.expect.element(elements.fieldJudulEdit).text.to.contain(values.judul);
    // await client.expect.element(elements.fieldKontenEdit).text.to.contain(values.konten);
    // await client.expect.element(elements.startDateEdit).text.to.contain(values.startDate);
    // await client.expect.element(elements.endDateEdit).text.to.contain(values.endDate);
    //await client.assert.containsText(elements.fieldBerlakuEdit, values.berlaku);
};

export const verifyDataPromoHO = async () => {
    await client.expect.element(elements.dataJudul).text.to.contain(values.judul);
    //await client.assert.containsText(elements.dataTanggal, values.dateFrontOffice);
    //await client.assert.containsText(elements.dataOutlet, values.outletName);
    // await client.clik('.odd:nth-child(1) button');
    // await client.expect.element(elements.fieldJudulEdit).text.to.contain(values.judul);
    // await client.expect.element(elements.fieldKontenEdit).text.to.contain(values.konten);
    // await client.expect.element(elements.startDateEdit).text.to.contain(values.startDate);
    // await client.expect.element(elements.endDateEdit).text.to.contain(values.endDate);
    //await client.assert.containsText(elements.fieldBerlakuEdit, values.berlaku);
};

export const verifyPromoNotFound = async () => {
    await client.expect.element(values.gambar).to.not.be.present;
};
