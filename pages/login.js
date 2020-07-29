const { client } = require('nightwatch-api');

export const loginAdmin = async (auth) => {
    if(auth === 'HO') await client.setValue('#j_username', 'qa.admin@frontoffice.com'); //login as HO
    else if (auth === 'Outlet DSO1') await client.setValue('#j_username', 'branch1.astra@mailinator.com'); // Outlet DSO Palmerah D059 
    else if (auth === 'Outlet DSO2') await client.setValue('#j_username', 'branch2.astra@mailinator.com'); // Outlet DSO Palembang Veteran D601
    else if (auth === 'Outlet Dealer1') await client.setValue('#j_username', 'dealer1.astra@mailinator.com'); // Outlet Dealer Tunas Daihatsu Cilegon 5200009697
    else if (auth === 'Outlet Dealer2') await client.setValue('#j_username', 'dealer2.astra@mailinator.com'); // Outlet Dealer Tunas Daihatsu Tangerang 5200012816
    else await client.setValue('#j_username', 'dealergroup1.astra@mailinator.com');
    await client.setValue('#j_password','1234');
    await client.click('.btn');
  };
  