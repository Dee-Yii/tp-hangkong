define([
    "jquery",
    "utils",
    "config",
    "accountAPI",
    "layer",
    "pagination",
    "remodal"
], function ($, utils, config,accountAPI) {
    var addUserModal = $('[data-remodal-id=addUserModal]').remodal();
    var changeUserModal = $('[data-remodal-id=changeUserModal]').remodal();
    var resetPwdModal = $('[data-remodal-id=resetPwdModal]').remodal();
    var body = $("body");

    var page = {
        init: function () {
            this.render();
            this.bindEvents();
        },
        render: function () {
            this.initModal();
            this.fnGetList({}, true);
        },
        bindEvents: function () {
            this.onSearch();
            this.onSelectAll();
            this.onAdd();
        },
        initModal: function () {
            $(".J_showAdd").on("click", function () {
                addUserModal.open();
            });
            body.on("click", ".J_showChangeUser", function () {
                var $this = $(this);
                var oTd = $this.parents('tr').find('td');
                var orgName = oTd.eq(4).text();
                var username = oTd.eq(1).text();
                var nickname = oTd.eq(2).text();
                var roleType = oTd.eq(3).text();
                var oForm = $(".changeUserModal .modalForm");
                oForm.find("input[name=orgName]").val(orgName);
                oForm.find("input[name=username]").val(username);
                oForm.find("input[name=nickname]").val(nickname);
                oForm.find("input[name=roleType]").val(roleType);
                changeUserModal.open();
            });


            body.on("click", ".J_showResetPwd", function () {
                var $this = $(this);
                var oTd = $this.parents('tr').find('td');
                var username = oTd.eq(1).text();
                var nickname = oTd.eq(2).text();
                var oForm = $(".resetPwdModal .modalForm");
                oForm.find("input[name=username]").val(username);
                oForm.find("input[name=nickname]").val(nickname);
                changeUserModal.open();
                resetPwdModal.open();
            });

            $(document).on('closed', '.remodal', function (e) {
                $(this).find(".modalForm")[0].reset();
            });
        },
        onSelectAll: function () {
            utils.selectAll();
        },
        onSearch: function () {

        },
        onAdd: function () {
            var btn = $(".addUserModal .remodal-confirm");
            btn.on("click",function () {
                var $this = $(this);
                if($this.hasClass("disabled")) return;
                $this.addClass("disabled");
                var data = {

                };

                layer.msg("新建成功");
                addUserModal.close();
                console.log(1);
                // accountAPI.addOrg(data,function (result) {
                //     addUserModal.close();
                //     layer.msg("新建成功");
                // });



            })
        },
        fnGetList: function (data, initPage) {
            var _this = this;
            var table = $(".data-container table");
            // showLoading(".J_consumeTable");
            // var data = {};
             accountAPI.searchUser(data, function (result) {


            console.log("获取用户管理列表 调用成功!");
            if (result.list.length == "0") {
                table.find("tbody").empty().html("<tr><td colspan='9'>暂无记录</td></tr>");
                $(".pagination").hide();
                return false;
            }
            var oTr,
                checkTd = '<td><input type="checkbox"></td>',
                controlTd = "<td>" +
                    "<a class='J_showChangeUser text-blue' href='javascript:;'> 修改 </a> | " +
                    "<a class='J_showResetPwd text-blue' href='javascript:;'> 重置密码 </a>" +
                    "</td>";
            $.each(result.list, function (i, value) {
                console.log(value);
                var codeTd = '<td>' + value.uid + '</td>';
                var orgNameTd = '<td>' + value.nickname + '</td>';
                var orgTypeTd = '<td>' + config.orgType[value.orgType] + '</td>';
                var upLevelTd = '<td>' + value.name + '</td>';
                var phoneTd = '<td>' + value.phone + '</td>';
                var cellphoneTd = '<td>' + value.lastLoginTime + '</td>';
                if(value.status ==1){
                  var statusTd = '<td>启用</td>';
                }else{
                  var statusTd = '<td>禁用</td>';
                }
                
                oTr += '<tr class="fadeIn animated">' + checkTd + codeTd + orgNameTd + orgTypeTd + upLevelTd + phoneTd + cellphoneTd + statusTd + controlTd + '</tr>';
            });
            table.find("tbody").empty().html(oTr);

            if (initPage) {
                var pageCount = result.totalPages;
                if (pageCount > 0) {
                    console.log("页数：" + pageCount);
                    $(".pagination").show().html("").createPage({
                        pageCount: pageCount,
                        current: 1,
                        backFn: function (p) {
                            var newData = data;
                            newData.page = p;
                            _this.fnGetList(data)
                        }
                    })
                }
            }
          });
        }


    };
    page.init();

});
