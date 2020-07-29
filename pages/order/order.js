import * as base from '../../common/base-functions';

const { client } = require('nightwatch-api');

const elements = {
    detailServiceButton: 'tr:nth-child(1) .update-detail-rbs',
    detailRtbButton: 'tr:nth-child(1) .update-newCar',
    detailRtdButton: 'tr:nth-child(1) .update-testDrive',
    submitButtonRtb: '#updateNewCarOrder',
    submitButtonRtd: '#updateDealerTestDriveOrder',
    submitButtonService: '#updateDealerBookingServiceOrder',
    rtbStatus: '.odd:nth-child(1) td:nth-child(6)',
    rtdStatus: '.odd:nth-child(1) td:nth-child(5)',
    serviceStatus: '.odd:nth-child(1) td:nth-child(6)',
    rtbHoStatus: '.odd:nth-child(1) td:nth-child(8)',
    rtdHoStatus: '.odd:nth-child(1) td:nth-child(7)',
    serviceHoStatus: '.odd:nth-child(1) td:nth-child(8)',
    rtbDetailLabel: {
        tanggalOrder: '[for="tglOrder"]',
        noOrder: '[for="noOrder"]',
        namaCustomer: '[for="namaCustomer"]',
        produk: '[for="produk"]',
        noTelpon: '[for="noTelp"]',
        warnaProduk: '[for="warnaProduk"]',
        email: '[for="emailCust"]',
        metodePembayaran: '[for="metodeBayar"]',
        status: '[for="statusDisplay"]'
    },
    rtdDetailLabel: {
        tanggalOrder: '[for="tdOrderDate"]',
        tanggalDrive: '[for="orderTestDriveDate"]',
        noOrder: '[for="tdOrderCode"]',
        tipeOrder: '[for="orderType"]',
        namaCustomer: '[for="tdCustomerName"]',
        noTelpon: '[for="tdPhoneNumber"]',
        emial: '[for="tdEmail"]',
        produk: '[for="product"]',
        status: '[for="tdUpdateStatus"]'
    },
    serviceDetailLabel: {
        tanggalOrder: '[for="bsOrderDate"]',
        tanggalService: '[for="orderBookingServiceDate"]',
        noOrder: '[for="bsOrderCode"]',
        tipeOrder: '[for="bsOrderType"]',
        namaCustomer: '[for="bsCustomerName"]',
        noTelpon: '[for="bsPhoneNumber"]',
        email: '[for="bsEmail"]',
        produk: '[for="updateCarname"]',
        tahunKendaraan: '[for="updateYear"]',
        kategoriService: '[for="updateServiceCategory"]',
        keluhan: '[for="updateNotes"]',
        status: '[for="updateStatus"]'
    },
    rtbDetailField: {
        tanggalOrder: '#tglOrder',
        noOrder: '#noOrder',
        namaCustomer: '#namaCustomer',
        produk: '#produk',
        metodePembayaran: '#metodeBayar',
        status: '#statusDisplay'
    },
    rtdDetailField: {
        tanggalOrder: '#tdOrderDate',
        tanggalDrive: '#orderTestDriveDate',
        noOrder: '#tdOrderCode',
        namaCustomer: '#tdCustomerName',
        status: '#tdUpdateStatus'
    },
    serviceDetailField: {
        tanggalOrder: '#bsOrderDate',
        tanggalService: '#orderBookingServiceDate',
        noOrder: '#bsOrderCode',
        namaCustomer: '#bsCustomerName',
        kategoriService: '#updateServiceCategory',
        status: '#updateStatus'
    },
    advanceSearchLabel: {
        tanggalOrder: '[for="orderStartDate"]',
        tanggalDrive: '[for="orderTestDriveDate"]',
        tanggalService: '[for="allOrderSelectedOrderType"]',
        noOrder: '[for="orderNumber"]',
        namaCustomer: '[for="customerName"]',
        tipeOrder: '[for="allOrderSelectedOrderType"]',
        cabang: '[for="outlets"]',
        metodePembayaranCash: '#paymentMethods1',
        metodePembayaranCredit: '#paymentMethods2',
        status: '[for="status"]',
    },
    advanceSearchField: {
        tanggalOrderStart: '#orderStartDate',
        tanggalOrderEnd: '#orderEndDate',
        tanggalDriveStart: '#orderTestDriveStartDate',
        tanggalDriveEnd: '#orderTestDriveEndDate',
        tanggalServiceStart: '#orderBookingServiceStartDate',
        tanggalServiceEnd: '#orderBookingServiceEndDate',
        noOrder: '#orderNumber',
        namaCustomer: '#customerName',
        tipeOrder: '#advSrch-orderType-main',
        cabang: '#advSrch-outlets-main',
        metodePembayaranCash: '#paymentMethods1',
        metodePembayaranCredit: '#paymentMethods2',
        status: '#advSrch-status-main',
        searchButton: '.advSrch-submit'
    },
};

