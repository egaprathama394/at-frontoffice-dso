const { client } = require('nightwatch-api');

const timeOut = 10000;

// Base Web FrontOffice Url
export const urlFrontOffice = () => {
  return 'https://qa.astra-daihatsu.id/frontoffice/';
};

// Base Web Daytona Url
export const urlDaytona = () => {
  return 'https://qa.astra-daihatsu.id/';
};

// Outlet Page Daytona
export const urldDaytonaOutlet = async (auth) => {
  await client.url(urlDaytona() + 'outlet');
  await client.click('#select2-stores-container');
  if(auth === 'Outlet DSO1'){
    await client.setValue('.select2-search__field', client.keys(['Astra Daihatsu Sunter', client.Keys.ENTER]));// Outlet DSO Astra Daihatsu Sunter
  }else if(auth === 'Outlet DSO2'){
    await client.setValue('.select2-search__field', client.keys(['Astra Daihatsu Tanggerang', client.Keys.ENTER]));// Outlet DSO Astra Daihatsu Tanggerang
  }else if(auth === 'Outlet Dealer1'){
    await client.setValue('.select2-search__field', client.keys(['Tunas Daihatsu Cilegon', client.Keys.ENTER])); // Outlet Dealer Tunas Daihatsu Cilegon
  }else{
    await client.setValue('.select2-search__field', client.keys(['Tunas Daihatsu Tangerang', client.Keys.ENTER]));// Outlet Dealer Tunas Daihatsu Tangerang
  }
  await client.pause(2000);
  await client.click('#list-view .branch__displayName');
  await client.moveToElement('[href="/outlet/details?outletCode=5200009697&pageView=promo"]', 0, 0);
  await client.pause(2000);
  await client.click('[href="/outlet/details?outletCode=5200009697&pageView=promo"]');
};

// set value to element
export const setValue = async (elementSelector, value) => {
  await waitElementVisible(elementSelector);
  await client.clearValue(elementSelector);
  await client.setValue(elementSelector, value);
};

// set value to element then press ENTER
export const setValueThenEnter = async (elementSelector, value) => {
  await waitElementVisible(elementSelector);
  await client.clearValue(elementSelector);
  await client.setValue(elementSelector, [value, client.Keys.ENTER]);
};

export const getElementsLength = async (using, locator) => {
  await waitElementVisible(locator);
  await client.elements(using, locator, (result) => {
    return getLength = result.value.length;
  });
};

// get text from element
export const getText = async (elementSelector) => {
  await waitElementVisible(elementSelector);
  await client.getText(elementSelector, (result) => {
    return text = result.value;
  });
};

// scroll to element
export const moveToElement = async (elementSelector) => {
    await waitElementVisible(elementSelector);
    await client.moveToElement(elementSelector, 0, 0);
    await client.pause(3000);
};

// Inject Element
export const clickElementViaInject = async (elementSelector) => {
  await client.execute((selector) => {
    document.querySelector(selector).click();
  }, [elementSelector]);
};

// assert value between
export const assertValueEqualText = async (elementSelector, expectedText) => {
  await waitElementVisible(elementSelector);
  await client.getText(elementSelector, async (result) => this.assert.equal(result.value, expectedText));
};

// check if the given element contains the specific text
export const assertContainsText = async (elementSelector, expectedText) => {
  await waitElementVisible(elementSelector);
  await client.assert.containsText(elementSelector, expectedText);
};

export const expectValueEqualValue = async (elementSelector, expectedValue) => {
  await waitElementVisible(elementSelector);
  return client.expect.element(elementSelector).to.have.value.that.equals(expectedValue);
};

// expect not equal value
export const expectValueNotEqualValue = async (elementSelector, expectedValue) => {
  await waitElementVisible(elementSelector);
  return client.expect.element(elementSelector).to.have.value.not.equals(expectedValue);
};

// assert page title
export const assertPageTitle = async (elementSelector) => client.assert.title(elementSelector);

// sleep/pause page
export const pauseSleep = async (timeSleep) => client.pause(timeSleep);

export const expectEnabled = async (elementSelector) => {
    await waitElementVisible(elementSelector);
    await client.expect.element(elementSelector).to.be.enabled;
};

export const expectNotEnabled = async (elementSelector) => client.expect.element(elementSelector).to.not.be.enabled;

export const expectNotFound = async (elementSelector) => client.expect.element(elementSelector).not.to.be.present;

// expect to be visible
export const expectVisible = async (elementSelector) => {
  await waitElementVisible(elementSelector);
  return client.expect.element(elementSelector).to.be.visible;
};

// expect to be present
export const expectPresent = async (elementSelector) => {
  await waitElementPresent(elementSelector);
  return client.expect.element(elementSelector).to.be.present;
};

// expect to not be visible
export const expectNotVisible = async (elementSelector) => client.expect.element(elementSelector).to.not.be.visible;

export const expectElementSelected = async (elementSelector) => client.expect.element(elementSelector).to.be.selected;

export const assertElementNotPresent = async (elementSelector) => client.waitForElementNotPresent(elementSelector, timeOut);

export const waitUntilElementEnabled = async (elementSelector) => {
  await waitElementPresent(elementSelector);
  await client.waitForElementVisible(`${elementSelector}:enabled`, timeOut);
};

export const waitUntilElementDisabled = async (elementSelector) => {
  await waitElementPresent(elementSelector);
  await client.waitForElementVisible(`${elementSelector}:disabled`, timeOut);
};

export const deleteAllInputText = async () => {
  await client.keys([client.Keys.CONTROL, 'a'], () => {
    client.keys(client.Keys.DELETE);
  });
};

// switch windows to others tab page
export const switchWindows = async () => {
  await client.windowHandles((result) => {
    // 0 == current main window, 1 == new tab
    const handle = result.value[1];
    client.switchWindow(handle);
  });
};

// close a new tab and handle current windows
export const closeAndHandleWindows = async () => {
  // close windows
  client.closeWindow();
  // handle current windows
  client.window_handles((result) => {
    // 0 == current main window, 1 == new tab
    const handle = result.value[0];
    client.switchWindow(handle);
  });
};

export const assertUrlEquals = async (urlText) => client.assert.urlEquals(urlText);
export const assertNotUrlEquals = async (urlText) => client.assert.not.urlContains(urlText);

// to assert that an attribute (eg. src, href) have the expected value
export const expectAttributeContain = async (elementSelector, attribute, value) => client.assert.attributeContains(elementSelector, attribute, value);

// Remove RP.
export const rupiahPlain = async (elementSelector) => {
    await scrollToElement(elementSelector);
    texts = await getStringText(elementSelector);
    let textPolos = String(texts).split('.').join('');
    textPolos = textPolos.replace('Rp', '');
    return textPolos;
  };