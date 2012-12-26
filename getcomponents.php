<?php
    $lib = $_GET['lib'];
    $callback = $_GET['callback'];

    $currentdir =  dirname(__FILE__);
    
    if(preg_match('/tangram/', $lib)){
        $demodir = preg_replace('/jsfiddler/', '', $currentdir).'Tangram2/demos';
    }else{
        $demodir = preg_replace('/jsfiddler/', '', $currentdir).'MagicCube/demos';
    }

    $components = array();
    $handler = opendir($demodir);

    $filename = readdir($handler);

    while($filename){
        if(is_dir($demodir.'/'.$filename) && $filename != '.' && $filename != '..' && !preg_match('/^_/', $filename) && $filename != 'common'){
            array_push($components, $filename);
            
        }
        $filename = readdir($handler);
    }

    echo $callback.'('.json_encode($components).')';
?>