export const verifyRtbHeader = async() => {
    var rtbHeader = ['Tgl. Order','No. Order','Nama Customer','Produk','Metode Pembayaran','Status'];
    for(let i = 0; i < rtbHeader.length; i++){
        await client.expect.element('thead th:nth-child(' + `${i+1}` + ')').text.to.contain(rtbHeader[i]);
    }
};

export const verifyRtdHeader = async() => {
    var rtdHeader = ['Tgl. Order','Tgl. Order Test Drive','No. Order','Nama Customer','Status'];
    for(let i = 0; i < rtdHeader.length; i++){
        await client.expect.element('thead th:nth-child(' + `${i+1}` + ')').text.to.contain(rtdHeader[i]);
    }
};

export const verifyServiceHeader = async() => {
    var serviceHeader = ['Tgl. Order','Tgl. Order Service Booking','No. Order','Nama Customer','Kategori Service','Status'];
    for(let i = 0; i < serviceHeader.length; i++){
        await client.expect.element('thead th:nth-child(' + `${i+1}` + ')').text.to.contain(serviceHeader[i]);
    }
};

export const verifyAllOrderHeader = async() => {
    var allOrderHeader = ['Tgl. Order','No. Order','Tipe Order','Nama Customer','Produk','Status'];
    for(let i = 0; i < allOrderHeader.length; i++){
        await client.expect.element('thead th:nth-child(' + `${i+1}` + ')').text.to.contain(allOrderHeader[i]);
    }
};

export const verifyRtbHeaderHo = async() => {
    var rtbHeaderHo = ['Tgl. Order','No. Order','Kode Outlet','Outlet','Nama Customer','Produk','Metode Pembayaran','Status'];
    for(let i = 0; i < rtbHeaderHo.length; i++){
        await client.expect.element('thead th:nth-child(' + `${i+1}` + ')').text.to.contain(rtbHeaderHo[i]);
    }
};

export const verifyRtdHeaderHo = async() => {
    var rtdHeaderHo = ['Tgl. Order','Tgl. Order Test Drive','Kode Outlet','Outlet','No. Order','Nama Customer','Status'];
    for(let i = 0; i < rtdHeaderHo.length; i++){
       await client.expect.element('thead th:nth-child(' + `${i+1}` + ')').text.to.contain(rtdHeaderHo[i]);
    }
};

export const verifyServiceHeaderHo = async() => {
    var serviceHeaderHo = ['Tgl. Order','Tgl. Order Service Booking','No. Order','Kode Outlet','Outlet','Nama Customer','Kategori Service','Status'];
    for(let i = 0; i < serviceHeaderHo.length; i++){
        await client.expect.element('thead th:nth-child(' + `${i+1}` + ')').text.to.contain(serviceHeaderHo[i]);
    }
};

export const verifyAllOrderHeaderHO = async() => {
    var allOrderHeaderHo = ['Tgl. Order','No. Order','Kode Outlet','Outlet','Tipe Order','Nama Customer','Produk','Status'];
    for(let i = 0; i < allOrderHeaderHo.length; i++){
        await client.expect.element('thead th:nth-child(' + `${i+1}` + ')').text.to.contain(allOrderHeaderHo[i]);
    }
};

export const verifyDetailLabelRtb = async() => {
    await client.expect.element(elements.rtbDetailLabel.tanggalOrder).text.to.contain('Tanggal Order');
    await client.expect.element(elements.rtbDetailLabel.noOrder).text.to.contain('Order');
    await client.expect.element(elements.rtbDetailLabel.namaCustomer).text.to.contain('Nama Customer');
    await client.expect.element(elements.rtbDetailLabel.produk).text.to.contain('Produk');
    await client.expect.element(elements.rtbDetailLabel.noTelpon).text.to.contain('Nomor Telepon');
    await client.expect.element(elements.rtbDetailLabel.warnaProduk).text.to.contain('Warna Produk');
    await client.expect.element(elements.rtbDetailLabel.email).text.to.contain('Email');
    await client.expect.element(elements.rtbDetailLabel.metodePembayaran).text.to.contain('Metode Pembayaran');
    //await client.expect.element(elements.rtbDetailLabel.status).text.to.contain('Status');
};

export const verifyDetailLabelRtd = async() => {
    await client.expect.element(elements.rtdDetailLabel.tanggalOrder).text.to.contain('Tanggal Order');
    await client.expect.element(elements.rtdDetailLabel.tanggalDrive).text.to.contain('Tanggal Order Test Drive');
    await client.expect.element(elements.rtdDetailLabel.noOrder).text.to.contain('Nomor Order');
    await client.expect.element(elements.rtdDetailLabel.namaCustomer).text.to.contain('Nama Customer');
    await client.expect.element(elements.rtdDetailLabel.noTelpon).text.to.contain('Telp');
    await client.expect.element(elements.rtdDetailLabel.emial).text.to.contain('Email');
    await client.expect.element(elements.rtdDetailLabel.produk).text.to.contain('Produk');
    //await client.expect.element(elements.rtdDetailLabel.status).text.to.contain('Status');
};

