import * as base from './common/base-functions';
//const fs = require('fs');
const {
  setDefaultTimeout, 
  After, 
  AfterAll, 
  Before,
} = require('cucumber');

const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  client,
//getNewScreenshots,
} = require('nightwatch-api');
  const reporter = require('cucumber-html-reporter');

setDefaultTimeout(600000);

Before(async () => {
  await startWebDriver();
  await createSession();
});

AfterAll(async () => {
  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: false,
      // metadata: {
      //     'App Version': '0.3.2',
      //     'Test Environment': 'POC'
      // }
    });
  }, 1000);
});

After(async function () {
//await getNewScreenshots().forEach((file) => this.attach(fs.readFileSync(file), 'image/png'));
  await closeSession();
  await stopWebDriver();
});
