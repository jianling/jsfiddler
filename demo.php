<?php
    $htmlcode = base64_decode($_POST['html']);
    $csscode = base64_decode($_POST['css']);
    $javascriptcode = base64_decode($_POST['javascript']);
    $assets = base64_decode($_POST['assets']);
    $resource = base64_decode($_POST['resource']);
    $version = base64_decode($_POST['version']);

    $server_base = 'http://'.$_SERVER['SERVER_NAME'].$_SERVER['SCRIPT_NAME'];
    $server_base = preg_replace('/jsfiddler\/demo.php/', '', $server_base);

    if(preg_match('/Tangram/', $version)){
        $body_classname = 'tangram-demo';
        $framework_dir = $server_base.'Tangram2/';
    }else{
        $body_classname = 'magic-demo';
        $framework_dir = $server_base.'MagicCube/';
    }

    // $htmlcode = preg_replace(array('/\\\\"/', '/\\\\\'/'), array('"', "'"), $htmlcode);
    // $csscode = preg_replace(array('/\\\\"/', '/\\\\\'/', '/..\/..\//'), array('"', "'", $framework_dir), $csscode);
    $csscode = preg_replace('/\.\.\/\.\.\//', $framework_dir, $csscode);
    $javascriptcode = preg_replace('/\.\.\/\.\.\//', $framework_dir, $javascriptcode);
    // $assets = preg_replace(array('/\\\\"/', '/\\\\\'/', '/..\/..\//'), array('"', "'", $framework_dir), $assets);
    $assets = preg_replace('/\.\.\/\.\.\//', $framework_dir, $assets);
    // $resource = preg_replace('/(\\\\"|\\\\\')/', '\'', $resource);

    if(!$htmlcode && !$csscode && !$javascriptcode && !$assets && !$resource)
        return;
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Tangram & Magic online Demos</title>
        <?php echo $assets; ?>
        <?php echo $resource; ?>
        <link rel="stylesheet" type="text/css" href="./assets/css/demobeautify.css" />
        <style type="text/css">
            <?php echo $csscode; ?>
        </style>
    </head>
    <body class="<?php echo $body_classname; ?>">
        <?php echo $htmlcode; ?>
        <script type="text/javascript">
            <?php echo $javascriptcode; ?>
        </script>
    <body>
</html>