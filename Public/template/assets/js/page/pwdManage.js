define(["jquery","sysAPI","layer"],function(e,n){var t={init:function(){this.render(),this.bindEvents()},render:function(){},bindEvents:function(){this.onLogin()},onLogin:function(){var t=e(".error-tips");e(".submit").on("click",function(){var o={username:e("#username").val().trim(),password:e("#password").val()};return""===o.username?void t.text("用户名/手机号不能为空"):""===o.password?void t.text("密码不能为空"):o.username.length<6||o.username.length>15||!o.username.match(/^[A-Za-z0-9]+$/)?void t.text("用户名/手机号为长度6-15位数字或字母"):o.username.length<6||o.username.length>15||!o.username.match(/^[A-Za-z0-9]+$/)?void t.text("密码为长度6-15位数字或字母"):(t.text(""),layer.msg("登录成功"),setTimeout(function(){window.location.href="/accountmanage/orgManage"},2e3),void n.login(o,function(e){0===e.code?(layer.alert("登录成功"),setTimeout(function(){window.location.href="/accountmanage/orgManage"},2e3)):(console.log("code:"+o.code+" error:"+o.message),layer.alert(o.message))}))})}};t.init()});