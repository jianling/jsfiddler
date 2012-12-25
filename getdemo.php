<?php
    $demo = $_GET['demo'];
    $component = $_GET['component'];

    $currentdir =  dirname(__FILE__);
    $tangram_demo_dir = preg_replace('/jsfiddler/', '', $currentdir).'Tangram2/demos/';
    $magic_demo_dir = preg_replace('/jsfiddler/', '', $currentdir).'MagicCube/demos/';

    if(preg_match('/baidu/', $component)){
        $demo = $tangram_demo_dir.$component.'/'.$demo;
        $content = file_get_contents($demo);

        $html = '';
        if(preg_match('/<div[^>]*?>([\s\S]*)<\/div>/', $content, $matchs)){
            $html = $matchs[0];
        }

        $css = '';
        if(preg_match('/<style[^>]*?>([\s\S]*?)<\/style>/', $content, $matchs)){
            $css = $matchs[1];
        }

        $javascript = '';
        if(preg_match_all('/<script.*?>([\s\S]*?)<\/script>/', $content, $matchs)){
            foreach ($matchs[1] as $match) {
                $javascript .= $match;
            }
        }

        $assets = '';
        if(preg_match_all('/<link.*?\/>/', $content, $matchs)){
            foreach ($matchs[0] as $match) {
                $assets .= $match;
            }
        }
        if(preg_match_all('/<script.*?src.*?><\/script>/', $content, $matchs)){
            foreach ($matchs[0] as $match) {
                $assets .= $match;
            }
        }

        $demo = array(
                    'html' =>$html,
                    'css' =>$css,
                    'javascript' =>$javascript,
                    'assets' => $assets
                );

        echo json_encode($demo);

    }else{
        $demo = $magic_demo_dir.$component.'/'.$demo;
        $content = file_get_contents($demo);

        $html = '';
        if(preg_match('/<div[^>]*?>([\s\S]*)<\/div>/', $content, $matchs)){
            $html = $matchs[0];
        }

        $css = '';
        if(preg_match('/<style[^>]*?>([\s\S]*?)<\/style>/', $content, $matchs)){
            $css = $matchs[1];
        }

        $javascript = '';
        if(preg_match_all('/<script.*?>([\s\S]*?)<\/script>/', $content, $matchs)){
            foreach ($matchs[1] as $match) {
                $javascript .= $match;
            }
        }

        if(preg_match_all('/<link.*?>/', $content, $matchs)){
            foreach ($matchs[0] as $match) {
                $assets .= $match;
            }
        }
        if(preg_match_all('/<script.*?src.*?><\/script>/', $content, $matchs)){
            foreach ($matchs[0] as $match) {
                $assets .= $match;
            }
        }

        $demo = array(
                    'html' =>$html,
                    'css' =>$css,
                    'javascript' =>$javascript,
                    'assets' => $assets
                );

        echo json_encode($demo);
    }
?>