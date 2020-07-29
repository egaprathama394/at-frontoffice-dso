/* -------------------------------------------------------------------------  */
/*                              SELENIUM                                      */
/* -------------------------------------------------------------------------  */
// module.exports = {
//   test_settings: {
//     default: {
//       selenium_port: 4003,
//       selenium_host: '127.0.0.1',
//       screenshots: {
//         enabled: true,
//         on_failure: true,
//         path: 'screenshots',
//       },

//       desiredCapabilities: {
//         browserName: 'chrome',
//         javascriptEnabled: true,
//         chromeOptions: {
//           args: [
//             // '--user-agent=Mozilla/5.0 (Linux; Android 9; SM-G920V Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Mobile Safari/537.36',
//             // '--user-agent=Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:24.0) Gecko/20100101 Firefox/24.0',
//             '--enable-automation',
//             '--window-size=1248,768',
//             // '--headless',
//             '--no-sandbox',
//             '--disable-webgl=true',
//             '--disable-3d-apis=true',
//           ],
//         },

//         enableVNC: true,
//         acceptSslCerts: true,
//         screenResolution: '1248x768x24',
//       },
//     },
//   },
// };

/* -------------------------------------------------------------------------  */
/*                              WEBDRIVER                                     */
/* -------------------------------------------------------------------------  */

module.exports = {
   webdriver: {
     start_process: true,
     port: 9515,
     server_path: require('chromedriver').path
   },
   test_settings: {
     default: {
        launch_url: 'https://qa.astra-daihatsu.id/frontoffice/',
        desiredCapabilities : {
          browserName : 'chrome',
          chromeOptions: {
            args: ['start-maximized']
          }
        },
      }
   }
};
