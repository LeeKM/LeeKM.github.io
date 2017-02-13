/**
 * Launches payment request for Alipay.
 */
/*
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E4%B8%9C%E8%A5%BF%3B%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%3B%22%2C%22out_trade_no%22%3A%221486715276257%22%7D&sign=q%2B3EMNggOzMRXmw72rXzVMB8JAPpUHTfZjf4GAjvYAFeah%2Bn4hkP421pQYTBWXAUJtXb0onHIJ5j%2Fq0DFK1T%2BkhtesGSnOqmwNY4pyCnHFPxgvIHkMKTrXfv6%2F8mFdHcYDBINiWZH28zNitIVDNq4hujMtheo4GXIeUVC8IUVp6bengwEMJH%2B%2F57%2BOFCrCcEgbXQH2AkgrzknzhlG5Cz48iWrA22EseDilo7s8rxfQbw%2BsT5pMfa6nxih%2Bl67A1EdoCGwVooPZRtgZSVpAZ4niSjas%2F%2FdnvQbd58mouY5c0i3foHB9i7I%2BeW39h03S9MnAm1%2Bk09iRi4ae36TYDd1Q%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-02-10+16%3A27%3A56&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E4%B8%9C%E8%A5%BF%3B%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%3B%22%2C%22out_trade_no%22%3A%221486715276280%22%7D&sign=q%2BN94RWVN9qCVyS%2F5LYEqWHzkRPCgkpld0ltxtYTxR1kSScs9tuuYcvL4T3b9p2F6mhQNBvPOgoZXURdsrd4L5IgFQwjxI9PLaotdOHaub0sk092QyxQmGW4k13C8EASje0%2BLon%2BD0jeBuaohzfLzvykPRHImP7jja%2F3Dldjan0e%2BV0SmgompemkiACDkH44%2F0NvoLEiS837aLVib%2B4MIpjgHW1XX%2Fp6E0dWjKosj4J1naYDlAmH46OmY2wvPat7Z%2F4eMhcA9IkcQZJ%2FRRc%2FfJ7FAhhsostEZ%2BVUWI6lKYhjJ2FdlQspr6D%2F6LEI%2BQr6dwfjRIXi6%2BShswf9ZcuTaw%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-02-10+16%3A27%3A56&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E4%B8%9C%E8%A5%BF%3B%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%3B%22%2C%22out_trade_no%22%3A%221486715276296%22%7D&sign=fgGonx%2FTeTEFU0aInNk48inGv4YU9fQxY688pCcmxgNkT%2BkdxZ%2Bh9wkxTToFkuBKpvEM1m3wpkZBZBFHKqLTONBsr%2BaQOA%2BuCK5COB7lGtC5SIexX5dOcwai1cIngzuDByIQ%2BhCQvUx3s8dlUY1VlrCxdE2N5s48Qz3H%2FwrbC98oBY9TLxAAA8ZaiPeQF1GlHUMu3Ymsf%2F64ymVKS8y6CPsAvPAwlazyczL5rHGmnBm9iqHiQAoI6Cc030frR0vhcuZDA%2FTaLeHttbusRxWu87BMnVXyjZbFO3u4azO3ZZjcL9%2BV8Bo4AJYpymHgQfizN0kefrJyxISBuDpl%2FCvqMg%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-02-10+16%3A27%3A56&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E4%B8%9C%E8%A5%BF%3B%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%3B%22%2C%22out_trade_no%22%3A%221486715276313%22%7D&sign=nu8u1J1UjSJE1tXOuLO2LkdmZhUVTSBuikGtDzOFVsIadi2w%2BdJ5YA87e9P9efDc3IOElA%2FVdTCeuej%2BEV4Xcaf%2F7sSt7a4vBrHJBqiGrUKWD47luWk5okNHaC11i0P4nq2W8PLh2xRKLgEF9ftpkIf4s9sBOIulN7OkC5%2BDKBtFxGdyeGRjhcYx98%2FDTDysV2%2B5xRymogucBRb2QJXHnvhJq7qbr3Qe6iBUzKfmKD5XeMPja%2Bsy9%2Bn%2BDE4jQv7kk%2FaxLbzCzhi4%2BzvM9T72hMWyGF3XvH9zI9sExXT2%2B92pWHjJy0D7wY44eER0AQqzfKllIIhfuOsAWavUAT2hOw%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-02-10+16%3A27%3A56&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E4%B8%9C%E8%A5%BF%3B%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%3B%22%2C%22out_trade_no%22%3A%221486715276328%22%7D&sign=XQKKb%2Fa%2Fpx636v7TKh0SgsEIQOa98v4%2FcMh4qg5V0byybU94OZS18bAJTM2B1LjImE4kmSGfRUIPfCsG22b5Ca5F8HdnBQMfi6UKEnQ3mvJ5I1bSqEGJVPhwAyY1NedXCjxqh26F4X2VaeahqyHTAKDlITWG6h%2FGThesdyeI8U6F513fHpjTFeR8wpPXN93baVBAns5ngF3cWBxLi0Ok%2F%2B1AGnrQudsGdkeIZUfrGgnM2A1VhlcJ3N96r5lV%2BvLy2BqJAdJ0qlBkz0M4ptY%2BDGklvLmw7Ouz3A0SXylvefF9quNYC69u3xlGuq%2B8eS1i538dfPNqeEVLfUPqGkHzoQ%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-02-10+16%3A27%3A56&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E4%B8%9C%E8%A5%BF%3B%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%3B%22%2C%22out_trade_no%22%3A%221486715276343%22%7D&sign=kjQ1Y1kNS2pezzINynY%2BF%2F79e6HX0cpqWUA1OprMXFY4y7PzBTrgsxeAXlKJxoTkIH1ZDOZIm8wPDGqwsuCg3HJuSPcstcpxiEgN3fZZiCHzDue%2F5IiHJ45BL%2FMy625J4Nl2u0xnyVPXxWprAGvHc1NxtiBhq%2FXCNxX056l9HaHwmsF9pVLtKfmTlA42rDm1ABpG7ijzT%2FKqFqG2oywTFHeEcyu4y%2BsejvUGoNmRKTf91XC1xKFJZaTcYtyqGkSmgHQIj8VR1rNvIEhRKmn1BVxKRQhd6CI%2B9E%2BO0NI8eGMJ4LObn9I6%2BP7koA8lZHergpjDSmnglKSD%2BIh8C%2F9WoQ%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-02-10+16%3A27%3A56&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E4%B8%9C%E8%A5%BF%3B%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%3B%22%2C%22out_trade_no%22%3A%221486715276358%22%7D&sign=QmBMXyAUhd9e%2FNKB80eDW0MVj4ozDJkUd0SMcN1kklh0UCtVqEWjra6o2GOv3frBgnXLMryi79GFlAfhaBbSV0mlhCtZYzteh9kTvzsvTqS%2FH92FVwAGb%2FSqjtKHcRQ6NoedFnJa8lJI2vmUze4T1KNmuAdbCr1S0FIkqI3R%2BXHk%2FBSU9imWwJncXW3mxM7RzWTLKF8YPsqY7Ve2E0IRmGPHcukAboWlL6KGr7S1qzEyBLSPR6X3r94%2BAnITCgW%2BgSOf%2FOHPFkluGuvt1tTqdCtrLkQde5FOXrKRVQ8TCh%2FPXgb%2FFov8FkTbLOOIcRwMyd%2B1WkrsUaLILCklMqKAEQ%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-02-10+16%3A27%3A56&sign_type=RSA2
biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E4%B8%9C%E8%A5%BF%3B%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%3B%22%2C%22out_trade_no%22%3A%221486715276373%22%7D&sign=NN2vFYBHGKlZWo5A%2FPcGgROyqv50wkMX5yUGXhV8r%2B6osXt3HRc2Et6pK8jtXnxjWOmhNTdwnor6TkKn5DUU3O%2BiFmEOF6wbgY8DmAs6RDPoMJuhC8A9NdbmqtPig%2BkhpER9ripHeCINfsnLthtmYV7eOfmKZU3GFzoCur45C32Pgu49ECUhgtO9U9%2BJQ6xDxGSVZjLFHMqULaphxIleZAIec%2BamuyeWlHRzKGqHCdBJvkaF1a8Mm%2BEqkbIFy4DDp%2FziYRWtHhTAcHVyu%2Bt0PtTqHMW8cSxrK2OHTuusr5vVtUw0wCiOn20YMbrBchkE9rxqojNGruP4vzeYZrCfyw%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-02-10+16%3A27%3A56&sign_type=RSA2
*/

function onBuyClicked() { // eslint-disable-line no-unused-vars
  let supportedInstruments = [{
    supportedMethods: ['https://www.alipay.com/webpay'],
    data: {
      orderInfo: 'biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E4%B8%9C%E8%A5%BF%3B%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%3B%22%2C%22out_trade_no%22%3A%221486715276236%22%7D&sign=Yf3ETHbZisJJoCFG8iNd%2FYLo7LYzHG%2FlsKOhAEqTAXUfo%2F%2F%2Bjc8pkbRktwABRzVKA68SMeAxuhcfVSwhPrkciohHPUzW238IWClvQHLldbtlCNQxfpGvtrtMlg0RU44P%2FvzEqM7sh90LOdLalPZhgVrkV9A55L4rLICKHVnBS%2FEiY7eiop8t9lT%2B10AkOUDaHyKUCDKv508giILk4AAtjwf6JGfsbH13zQ%2Bz15Uy5AodvAUaKeZBP1F10Zt8vtNGWpKFisVUlf1TOcWxPCLBBxlqVootvsCZOBnryPrqGVqoHERuOCKHPgY44svStdinO757VvaLLmyJJ5%2BZUDk1kA%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-02-10+16%3A27%3A56&sign_type=RSA2'
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
