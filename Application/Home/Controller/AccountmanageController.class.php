<?php
namespace Home\Controller;
use Think\Controller;
//use Think\Controller\restController;
class AccountmanageController extends Controller {
    /*
    *
    *
    */
     public function __construct()
    {
      # code...
      
      parent::__construct();

    }
    public function orgManage(){
        $this->display('accountManage/orgManage');
    }
    public function userManage(){
      $this->display('accountManage/userManage');
    }
    public function brokerManage(){
      $this->display('accountManage/brokerManage');
    }
}
