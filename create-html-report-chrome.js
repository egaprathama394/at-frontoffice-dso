const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'report',
  reportPath: 'report',
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '68',
    },
    device: 'Local',
    platform: {
      name: 'windows',
      version: '1803',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'AT FrontOffice HO Web - DAYTONA' },
      { label: 'Written by', value: 'Astra International QA Team' },
    ],
  },
});
