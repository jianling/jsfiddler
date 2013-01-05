<?php
    $indexTPL = file_get_contents('./index.tpl');
    $script_folder = preg_replace('/\w*?\.\w*?$/', '', $_SERVER['SCRIPT_NAME']);
    $server_base = 'http://'.$_SERVER['SERVER_NAME'].$script_folder;
    $jslib_base = 'http://'.$_SERVER['SERVER_NAME'].$script_folder.'assets/';
    $content = preg_replace(array('/\.\.\//', '/\.\//'), array($jslib_base, $server_base), $indexTPL);

    echo $content;
?>