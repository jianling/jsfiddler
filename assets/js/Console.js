define(function(require, exports) {
    var baidu = require('Tangram').baidu;

    var logCount = 0;

    var init = function(){
        baidu('#J_editor .tab').insertHTML('beforeEnd', '<li target="console" id="J_consoleHandler">控制台</li>');
        baidu('#J_console').html('<div class="console-wrap"></div>');
        baidu('#J_consoleHandler').click(function(){
            baidu('#J_editor li').removeClass('current');
            baidu('.editor-item').hide();
            baidu('#J_console').show();
            baidu('#J_consoleHandler').addClass('current');
        });
    };

    var log = function(type, msg){
        baidu('#J_console .console-wrap').insertHTML('beforeEnd', '<p><span class="linenumber">' + (++logCount) + '</span><span class="' + type + '">' + type + '</span>' + msg + '</p>');
        baidu('#J_console').scrollTop(baidu('.console-wrap').height());
    };

    var clear = function(){
        logCount = 0;
        baidu('.console-wrap').html('');
    };

    exports.init = init;
    exports.log = log;
    exports.clear = clear;
});