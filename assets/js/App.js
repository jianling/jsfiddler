define(function(require, exports) {
    var baidu = require('Tangram').baidu;
    var Editor = require('Editor');
    var Tools = require('Tools');
    var ExternalResource = require('ExternalResource');

    var assets = ''; // 存放demo里面的link和script部分

    var initToolbar = function(){
        baidu('#J_run').click(function(){
            // onsubmit中有部分逻辑
            baidu('#J_demoForm').submit();
        });

        baidu('#J_reset').click(function(){
            Editor.reset();
        });

        baidu('#J_tidyup').click(function(){
            Editor.tidyup();
        });
    };

    var initSelect = function(){
        // Choose Framework
        baidu('#J_frameworkSelect').change(function(){
            var version = baidu(this).val();
            baidu.get('./getcomponents.php?version=' + version, function(components){
                var _options = [];
                baidu.array(components).each(function(index, item) {
                    _options.push('<option value="' + item + '">' + item + '</option>');
                });
                baidu('#J_apiSelect').html(_options.join(''));
                baidu('#J_apiSelect').trigger('change');
            }, 'json');
        });

        // Choose Demo
        baidu('#J_apiSelect').change(function(){
            var component = baidu(this).val();
            baidu.get('./getdemos.php?component=' + component, function(demos){
                var _options = [];
                baidu.array(demos).each(function(index, item) {
                    _options.push('<option value="' + item + '">' + item + '</option>');
                });
                baidu('#J_demoSelect').html(_options.join(''));
                baidu('#J_demoSelect').trigger('change');
            }, 'json');
        });

        baidu('#J_demoSelect').change(function(){
            var demo = baidu(this).val();
            baidu.get('./getdemo.php?demo=' + demo + '&component=' + baidu('#J_apiSelect').val(), function(data){
                Editor.setEditorData(data);
                assets = data.assets;
                baidu('#J_run').trigger('click');
            }, 'json');
        });
    };

    var autoFixIframe = function(){
        baidu('#J_demoIframe').css('width', baidu(window).width() - 230 - 1);
    };

    exports.run = function(){
        autoFixIframe();
        baidu(window).resize(autoFixIframe);

        Editor.initEditor();
        initToolbar();
        initSelect();
        ExternalResource.init();
        
        baidu('#J_demoForm').submit(function(){
            Editor.synchronizeData();

            // var data = Editor.getEditorData();
            var resources = ExternalResource.getEnableResources();
            var imports = [];
            for(var i = 0; i < resources.length; i++){
                /.css$/.test(resources[i].url) ? imports.push('<link rel="stylesheet" type="text/css" href="' + resources[i].url + '" />') : 
                                             imports.push('<script type="text/javascript" src="' + resources[i].url + '"></script>');
            }

            baidu('#J_externalResources').val(imports.join(''));
            baidu('#J_version').val(baidu('#J_frameworkSelect').val());

            // base64编码
            var htmlField = Editor.getEditor().html.getInputField();
            htmlField.value = Tools.Base64.encode(htmlField.value);

            var cssField = Editor.getEditor().css.getInputField();
            cssField.value = Tools.Base64.encode(cssField.value);
            
            var javascriptField = Editor.getEditor().javascript.getInputField();
            javascriptField.value = Tools.Base64.encode(javascriptField.value);

            var resourceField = baidu('#J_externalResources')[0];
            resourceField.value = Tools.Base64.encode(resourceField.value);

            var assetsField = baidu('#J_assets')[0];
            assetsField.value = Tools.Base64.encode(assets);

            var versionField = baidu('#J_version')[0];
            versionField.value = Tools.Base64.encode(versionField.value);
        });

        baidu.get('./getversions.php', function(versions){
            var tangrams = [], magics = [];
            baidu.array(versions).each(function(index, item) {
                /tangram/i.test(item) ? tangrams.push(item) : magics.push(item);
            });

            var _options = ['<option>Choose Framework</option>','<optgroup label="Tangram">'];
            baidu.array(tangrams).each(function(index, item) {
                _options.push('<option value="' + item + '">' + item + '</option>');
            });
            _options.push('</optgroup><optgroup label="Magic">');
            baidu.array(magics).each(function(index, item) {
                _options.push('<option value="' + item + '">' + item + '</option>');
            });
            _options.push('</optgroup>');

            baidu('#J_frameworkSelect').html(_options.join(''));
            // baidu('#J_frameworkSelect').trigger('change');
        }, 'json');
    };
});