export const verifyDetailLabelService = async() => {
    await client.expect.element(elements.serviceDetailLabel.tanggalOrder).text.to.contain('Tanggal Order');
    await client.expect.element(elements.serviceDetailLabel.tanggalService).text.to.contain('Tanggal Order Book Service');
    await client.expect.element(elements.serviceDetailLabel.noOrder).text.to.contain('Nomor Order');
    await client.expect.element(elements.serviceDetailLabel.namaCustomer).text.to.contain('Nama Customer');
    await client.expect.element(elements.serviceDetailLabel.noTelpon).text.to.contain('Telp');
    await client.expect.element(elements.serviceDetailLabel.email).text.to.contain('Email');
    await client.expect.element(elements.serviceDetailLabel.produk).text.to.contain('Produk');
    await client.expect.element(elements.serviceDetailLabel.tahunKendaraan).text.to.contain('Tahun Kendaraan');
    await client.expect.element(elements.serviceDetailLabel.kategoriService).text.to.contain('Kategori Servis');
    await client.expect.element(elements.serviceDetailLabel.keluhan).text.to.contain('Keluhan');
    //await client.expect.element(elements.serviceDetailLabel.status).text.to.contain('Status');
};

export const verifyDropdowStatusRtb = async() => {
    var dropDownStatusRtb = ['Open','In Progress','Drop','Deal'];
    for(let i = 0; i < dropDownStatusRtb.length; i++){
        await client.expect.element('#statusDisplay option:nth-child(' + `${i+2}`+')').text.to.contain(dropDownStatusRtb[i]);
    }
};

export const verifyDropdowStatusRtd = async() => {
    var dropDownStatusRtd = ['Open','Confirm','Complete','Cancel'];
    for(let i = 0; i < dropDownStatusRtd.length; i++){
        await client.expect.element('#tdUpdateStatus option:nth-child(' + `${i+2}`+')').text.to.contain(dropDownStatusRtd[i]);
    }
};

export const verifyDropdowStatusService = async() => {
    var dropDownStatusService = ['Booking','Confirm','Complete','Cancel'];
    for(let i = 0; i < dropDownStatusService.length; i++){
        await client.expect.element('#updateStatus option:nth-child(' + `${i+2}`+')').text.to.contain(dropDownStatusService[i]);
    }
};

export const clickDropdowStatusRtb = async() => {
    await client.moveToElement(elements.rtbDetailField.status, 0, 0);
    await client.pause(1000);
    await client.click(elements.rtbDetailField.status);
};

export const clickDropdowStatusRtd = async() => {
    await client.moveToElement(elements.rtdDetailField.status, 0, 0);
    await client.pause(1000);
    await client.click(elements.rtdDetailField.status);
};

export const clickDropdowStatusService = async() => {
    await client.moveToElement(elements.serviceDetailField.status, 0, 0);
    await client.pause(1000);
    await client.click(elements.serviceDetailField.status);
};

var rowData = {
    tanggalOrder: '',
    tanggalDrive: '',
    tanggalDriveAdvance: '',
    tanggalService: '',
    tanggalServiceAdvance: '',
    noOrder: '',
    namaCustomer: '',
    produk: '',
    metodePembayaran: '',
    kategoriService: '',
    statusNo: '',
    status: '',
    outletName: '',
    outletCode: '',
    tipeOrder: '',
};

