<?php
namespace Home\Controller;
use Think\Controller;
//use Think\Controller\restController;
class MemberController extends Controller {
    /*
    *
    *
    */
     public function __construct()
    {
      # code...
      if(!session('user')){
        //$this->ajaxReturn(array('code'=>-1,'message'=>'fail','data'=>'not login'));

      }
    }
    public function getList(){
      $member_info =M('member_info');
      //dump($user_info);exit;
      $pageNum = isset($_POST['pageNum'])?$_POST['pageNum']:5;
      $page = isset($_POST['page'])?$_POST['page']:1;
       $count = $member_info->where($map)->count();// 查询满足要求的总记录数
       $list = $member_info->where($map)->page($page,$pageNum)->select();//获取分页数据
       foreach ($list as $key => $value) {
         # code...
         $list[$key]['superMemberInfo'] = "";
         if(!empty($value['superMemberid'])){
           $map['memberId'] = $value['superMemberid'];
           $superMemberInfo = $member_info->where($map)->select();
           $list[$key]['superMemberInfo'] = $superMemberInfo;
         }
       }
       $Page   = new \Think\Page($count,$pageNum);// 实例化分页类 传入总记录数和每页显示的记录数(25)
       $data['totalPages'] = $count;
       $data['pageNum'] =$pageNum;
       $data['page'] = $page;
       $data['totalPages'] = ceil($count/$pageNum);
       $data['list'] = $list;
           $this->ajaxReturn($data);
    }
    public function add(){
      $member_info =M('member_info');
      $memberId = $_POST['memberId'];//机构编码
      $name = $_POST['name'];//机构名称
      $superMemberid = $_POST['superMemberid'];
    }
    //查询所有根机构
    public function getRootList(){
      $member_info =M('member_info');
      $data = $member_info->where("superMemberid is Null and status = 1")->select();//获取分页数据
      $this->ajaxReturn($data);
    }
    public function exceFile(){
      import("Org.Util.PHPExcel");
      import("Org.Util.PHPExcel.Worksheet.Drawing");
      import("Org.Util.PHPExcel.Writer.Excel2007");
      $objPHPExcel = new \PHPExcel();
      $objWriter = new \PHPExcel_Writer_Excel2007($objPHPExcel);
      $objActSheet = $objPHPExcel->getActiveSheet();// 水平居中（位置很重要，建议在最初始位置）
        $objPHPExcel->setActiveSheetIndex(0)->getStyle('A')->getAlignment()->setHorizontal(\PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
        $objPHPExcel->setActiveSheetIndex(0)->getStyle('B1')->getAlignment()->setHorizontal(\PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
        $objPHPExcel->setActiveSheetIndex(0)->getStyle('C')->getAlignment()->setHorizontal(\PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
        $objPHPExcel->setActiveSheetIndex(0)->getStyle('D')->getAlignment()->setHorizontal(\PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
        $objPHPExcel->setActiveSheetIndex(0)->getStyle('E')->getAlignment()->setHorizontal(\PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
        $objPHPExcel->setActiveSheetIndex(0)->getStyle('F')->getAlignment()->setHorizontal(\PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

        $objActSheet->setCellValue('A1', '时间');
        $objActSheet->setCellValue('B1', '机构编码');
        $objActSheet->setCellValue('C1', '机构名称');
        $objActSheet->setCellValue('D1', '上级机构');
        $objActSheet->setCellValue('E1', '初期余额');
        $objActSheet->setCellValue('F1', '充值金额');
        $objActSheet->setCellValue('F1', '充值手续费');
        $objActSheet->setCellValue('F1', '提现金额');
        $objActSheet->setCellValue('F1', '提现手续费');
        $objActSheet->setCellValue('F1', '留存金额');
        $objActSheet->setCellValue('F1', '收益金额');
        $objActSheet->setCellValue('F1', '交易金额');
        $objActSheet->setCellValue('F1', '交易手续费');
        $objActSheet->setCellValue('F1', '关联手续费');

        // 设置个表格宽度
        $objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(16);
        $objPHPExcel->getActiveSheet()->getColumnDimension('B')->setWidth(80);
        $objPHPExcel->getActiveSheet()->getColumnDimension('C')->setWidth(15);
        $objPHPExcel->getActiveSheet()->getColumnDimension('D')->setWidth(20);
        $objPHPExcel->getActiveSheet()->getColumnDimension('E')->setWidth(12);
        $objPHPExcel->getActiveSheet()->getColumnDimension('F')->setWidth(12);

        // 垂直居中
        $objPHPExcel->getActiveSheet()->getStyle('A')->getAlignment()->setVertical(\PHPExcel_Style_Alignment::VERTICAL_CENTER);
        $objPHPExcel->getActiveSheet()->getStyle('B')->getAlignment()->setVertical(\PHPExcel_Style_Alignment::VERTICAL_CENTER);
        $objPHPExcel->getActiveSheet()->getStyle('D')->getAlignment()->setVertical(\PHPExcel_Style_Alignment::VERTICAL_CENTER);
        $objPHPExcel->getActiveSheet()->getStyle('E')->getAlignment()->setVertical(\PHPExcel_Style_Alignment::VERTICAL_CENTER);
        $objPHPExcel->getActiveSheet()->getStyle('F')->getAlignment()->setVertical(\PHPExcel_Style_Alignment::VERTICAL_CENTER);
        $fileName = '报价表';
        $date = date("Y-m-d",time());
        $fileName .= "_{$date}.xls";

        $fileName = iconv("utf-8", "gb2312", $fileName);
        //重命名表
        // $objPHPExcel->getActiveSheet()->setTitle('test');
        //设置活动单指数到第一个表,所以Excel打开这是第一个表
        $objPHPExcel->setActiveSheetIndex(0);
        header('Content-Type: application/vnd.ms-excel');
        header("Content-Disposition: attachment;filename=\"$fileName\"");
        header('Cache-Control: max-age=0');

        $objWriter = \PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
        $objWriter->save('php://output'); //文件通过浏览器下载

    }

}
