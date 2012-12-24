<?php
    set_time_limit(0);  // 修改为不限制超时时间(默认为30秒)
    require './PHPZip.class.php';

    //POST数据
    $curlPost = array(
        'onlyT2' => 1,
        'api' => 'baidu(),baidu.dom().size()',
        'download' => 1
    );
    //初始化
    $ch = curl_init("http://tangram.baidu.com/?m=frontData&a=code&containsImport=1");
    //设置
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);    //设置post方式提交数据
    curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);    //设置POST的数据
    //执行会话并获取内容
    $output = curl_exec($ch);

    file_put_contents('./tangram.zip', $output);

    //关闭curl会话
    curl_close($ch);

    $archive   = new PHPZip();
    $zipfile   = './tangram.zip';
    $savepath  = "./tangram";
    $array     = $archive->GetZipInnerFilesInfo($zipfile);
    $filecount = 0;
    $dircount  = 0;
    $failfiles = array();
    
    for($i=0; $i<count($array); $i++) {
        if($array[$i][folder] == 0){
            if($archive->unZip($zipfile, $savepath, $i) > 0){
                $filecount++;
            }else{
                $failfiles[] = $array[$i][filename];
            }
        }else{
            $dircount++;
        }
    }
    set_time_limit(30);
    printf("文件夹:%d&nbsp;&nbsp;&nbsp;&nbsp;解压文件:%d&nbsp;&nbsp;&nbsp;&nbsp;失败:%d<br>\r\n", $dircount, $filecount, count($failfiles));
    if(count($failfiles) > 0){
       foreach($failfiles as $file){
           printf("&middot;%s<br>\r\n", $file);
       }
    }
?>