function getRowData(auth, order) {
    if(order == 'Request To Buy') {
        if(auth == 'Outlet Dealer1'){
            var fieldDataRtb = ['tanggalOrder','noOrder','namaCustomer','produk','metodePembayaran'];
            for(let i = 0; i < fieldDataRtb.length; i++){
                client.getText('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')', (res) => {
                rowData[fieldDataRtb[i]] = res.value;
                });
            }
            client.getText('.odd:nth-child(1) td:nth-child(6)', (res) => {
                rowData.status = res.value;
                if(res.value == 'Open') rowData.statusNo = '0';
                else if(res.value == 'In Progress') rowData.statusNo = '1';
                else if(res.value == 'Drop') rowData.statusNo = '2';
                else rowData.statusNo = '3';
            });
        }else{
            var fieldDataRtbHo = ['tanggalOrder','noOrder','outletCode','outletName','namaCustomer','produk','metodePembayaran'];
            for(let i = 0; i < fieldDataRtbHo.length; i++){
                client.getText('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')', (res) => {
                    rowData[fieldDataRtbHo[i]] = res.value;
                });
            }
            client.getText('.odd:nth-child(1) td:nth-child(8)', (res) => {
                rowData.status = res.value;
                if(res.value == 'Open') rowData.statusNo = '0';
                else if(res.value == 'In Progress') rowData.statusNo = '1';
                else if(res.value == 'Drop') rowData.statusNo = '2';
                else rowData.statusNo = '3';
            });
        }
    }else if(order == 'Request Test Drive') {
        if(auth == 'Outlet Dealer1'){
            var fieldDataRtd = ['tanggalOrder','tanggalDrive','noOrder','namaCustomer'];
            for(let i = 0; i < fieldDataRtd.length; i++){
                client.getText('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')', (res) => {
                rowData[fieldDataRtd[i]] = res.value;
                });
            }
            client.getText('.odd:nth-child(1) td:nth-child(5)', (res) => {
                rowData.status = res.value;
                if(res.value == 'Open') rowData.statusNo = '0';
                else if(res.value == 'Confirm') rowData.statusNo = '1';
                else if(res.value == 'Complete') rowData.statusNo = '2';
                else rowData.statusNo = '3';
            });
        }else{
            var fieldDataRtdHo = ['tanggalOrder','tanggalDrive','outletCode','outletName','noOrder','namaCustomer'];
            for(let i = 0; i < fieldDataRtdHo.length; i++){
                client.getText('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')', (res) => {
                    rowData[fieldDataRtdHo[i]] = res.value;
                });
            }
            client.getText('.odd:nth-child(1) td:nth-child(7)', (res) => {
                rowData.status = res.value;
                if(res.value == 'Open') rowData.statusNo = '0';
                else if(res.value == 'Confirm') rowData.statusNo = '1';
                else if(res.value == 'Complete') rowData.statusNo = '2';
                else rowData.statusNo = '3';
            });
        }
    }else if(order == 'All Order') {
        if(auth == 'Outlet Dealer1'){
            var fieldDataAllOrder = ['tanggalOrder','noOrder','tipeOrder','namaCustomer','produk','status'];
            for(let i = 0; i < fieldDataAllOrder.length; i++){
                client.getText('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')', (res) => {
                rowData[fieldDataAllOrder[i]] = res.value;
                });
            }
        }else{
            var fieldDataAllOrderHo = ['tanggalOrder','noOrder','outletCode','outletName','tipeOrder','namaCustomer','produk','status'];
            for(let i = 0; i < fieldDataAllOrderHo.length; i++){
                client.getText('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')', (res) => {
                    rowData[fieldDataAllOrderHo[i]] = res.value;
                });
            }
        }
    }else{
        if(auth == 'Outlet Dealer1'){
            var fieldDataService = ['tanggalOrder','tanggalService','noOrder','namaCustomer','kategoriService'];
            for(let i = 0; i < fieldDataService.length; i++){
                client.getText('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')', (res) => {
                    rowData[fieldDataService[i]] = res.value;
                });
            }
            client.getText('.odd:nth-child(1) td:nth-child(6)', (res) => {
                rowData.status = res.value;
                if(res.value == 'Booking') rowData.statusNo = '0';
                else if(res.value == 'Confirm') rowData.statusNo = '1';
                else if(res.value = 'Complete') rowData.statusNo = '2';
                else rowData.statusNo = '3';
            });
        }else{
            var fieldDataServiceHo = ['tanggalOrder','tanggalService','noOrder','outletCode','outletName','namaCustomer','kategoriService'];
            for(let i = 0; i < fieldDataServiceHo.length; i++){
                client.getText('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')', (res) => {
                    rowData[fieldDataServiceHo[i]] = res.value;
                });
            }
            client.getText('.odd:nth-child(1) td:nth-child(8)', (res) => {
                rowData.status = res.value;
                if(res.value == 'Booking') rowData.statusNo = '0';
                else if(res.value == 'Confirm') rowData.statusNo = '1';
                else if(res.value = 'Complete') rowData.statusNo = '2';
                else rowData.statusNo = '3';
            });
        }
    }
};

export const clickDetailRtb = async(auth, order) => {
    if(auth == '') await client.click(elements.detailRtbButton);     
    else {
        getRowData(auth, order);
        await client.click(elements.detailRtbButton);
    }
};

export const clickDetailRtd = async(auth, order) => {
    if(auth == '') await client.click(elements.detailRtdButton);
    else{
        getRowData(auth, order);
        await client.click(elements.detailRtdButton);
    }
};

export const clickDetailService = async(auth, order) => {
    if(auth == '') await client.click(elements.detailServiceButton);
    else{
        getRowData(auth, order);
        await client.click(elements.detailServiceButton);
    }
};

