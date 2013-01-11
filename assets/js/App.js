define(function(require, exports) {
    var baidu = require('Tangram').baidu;
    var Editor = require('Editor');
    var Tools = require('Tools');
    var Console = require('Console');
    var Helper = require('Helper');
    var ExternalResource = require('ExternalResource');

    var assets = ''; // 存放demo里面的link和script部分
    var appQuery = {}; // url后面的查询字段，用来自动跳转到某个demo

    // 判断环境
    var getComponentsURL = 'http://tangram.baidu.com/magic/?m=demos&a=getComponents';
    var getDemosURL = 'http://tangram.baidu.com/magic/?m=demos&a=getDemos';
    var getDemoURL = 'http://tangram.baidu.com/magic/?m=demos&a=getDemo';
    var demoAction = 'http://tangram.baidu.com/magic/?m=demos&a=demo';
    var shareAction = 'http://tangram.baidu.com/magic/?m=demos&a=saveShare';
    var getshareAction = 'http://tangram.baidu.com/magic/?m=demos&a=getShare';
    var appURL = 'http://tangram.baidu.com/jsfiddler';
    if(!/(tangram\.baidu\.com)/.test(window.location.href)){
        var getComponentsURL = 'http://tangram2.offline.bae.baidu.com/magic/?m=demos&a=getComponents';
        var getDemosURL = 'http://tangram2.offline.bae.baidu.com/magic/?m=demos&a=getDemos';
        var getDemoURL = 'http://tangram2.offline.bae.baidu.com/magic/?m=demos&a=getDemo';
        var demoAction = 'http://tangram2.offline.bae.baidu.com/magic/?m=demos&a=demo';
        var shareAction = 'http://tangram2.offline.bae.baidu.com/magic/?m=demos&a=saveShare';
        var getshareAction = 'http://tangram2.offline.bae.baidu.com/magic/?m=demos&a=getShare';
        var appURL = 'http://tangram2.offline.bae.baidu.com/jsfiddler';
    }

    if(/localhost/.test(window.location.search)){
        var getComponentsURL = './getcomponents.php?';
        var getDemosURL = './getdemos.php?';
        var getDemoURL = './getdemo.php?';
        var demoAction = './demo.php';
        var appURL = 'http://localhost/jsfiddler';
    }

    var initToolbar = function(){
        baidu('#J_run').click(function(){
            Console.clear();
            // onsubmit中有部分逻辑
            baidu('#J_demoForm').submit();
        });

        baidu('#J_runInNewWindow').click(function(){
            baidu('#J_demoForm').attr('target', '_blank');
            baidu('#J_demoForm').submit();
            baidu('#J_demoForm').attr('target', 'demo');
        });

        baidu('#J_reset').click(function(){
            Editor.reset();
        });

        baidu('#J_tidyup').click(function(){
            Editor.tidyup();
        });

        baidu('#J_share').click(function(){
            prepareSubmit();
            baidu.ajax(shareAction, {
                'async': false,
                'type': 'POST',
                'dataType': 'json',
                'data': {
                    'html': Editor.getEditor().html.getInputField().value,
                    'css': Editor.getEditor().css.getInputField().value,
                    'javascript': Editor.getEditor().javascript.getInputField().value,
                    'assets': baidu('#J_assets')[0].value,
                    'resource': baidu('#J_externalResources')[0].value,
                    'lib': baidu('#J_lib')[0].value,
                    'api': Tools.Base64.encode(baidu('#J_apiSelect').val()),
                    'demo': Tools.Base64.encode(baidu('#J_demoSelect').val()),
                    'language': baidu('#J_language')[0].value
                },
                'success': function(data){
                    // console.log(data.hash);
                    window.location.href = appURL + '?hash=' + data.hash;
                },
                'error': function(){
                    alert('分享失败，请重试！');
                }
            });
        });
    };

    var initSelect = function(){
        // Choose Framework
        baidu('#J_frameworkSelect').change(function(){
            var lib = baidu(this).val();

            if(lib == 'tangram'){
                baidu('#J_tip').hide();
            }else if(lib == 'magic'){
                baidu('#J_tip').show();
            }else{
                return;
            }
            baidu.ajax(getComponentsURL + '&lib=' + lib, {
                success: function(components){
                    var _options = [];
                    baidu.array(components).each(function(index, item) {
                        _options.push('<option value="' + item + '">' + item + '</option>');
                    });
                    baidu('#J_apiSelect').html(_options.join(''));
                    appQuery['api'] && baidu('#J_apiSelect').val(appQuery['api']) && (delete appQuery['api']);
                    baidu('#J_apiSelect').trigger('change');
                },
                dataType: 'jsonp'
            });
        });

        // Choose Demo
        baidu('#J_apiSelect').change(function(){
            var component = baidu(this).val();
            var lib = baidu('#J_frameworkSelect').val();
            baidu.ajax(getDemosURL + '&component=' + component + '&lib=' + lib, {
                success: function(demos){
                    var _options = [];
                    baidu.array(demos).each(function(index, item) {
                        _options.push('<option value="' + item + '">' + item + '</option>');
                    });
                    baidu('#J_demoSelect').html(_options.join(''));
                    if(appQuery['demo']){
                        baidu('#J_demoSelect').val(appQuery['demo']);
                        delete appQuery['demo'];
                    }else{
                        baidu('#J_demoSelect').val('quickStart.html');
                    }
                    baidu('#J_demoSelect').trigger('change');
                    
                },
                dataType: 'jsonp'
            });
        });

        baidu('#J_demoSelect').change(function(){
            var demo = baidu(this).val();
            var lib = baidu('#J_frameworkSelect').val();
            baidu.ajax(getDemoURL + '&demo=' + demo + '&component=' + baidu('#J_apiSelect').val() + '&lib=' + lib, {
                success: function(data){
                    if(appQuery['fromshare']){
                        delete appQuery['fromshare'];
                        Editor.setEditorData(appQuery);

                        appQuery['language'] == 'en-US' && (baidu('#J_languageEN')[0].checked = true);

                        var str = appQuery['resource'];
                        var patt = new RegExp('(http[^"]*)"',"g");
                        var result;
                        while ((result = patt.exec(str)) != null)  {
                            ExternalResource.addResource(result[1]);
                        }
                    }else{
                        Editor.setEditorData(data);
                    }
                    
                    // 清空控制台
                    Console.clear();
                    assets = data.assets;
                    baidu('#J_run').trigger('click');
                },
                dataType: 'jsonp'
            });
        });
    };

    var autoFixIframe = function(){
        baidu('#J_demoIframe').css('width', baidu(window).width() - 230 - 1);
    };

    var prepareSubmit = function(){
        Editor.synchronizeData();

        // var data = Editor.getEditorData();
        var resources = ExternalResource.getEnableResources();
        var imports = [];
        for(var i = 0; i < resources.length; i++){
            /.css$/.test(resources[i].url) ? imports.push('<link rel="stylesheet" type="text/css" href="' + resources[i].url + '" />') : 
                                         imports.push('<script type="text/javascript" src="' + resources[i].url + '"></script>');
        }

        baidu('#J_externalResources').val(imports.join(''));
        baidu('#J_lib').val(baidu('#J_frameworkSelect').val());

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

        var libField = baidu('#J_lib')[0];
        libField.value = Tools.Base64.encode(libField.value);

        var languageField = baidu('#J_language')[0];
        languageField.value = '';
        if(baidu('#J_languageEN')[0].checked){
            languageField.value = Tools.Base64.encode('en-US');
        }else{
            languageField.value = Tools.Base64.encode('zh-CN');
        }
    };

    exports.run = function(){
        autoFixIframe();
        baidu(window).resize(autoFixIframe);

        Editor.initEditor();
        initToolbar();
        initSelect();
        ExternalResource.init();
        Console.init();
        // 把Console挂到window下
        window.Console = Console;
        Helper.init();

        baidu('#J_demoForm').submit(function(){
            prepareSubmit();
        });

        // baidu.get('./getversions.php', function(versions){
        //     var tangrams = [], magics = [];
        //     baidu.array(versions).each(function(index, item) {
        //         /tangram/i.test(item) ? tangrams.push(item) : magics.push(item);
        //     });

        //     var _options = ['<option>Choose Framework</option>','<optgroup label="Tangram">'];
        //     baidu.array(tangrams).each(function(index, item) {
        //         _options.push('<option value="' + item + '">' + item + '</option>');
        //     });
        //     _options.push('</optgroup><optgroup label="Magic">');
        //     baidu.array(magics).each(function(index, item) {
        //         _options.push('<option value="' + item + '">' + item + '</option>');
        //     });
        //     _options.push('</optgroup>');

        //     baidu('#J_frameworkSelect').html(_options.join(''));
        // }, 'json');
        
        appQuery = Tools.queryToJson(window.location.href) || {};
        baidu('#J_demoForm').attr('action', demoAction);

        // 如果url中存在分享hash，直接取分享的代码
        if(/hash=/.test(location.href)){
            baidu.ajax(getshareAction + '&hash=' + appQuery['hash'], {
                success: function(data){
                    appQuery = data;
                    appQuery['fromshare'] = true;
                    appQuery['lib'] && baidu('#J_frameworkSelect').val(appQuery['lib']) && (delete appQuery['lib']);
                    baidu('#J_frameworkSelect').trigger('change');
                },
                dataType: 'jsonp'
            });
        }
        appQuery['lib'] && baidu('#J_frameworkSelect').val(appQuery['lib']);
        baidu('#J_frameworkSelect').trigger('change');
        
    };
});