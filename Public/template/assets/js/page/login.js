define(["jquery","sysAPI","layer"],function(n,t){var a={init:function(){this.render(),this.bindEvents()},render:function(){},bindEvents:function(){this.onLogin()},onLogin:function(){var a=n(".error-tips");n(".submit").on("click",function(){var e={account:n("#username").val().trim(),pass:n("#password").val()};return""===e.account?void a.text("用户名/手机号不能为空"):""===e.pass?void a.text("密码不能为空"):e.account.length<6||e.account.length>15||!e.account.match(/^[A-Za-z0-9]+$/)?void a.text("用户名/手机号为长度6-15位数字或字母"):e.pass.length<6||e.pass.length>15||!e.pass.match(/^[A-Za-z0-9]+$/)?void a.text("密码为长度6-15位数字或字母"):(a.text(""),layer.msg("登录成功"),setTimeout(function(){window.location.href="/accountManage/orgManage"},2e3),void t.login(e,function(n){0===n.code?(layer.alert("登录成功"),setTimeout(function(){window.location.href="/accountManage/orgManage"},2e3)):layer.alert(n.data)}))})}};a.init()});