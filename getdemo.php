<?php
    $demo = $_GET['demo'];
    $component = $_GET['component'];

    if(preg_match('/baidu/', $component)){
        $demo = 'F:/baidu/Tangram2/demos/'.$component.'/'.$demo;
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
        if(preg_match('/<script\s*(?:type="text\/javascript"){0,1}>([\s\S]*?)<\/script>/', $content, $matchs)){
            $javascript = $matchs[1];
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
        $demo = 'F:/baidu/MagicCube/demos/'.$component.'/'.$demo;
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
        if(preg_match_all('/<script\s*(?:type="text\/javascript"){0,1}>([\s\S]*?)<\/script>/', $content, $matchs)){
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