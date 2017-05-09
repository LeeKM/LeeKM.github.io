/**
 * Launches payment request for Alipay.
 */

var orderStr = 'biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%22Tao+Doll%22%2C%22body%22%3A%22Tao+Doll%28Da+Shen%29%22%2C%22out_trade_no%22%3A%221494147879426%22%7D&sign=d3laZqGyGd32gIoXoHMWPnbx0x4nxh57%2FFUD%2B7iWicotC83rkvW6m0RPbErhz%2FlJpOSOaBMpZWdTHef1Dg5gdqhfUl261CdV8Z0cmlMBan8CVaPPWoQU4U7W9TwHYqx1nMaULMp2kCPTVdASftRu%2FgzfSLP5Lx3VQkVtCAXQWDNvGl6wm3Pv53JHlQ3Ilk%2F4oRsjfnONciLyzmejM4KWxvNVa471sLyWxIVB3lX%2FYqew3NOy58%2FJobbXRVPLDKjHhPxuVLgYJ7ySfZsWFVCgj4mPCec%2Bx1Nm5657%2BoHhhaj4PxWhS4sahDxmPI95hou6O%2FP2XvuUZKch2ttoayrUyw%3D%3D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&app_id=2014100900013222&timestamp=2017-05-07+17%3A04%3A39&sign_type=RSA2'

function ajaxObject() {
    var xmlHttp;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
        } 
    catch (e) {
        // Internet Explorer
        try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("您的浏览器不支持AJAX！");
                return false;
            }
        }
    }
    return xmlHttp;
}
 
// ajax post请求：
function ajaxPost ( url , fnSucceed , fnFail , fnLoading ) {
    var ajax = ajaxObject();
    ajax.open( "get" , url , true );
    ajax.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {
            if( ajax.status == 200 ) {
                fnSucceed( ajax.responseText );
            }
            else if (fnFail) {
                fnFail( "Net Error: "+ajax.status );
            }
        }
        else if (fnLoading) {
            fnLoading();
        }
    }
    ajax.send( null );
 
}

window.onload = function() {
	ajaxPost('http://120.25.219.34:8080/HelloWord/Order', function(respText) {
		console.log(respText);
		orderStr = respText;
	}, null, null)
}

function onBuyClicked() { // eslint-disable-line no-unused-vars
  let supportedInstruments = [{
    supportedMethods: ['https://www.alipay.com/webpay'],
    data: {
      orderInfo: orderStr
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
        value: '0.01',
      },
    }, {
      label: 'Discount',
      amount: {
        currency: 'RMB',
        value: '0',
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
