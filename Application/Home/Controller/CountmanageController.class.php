<?php
namespace Home\Controller;
use Think\Controller;
//use Think\Controller\restController;
class CountmanageController extends Controller {
    /*
    *
    *
    */
     public function __construct()
    {
      # code...

      parent::__construct();

    }
    public function countTable(){
      $this->display('countManage/countTable');
    }
}
