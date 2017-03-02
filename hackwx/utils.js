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
  window.open('https://mclient.alipay.com/cashier/mobilepay.htm?alipay_exterface_invoke_assign_target=invoke_b826ff1d9cd99938c1b07fa9a20ab2fb&alipay_exterface_invoke_assign_sign=_rn_v_vv_few_w_fxl_e_dq_n4_y30_e_n_o%2B_m_l5_jz_md9v3nw_exkiw_i7_y3_s%2F_qw_cg5_fw%3D%3D');
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
