import * as base from '../../common/base-functions';

const { client } = require('nightwatch-api');
const fs = require('fs');
const path = require('path');

const elements = {
    headerKodeOutlet: '[role="row"]:nth-child(1) th:nth-child(1) ',
    headerNamaOutlet: '[role="row"]:nth-child(1) th:nth-child(2) ',
    detailKodeOutlet: '.row:nth-child(1) .col:nth-child(1) label',
    detailNamaOutlet: '.row:nth-child(1) .col:nth-child(2) label',
    detailAlamat: '.row:nth-child(2) .col:nth-child(1) label',
    detailLatitude: '.row:nth-child(3) .col:nth-child(1) label',
    detailLogitude: '.row:nth-child(3) .col:nth-child(2) label',
    detailURL: '[for="urlName"]',
    detailLogo: '.row:nth-child(12) .col:nth-child(1) label:nth-child(1)',
    searchOutletPage: '.col-sm-12 #searchInput',
    notificationUpdate: '.toast-message',
    fieldDetailUrl: '#urlName',
    fieldDetailLogo: '#inputLogo',
    //Dealer Group
    detailURLDealerGroup: '[for="urlName"]',
    labelGambar1DealerGroup: '.form-group:nth-child(4) label:nth-child(1)',
    labelGambar2DealerGroup: '.form-group:nth-child(5) label:nth-child(1)',
    labelGambar3DealerGroup: '.form-group:nth-child(6) label:nth-child(1)',
    //Daytona
    titleOutlet: '.displayName',
    //Dealer
    labelKodeOutlet: '.row:nth-child(1) .col:nth-child(1) label',
    labelNamaOutlet: '.row:nth-child(1) .col:nth-child(2) label',
    labelAlamat: '.row:nth-child(1) .col:nth-child(3) label',
    labelLatitude: '.col-3:nth-child(1) .form-group label',
    labelLogitude: '.col-3:nth-child(2) .form-group label',
    fieldGambar1: '#inputOutletImage1',
    fieldGambar2: '#inputOutletImage2',
    fieldGambar3: '#inputOutletImage3',
    labelGambar1: '.row:nth-child(5) .col:nth-child(1) .form-group label',
    labelGambar2: '.row:nth-child(5) .col:nth-child(2) .form-group label',
    labelGambar3: '.row:nth-child(5) .col:nth-child(3) .form-group label'
};
export const verifyTableName = async() => {
    await client.expect.element(elements.headerKodeOutlet).text.to.contain('Kode Outlet');
    await client.expect.element(elements.headerNamaOutlet).text.to.contain('Nama Outlet');
};

export const verifyFieldDetail = async() => {
    await client.expect.element(elements.detailKodeOutlet).text.to.contain('Kode Outlet');
    await client.expect.element(elements.detailNamaOutlet).text.to.contain('Nama Outlet');
    await client.expect.element(elements.detailLatitude).text.to.contain('Latitude');
    await client.expect.element(elements.detailLogitude).text.to.contain('Longitude');
    await client.expect.element(elements.detailAlamat).text.to.contain('Alamat');
    await client.expect.element(elements.detailURL).text.to.contain('Alamat Url*');
    await client.expect.element(elements.detailLogo).text.to.contain('Logo');
};

export const  verifyFieldDetailDealerGroup = async() => {
    await client.expect.element(elements.detailKodeOutlet).text.to.contain('Kode Outlet');
    await client.expect.element(elements.detailNamaOutlet).text.to.contain('Nama Outlet');
    await client.expect.element(elements.detailLatitude).text.to.contain('Latitude');
    await client.expect.element(elements.detailLogitude).text.to.contain('Longitude');
    await client.expect.element(elements.detailAlamat).text.to.contain('Alamat');
    await client.expect.element(elements.detailURLDealerGroup).text.to.contain('Alamat Url*');
    // await client.expect.element(elements.labelGambar1DealerGroup).text.to.contain('Gambar 1 (Posisi Kiri Besar)');
    // await client.expect.element(elements.labelGambar2DealerGroup).text.to.contain('Gambar 2 (Posisi Kanan Kecil)');
    // await client.expect.element(elements.labelGambar3DealerGroup).text.to.contain('Gambar 3 (Posisi Kanan Kecil)');
};

export const clickDetail = async () => {
    await client.setValue(elements.searchOutletPage, 'Tunas Daihatsu Cilegon');
    await client.click('.update-outlet');
};

