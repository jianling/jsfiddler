<?php
    $component = $_GET['component'];
    $callback = $_GET['callback'];

    $currentdir =  dirname(__FILE__);
    $tangram_demo_dir = preg_replace('/jsfiddler/', '', $currentdir).'Tangram2/demos/';
    $magic_demo_dir = preg_replace('/jsfiddler/', '', $currentdir).'MagicCube/demos/';

    if(preg_match('/baidu/', $component)){
        $demodir = $tangram_demo_dir.$component;
    }else{
        $demodir = $magic_demo_dir.$component;
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

    echo $callback.'('.json_encode($demos).')';
?>