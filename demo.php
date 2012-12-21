<?php
    $htmlcode = $_POST['html'];
    $csscode = $_POST['css'];
    $javascriptcode = $_POST['javascript'];
    $resource = $_POST['resource'];

    $htmlcode = preg_replace('/(\\\\"|\\\\\')/', '"', $htmlcode);
    $csscode = preg_replace('/(\\\\"|\\\\\')/', '"', $csscode);
    $javascriptcode = preg_replace('/(\\\\"|\\\\\')/', '"', $javascriptcode);
    $resource = preg_replace('/\\\\"/', '\'', $resource);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Tangram & Magic online Demos</title>
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