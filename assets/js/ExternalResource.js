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
            var _resource = '<li resourceid="' + (externalResources.length - 1) + '"><a class="resource-item" href="' + url + '" title="' + url + '" target="_blank">' + filename + '</a><a class="remove" title="删除该资源" action="remove"></a><a class="enable-toggler enable" title="启用该资源" action="enable"></a></li>';

            baidu('#J_externalResourcesList').insertHTML('beforeEnd', _resource);
            baidu('#J_externalResource').val('');
        });

        baidu('#J_externalResourcesList').click(function(e){
            var action = baidu(e.target).attr('action');
             var resourceid = baidu(e.target).parent().attr('resourceid');

            switch(action){
                case 'remove':
                    externalResources.splice(resourceid, 1);
                    baidu(e.target).parent().remove();
                    break;
                case 'enable':
                    if(externalResources[resourceid].enable){
                        externalResources[resourceid].enable = false;
                        baidu(e.target).removeClass('enable');
                        baidu(e.target).addClass('disable');
                    }else{
                        externalResources[resourceid].enable = true;
                        baidu(e.target).removeClass('disable');
                        baidu(e.target).addClass('enable');
                    }
                    break;
                default:
                    break;
            }
        });
    };

    var getEnableResources = function(){
        var _list = [];

        for(var i = 0; i < externalResources.length; i++){
            externalResources[i].enable && _list.push(externalResources[i]);
        }

        return _list;
    };

    exports.init = init;
    exports.getEnableResources = getEnableResources;
});