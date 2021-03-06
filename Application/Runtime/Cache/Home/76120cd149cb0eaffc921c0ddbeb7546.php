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
          <div><a href="/tp/index.php/Home/accountmanage/orgManage" >账户管理</a><a href="/tp/index.php/Home/clientmanage/clientList" class="active">客户管理</a><a href="/tp/index.php/Home/countmanage/countTable">结算管理</a><a href="/tp/index.php/Home/sysmanage/pwdManage">系统管理</a></div>
        </div>
      </div>
      <div class="main">
        <div class="sidebar"><a href="/tp/index.php/Home/clientmanage/clientList" >客户列表</a><a href="/tp/index.php/Home/clientmanage/chiCangSearch">持仓查询</a><a href="/tp/index.php/Home/clientmanage/pingCangSearch" class="active">平仓查询</a><a href="/tp/index.php/Home/clientmanage/chuRuJinSearch">出入金查询</a></div>
        <div class="content">
          <div class="search-bar">范围时间:
            <input type="text">-
            <input type="text">
            <input type="text" placeholder="商品名称"><a href="javascript:;" class="btn">查询</a>
          </div>
          <div class="data-container tab-container">
            <div class="tab-btns"><a href="javascript:;" class="active">上海-纽约</a><a href="javascript:;">上海-东京</a><a href="javascript:;">上海-法兰克福</a></div>
            <div class="tab-content">
              <div class="tab">
                <table>
                  <tr>
                    <th>日期</th>
                    <th>交易订单号</th>
                    <th>交易类型</th>
                    <th>金额</th>
                    <th>状态</th>
                    <th>平台审核状态</th>
                    <th>客户名称</th>
                  </tr>
                  <tr>
                    <td>2010-03-03</td>
                    <td>SAS129912</td>
                    <td>入金</td>
                    <td>1000</td>
                    <td>平台处理中</td>
                    <td><span class="text-bule">未审核</span></td>
                    <td>大力哥</td>
                  </tr>
                  <tr>
                    <td>2010-03-03</td>
                    <td>SAS129912</td>
                    <td>入金</td>
                    <td>1000</td>
                    <td>平台处理中</td>
                    <td><span class="text-bule">未审核</span></td>
                    <td>大力哥</td>
                  </tr>
                  <tr>
                    <td>2010-03-03</td>
                    <td>SAS129912</td>
                    <td>入金</td>
                    <td>1000</td>
                    <td>平台处理中</td>
                    <td><span class="text-bule">未审核</span></td>
                    <td>大力哥</td>
                  </tr>
                  <tr>
                    <td>2010-03-03</td>
                    <td>SAS129912</td>
                    <td>入金</td>
                    <td>1000</td>
                    <td>平台处理中</td>
                    <td><span class="text-bule">未审核</span></td>
                    <td>大力哥</td>
                  </tr>
                  <tr>
                    <td>2010-03-03</td>
                    <td>SAS129912</td>
                    <td>入金</td>
                    <td>1000</td>
                    <td>平台处理中</td>
                    <td><span class="text-bule">未审核</span></td>
                    <td>大力哥</td>
                  </tr>
                  <tr>
                    <td>2010-03-03</td>
                    <td>SAS129912</td>
                    <td>入金</td>
                    <td>1000</td>
                    <td>平台处理中</td>
                    <td><span class="text-bule">未审核</span></td>
                    <td>大力哥</td>
                  </tr>
                  <tr>
                    <td>2010-03-03</td>
                    <td>SAS129912</td>
                    <td>入金</td>
                    <td>1000</td>
                    <td>平台处理中</td>
                    <td><span class="text-bule">未审核</span></td>
                    <td>大力哥</td>
                  </tr>
                  <tr>
                    <td>2010-03-03</td>
                    <td>SAS129912</td>
                    <td>入金</td>
                    <td>1000</td>
                    <td>平台处理中</td>
                    <td><span class="text-bule">未审核</span></td>
                    <td>大力哥</td>
                  </tr>
                  <tr>
                    <td>2010-03-03</td>
                    <td>SAS129912</td>
                    <td>入金</td>
                    <td>1000</td>
                    <td>平台处理中</td>
                    <td><span class="text-bule">未审核</span></td>
                    <td>大力哥</td>
                  </tr>
                  <tr>
                    <td>2010-03-03</td>
                    <td>SAS129912</td>
                    <td>入金</td>
                    <td>1000</td>
                    <td>平台处理中</td>
                    <td><span class="text-bule">未审核</span></td>
                    <td>大力哥</td>
                  </tr>
                </table>
                <div class="pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="/tp/Public/template/assets/js/vendor/require.js" data-main="/tp/Public/template/assets/js/common"></script>
    <script>
      require(['common'], function () {
          require(['page/PCSearch']);
      });
    </script>
  </body>
</html>