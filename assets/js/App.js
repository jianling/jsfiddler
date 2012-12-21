define(function(require, exports) {
    var baidu = require('Tangram').baidu;
    var Editor = require('Editor');
    var ExternalResource = require('ExternalResource');

    var initToolbar = function(){
        baidu('#J_run').click(function(){
            var data = Editor.getEditorData();
            baidu('#J_demoForm').submit();
        });

        baidu('#J_reset').click(function(){
            Editor.reset();
        });

        baidu('#J_tidyup').click(function(){
            Editor.tidyup();
        });

        baidu('#J_demoForm').submit(function(){
            Editor.synchronizeData();
        });
    };

    var autoFixIframe = function(){
        baidu('#J_demoIframe').css('width', baidu(window).width() - 230 - 1);
    };

    exports.run = function(){
        Editor.initEditor();
        initToolbar();
        ExternalResource.init();
        autoFixIframe();
        baidu(window).resize(autoFixIframe);
    };
});