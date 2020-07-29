const { client } = require('nightwatch-api');

const elements = {
    account: '[href="/frontoffice/account"]',
    dashbard: '[href="/frontoffice"]',
    dropdownPromoHo: '.main-sidebar [href="#"]',
    promo: '[href="/frontoffice/promo"]',
    specialOffer: '[href="/frontoffice/promo/special-offer"]',
    outlet: '[href="/frontoffice/outlet"]',
    news: '[href="/frontoffice/news"]',
    order: '.main-sidebar [href="#"]',
    rtb: '[href="/frontoffice/order?orderType=newCar"]',
    rtd: '[href="/frontoffice/order?orderType=testDrive"]',
    service: '[href="/frontoffice/order?orderType=serviceBooking"'
};

export const verifyMenu = async(auth) => {
    if(auth == 'HO'){
        await client.expect.element(elements.account).to.be.visible;
        await client.expect.element(elements.dashbard).to.be.visible;
        await client.expect.element(elements.outlet).to.be.visible;
        await client.expect.element(elements.dropdownPromoHo).to.be.visible;
        await client.click(elements.dropdownPromoHo);
        await client.expect.element(elements.promo).to.be.visible;
        await client.expect.element(elements.specialOffer).to.be.visible;
        await client.expect.element(elements.news).to.be.visible;
    } else if (auth == 'Outlet DSO1'){
        await client.expect.element(elements.account).to.be.visible;
        await client.expect.element(elements.dashbard).to.be.visible;
        await client.expect.element(elements.promo).to.be.visible;
        await client.expect.element(elements.outlet).to.be.visible;
        await client.expect.element(elements.news).to.be.visible;
    } else if (auth == 'Outlet Dealer1'){
        await client.expect.element(elements.account).to.be.visible;
        await client.expect.element(elements.dashbard).to.be.visible;
        await client.expect.element(elements.promo).to.be.visible;
        await client.expect.element(elements.outlet).to.be.visible;
        await client.expect.element(elements.news).to.be.visible;
        await client.expect.element(elements.order).to.be.visible;
        await client.click(elements.order);
        await client.expect.element(elements.rtb).to.be.visible;
        await client.expect.element(elements.rtd).to.be.visible;
        await client.expect.element(elements.service).to.be.visible;
    } else {
        await client.expect.element(elements.account).to.be.visible;
        await client.expect.element(elements.dashbard).to.be.visible;
        await client.expect.element(elements.promo).to.be.visible;
        await client.expect.element(elements.outlet).to.be.visible;
        await client.expect.element(elements.news).to.be.visible;
        //await client.expect.element(elements.order).to.be.visible;
        // await client.click(elements.order);
        // await client.expect.element(elements.rtb).to.be.visible;
        // await client.expect.element(elements.rtd).to.be.visible;
        // await client.expect.element(elements.service).to.be.visible;
    }
};