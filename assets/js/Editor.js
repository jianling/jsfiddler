define(function(require, exports) {
    var baidu = require('Tangram').baidu;
    var CodeMirror = require('CodeMirror').CodeMirror;
    require('xml');
    require('css');
    require('javascript');

    var htmlEditor,
        cssEditor,
        javascriptEditor,
        htmlEditorEle,
        cssEditorEle,
        javascriptEditorEle;

    var createEditor = function(){
        htmlEditor = CodeMirror(baidu('#J_htmlEditor')[0], {
            mode: 'xml',
            indentUnit: 4,
            lineNumbers: true,
            matchBrackets: true,
            extraKeys: {'Enter': 'newlineAndIndentContinueComment'}
        });
        cssEditor = CodeMirror(baidu('#J_cssEditor')[0], {
            mode: 'css',
            indentUnit: 4,
            lineNumbers: true,
            matchBrackets: true,
            extraKeys: {'Enter': 'newlineAndIndentContinueComment'}
        });
        javascriptEditor = CodeMirror(baidu('#J_javascriptEditor')[0], {
            mode: 'javascript',
            indentUnit: 4,
            lineNumbers: true,
            matchBrackets: true,
            extraKeys: {'Enter': 'newlineAndIndentContinueComment'}
        });

        htmlEditorEle = htmlEditor.getWrapperElement();
        cssEditorEle = cssEditor.getWrapperElement();
        javascriptEditorEle = javascriptEditor.getWrapperElement();
    };

    var autoFix = function(){
        var editorWidth = baidu(window).width() - 230 - 1;
        baidu(htmlEditorEle).height(300).width(editorWidth);
        baidu(cssEditorEle).height(300).width(editorWidth);
        baidu(javascriptEditorEle).height(300).width(editorWidth);
    };

    var initEditor = function(){
        createEditor();
        autoFix();
        baidu(window).resize(autoFix);
        initTab();
    };

    var initTab = function(){
        baidu('.editor-item').height(300).hide();
        baidu('#J_htmlEditor').show();
        baidu('#J_editor li').click(function(){
            var target = baidu(this).attr('target');
            var targetId = 'J_' + target + 'Editor';

            baidu('#J_editor li').removeClass('current');
            baidu(this).addClass('current');
            baidu('.editor-item').hide();
            baidu('#' + targetId).show();
        });
    };

    var getEditorData = function(){
        return {
            'html': htmlEditor.getValue(),
            'css': cssEditor.getValue(),
            'javascript': javascriptEditor.getValue()
        };
    };

    var reset = function(){
        htmlEditor.setValue(''),
        cssEditor.setValue(''),
        javascriptEditor.setValue('')
    };

    var tidyup = function(){
        // html
        var htmlLines = htmlEditor.lineCount();
        for(var i = 0; i< htmlLines; i++){
            htmlEditor.indentLine(i);
        }

        // css
        var cssLines = cssEditor.lineCount();
        for(var i = 0; i< cssLines; i++){
            cssEditor.indentLine(i);
        }

        // javascript
        var javascriptLines = javascriptEditor.lineCount();
        for(var i = 0; i< javascriptLines; i++){
            javascriptEditor.indentLine(i);
        }
    };

    exports.initEditor = initEditor;
    exports.getEditorData = getEditorData;
    exports.reset = reset;
    exports.tidyup = tidyup;
});