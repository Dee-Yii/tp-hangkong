<?php
namespace Home\Controller;
use Think\Controller;
class LoginController extends Controller {

    public function dologin()
    {
      $_POST['account'] = 123;
      $_POST['pass'] = 'qwe';

      $id = $_POST['account'];
      $pass = $_POST['password'];
      $map['account'] = $_POST['account'];
      //$map['pass'] = MD5($_POST['pass']);
      $map['pass'] = $_POST['pass'];
      $admin_user = M('admin_user');
      $user_info = $admin_user->where($map)->select();
      if($user_info){
        session('user',$user_info);//store seession
        $this->ajaxReturn(array(
            'code'=>0,
            'message'=>'success',
            'data'=>'登陆成功',

        ));
      }else{
        $this->ajaxReturn(array(
            'code'=>-1,
            'message'=>'fail',
            'data'=>'密码错误',

        ));
      }

    }


}
