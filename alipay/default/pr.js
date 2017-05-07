/**
 * Launches payment request for Alipay.
 */
/*
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22WebPay+test%22%2C%22body%22%3A%22WebPay+test%22%2C%22out_trade_no%22%3A%221489562993804%22%7D&sign=XD45EbwgwAK00gm9xSYfkKBnKsqQNnuCzZcesA3NCD7in9FmfT%2FAdq%2FYGkBi1%2B9I7zQ9NOVcpaAT7chxPKGfn1Yp7lOd706a1bJcBOJnRcFsma0%2BeCbWSIiRaM41qOmVimKOIalFiwPo7SrLnDfURFs%2Fn3%2B9WdgY4HqSSal1lt%2B%2F1pb3d4mC2U%2BNSEZkfe9AT81xzdB2UuQ65xRceDq6vtseVqtfrgBFG0W1XYd8Ynw9KHJ%2FMGqbGI0gUudBPXQ3SVn5LJG9ZkXP2poztD%2B%2BZkyIsM8EV3HMlclZaMnRSvFBIzhXGdTCv4cpH4hK9h4rUJFjQ3dhWSOBOec8rooIOg%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-03-15+15%3A29%3A53&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22WebPay+test%22%2C%22body%22%3A%22WebPay+test%22%2C%22out_trade_no%22%3A%221489562993830%22%7D&sign=s%2FxlwGSogE4jJDAfJGBNGqHZzgCHiswO7Tpcsf1vcWMozSBpBDQoqgNBOZ5pBBYa9LxkM6sqqeaq5FvFrfaysr4ABOP0aFz3UAs98CzO6%2F9Sy1wvL1Vgpc3dsExNobpjX%2FCxrZ%2BFLpxyytIXdeq3gkTvBmuUBTnxMDA1SIX6gWs2eLkuW8hY32i5NWpqQQMQ0IGCfrbNrR6vkwRi%2B4OiKH5p4Fn2u00nSwNkeULdJpkUFiVFJtoI4d%2Fm6HshkQKTYuX0A7stl3kjDo%2FsFmrcIyGl6i28G4IBWiK1qYPYHNj%2FbKcE7UODUczyxvIz2VK7Sc2MtU9LrdMnuqbG46z4Cw%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-03-15+15%3A29%3A53&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22WebPay+test%22%2C%22body%22%3A%22WebPay+test%22%2C%22out_trade_no%22%3A%221489562993856%22%7D&sign=srFMWrkiWStUIVsft5JE2tVK6AGMWOAfQGXYBgHakD3tFwyl6dCkXr3weytqfwvxExrgMRZmxv3EDEqql84%2Bj6wHndn4DPfW6cS7Z%2BbIgcDNb8ZRwcAPEpaZ5jSTr0hLVxBYXUOmpFGWbRhG4fxOy3taFHHFrX%2FeeULlSDtkNgFlCS7JsmBDOgDTkLiF1BVCoxZDpVKeDWlSn71ZGPv76Ub7CNeJlAjpA7kGM805V2IoQEcv8hCUBjcGxmZDncVHWeiOYWH4Irrd8Y2vtBXqB5GOBcq3Ld%2BwHkMWw8eVWH%2BXg30HkCcmogkQz5i2XVEO76iFukAAOvnZAgvJy4ipYg%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-03-15+15%3A29%3A53&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22WebPay+test%22%2C%22body%22%3A%22WebPay+test%22%2C%22out_trade_no%22%3A%221489562993877%22%7D&sign=TqRqeWTQg%2F4xSika45eiK4ZU2z4jDlikvFMUppayrBiw3cKNpUjaCxhOBkstowz5g5sdnBkAOn9f1cMMyY4vsEoLYumwDoMP54yRvFgaEYgjmi9EqAlAossqqK2bcGgCl941gy3IOf%2F7HvoA90w9jKx0HL4%2FyBCcWLPb8LyU6ArTWPGJ6WHiXWdu6UTUzMkMOJFkCvu3DLWSk2i2OAMGxjXmJCioliYGHfQ4%2BVxLgsOIYIWpYf5kXYxl0oj9jZTIMPCGg8%2FlskvxhP%2BBT65iaLSy06RsJKC%2FCanTC%2BhLLZil91p4I3lvo4yDI8W0jx1w34L8DmNUFf3j5kJFu47saA%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-03-15+15%3A29%3A53&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22WebPay+test%22%2C%22body%22%3A%22WebPay+test%22%2C%22out_trade_no%22%3A%221489562993897%22%7D&sign=US%2BweIiWbRJ5spvJEZCNwsr2swc5V9EGsQ8x2a9alHXnjZAwWi3E449JBB%2F2W8Vh5OMOh7iYt42ipfU4FfmWQf1a%2FbRB6GjSjFf934ZGrCTVZy8qpzUMZ%2F7l%2FR1zXPw8f7s6Pt3EiIC7gA2vYYdKdgXTZPgHTurC5OLEy1kBevg38bjFui3Y6%2FjhZ%2BbrRQclfRLkDsSqg3WXoo5NlRBNyt80kXX%2Bf78phLkb8eaQetb1t7cP%2FMdhFZy3gE504UxTyw8bD04ey%2B1PrxgVPw7iSUMMn1tuw57CySutGxBmTIlW2caKrPFG2vz%2BsJMjuOEAIWPHDuUtHi5xcyNPskBzeA%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-03-15+15%3A29%3A53&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22WebPay+test%22%2C%22body%22%3A%22WebPay+test%22%2C%22out_trade_no%22%3A%221489562993913%22%7D&sign=n1CU%2FC2BeUIYRohJNS9gk4I0eRkBUrivAfziVC4W13%2FB6Qq3KPiztc%2Fdp0Lkd01eWPplcTZBFKMURt%2FCur31Y8iB%2FADLsd9hQUj2KvJ7G1PRmoJXsWTt8%2F%2Fd1%2Fui2jdYSlVfLial2BCGxf4M89EDP3bg2hvIcxA59yBvFLiy0ow1RcptSKsSMSbjguvF31XgKEpnUFsF87g6RoH%2BedurBJ6G%2BeXVR376QxpBFpEBxuGvDlSGW%2FX4afrMZ6JHN9aY8k%2FTKhDKaxIWv4r9EhFX6rSyWzhiQjI9yzSZFUHX6YRt5JJCXh7XTQrodsH8AGsvVY0cihKJw2eRxbUOL1H5tQ%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-03-15+15%3A29%3A53&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22WebPay+test%22%2C%22body%22%3A%22WebPay+test%22%2C%22out_trade_no%22%3A%221489562993928%22%7D&sign=nmWCWlCjuS2EOc%2B8XJy6hqsktkzB%2BnnzxYqD5WdwDDLzYVfCpWWMeK3LW1TA%2FfcapvWXUFeZ7oZEA1JAnKjMzCODptCFpCpSAimB32IFNtxwKGw86wuPtU8dVTs5cwlKJwTycOeKLIjlEVvTRliyZw3T1zAkSUZnpvdvsDB%2BsDFrSLVPSaWTPGVjC5bkNhmksQS4drNIIZ2ymQl3j2Axz3Js%2BHHftw9GcmWiZttUn6eRrkJ%2Fy8khY9KvQmpROU3HNb%2FhSgf818DZtlS6wTp3%2Fbg4uKjUAfNC6TZmgFhjQFPZMqSJt8zr5pMy%2Fix2D1SWGKJiGNenNy8HgKNvUN%2BX%2FQ%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-03-15+15%3A29%3A53&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22WebPay+test%22%2C%22body%22%3A%22WebPay+test%22%2C%22out_trade_no%22%3A%221489562993942%22%7D&sign=cAFonTjhGhwACeRI2KzcjfqkpV11WNM3pHPtgQne0MJAxSe9vdsvwikxxbWwnS9z%2BKENNsIVjfBwmGdNUiTkwEEXdJxR9tUiGoR190Uq0g%2BDxEPSIKvv2ALc5SzAS7WEaMMa%2BsGoVt7CUQ%2FDGwME%2BZ%2FaLvaP7WSL0gd5Zbd7OfUZQIPCspsiVaMzsl8m2E9Nym%2FOq%2BjulR7xch2fWHY2hu8s0bq%2FvktLhtbePOKPi2NQFJ094vHVKZGDb9SeGPHFUjvF70jUy2ynERc%2Fo5%2F1tn9vt%2B4pDdsnlLwBf%2BJDcWZYte4V5bWDXKOALVWfpOn1n8l5j8X3ggtODvCRROL%2Fjg%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-03-15+15%3A29%3A53&sign_type=RSA2

*/

