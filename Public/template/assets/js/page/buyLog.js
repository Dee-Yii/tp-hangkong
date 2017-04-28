define(["jquery","utils","config","clientAPI","layer","pagination","remodal"],function(e,t,n,i){var o=e("[data-remodal-id=changeLineModal]").remodal(),a=e("body"),s={init:function(){this.render(),this.bindEvents()},render:function(){this.initModal(),this.initEventBind()},bindEvents:function(){this.onSearch(),this.onStopTrade()},initEventBind:function(){t.initDatePicker()},initModal:function(){a.on("click",".J_showChangeLine",function(){var t=e(this),n=t.parents("tr").find("td"),i=n.eq(4).text(),a=n.eq(2).text(),s=n.eq(3).text(),d=e(".changeLineModal .modalForm");d.find("input[name=orgName]").val(i),d.find("input[name=nickname]").val(a),d.find("input[name=phone]").val(s),o.open()}),e(document).on("closed",".remodal",function(t){e(this).find(".modalForm")[0].reset()})},onSearch:function(){},onStopTrade:function(){a.on("click",".J_showStopTrade",function(){var t=e(this),n=t.parents("tr").attr("data-id");t.parents("tr").find("td").eq(2).text();layer.confirm("警告！停止交易后用户能正常登录，但是无法进行交易",{},function(){i.stopTrade({id:n},function(e){layer.msg("操作成功")}),layer.msg("操作成功")})})},fnGetList:function(t,i){var o=this,a=e(".data-container table"),s={totalPages:64,pageNum:5,page:1,list:[{tid:"141474220113067346",uid:"5",code_id:"12",buy_sell:"-1",code:null,symbol:"fx_sjpycnh",name:"上海-东京1分钟",close_type:"6",amount:"3",open_position_time:"1490003017",close_position_time:"1490003077",gross_profit:"33.4023",open_price:"0.06111",open_cost:"33.4023",open_charge:"0.15",close_price:"0.06111",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"-1",handle:"0",phoneNum:"18668169052",nickname:"",type:"0",headUrl:"",passwd:"4bcf73028a526f5ae6899759ab332c3d3b173855bef3b22b19224cd5233d39c0",cashLv:"0",registerTime:"2017-03-20 12:59:02",registerStatus:"0",gender:"0",lastLoginTime:"2017-04-13 09:56:35",lastLoginIp:"60.186.229.22",memberId:null,agentId:null,recommend:null},{tid:"2049001728881135512",uid:"5",code_id:"12",buy_sell:"1",code:null,symbol:"fx_sjpycnh",name:"上海-东京1分钟",close_type:"6",amount:"3",open_position_time:"1490003023",close_position_time:"1490003083",gross_profit:"33.4023",open_price:"0.06111",open_cost:"33.4023",open_charge:"0.15",close_price:"0.061104",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"-1",handle:"2",phoneNum:"18668169052",nickname:"",type:"0",headUrl:"",passwd:"4bcf73028a526f5ae6899759ab332c3d3b173855bef3b22b19224cd5233d39c0",cashLv:"0",registerTime:"2017-03-20 12:59:02",registerStatus:"0",gender:"0",lastLoginTime:"2017-04-13 09:56:35",lastLoginIp:"60.186.229.22",memberId:null,agentId:null,recommend:null},{tid:"7418135986911958157",uid:"5",code_id:"12",buy_sell:"-1",code:null,symbol:"fx_sjpycnh",name:"上海-东京1分钟",close_type:"6",amount:"3",open_position_time:"1490003025",close_position_time:"1490003085",gross_profit:"33.4023",open_price:"0.06111",open_cost:"33.4023",open_charge:"0.15",close_price:"0.061104",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"1",handle:"0",phoneNum:"18668169052",nickname:"",type:"0",headUrl:"",passwd:"4bcf73028a526f5ae6899759ab332c3d3b173855bef3b22b19224cd5233d39c0",cashLv:"0",registerTime:"2017-03-20 12:59:02",registerStatus:"0",gender:"0",lastLoginTime:"2017-04-13 09:56:35",lastLoginIp:"60.186.229.22",memberId:null,agentId:null,recommend:null},{tid:"2702018922270788022",uid:"5",code_id:"12",buy_sell:"1",code:null,symbol:"fx_sjpycnh",name:"上海-东京1分钟",close_type:"6",amount:"3",open_position_time:"1490003027",close_position_time:"1490003087",gross_profit:"33.4023",open_price:"0.06111",open_cost:"33.4023",open_charge:"0.15",close_price:"0.061104",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"-1",handle:"2",phoneNum:"18668169052",nickname:"",type:"0",headUrl:"",passwd:"4bcf73028a526f5ae6899759ab332c3d3b173855bef3b22b19224cd5233d39c0",cashLv:"0",registerTime:"2017-03-20 12:59:02",registerStatus:"0",gender:"0",lastLoginTime:"2017-04-13 09:56:35",lastLoginIp:"60.186.229.22",memberId:null,agentId:null,recommend:null},{tid:"7395381939219531417",uid:"5",code_id:"12",buy_sell:"-1",code:null,symbol:"fx_sjpycnh",name:"上海-东京1分钟",close_type:"6",amount:"3",open_position_time:"1490003029",close_position_time:"1490003089",gross_profit:"33.4023",open_price:"0.06111",open_cost:"33.4023",open_charge:"0.15",close_price:"0.061104",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"1",handle:"1",phoneNum:"18668169052",nickname:"",type:"0",headUrl:"",passwd:"4bcf73028a526f5ae6899759ab332c3d3b173855bef3b22b19224cd5233d39c0",cashLv:"0",registerTime:"2017-03-20 12:59:02",registerStatus:"0",gender:"0",lastLoginTime:"2017-04-13 09:56:35",lastLoginIp:"60.186.229.22",memberId:null,agentId:null,recommend:null}]};if(console.log("获取客户管理列表 调用成功!"),"0"==s.list.length)return a.find("tbody").empty().html("<tr><td colspan='7'>暂无记录</td></tr>"),e(".pagination").hide(),!1;var d,l='<td><input type="checkbox"></td>',r="<td><a class='text-blue' href='/clientManage/clientListView/buyLog?id=123'> 查看 </a> | <a class='J_showChangeLine text-blue' href='javascript:;'> 额度 </a> | <a class='J_showStopTrade text-blue' href='javascript:;'> 停止交易 </a></td>";if(e.each(s.list,function(e,t){var i="<td>"+t.code_id+"</td>",o="<td>"+t+"</td>",a="<td>"+t.phone+"</td>",s="<td>"+n.orgType[t.orgType]+"</td>",c="<td>"+n.upLevel[t.upLevel]+"</td>";d+='<tr class="fadeIn animated">'+l+i+o+a+s+c+r+"</tr>"}),a.find("tbody").empty().html(d),i){var c=s.totalPages;c>0&&(console.log("页数："+c),e(".pagination").show().html("").createPage({pageCount:c,current:1,backFn:function(e){var n=t;n.page=e,o.fnGetList(t)}}))}}};s.init()});