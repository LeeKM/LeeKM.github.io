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
  window.open('https://mclient.alipay.com/cashier/mobilepay.htm?alipay_exterface_invoke_assign_target=invoke_bfcd16c9bcaf2c8a4d35bb2107508c74&alipay_exterface_invoke_assign_sign=lyl_h_p_c1_xmlc_bolt_i_l76fs1_c_y3_zks_qy7n_n4vs_u0gb_swsr_d_b_i_mx_jy_jk_q%3D%3D');
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