function onBuyClicked() { // eslint-disable-line no-unused-vars
  let supportedInstruments = [{
    supportedMethods: ['https://www.alipay.com/webpay'],
    data: {
      orderInfo: 'biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22WebPay+test%22%2C%22body%22%3A%22WebPay+test%22%2C%22out_trade_no%22%3A%221489562993957%22%7D&sign=Q8vWzg30U8sskRJmoBR23mzmH1azoCJITb4xiugilo2bbXVUo%2FVArprfk8y7Vys8xGC9qQApB8Uw3VfohbSyW%2F1Zmu2EL89lrbHZEH9%2BYxvHuts69Qq9aDJTh3iKUNnrHBt6iA%2BdL%2B73k9Q61JgwlljAzz93FSrYgGca%2Fm32yYlylvJ%2Bpu%2B%2Bx3cWLP1lbyksylTSb0zx75y9FUHzqfCr%2Beko%2FzzK3DvHq%2FTwadD1bZJ3%2FppT7O87wfjAmYowlV7N9rwGRpT47jSvYszelw2sMkTvG%2Bj7CEZz%2BeDzN58vSGogjCaf8FlNh4QqLw1setHqyDCvKIIIwb%2BYAON00TjiEQ%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-03-15+15%3A29%3A53&sign_type=RSA2'
    },
  }];

  let details = {
    total: {
      label: 'Donation',
      amount: {
        currency: 'USD',
        value: '55.00',
      },
    },
    displayItems: [{
      label: 'Original donation amount',
      amount: {
        currency: 'USD',
        value: '65.00',
      },
    }, {
      label: 'Friends and family discount',
      amount: {
        currency: 'USD',
        value: '-10.00',
      },
    }],
  };

  if (!window.PaymentRequest) {
    error('This browser does not support web payments.');
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
