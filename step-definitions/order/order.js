
import * as orders from '../../pages/order/order';
import * as base from '../../common/base-functions';

const { Given, Then , When } = require('cucumber');
const { client } = require('nightwatch-api');

When('admin try to access {string} by menu sidebar', async(order) => {
    await client.click('[class="nav-item has-treeview"]:nth-child(6) [class="right fas fa-angle-left"]');
    if(order == 'Request To Buy') await client.click('[class="nav-item has-treeview menu-open"] [class="nav-item"]:nth-child(2)');
    else if(order == 'Request Test Drive') await client.click('[class="nav-item has-treeview menu-open"] [class="nav-item"]:nth-child(3)');
    else if(order == 'Order Service') await client.click('[class="nav-item has-treeview menu-open"] [class="nav-item"]:nth-child(4)');
    else await client.click('[class="nav-item has-treeview menu-open"] [class="nav-item"]:nth-child(1)');
});

Then('admin {string} can see list of order {string}', async(auth, order) => {
    if(auth == 'Outlet Dealer1'){
        if(order == 'Request To Buy') await orders.verifyRtbHeader();
        else if(order == 'Request Test Drive') await orders.verifyRtdHeader();
        else if(order == 'Order Service') await orders.verifyServiceHeader();
        else await orders.verifyAllOrderHeader();
    }else{   
        if(order == 'Request To Buy') await orders.verifyRtbHeaderHo();
        else if(order == 'Request Test Drive') await orders.verifyRtdHeaderHo();
        else if(order == 'Order Service') await orders.verifyServiceHeaderHo();
        else await orders.verifyAllOrderHeaderHO();
    }
});

Given('at {string} Page', async(order) => {
    if(order == 'Request To Buy') await client.url(base.urlFrontOffice() + 'order?orderType=newCar')
    else if(order == 'Request Test Drive') await client.url(base.urlFrontOffice() + 'order?orderType=testDrive')
    else if(order == 'Order Service') await client.url(base.urlFrontOffice() + 'order?orderType=serviceBooking')
    else await client.url(base.urlFrontOffice() + 'order?orderType=allOrder')
});

Given('at detail order {string}', async(order) => {
    if(order == 'Request To Buy') await client.click('tr:nth-child(1) .update-newCar');
    else if(order == 'Request Test Drive') await client.click('tr:nth-child(1) .update-testDrive');
    else await client.click('tr:nth-child(1) .update-detail-rbs');
});

When('admin try to change status order {string}', async(order) => {
    if(order == 'Request To Buy') await orders.changeStatusRtb();
    else if(order == 'Request Test Drive') await orders.changeStatusRtd();
    else await orders.changeStatusService();
});

Then('admin {string} can see status of order {string} has been changed', async(auth, order) => {
    if(order == 'Request To Buy') await orders.verifyStatusRtbChanged(auth);
    else if(order == 'Request Test Drive') await orders.verifyStatusRtdChanged(auth);
    else await orders.verifyStatusServiceChanged(auth);
});

When('admin try to see dropdown of status {string}', async(order) => {
    if(order == 'Request To Buy') await orders.clickDropdowStatusRtb();
    else if(order == 'Request Test Drive') await orders.clickDropdowStatusRtd();
    else await orders.clickDropdowStatusService();
});

Then('admin can see list status of order for {string}', async(order) => {
    if(order == 'Request To Buy') await orders.verifyDropdowStatusRtb();
    else if(order == 'Request Test Drive') await orders.verifyDropdowStatusRtd();
    else await orders.verifyDropdowStatusService();
});

When('admin {string} try to see detail of orders {string}', async(auth, order) => {
    if(order == 'Request To Buy') await orders.clickDetailRtb(auth, order);
    else if(order == 'Request Test Drive') await orders.clickDetailRtd(auth, order);
    else await orders.clickDetailService(auth, order);
});

When('admin try to see detail orders {string} from all page', async(order) =>{
    if(order == 'Request To Buy') {
        await client.setValue('input#searchInput', 'Order New Car');
        await orders.clickDetailRtb('', order);
    }
    else if(order == 'Request Test Drive') {
        await client.setValue('input#searchInput', 'Order Test Drive');
        await orders.clickDetailRtd('', order);
    }
    else {
        await client.setValue('input#searchInput', 'Order Service Booking');
        await orders.clickDetailService('', order);
    }
});

Then('admin can see detail of order {string}', async(order) => {
    if(order == 'Request To Buy') {
        await orders.verifyDetailLabelRtb();
        await orders.verifyDetailFieldRtb();
    }
    else if(order == 'Request Test Drive') {
        await orders.verifyDetailLabelRtd();
        await orders.verifyDetailFieldRtd();
    }
    else {
        await orders.verifyDetailLabelService();
        await orders.verifyDetailFieldService();
    }
});

Then('admin can see detail {string} from all order page', async(order) => {
    if(order == 'Request To Buy') await orders.verifyDetailLabelRtb();
    else if(order == 'Request Test Drive') await orders.verifyDetailLabelRtd();
    else await orders.verifyDetailLabelService();
});

When('admin try to see advance search {string}', async(order) => {
    await client.click('.btn-advance-search');
});

Then('admin can see advance search {string}', async(order) => {   
    await orders.verifyAdvanceSearchLabel(order);
    //await orders.verifyAdvanceStatusDropdown(order);
});

When('admin {string} try to see result of advance search {string}', async(auth, order) => {
    await orders.advanceSearch(auth, order);
});

Then('admin {string} can see result of advance search {string}', async(auth, order) => {
    await orders.verifyAdvanceSearchResult(auth, order);
});

When('admin try to search invalid data {string}', async(field) => {
    await orders.invalidAdvanceSearch(field);
});

Then('admin can see notification no data', async() => {
    await client.expect.element('.dataTables_empty').to.be.visible;
});