define(["jquery","utils","config","accountAPI","layer","pagination","remodal"],function(t,n,e,a){var o=t("[data-remodal-id=addBrokerModal]").remodal(),i=t("[data-remodal-id=checkBrokerModal]").remodal(),d=t("body"),r={init:function(){this.render(),this.bindEvents()},render:function(){this.initModal(),this.fnGetList({},!0)},bindEvents:function(){this.onSearch(),this.onSelectAll(),this.onAdd()},initModal:function(){t(".J_showAdd").on("click",function(){o.open()}),d.on("click",".J_showCheckBroker",function(){var n=t(this),e=n.parents("tr").find("td"),a=e.eq(4).text(),o=e.eq(1).text(),d=e.eq(2).text(),r=e.eq(5).text(),c=t(".checkBrokerModal .modalForm");c.find("input[name=orgName]").val(a),c.find("input[name=id]").val(o),c.find("input[name=name]").val(d),c.find("input[name=phone]").val(r),i.open()}),t(document).on("closed",".remodal",function(n){t(this).find(".modalForm")[0].reset()})},onSearch:function(){var n=this;t(".J_search").on("click",function(){var e=t("input[name=roleType]").val(),a=t("input[name=orgName]").val(),o=t("input[name=nickname]").val(),i=t("input[name=phone]").val(),d={page:1,type:e,memberInfo:a,nickname:o,phone:i};n.fnGetList(d,!0)})},onAdd:function(){},onSelectAll:function(){n.selectAll()},fnGetList:function(n,o){var i=this,d=t(".data-container table");a.searchBroker(n,function(a){if(console.log("获取用户管理列表 调用成功!"),"0"==a.list.length)return d.find("tbody").empty().html("<tr><td colspan='9'>暂无记录</td></tr>"),t(".pagination").hide(),!1;var r,c='<td><input type="checkbox"></td>',l="<td><a class='J_showCheckBroker text-blue' href='javascript:;'> 审核 </a></td>";if(t.each(a.list,function(t,n){var a="<td>"+n.code+"</td>",o="<td>"+n.nickname+"</td>",i="<td>"+e.roleType[n.type]+"</td>",d="<td>"+n.memberInfo.name+"</td>",s="<td>"+n.phone+"</td>",f="<td>"+e.orgStatus[n.status]+"</td>";r+='<tr class="fadeIn animated">'+c+a+o+i+d+s+f+l+"</tr>"}),d.find("tbody").empty().html(r),o){var s=a.totalPages;s>0&&(console.log("页数："+s),t(".pagination").show().html("").createPage({pageCount:s,current:1,backFn:function(t){var e=n;e.page=t,i.fnGetList(n)}}))}})}};r.init()});