export const verifyDetailFieldRtb = async() => {
    await client.expect.element(elements.rtbDetailField.tanggalOrder).to.have.value.that.equals(rowData.tanggalOrder);
    await client.expect.element(elements.rtbDetailField.noOrder).to.have.value.that.equals(rowData.noOrder);
    await client.expect.element(elements.rtbDetailField.namaCustomer).to.have.value.contain(rowData.namaCustomer);
    await client.expect.element(elements.rtbDetailField.produk).to.have.value.contain(rowData.produk);
    await client.expect.element(elements.rtbDetailField.metodePembayaran).to.have.value.contain(rowData.metodePembayaran);
    await client.expect.element(elements.rtbDetailField.status).to.have.value.equal(rowData.statusNo);
};

export const verifyDetailFieldRtd = async() => {
    await client.expect.element(elements.rtdDetailField.tanggalOrder).to.have.value.that.equals(rowData.tanggalOrder);
    await client.expect.element(elements.rtdDetailField.tanggalDrive).to.have.value.that.equals(rowData.tanggalDriveAdvance);
    await client.expect.element(elements.rtdDetailField.noOrder).to.have.value.contain(rowData.noOrder);
    await client.expect.element(elements.rtdDetailField.namaCustomer).to.have.value.contain(rowData.namaCustomer);
    await client.expect.element(elements.rtdDetailField.status).to.have.value.equal(rowData.statusNo);
};

export const verifyDetailFieldService = async() => {
    await client.expect.element(elements.serviceDetailField.tanggalOrder).to.have.value.that.equals(rowData.tanggalOrder);
    await client.expect.element(elements.serviceDetailField.tanggalService).to.have.value.that.equals(rowData.tanggalServiceAdvance);
    await client.expect.element(elements.serviceDetailField.noOrder).to.have.value.contain(rowData.noOrder);
    await client.expect.element(elements.serviceDetailField.namaCustomer).to.have.value.contain(rowData.namaCustomer);
    await client.expect.element(elements.serviceDetailField.kategoriService).to.have.value.contain(rowData.kategoriService);
    await client.expect.element(elements.serviceDetailField.status).to.have.value.equal(rowData.statusNo);
};

var changeStatus = '';

export const changeStatusRtb = async() => {
    await client.getValue(elements.rtbDetailField.status, (res) => {
        if(res.value == '1'){
            client.pause(2000);
            client.moveToElement(elements.rtbDetailField.status, 160, 20);
            client.mouseButtonClick();
            client.keys(['Open', client.Keys.ENTER]);
            changeStatus = 'Open';
            client.moveToElement(elements.submitButtonRtb, 0, 0);
            client.pause(1000);
            client.click(elements.submitButtonRtb);
        } else {
            client.pause(2000);
            client.moveToElement(elements.rtbDetailField.status, 160, 20);
            client.mouseButtonClick();
            client.keys(['In Progress', client.Keys.ENTER]);
            changeStatus = 'In Progress';
            client.moveToElement(elements.submitButtonRtb, 0, 0);
            client.pause(1000);
            client.click(elements.submitButtonRtb);
        }
    });
};

export const changeStatusRtd = async() => {
    await client.getValue(elements.rtdDetailField.status, (res) => {
        if(res.value == '1'){
            client.pause(2000);
            client.moveToElement(elements.rtdDetailField.status, 130, 30);
            client.mouseButtonClick();
            client.keys(['Open', client.Keys.ENTER]);
            changeStatus = 'Open';
            client.moveToElement(elements.submitButtonRtd, 0, 0);
            client.pause(1000);
            client.click(elements.submitButtonRtd);
        } else {
            client.pause(2000);
            client.moveToElement(elements.rtdDetailField.status, 130, 30);
            client.mouseButtonClick();
            client.keys(['Confirm', client.Keys.ENTER]);
            changeStatus = 'Confirm';
            client.moveToElement(elements.submitButtonRtd, 0, 0);
            client.pause(1000);
            client.click(elements.submitButtonRtd);
        }
    });
};

export const changeStatusService = async() => {
    await client.getValue(elements.serviceDetailField.status, (res) => {
        if(res.value == '1'){
            client.pause(2000);
            client.moveToElement(elements.serviceDetailField.status, 130, 30);
            client.mouseButtonClick();
            client.keys(['Booking', client.Keys.ENTER]);
            changeStatus = 'Booking';
            client.moveToElement(elements.submitButtonService, 0, 0);
            client.pause(1000);
            client.click(elements.submitButtonService);
        } else {
            client.pause(2000);
            client.moveToElement(elements.serviceDetailField.status, 130, 30);
            client.mouseButtonClick();
            client.keys(['Confirm', client.Keys.ENTER]);
            changeStatus = 'Confirm';
            client.moveToElement(elements.submitButtonService, 0, 0);
            client.pause(1000);
            client.click(elements.submitButtonService);
        }
    });
};

export const verifyStatusRtbChanged = async(auth) => {
    if(auth == 'Outlet Dealer1'){      
        await client.expect.element(elements.rtbStatus).text.to.equal(changeStatus);
    }else await client.expect.element(elements.rtbHoStatus).text.to.equal(changeStatus);
};

