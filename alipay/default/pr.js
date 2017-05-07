/**
 * Launches payment request for Alipay.
 */

function onBuyClicked() { // eslint-disable-line no-unused-vars
  let supportedInstruments = [{
    supportedMethods: ['https://www.alipay.com/webpay'],
    data: {
      orderInfo: 'biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22Tao+Doll%22%2C%22body%22%3A%22Tao+Doll%28Da+Shen%29%22%2C%22out_trade_no%22%3A%221494147879329%22%7D&sign=Qt%2FGXIJcLHjU2HSeEfALIhhIRgnfGMpvtb%2FBdgOBaNSOCEl8%2FcHZ51fSc7O0HtAXoHq9gyFSwXRwrptzkgYU%2BvMYZdCgbcjvFsOX78SYygQMD3X0l3jLekaPw1VPaQlSrOApRuIRreZaqTyqMbz6h39xod%2F%2BTU7Pt%2FHeFfubHkClznT1KZighMq3fOUHlcuITOXQzQ3weUrUBJEFq3d3C6Zym6vku%2FLv4kR3xZEXrgjeVjzcw7vgZIqbNb4MZ8emAWQupg468ttr7SbYjV01dXke8kK%2F5IdHTqrPSzfdRDaA52U6d3UKQZVkXkGvs65dGE5Nepa8gBujyYj0bmYdIw%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-05-07+17%3A04%3A39&sign_type=RSA2'
    },
  }];

  let details = {
    total: {
      label: 'Tao Doll',
      amount: {
        currency: 'RMB',
        value: '0.01',
      },
    },
    displayItems: [{
      label: 'Tao Doll',
      amount: {
        currency: 'RMB',
        value: '75',
      },
    }, {
      label: 'Special Discount',
      amount: {
        currency: 'RMB',
        value: '-74.99',
      },
    }],
  };

  if (!window.PaymentRequest) {
    window.location.href = "./pay_error.html"
    return;
  }

  try {
    let request = new PaymentRequest(supportedInstruments, details);
    request.show()
      .then(function(instrumentResponse) {
        window.setTimeout(function() {
          instrumentResponse.complete('success')
            .then(function() {
              done('Thank you!', instrumentResponse);
            })
            .catch(function(err) {
              error(err);
            });
        }, 2000);
      })
      .catch(function(err) {
        error(err);
      });
  } catch (e) {
    error('Developer mistake: \'' + e.message + '\'');
  }
}
