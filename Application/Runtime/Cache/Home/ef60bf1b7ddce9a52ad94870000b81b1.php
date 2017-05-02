<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <title></title>
    <link rel="stylesheet" href="/tp/Public/template/assets/css/index.min.css">
  </head>
  <body>
    <div class="wrap">
      <div class="header">
        <div class="clearfix layout">
          <h1><a href="/tp/index.php/Home/accountmanage/orgManage">交易管理系统</a></h1>
          <div><a href="/tp/index.php/Home/accountmanage/orgManage" >账户管理</a><a href="/tp/index.php/Home/clientmanage/clientList">客户管理</a><a href="/tp/index.php/Home/countmanage/countTable">结算管理</a><a href="/tp/index.php/Home/sysmanage/pwdManage" class="active">系统管理</a></div>
        </div>
      </div>
      <div class="main">
        <div class="sidebar"><a href="/tp/index.php/Home/sysmanage/psdManage" class="active">密码设置</a><a href="javascript:;">角色管理</a></div>
        <div class="content">
          <form class="pwd-form">
            <h5>密码修改</h5>
            <div class="form-control">
              <label>旧密码：</label>
              <input type="password">
            </div>
            <div class="form-control">
              <label>验证码：</label>
              <input type="text" class="w200"><a href="javascript:;" class="check-code J_sendCheckCode">发送验证码</a>
            </div>
            <div class="form-control">
              <label>新密码：</label>
              <input type="password">
            </div>
            <div class="form-control">
              <label>新密码确认：</label>
              <input type="password">
            </div>
            <div class="form-control">
              <label></label><a href="javascript:;" class="submit J_submit">提交</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <script src="/tp/Public/template/assets/js/vendor/require.js" data-main="/tp/Public/template/assets/js/common"></script>
    <script>
      require(['common'], function () {
          require(['page/orgManage']);
      });
    </script>
  </body>
</html>