export const verifyStatusRtdChanged = async(auth) => {
    if(auth == 'Outlet Dealer1'){
        await client.expect.element(elements.rtdStatus).text.to.equal(changeStatus);
    }else await client.expect.element(elements.rtdHoStatus).text.to.equal(changeStatus); 
};

export const verifyStatusServiceChanged = async(auth) => {
    if(auth == 'Outlet Dealer1'){
        await client.expect.element(elements.serviceStatus).text.to.equal(changeStatus);
    }else await client.expect.element(elements.serviceHoStatus).text.to.equal(changeStatus);
};

export const verifyAdvanceSearchLabel = async(order) => {
    await client.expect.element(elements.advanceSearchLabel.tanggalOrder).text.to.equal('Tanggal Order');
    await client.expect.element(elements.advanceSearchLabel.noOrder).text.to.equal('Nomor Order');
    await client.expect.element(elements.advanceSearchLabel.namaCustomer).text.to.equal('Nama Customer');
    await client.expect.element(elements.advanceSearchLabel.cabang).text.to.contain('Cabang');
    if(order != 'All Order') await client.expect.element(elements.advanceSearchLabel.status).text.to.equal('Status');
    else if(order == 'Order Service') await client.expect.element(elements.advanceSearchLabel.tanggalService).text.to.equal('Tanggal Order Booking Service');
    else if(order == 'Request Test Drive') await client.expect.element(elements.advanceSearchLabel.tanggalDrive).text.to.equal('Tanggal Order Test Drive');
    else if(order == 'Request To Buy'){
        await client.expect.element(elements.advanceSearchLabel.metodePembayaranCash).to.have.value.that.equals('Cash');
        await client.expect.element(elements.advanceSearchLabel.metodePembayaranCredit).to.have.value.that.equals('Credit');
    }
};
    
export const verifyAdvanceStatusDropdown = async(order) => {
    const statusRtb = ['Open','On Progress','Drop','Deal'];
    const statusRtd = ['Open','Confirm','Complete','Cancel'];
    const statusService = ['Booking','Confirm','Complete','Cancel'];
    for(let i = 0; i < 4; i++){
        if(order == 'Request To Buy') await client.expect.element('.advSrch-status-option:nth-child('+ `${i+1}` + ')').text.to.equal(statusRtb[i]);
        else if(order == 'Request Test Drive') await client.expect.element('.advSrch-status-option:nth-child('+ `${i+1}` + ')').text.to.equal(statusRtd[i]);
        else if(order == 'Order Service') await client.expect.element('.advSrch-status-option:nth-child('+ `${i+1}` + ')').text.to.equal(statusService[i]);
    }
};