export const notificationSuccessUpdate = async() => {
    await client.expect.element(elements.notificationUpdate).to.be.visible;
    //await client.expect.element(elements.notificationUpdate).text.to.contain('success');
};

function setDataUpdate (randstr) {
    const folderUpload = __dirname + '/../../upload/outlet';
    var fileUpload = [];
    fs.readdirSync(folderUpload).forEach(file => {
        fileUpload.push(file);
    });
    for(let i = 0; i < 4; i ++){
        if(i != 3){
            fs.rename(`${ __dirname }`  
                        + '/../../upload/outlet/' 
                        + `${fileUpload[i]}`, `${__dirname}` 
                        + '/../../upload/outlet/gambar' + `${i+1}`  + `${randstr}` 
                        + '.jpg', function (err) {
                            if (err) throw err;
                        }
            );
        } else {
            fs.rename(`${ __dirname }`  
                        + '/../../upload/outlet/' 
                        + `${fileUpload[i]}`, `${__dirname}` 
                        + '/../../upload/outlet/logo' + `${randstr}` 
                        + '.jpg', function (err) {
                            if (err) throw err;
                        }
            );
        };
    }; 
    dataUpdate.url = 'TunasDaihatsuCilegon' + randstr;
    dataUpdate.gambar1 = 'gambar1' + randstr + '.jpg';
    dataUpdate.gambar2 = 'gambar2' + randstr + '.jpg';
    dataUpdate.gambar3 = 'gambar3' + randstr + '.jpg';
    dataUpdate.logo = 'logo' + randstr + '.jpg'
};

const dataUpdate = {
    url: '',
    logo: '',
    gambar1: '',
    gambar2: '',
    gambar3: '',
};

export const updateUrlLogo = async() => {
    setDataUpdate(require('randomstring').generate(10));
    await client.pause(2000);
    await client.click(elements.fieldDetailUrl);
    await client.keys([client.Keys.CONTROL, 'a'], [client.Keys.BACK_SPACE]);
    //await client.clearValue(elements.fieldDetailUrl);
    await client.setValue(elements.fieldDetailUrl, dataUpdate.url);
    await client.setValue(elements.fieldDetailLogo, path.resolve(__dirname + '/../../upload/outlet/' + dataUpdate.logo));
};

export const accessUpdatedUrl = async() => {
    await client.url(base.urlDaytona() + 'outlet/' + dataUpdate.url);
};

export const verifyUpdatedLogo = async() => {
    await client.expect.element(elements.titleOutlet).text.to.equal('Tunas Daihatsu Cilegon');
    await client.expect.element(`[src*="${dataUpdate.logo}"]`).to.be.visible;
};

export const verifyUpdatedUrl = async() => {
    await client.expect.element(elements.fieldDetailUrl).to.have.value.that.equal(dataUpdate.url);
};

export const verifyDataOutlet = async() => {
    await client.expect.element(elements.labelKodeOutlet).text.to.contain('Kode Outlet');
    await client.expect.element(elements.labelNamaOutlet).text.to.contain('Nama Outlet');
    await client.expect.element(elements.labelLatitude).text.to.contain('Latitude');
    await client.expect.element(elements.labelLogitude).text.to.contain('Longitude');
    await client.expect.element(elements.labelAlamat).text.to.contain('Alamat');
    await client.expect.element(elements.detailURL).text.to.contain('Alamat Url*');
    await client.expect.element(elements.labelGambar1).text.to.contain('Gambar 1 (Posisi Kiri Besar)');
    await client.expect.element(elements.labelGambar2).text.to.contain('Gambar 2 (Posisi Kanan Kecil)');
    await client.expect.element(elements.labelGambar3).text.to.contain('Gambar 3 (Posisi Kanan Kecil)');
    
};

export const changeGambar = async() => {
    setDataUpdate(require('randomstring').generate(10));
    await client.setValue(elements.fieldGambar1, path.resolve(__dirname + '/../../upload/outlet/' + dataUpdate.gambar1));
    await client.setValue(elements.fieldGambar2, path.resolve(__dirname + '/../../upload/outlet/' + dataUpdate.gambar2));
    await client.setValue(elements.fieldGambar3, path.resolve(__dirname + '/../../upload/outlet/' + dataUpdate.gambar3));
};

export const verifyUpdatedImages = async() => {
    await client.expect.element(`[src*="${dataUpdate.gambar1}"]`).to.be.visible;
    await client.expect.element(`[src*="${dataUpdate.gambar2}"]`).to.be.visible;
    await client.expect.element(`[src*="${dataUpdate.gambar3}"]`).to.be.visible;
};