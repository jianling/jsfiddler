define(function(require, exports) {
    var baidu = require('Tangram').baidu;

    var externalResources = [];

    var init = function(){
        baidu('#J_addExternalResource').click(function(){
            var url = baidu('#J_externalResource').val();
            if(!/(http:\/\/)/.test(url) || !/(\.css$|\.js$)/.test(url)){
                alert('请输入合法的资源地址!');
                return;
            }

            externalResources.push({
                'url': url,
                'enable': true
            });
            var _split = url.split('/');
            var filename = _split[_split.length - 1];
            var _resource = '<li resourceid="' + externalResources.length + '"><a class="resource-item" href="' + url + '" title="' + url + '" target="_blank">' + filename + '</a><a class="remove" title="删除该资源" action="remove"></a><a class="enable-toggler disable" title="启用该资源" action="enable"></a></li>';

            baidu('#J_externalResourcesList').insertHTML('beforeEnd', _resource);
            baidu('#J_externalResource').val('');
        });

        baidu('#J_externalResourcesList').click(function(e){
            baidu(e.target).parent().remove();
        });
    };

    exports.init = init;
});