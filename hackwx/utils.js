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
  window.open('https://mclient.alipay.com/cashier/mobilepay.htm?alipay_exterface_invoke_assign_target=invoke_97b7ef535a370136352fe1026384526f&alipay_exterface_invoke_assign_sign=_dn_f_u_rg5_u_ktsla4_sv_i_txm_uw_c_ynax_ftq_v_sx_zmhrc_a6_b2_zy_k_fb0_wtt_a_x_q%3D%3D');
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