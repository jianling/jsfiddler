<?php
    $component = $_GET['component'];

    if(preg_match('/baidu/', $component)){
        $demodir = 'F:/baidu/Tangram2/demos/'.$component;
    }else{
        $demodir = 'F:/baidu/MagicCube/demos/'.$component;
    }

    $demos = array();
    $handler = opendir($demodir);

    $filename = readdir($handler);

    while($filename){
        if(is_file($demodir.'/'.$filename) && $filename != '.' && $filename != '..' && preg_match('/.html$/', $filename)){
            array_push($demos, $filename);
        }
        $filename = readdir($handler);
    }

    echo json_encode($demos);
?>