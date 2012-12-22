<?php
    $version = $_GET['version'];

    if(preg_match('/Tangram/', $version)){
        $demodir = 'F:/baidu/Tangram2/demos';
    }else{
        $demodir = 'F:/baidu/MagicCube/demos';
    }

    $components = array();
    $handler = opendir($demodir);

    $filename = readdir($handler);

    while($filename){
        if(is_dir($demodir.'/'.$filename) && $filename != '.' && $filename != '..'){
            array_push($components, $filename);
            
        }
        $filename = readdir($handler);
    }

    echo json_encode($components);
?>