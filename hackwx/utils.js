// <script language='javascript' src='clipboard.min.js'></script>
// <script language='javascript' src='jquery-3.1.1.min.js'></script>

function is_weixn() {
  var ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i)=='micromessenger') {
    return true;
  } else {
    return false;
  }
}

// 非微信内置浏览器，直接跳h5支付
function toh5Pay() {
  window.open('https://mclient.alipay.com/cashier/mobilepay.htm?alipay_exterface_invoke_assign_target=invoke_dc5d568ade4f5dd5cfb40687f8406f26&alipay_exterface_invoke_assign_sign=_c32%2By_i_bi6_i_t_v7g_sut6xemv_v_jqf_u_s_wvvono%2B%2Fy4_g_p8krb_d_b4_p5_rs5_x_a%3D%3D');
}

// 绑定window.onLoad事件
function windowOnload() {
  // 根据是否微信内置浏览器选择显示内容
  var toRemove;
  if (is_weixn()) {
    toRemove = document.getElementById('not_in_wx');
  } else {
    toRemove = document.getElementById('in_wx');
  }
  toRemove.parentNode.removeChild(toRemove);

  // 粘贴板设置
  var clipboard = new Clipboard('.btn');
  clipboard.on('success', function(e) {
    alert('成功复制吱口令，打开支付宝即可支付');
  });
  clipboard.on('error', function(e) {
    alert('请选择吱口令，长按复制');
  });
}
