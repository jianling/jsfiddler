<?php
    $version = $_GET['version'];

    $currentdir =  dirname(__FILE__);
    
    if(preg_match('/Tangram/', $version)){
        $demodir = preg_replace('/jsfiddler/', '', $currentdir).'Tangram2/demos';
    }else{
        $demodir = preg_replace('/jsfiddler/', '', $currentdir).'MagicCube/demos';
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