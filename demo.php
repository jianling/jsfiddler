<?php
    $htmlcode = $_POST['html'];
    $csscode = $_POST['css'];
    $javascriptcode = $_POST['javascript'];
    $assets = $_POST['assets'];
    $resource = $_POST['resource'];

    $htmlcode = preg_replace(array('/\\\\"/', '/\\\\\'/'), array('"', "'"), $htmlcode);
    $csscode = preg_replace(array('/\\\\"/', '/\\\\\'/', '/..\/..\//'), array('"', "'", 'http://localhost/MagicCube/'), $csscode);
    $javascriptcode = preg_replace(array('/\\\\"/', '/\\\\\'/', '/..\/..\//'), array('"', "'", 'http://localhost/MagicCube/'), $javascriptcode);
    $assets = preg_replace(array('/\\\\"/', '/\\\\\'/', '/..\/..\//'), array('"', "'", 'http://localhost/MagicCube/'), $assets);
    $resource = preg_replace('/(\\\\"|\\\\\')/', '\'', $resource);

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
        <style type="text/css">
            <?php echo $csscode; ?>
        </style>
    </head>
    <body>
        <?php echo $htmlcode; ?>
        <script type="text/javascript">
            <?php echo $javascriptcode; ?>
        </script>
    <body>
</html>