export const advanceSearch  = async(auth, order) => {
    if(auth == 'Outlet Dealer1'){
        getRowData(auth, order);
        await client.click('.btn-advance-search');
        await client.pause(1000);
        await client.setValue(elements.advanceSearchField.tanggalOrderStart, rowData.tanggalOrder);
        await client.setValue(elements.advanceSearchField.noOrder, rowData.noOrder);
        await client.setValue(elements.advanceSearchField.namaCustomer, rowData.namaCustomer);
        if(order == 'All Order'){
            await client.click(elements.advanceSearchField.tipeOrder);
            if(rowData.tipeOrder == 'Order Test Drive') client.click('.advSrch-orderType-option:nth-child(2)')
            else if(rowData.tipeOrder == 'Order Service Booking') client.click('.advSrch-orderType-option:nth-child(3)')
            else if(rowData.tipeOrder == 'Order New Car') client.click('.advSrch-orderType-option:nth-child(1)')
        }else if(order == 'Request To Buy'){
            if(rowData.metodePembayaran == 'Cash') await client.click(elements.advanceSearchField.metodePembayaranCash);
            else await client.click(elements.advanceSearchField.metodePembayaranCredit);
            await client.moveToElement(elements.advanceSearchField.status, 0, 0);
            await client.pause(1000);
            await client.click(elements.advanceSearchField.status);
            if(rowData.statusNo == '0') await client.click('#advSearch-status-option-dropdown [value="0"]');
            else if(rowData.statusNo == '1') await client.click('#advSearch-status-option-dropdown [value="1"]');
            else if(rowData.statusNo == '2') await client.click('#advSearch-status-option-dropdown [value="2"]');
            else await client.click('#advSearch-status-option-dropdown [value="3"]');
        }else if(order == 'Request Test Drive'){
            rowData.tanggalDriveAdvance = rowData.tanggalDrive.substring(0,10);
            await client.setValue(elements.advanceSearchField.tanggalDriveStart, rowData.tanggalDriveAdvance);
            await client.moveToElement(elements.advanceSearchField.status, 0, 0);
            await client.pause(1000);
            await client.click(elements.advanceSearchField.status);
            if(rowData.statusNo == '0') await client.click('#advSearch-status-option-dropdown [value="0"]');
            else if(rowData.statusNo == '1') await client.click('#advSearch-status-option-dropdown [value="1"]');
            else if(rowData.statusNo == '2') await client.click('#advSearch-status-option-dropdown [value="2"]');
            else await client.click('#advSearch-status-option-dropdown [value="3"]');
        }else if(order == 'Order Service'){
            rowData.tanggalServiceAdvance = rowData.tanggalService.substring(0,10);
            await client.setValue(elements.advanceSearchField.tanggalServiceStart, rowData.tanggalServiceAdvance);
            await client.moveToElement(elements.advanceSearchField.status, 0, 0);
            await client.pause(1000);
            await client.click(elements.advanceSearchField.status);
            if(rowData.statusNo == '0') await client.click('#advSearch-status-option-dropdown [value="0"]');
            else if(rowData.statusNo == '1') await client.click('#advSearch-status-option-dropdown [value="1"]');
            else if(rowData.statusNo == '2') await client.click('#advSearch-status-option-dropdown [value="2"]');
            else await client.click('#advSearch-status-option-dropdown [value="3"]');
        }
        await client.moveToElement(elements.advanceSearchField.searchButton, 0, 0);
        await client.pause(1000);
        await client.click(elements.advanceSearchField.searchButton);
    }else{
        getRowData(auth, order);
        await client.click('.btn-advance-search');
        await client.setValue(elements.advanceSearchField.tanggalOrderStart, rowData.tanggalOrder);
        await client.pause(1000);
        await client.setValue(elements.advanceSearchField.noOrder, rowData.noOrder);
        await client.setValue(elements.advanceSearchField.namaCustomer, rowData.namaCustomer);
        if(order == 'All Order'){
            await client.click(elements.advanceSearchField.tipeOrder);
            if(rowData.tipeOrder == 'Order Test Drive') await client.click('.advSrch-orderType-option:nth-child(2)')
            else if(rowData.tipeOrder == 'Order Service Booking') await client.click('.advSrch-orderType-option:nth-child(3)')
            else if(rowData.tipeOrder == 'Order New Car') await client.click('.advSrch-orderType-option:nth-child(1)')
            await client.click(elements.advanceSearchField.cabang);
            await client.setValue('#advSrch-outlets-search', rowData.outletName);
            await client.click('[value="'+ `${rowData.outletCode}` +'"]')
        }else if(order == 'Request To Buy'){
            if(rowData.metodePembayaran == 'Cash') await client.click(elements.advanceSearchField.metodePembayaranCash);
            else await client.click(elements.advanceSearchField.metodePembayaranCredit);
            await client.moveToElement(elements.advanceSearchField.status, 0, 0);
            await client.pause(1000);
            await client.click(elements.advanceSearchField.status);
            if(rowData.statusNo == '0') await client.click('#advSearch-status-option-dropdown [value="0"]');
            else if(rowData.statusNo == '1') await client.click('#advSearch-status-option-dropdown [value="1"]');
            else if(rowData.statusNo == '2') await client.click('#advSearch-status-option-dropdown [value="2"]');
            else await client.click('#advSearch-status-option-dropdown [value="3"]');
            await client.click(elements.advanceSearchField.cabang);
            await client.setValue('#advSrch-outlets-search', rowData.outletName);
            await client.click('[value="'+ `${rowData.outletCode}` +'"]')
        }else if(order == 'Request Test Drive'){
            rowData.tanggalDriveAdvance = rowData.tanggalDrive.substring(0,10);
            await client.setValue(elements.advanceSearchField.tanggalDriveStart, rowData.tanggalDriveAdvance);
            await client.moveToElement(elements.advanceSearchField.status, 0, 0);
            await client.pause(1000);
            await client.click(elements.advanceSearchField.status);
            if(rowData.statusNo == '0') await client.click('#advSearch-status-option-dropdown [value="0"]');
            else if(rowData.statusNo == '1') await client.click('#advSearch-status-option-dropdown [value="1"]');
            else if(rowData.statusNo == '2') await client.click('#advSearch-status-option-dropdown [value="2"]');
            else await client.click('#advSearch-status-option-dropdown [value="3"]');
            await client.click(elements.advanceSearchField.cabang);
            await client.setValue('#advSrch-outlets-search', rowData.outletName);
            await client.click('[value="'+ `${rowData.outletCode}` +'"]')
        }else if(order == 'Order Service'){
            rowData.tanggalServiceAdvance = rowData.tanggalService.substring(0,10);
            await client.setValue(elements.advanceSearchField.tanggalServiceStart, rowData.tanggalServiceAdvance);
            await client.moveToElement(elements.advanceSearchField.status, 0, 0);
            await client.pause(1000);
            await client.click(elements.advanceSearchField.status);
            if(rowData.statusNo == '0') await client.click('#advSearch-status-option-dropdown [value="0"]');
            else if(rowData.statusNo == '1') await client.click('#advSearch-status-option-dropdown [value="1"]');
            else if(rowData.statusNo == '2') await client.click('#advSearch-status-option-dropdown [value="2"]');
            else await client.click('#advSearch-status-option-dropdown [value="3"]');
            await client.click(elements.advanceSearchField.cabang);
            await client.setValue('#advSrch-outlets-search', rowData.outletName);
            console.log(rowData.outletCode);
            await client.click('[value="'+ `${rowData.outletCode}` +'"]')
        }
        await client.moveToElement(elements.advanceSearchField.searchButton, 0, 0);
        await client.pause(1000);
        await client.click(elements.advanceSearchField.searchButton);
    }
};

