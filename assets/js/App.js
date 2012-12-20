define(function(require, exports) {
    var baidu = require('Tangram').baidu;
    var Editor = require('Editor');

    var initToolbar = function(){
        baidu('#J_run').click(function(){
            var data = Editor.getEditorData();
            console.log(data);
        });

        baidu('#J_reset').click(function(){
            Editor.reset();
        });

        baidu('#J_tidyup').click(function(){
            Editor.tidyup();
        });
    }

    exports.run = function(){
        Editor.initEditor();
        initToolbar();
    };
});