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

        baidu(htmlEditor.getInputField()).attr('name', 'html');
        baidu(cssEditor.getInputField()).attr('name', 'css');
        baidu(javascriptEditor.getInputField()).attr('name', 'javascript');
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

            // 把编辑器都强刷一下，要不然可能不渲染
            htmlEditor.refresh();
            cssEditor.refresh();
            javascriptEditor.refresh();
        });
    };

    var setEditorData = function(data){
        htmlEditor.setValue(data.html);
        cssEditor.setValue(data.css);
        javascriptEditor.setValue(data.javascript);
        tidyup();
    };

    var getEditorData = function(){
        return {
            'html': htmlEditor.getValue(),
            'css': cssEditor.getValue(),
            'javascript': javascriptEditor.getValue()
        };
    };

    var synchronizeData = function(){
        htmlEditor.getInputField().value = htmlEditor.getValue();
        cssEditor.getInputField().value = cssEditor.getValue();
        javascriptEditor.getInputField().value = javascriptEditor.getValue();
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

    var getEditor = function(){
        return {
            'html': htmlEditor,
            'css': cssEditor,
            'javascript': javascriptEditor
        }
    }

    exports.initEditor = initEditor;
    exports.setEditorData = setEditorData;
    exports.getEditorData = getEditorData;
    exports.reset = reset;
    exports.tidyup = tidyup;
    exports.synchronizeData = synchronizeData;
    exports.getEditor = getEditor;
});