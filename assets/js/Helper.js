define(function(require, exports) {
    var baidu = require('Tangram').baidu;
    var Editor = require('Editor');

    var fullscreen = false;

    var header = baidu('.hd');
    var hideHeader = function(){
        var interval = setInterval(function(){
            header.height(header.height() - 1);
            header.height() < 1 && clearInterval(interval);
        }, 10);
    };


    var init = function(){
        // setTimeout(function(){
        //     hideHeader();
        // }, 5000);
    

        baidu('#J_editor').append('<span id="J_fullScreen"></span>');
        baidu('#J_fullScreen').click(function(){
            if(fullscreen){
                fullscreen = false;
                revertEditor();
                baidu(this).css('background-position', '0 -120px');
            }else{
                fullscreen = true;
                fullscreenEditor();
                baidu(this).css('background-position', '0 -140px');
            }
        });

        baidu(window).resize(function(){
            if(!fullscreen) return;

            fullscreenEditor();
        });
    };

    var fullscreenEditor = function(){
        window.scrollTo(0,0);
        baidu(window.document.body).css('overflow', 'hidden');
        var window_height = baidu(window).height();
        var editor_height = window_height - 30;
        var window_width = baidu(window).width();
        baidu('#J_editor').css('position', 'absolute')
                          .css('top', 0)
                          .css('left', 0)
                          .height(window_height)
                          .width(window_width);
        baidu('.editor-item').height(editor_height);

        var editors = Editor.getEditor();
        var htmlEditorEle = editors.html.getWrapperElement();
        var cssEditorEle = editors.css.getWrapperElement();
        var javascriptEditorEle = editors.javascript.getWrapperElement();
        baidu(htmlEditorEle).height(editor_height).width(window_width);
        baidu(cssEditorEle).height(editor_height).width(window_width);
        baidu(javascriptEditorEle).height(editor_height).width(window_width);
    };

    var revertEditor = function(){
        baidu(window.document.body).css('overflow', 'auto');
        baidu('#J_editor').css('position', 'relative')
                          .css('top', 'auto')
                          .css('left', 'auto')
                          .css('height', 'auto')
                          .width(baidu(window).width() - 230 - 1);
        baidu('.editor-item').height(300);

        var editorWidth = baidu(window).width() - 230 - 1;
        var editors = Editor.getEditor();
        var htmlEditorEle = editors.html.getWrapperElement();
        var cssEditorEle = editors.css.getWrapperElement();
        var javascriptEditorEle = editors.javascript.getWrapperElement();
        baidu(htmlEditorEle).height(300).width(editorWidth);
        baidu(cssEditorEle).height(300).width(editorWidth);
        baidu(javascriptEditorEle).height(300).width(editorWidth);
    };

    exports.init = init;
});