export const verifyAdvanceSearchResult = async(auth, order) => {
    if(auth == 'Outlet Dealer1'){
        if(order == 'All Order'){
            var fieldDataAllOrder = ['tanggalOrder','noOrder','tipeOrder','namaCustomer','produk','status'];
            for(let i = 0; i < fieldDataAllOrder.length; i++){
                await client.expect.element('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')').text.to.contain(rowData[fieldDataAllOrder[i]]);
            };
        }else if(order == 'Request To Buy'){
            var fieldDataRtb = ['tanggalOrder','noOrder','namaCustomer','produk','metodePembayaran','status'];
            for(let i = 0; i < fieldDataRtb.length; i++){
                await client.expect.element('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')').text.to.contain(rowData[fieldDataRtb[i]]);
            }
        }else if(order == 'Request Test Drive'){
            var fieldDataRtd = ['tanggalOrder','tanggalDrive','noOrder','namaCustomer','status'];
            for(let i = 0; i < fieldDataRtd.length; i++){
                await client.expect.element('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')').text.to.contain(rowData[fieldDataRtd[i]]);
            }
        }else if(order == 'Order Service'){
            var fieldDataService = ['tanggalOrder','tanggalService','noOrder','namaCustomer','kategoriService','status'];
            for(let i = 0; i < fieldDataService.length; i++){
                await client.expect.element('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')').text.to.contain(rowData[fieldDataService[i]]);
            }
        }
    }else{
        if(order == 'All Order'){
            var fieldDataAllOrderHo = ['tanggalOrder','noOrder','outletCode','outletName','tipeOrder','namaCustomer','produk','status'];
            for(let i = 0; i < fieldDataAllOrderHo.length; i++){
                await client.expect.element('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')').text.to.contain(rowData[fieldDataAllOrderHo[i]]);
            }
        }else if(order == 'Request To Buy'){
            var fieldDataRtbHo = ['tanggalOrder','noOrder','outletCode','outletName','namaCustomer','produk','metodePembayaran','status'];
            for(let i = 0; i < fieldDataRtbHo.length; i++){
                await client.expect.element('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')').text.to.contain(rowData[fieldDataRtbHo[i]]);
            }
        }else if(order == 'Request Test Drive'){
            var fieldDataRtdHo = ['tanggalOrder','tanggalDrive','outletCode','outletName','noOrder','namaCustomer','status'];
            for(let i = 0; i < fieldDataRtdHo.length; i++){
                await client.expect.element('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')').text.to.contain(rowData[fieldDataRtdHo[i]]);
            }
        }else if(order == 'Order Service'){
            var fieldDataServiceHo = ['tanggalOrder','tanggalService','noOrder','outletCode','outletName','namaCustomer','kategoriService','status'];
            for(let i = 0; i < fieldDataServiceHo.length; i++){
                await client.expect.element('.odd:nth-child(1) td:nth-child(' + `${i+1}` + ')').text.to.contain(rowData[fieldDataServiceHo[i]]);
            }
        }
    }
};

export const invalidAdvanceSearch = async(field) =>{
    await client.click('.btn-advance-search');
    await client.pause(1000);
    if(field == 'Tanggal Order') client.setValue(elements.advanceSearchField.tanggalOrderStart, '01/01/3000');
    else if(field == 'Tanggal Drive') client.setValue(elements.advanceSearchField.tanggalDriveStart, '01/01/3000');
    else if(field == 'Tanggal Service') client.setValue(elements.advanceSearchField.tanggalServiceStart, '01/01/1900');
    else if(field == 'Nomor Order') client.setValue(elements.advanceSearchField.noOrder, 'a');
    else if(field == 'Customer Name') client.setValue(elements.advanceSearchField.namaCustomer, 'a');
    await client.moveToElement(elements.advanceSearchField.searchButton, 0, 0);
    await client.pause(1000);
    await client.click(elements.advanceSearchField.searchButton);
};