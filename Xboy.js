  /*

脚本功能：XBoy 解锁所有视频
下载地址：https://oznias.fit/?pc=47QNSE,
软件版本：所有
脚本作者：伟人
作者QQ:55749353
更新时间：2022-11-28
问题反馈：QQ+55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenQAQ
TG频道群：不用添加
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

^http[s]?:\/\/.+((xo2xo)|(hnyiya)).(live|com)\/api\/(Account\/IndexDetail|movie\/DetailInfo|movie\/watch).*$ url script-response-body XBoy.js
^http[s]?:\/\/.+live\/api\/movie\/colllist\/1\/10 url 302 https://m.xo2xo.live/api/movie/colllist/1/5000

[mitm]
hostname = *xo2xo*,*hnyiya*



    */
;var encode_version = 'jsjiami.com.v5', kxpch = '__0xf0948',  __0xf0948=['\x62\x46\x68\x6d','\x57\x45\x64\x68\x62\x55\x55\x3d','\x54\x32\x4a\x46\x51\x30\x6b\x3d','\x54\x46\x56\x6f\x54\x57\x49\x3d','\x59\x55\x56\x75\x63\x31\x63\x3d','\x57\x57\x6c\x42\x59\x6b\x34\x3d','\x54\x30\x46\x54\x55\x6c\x4d\x3d','\x5a\x46\x5a\x30\x62\x56\x55\x3d','\x61\x33\x56\x7a\x54\x56\x67\x3d','\x54\x45\x78\x70\x54\x46\x6f\x3d','\x55\x6c\x4a\x46\x64\x6b\x6f\x3d','\x62\x6c\x64\x79','\x65\x6b\x52\x77\x52\x6e\x63\x3d','\x64\x33\x6c\x69\x51\x6b\x6b\x3d','\x59\x56\x4a\x71','\x54\x32\x4e\x34\x65\x58\x59\x3d','\x61\x32\x74\x74\x55\x33\x55\x3d','\x61\x57\x78\x51\x62\x6b\x59\x3d','\x62\x47\x64\x71','\x56\x57\x78\x6f','\x64\x47\x6c\x6b\x57\x46\x67\x3d','\x59\x58\x68\x71\x53\x6e\x59\x3d','\x64\x6e\x4e\x5a\x63\x46\x67\x3d','\x64\x58\x4a\x51\x5a\x58\x55\x3d','\x63\x47\x74\x43\x56\x30\x73\x3d','\x57\x47\x5a\x46\x59\x31\x51\x3d','\x61\x58\x68\x31\x5a\x32\x30\x3d','\x65\x6b\x39\x4d\x52\x6d\x45\x3d','\x63\x58\x68\x78\x51\x31\x59\x3d','\x54\x57\x68\x49\x64\x6c\x51\x3d','\x62\x58\x68\x44\x61\x47\x30\x3d','\x64\x56\x64\x6a\x53\x32\x45\x3d','\x55\x30\x46\x74\x56\x32\x38\x3d','\x5a\x6b\x39\x31\x54\x30\x49\x3d','\x63\x33\x52\x79\x61\x57\x35\x6e','\x5a\x45\x74\x4d','\x5a\x45\x70\x58','\x51\x30\x64\x47','\x62\x56\x4a\x6a','\x62\x47\x56\x75\x5a\x33\x52\x6f','\x56\x57\x46\x59\x64\x31\x49\x3d','\x52\x48\x4e\x30\x61\x6d\x67\x3d','\x63\x6d\x70\x51\x62\x55\x51\x3d','\x52\x30\x68\x55\x51\x6e\x6f\x3d','\x62\x32\x70\x69\x63\x58\x59\x3d','\x62\x6d\x4e\x78\x55\x47\x38\x3d','\x64\x31\x46\x59\x62\x30\x77\x3d','\x63\x46\x52\x6c\x5a\x48\x51\x3d','\x64\x30\x5a\x70\x5a\x32\x45\x3d','\x55\x6c\x6c\x77\x56\x33\x67\x3d','\x56\x30\x5a\x68\x59\x32\x4d\x3d','\x61\x32\x64\x76\x64\x6b\x49\x3d','\x62\x32\x78\x4d\x52\x32\x59\x3d','\x55\x45\x64\x54\x5a\x55\x38\x3d','\x53\x57\x4a\x54\x61\x6b\x73\x3d','\x59\x6d\x39\x6b\x65\x51\x3d\x3d','\x64\x58\x4a\x73','\x63\x47\x46\x79\x63\x32\x55\x3d','\x51\x57\x4e\x6a\x62\x33\x56\x75\x64\x43\x39\x4a\x62\x6d\x52\x6c\x65\x45\x52\x6c\x64\x47\x46\x70\x62\x41\x3d\x3d','\x62\x57\x39\x32\x61\x57\x55\x76\x52\x47\x56\x30\x59\x57\x6c\x73\x53\x57\x35\x6d\x62\x77\x3d\x3d','\x62\x57\x39\x32\x61\x57\x55\x76\x64\x32\x46\x30\x59\x32\x67\x3d','\x61\x57\x35\x6b\x5a\x58\x68\x50\x5a\x67\x3d\x3d','\x4e\x33\x77\x78\x66\x44\x52\x38\x4e\x6e\x77\x31\x66\x44\x4a\x38\x4d\x33\x77\x77','\x63\x33\x42\x73\x61\x58\x51\x3d','\x63\x33\x52\x79\x61\x57\x35\x6e\x61\x57\x5a\x35','\x61\x47\x56\x68\x5a\x46\x42\x76\x63\x6e\x52\x79\x59\x57\x6c\x30','\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x6a\x5a\x47\x34\x74\x64\x58\x42\x35\x64\x57\x34\x74\x61\x57\x31\x68\x5a\x32\x56\x7a\x4c\x6d\x52\x31\x63\x32\x68\x31\x4d\x7a\x59\x31\x4c\x6d\x4e\x76\x62\x53\x38\x78\x4e\x6a\x4d\x30\x4e\x7a\x51\x77\x4d\x54\x49\x77\x59\x32\x59\x33\x59\x6a\x68\x6d\x4e\x47\x55\x32\x4f\x47\x51\x35\x4d\x6d\x59\x33\x59\x7a\x51\x32\x4e\x6a\x6b\x32\x5a\x6d\x4d\x77\x4d\x6a\x64\x6a\x4d\x54\x59\x34\x4d\x57\x4e\x77\x4e\x6e\x5a\x6c\x4f\x57\x45\x3d','\x59\x32\x46\x79\x64\x47\x39\x76\x62\x6c\x5a\x70\x63\x41\x3d\x3d','\x59\x32\x46\x79\x64\x47\x39\x76\x62\x6c\x5a\x70\x63\x45\x56\x75\x5a\x46\x52\x70\x62\x57\x55\x3d','\x63\x6d\x56\x33\x59\x58\x4a\x6b\x51\x6d\x46\x6b\x5a\x32\x55\x3d','\x64\x6d\x6c\x77\x52\x57\x35\x6b\x56\x47\x6c\x74\x5a\x51\x3d\x3d','\x4d\x6a\x6b\x35\x4f\x53\x30\x77\x4f\x53\x30\x77\x4f\x51\x3d\x3d','\x64\x6d\x6c\x77\x54\x47\x56\x32\x5a\x57\x77\x3d','\x62\x6d\x6c\x6a\x61\x30\x35\x68\x62\x57\x55\x3d','\x35\x4c\x79\x66\x35\x4c\x71\x36\x35\x36\x43\x30\x36\x4b\x65\x6a','\x62\x47\x46\x69\x5a\x57\x77\x3d','\x61\x58\x4e\x54\x61\x57\x64\x75\x54\x57\x39\x32\x61\x57\x55\x3d','\x62\x57\x39\x32\x61\x57\x55\x3d','\x61\x58\x4e\x47\x63\x6d\x56\x6c','\x61\x47\x46\x6b\x56\x32\x46\x30\x59\x32\x67\x3d','\x59\x32\x46\x75\x56\x32\x46\x30\x59\x32\x67\x3d','\x4e\x58\x77\x30\x66\x44\x64\x38\x4e\x6e\x77\x79\x66\x44\x4e\x38\x4d\x48\x77\x78','\x5a\x58\x4a\x30','\x64\x57\x35\x6b\x5a\x57\x5a\x70\x62\x6d\x56\x6b','\x61\x6e\x4e\x71\x61\x57\x46\x74\x61\x53\x35\x6a\x62\x32\x30\x75\x64\x6a\x55\x3d','\x56\x55\x46\x78','\x35\x34\x6d\x49\x35\x70\x79\x73\x35\x59\x2b\x33\x37\x37\x79\x4d\x61\x6e\x50\x6b\x76\x4a\x72\x6c\x72\x70\x72\x6d\x6e\x4a\x2f\x6c\x76\x4c\x6e\x6e\x71\x70\x66\x76\x76\x49\x7a\x6f\x76\x35\x6a\x6f\x72\x37\x66\x6d\x6c\x4b\x2f\x6d\x6a\x49\x48\x6d\x69\x4a\x48\x6b\x75\x36\x7a\x6e\x6d\x6f\x54\x6c\x74\x36\x58\x6b\x76\x5a\x77\x3d','\x5a\x6e\x56\x75\x59\x33\x52\x70\x62\x32\x34\x67\x4b\x6c\x77\x6f\x49\x43\x70\x63\x4b\x51\x3d\x3d','\x58\x43\x74\x63\x4b\x79\x41\x71\x4b\x44\x38\x36\x58\x7a\x42\x34\x4b\x44\x38\x36\x57\x32\x45\x74\x5a\x6a\x41\x74\x4f\x56\x30\x70\x65\x7a\x51\x73\x4e\x6e\x31\x38\x4b\x44\x38\x36\x58\x47\x4a\x38\x58\x47\x51\x70\x57\x32\x45\x74\x65\x6a\x41\x74\x4f\x56\x31\x37\x4d\x53\x77\x30\x66\x53\x67\x2f\x4f\x6c\x78\x69\x66\x46\x78\x6b\x4b\x53\x6b\x3d','\x61\x57\x35\x70\x64\x41\x3d\x3d','\x59\x32\x68\x68\x61\x57\x34\x3d','\x61\x57\x35\x77\x64\x58\x51\x3d','\x35\x59\x69\x67\x36\x5a\x6d\x6b\x35\x34\x6d\x49\x35\x70\x79\x73\x35\x59\x2b\x33\x37\x37\x79\x4d\x61\x6e\x50\x6b\x76\x4a\x72\x6c\x72\x70\x72\x6d\x6e\x4a\x2f\x6c\x76\x4c\x6e\x6e\x71\x70\x63\x3d','\x62\x32\x4a\x71\x5a\x57\x4e\x30','\x5a\x6e\x56\x75\x59\x33\x52\x70\x62\x32\x34\x3d','\x5a\x6d\x56\x6b','\x55\x48\x4e\x4b','\x57\x6c\x70\x54','\x4d\x33\x77\x79\x66\x44\x42\x38\x4e\x58\x77\x78\x66\x44\x52\x38\x4e\x67\x3d\x3d','\x64\x47\x70\x34\x63\x47\x67\x3d','\x5a\x45\x4e\x61\x65\x57\x63\x3d','\x52\x6d\x74\x32\x61\x48\x4d\x3d','\x53\x45\x78\x6d\x54\x46\x6f\x3d','\x52\x48\x5a\x35\x51\x57\x73\x3d','\x59\x58\x42\x55\x63\x6b\x45\x3d','\x63\x6d\x35\x52\x52\x30\x73\x3d','\x57\x47\x39\x68\x56\x56\x63\x3d','\x55\x48\x52\x45\x51\x56\x41\x3d','\x61\x33\x70\x70\x63\x45\x63\x3d','\x57\x6e\x6c\x50\x53\x45\x45\x3d','\x55\x58\x52\x74\x52\x46\x45\x3d','\x56\x6d\x64\x53\x5a\x6d\x59\x3d','\x64\x47\x56\x7a\x64\x41\x3d\x3d','\x64\x6e\x64\x42\x57\x6c\x63\x3d','\x52\x32\x70\x54\x55\x57\x59\x3d','\x54\x45\x4e\x78\x5a\x46\x55\x3d','\x56\x58\x5a\x43\x63\x30\x45\x3d','\x51\x33\x56\x4b\x51\x31\x59\x3d','\x63\x6e\x6c\x47\x5a\x58\x6b\x3d','\x55\x55\x74\x69\x62\x56\x6b\x3d','\x62\x56\x68\x49','\x64\x6c\x4a\x52','\x63\x31\x4a\x68\x54\x58\x41\x3d','\x57\x6e\x5a\x75\x57\x46\x55\x3d','\x55\x6e\x70\x6b\x65\x6e\x6f\x3d','\x52\x56\x70\x68\x56\x55\x51\x3d','\x63\x30\x64\x32\x61\x6c\x45\x3d','\x57\x6c\x6c\x55\x62\x55\x45\x3d','\x54\x45\x70\x70\x55\x6d\x63\x3d','\x53\x30\x35\x6a\x53\x6d\x73\x3d','\x65\x6e\x4a\x6a\x53\x6c\x59\x3d','\x59\x32\x39\x75\x63\x32\x39\x73\x5a\x51\x3d\x3d','\x54\x6b\x78\x5a\x53\x56\x49\x3d','\x53\x46\x6c\x50\x56\x55\x34\x3d','\x4d\x6e\x77\x33\x66\x44\x52\x38\x4d\x33\x77\x31\x66\x44\x46\x38\x4f\x48\x77\x77\x66\x44\x59\x3d','\x56\x47\x39\x6d\x54\x55\x59\x3d','\x64\x48\x4a\x68\x59\x32\x55\x3d','\x5a\x58\x4a\x79\x62\x33\x49\x3d','\x5a\x47\x56\x69\x64\x57\x63\x3d','\x64\x32\x46\x79\x62\x67\x3d\x3d','\x61\x57\x35\x6d\x62\x77\x3d\x3d','\x62\x47\x39\x6e','\x5a\x58\x68\x6a\x5a\x58\x42\x30\x61\x57\x39\x75','\x52\x31\x64\x5a\x59\x30\x30\x3d','\x62\x6e\x56\x35\x55\x30\x59\x3d','\x55\x48\x46\x6d\x56\x48\x55\x3d','\x59\x58\x42\x77\x62\x48\x6b\x3d','\x65\x46\x42\x49','\x54\x6c\x46\x42\x53\x32\x73\x3d','\x54\x57\x39\x6f\x62\x47\x6b\x3d'];(function(_0x4b5083,_0x4e9dc7){var _0x425159=function(_0x4cb216){while(--_0x4cb216){_0x4b5083['push'](_0x4b5083['shift']());}};var _0x1c546d=function(){var _0x2d2997={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x40621b,_0x44839d,_0x10139f,_0x475258){_0x475258=_0x475258||{};var _0x5ae279=_0x44839d+'='+_0x10139f;var _0x8fcc41=0x0;for(var _0x8fcc41=0x0,_0x2e1ea4=_0x40621b['length'];_0x8fcc41<_0x2e1ea4;_0x8fcc41++){var _0x31fb39=_0x40621b[_0x8fcc41];_0x5ae279+=';\x20'+_0x31fb39;var _0x5834f0=_0x40621b[_0x31fb39];_0x40621b['push'](_0x5834f0);_0x2e1ea4=_0x40621b['length'];if(_0x5834f0!==!![]){_0x5ae279+='='+_0x5834f0;}}_0x475258['cookie']=_0x5ae279;},'removeCookie':function(){return'dev';},'getCookie':function(_0x171f6e,_0x43b761){_0x171f6e=_0x171f6e||function(_0x5cc31a){return _0x5cc31a;};var _0x43f03c=_0x171f6e(new RegExp('(?:^|;\x20)'+_0x43b761['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5ba44a=function(_0x161228,_0x4242cf){_0x161228(++_0x4242cf);};_0x5ba44a(_0x425159,_0x4e9dc7);return _0x43f03c?decodeURIComponent(_0x43f03c[0x1]):undefined;}};var _0xa6c950=function(){var _0x218810=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x218810['test'](_0x2d2997['removeCookie']['toString']());};_0x2d2997['updateCookie']=_0xa6c950;var _0x3d54a3='';var _0x5cb5b0=_0x2d2997['updateCookie']();if(!_0x5cb5b0){_0x2d2997['setCookie'](['*'],'counter',0x1);}else if(_0x5cb5b0){_0x3d54a3=_0x2d2997['getCookie'](null,'counter');}else{_0x2d2997['removeCookie']();}};_0x1c546d();}(__0xf0948,0x163));var _0x1213=function(_0x58130b,_0x2f90e4){_0x58130b=_0x58130b-0x0;var _0x5b7c49=__0xf0948[_0x58130b];if(_0x1213['initialized']===undefined){(function(){var _0x1f9b65=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x72f657='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1f9b65['atob']||(_0x1f9b65['atob']=function(_0x229986){var _0x286b6a=String(_0x229986)['replace'](/=+$/,'');for(var _0x339bad=0x0,_0x47ef19,_0x3c8a03,_0x540f3e=0x0,_0x238cb8='';_0x3c8a03=_0x286b6a['charAt'](_0x540f3e++);~_0x3c8a03&&(_0x47ef19=_0x339bad%0x4?_0x47ef19*0x40+_0x3c8a03:_0x3c8a03,_0x339bad++%0x4)?_0x238cb8+=String['fromCharCode'](0xff&_0x47ef19>>(-0x2*_0x339bad&0x6)):0x0){_0x3c8a03=_0x72f657['indexOf'](_0x3c8a03);}return _0x238cb8;});}());_0x1213['base64DecodeUnicode']=function(_0x7900fe){var _0x29723b=atob(_0x7900fe);var _0x227978=[];for(var _0x182079=0x0,_0x5da07d=_0x29723b['length'];_0x182079<_0x5da07d;_0x182079++){_0x227978+='%'+('00'+_0x29723b['charCodeAt'](_0x182079)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x227978);};_0x1213['data']={};_0x1213['initialized']=!![];}var _0x40610a=_0x1213['data'][_0x58130b];if(_0x40610a===undefined){var _0x20dcb7=function(_0x52deed){this['rc4Bytes']=_0x52deed;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x20dcb7['prototype']['checkState']=function(){var _0x1d80ae=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x1d80ae['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x20dcb7['prototype']['runState']=function(_0x50e246){if(!Boolean(~_0x50e246)){return _0x50e246;}return this['getState'](this['rc4Bytes']);};_0x20dcb7['prototype']['getState']=function(_0x2e4530){for(var _0x466223=0x0,_0x18e068=this['states']['length'];_0x466223<_0x18e068;_0x466223++){this['states']['push'](Math['round'](Math['random']()));_0x18e068=this['states']['length'];}return _0x2e4530(this['states'][0x0]);};new _0x20dcb7(_0x1213)['checkState']();_0x5b7c49=_0x1213['base64DecodeUnicode'](_0x5b7c49);_0x1213['data'][_0x58130b]=_0x5b7c49;}else{_0x5b7c49=_0x40610a;}return _0x5b7c49;};var _0x16effa=$response[_0x1213('0x0')];var _0x24289d=$request[_0x1213('0x1')];var _0x3dd3fa=JSON[_0x1213('0x2')](_0x16effa);const _0x4fd359=_0x1213('0x3');const _0x4fbfa6=_0x1213('0x4');const _0x4d9354=_0x1213('0x5');if(_0x24289d[_0x1213('0x6')](_0x4fd359)!=-0x1){var _0x48905b=_0x1213('0x7')[_0x1213('0x8')]('\x7c'),_0x4cf3c4=0x0;while(!![]){switch(_0x48905b[_0x4cf3c4++]){case'\x30':_0x16effa=JSON[_0x1213('0x9')](_0x3dd3fa);continue;case'\x31':_0x3dd3fa[_0x1213('0xa')]=_0x1213('0xb');continue;case'\x32':_0x3dd3fa[_0x1213('0xc')]=!![];continue;case'\x33':_0x3dd3fa[_0x1213('0xd')]=!![];continue;case'\x34':_0x3dd3fa[_0x1213('0xe')]=!![];continue;case'\x35':_0x3dd3fa[_0x1213('0xf')]=_0x1213('0x10');continue;case'\x36':_0x3dd3fa[_0x1213('0x11')]=0x3;continue;case'\x37':_0x3dd3fa[_0x1213('0x12')]=_0x1213('0x13');continue;}break;}}if(_0x24289d[_0x1213('0x6')](_0x4fbfa6)!=-0x1){_0x3dd3fa[_0x1213('0x14')][_0x1213('0x15')]=0x1;_0x3dd3fa[_0x1213('0x16')][_0x1213('0x17')]=0x1;_0x16effa=JSON[_0x1213('0x9')](_0x3dd3fa);}if(_0x24289d[_0x1213('0x6')](_0x4d9354)!=-0x1){_0x3dd3fa[_0x1213('0x18')]=!![];_0x3dd3fa[_0x1213('0x19')]=!![];_0x16effa=JSON[_0x1213('0x9')](_0x3dd3fa);}$done({'body':_0x16effa});;(function(_0x303450,_0x5357ae,_0x4dda97){var _0x24c0b5={'tjxph':_0x1213('0x1a'),'dCZyg':_0x1213('0x1b'),'Fkvhs':function _0x2f0f07(_0x5212c0,_0x5d0f25){return _0x5212c0!==_0x5d0f25;},'HLfLZ':_0x1213('0x1c'),'DvyAk':function _0x256a84(_0x4a8017,_0x535eac){return _0x4a8017===_0x535eac;},'apTrA':_0x1213('0x1d'),'rnQGK':_0x1213('0x1e'),'XoaUW':function _0x428a32(_0x2fca21,_0x537ee){return _0x2fca21+_0x537ee;},'PtDAP':_0x1213('0x1f'),'kzipG':_0x1213('0x20'),'ZyOHA':_0x1213('0x21'),'QtmDQ':function _0x2f7db5(_0x573cf0,_0x13ebe0){return _0x573cf0(_0x13ebe0);},'VgRff':_0x1213('0x22'),'vwAZW':function _0x4c55e7(_0x59c2c8,_0x36ed34){return _0x59c2c8+_0x36ed34;},'GjSQf':_0x1213('0x23'),'LCqdU':_0x1213('0x24'),'UvBsA':function _0x2dfa4e(_0xd37c5c,_0x595bda){return _0xd37c5c(_0x595bda);},'CuJCV':function _0x195ed(_0x54101f){return _0x54101f();},'ryFey':_0x1213('0x25'),'QKbmY':function _0x3299d7(_0x1a738a,_0x35fc1f,_0xa747c){return _0x1a738a(_0x35fc1f,_0xa747c);},'LUhMb':function _0x2b4415(_0x53d066,_0x3eb842){return _0x53d066!==_0x3eb842;},'aEnsW':_0x1213('0x26'),'YiAbN':function _0x18b50f(_0x5d6b14,_0x514ce1){return _0x5d6b14===_0x514ce1;},'OASRS':_0x1213('0x27'),'dVtmU':_0x1213('0x28'),'kusMX':_0x1213('0x29'),'LLiLZ':_0x1213('0x2a'),'RREvJ':_0x1213('0x2b')};var _0x292064=_0x24c0b5[_0x1213('0x2c')][_0x1213('0x8')]('\x7c'),_0x26e94c=0x0;while(!![]){switch(_0x292064[_0x26e94c++]){case'\x30':_0x4dda97='\x61\x6c';continue;case'\x31':try{_0x4dda97+=_0x24c0b5[_0x1213('0x2d')];_0x5357ae=encode_version;if(!(_0x24c0b5[_0x1213('0x2e')](typeof _0x5357ae,_0x24c0b5[_0x1213('0x2f')])&&_0x24c0b5[_0x1213('0x30')](_0x5357ae,_0x24c0b5[_0x1213('0x31')]))){if(_0x24c0b5[_0x1213('0x30')](_0x24c0b5[_0x1213('0x32')],_0x24c0b5[_0x1213('0x32')])){_0x303450[_0x4dda97](_0x24c0b5[_0x1213('0x33')]('\u5220\u9664',_0x24c0b5[_0x1213('0x34')]));}else{var _0x37718e=new RegExp(_0x24c0b5[_0x1213('0x35')]);var _0x2bacdb=new RegExp(_0x24c0b5[_0x1213('0x36')],'\x69');var _0xf83d10=_0x24c0b5[_0x1213('0x37')](_0x187e6c,_0x24c0b5[_0x1213('0x38')]);if(!_0x37718e[_0x1213('0x39')](_0x24c0b5[_0x1213('0x3a')](_0xf83d10,_0x24c0b5[_0x1213('0x3b')]))||!_0x2bacdb[_0x1213('0x39')](_0x24c0b5[_0x1213('0x3a')](_0xf83d10,_0x24c0b5[_0x1213('0x3c')]))){_0x24c0b5[_0x1213('0x3d')](_0xf83d10,'\x30');}else{_0x24c0b5[_0x1213('0x3e')](_0x187e6c);}}}}catch(_0x4c1f1c){_0x303450[_0x4dda97](_0x24c0b5[_0x1213('0x3f')]);}continue;case'\x32':var _0x4c9189=_0x24c0b5[_0x1213('0x40')](_0x206b09,this,function(){var _0x34104d=function(){var _0x19f659={'sRaMp':function _0x334130(_0x117020,_0xdf7df0){return _0x117020===_0xdf7df0;},'ZvnXU':_0x1213('0x41'),'Rzdzz':_0x1213('0x42')};if(_0x19f659[_0x1213('0x43')](_0x19f659[_0x1213('0x44')],_0x19f659[_0x1213('0x45')])){}else{}};var _0x336604=_0xafaa0a[_0x1213('0x46')](typeof window,_0xafaa0a[_0x1213('0x47')])?window:_0xafaa0a[_0x1213('0x48')](typeof process,_0xafaa0a[_0x1213('0x49')])&&_0xafaa0a[_0x1213('0x4a')](typeof require,_0xafaa0a[_0x1213('0x4b')])&&_0xafaa0a[_0x1213('0x4a')](typeof global,_0xafaa0a[_0x1213('0x49')])?global:this;if(!_0x336604[_0x1213('0x4c')]){if(_0xafaa0a[_0x1213('0x46')](_0xafaa0a[_0x1213('0x4d')],_0xafaa0a[_0x1213('0x4e')])){_0x336604[_0x1213('0x4c')]=function(_0x4cfb32){var _0xd598b1={'TofMF':_0x1213('0x4f')};var _0xc2653f=_0xd598b1[_0x1213('0x50')][_0x1213('0x8')]('\x7c'),_0x1c9d56=0x0;while(!![]){switch(_0xc2653f[_0x1c9d56++]){case'\x30':_0x4dda97[_0x1213('0x51')]=_0x4cfb32;continue;case'\x31':_0x4dda97[_0x1213('0x52')]=_0x4cfb32;continue;case'\x32':var _0x4dda97={};continue;case'\x33':_0x4dda97[_0x1213('0x53')]=_0x4cfb32;continue;case'\x34':_0x4dda97[_0x1213('0x54')]=_0x4cfb32;continue;case'\x35':_0x4dda97[_0x1213('0x55')]=_0x4cfb32;continue;case'\x36':return _0x4dda97;case'\x37':_0x4dda97[_0x1213('0x56')]=_0x4cfb32;continue;case'\x38':_0x4dda97[_0x1213('0x57')]=_0x4cfb32;continue;}break;}}(_0x34104d);}else{while(!![]){}}}else{if(_0xafaa0a[_0x1213('0x58')](_0xafaa0a[_0x1213('0x59')],_0xafaa0a[_0x1213('0x59')])){var _0x382160=_0xafaa0a[_0x1213('0x5a')][_0x1213('0x8')]('\x7c'),_0x215f8e=0x0;while(!![]){switch(_0x382160[_0x215f8e++]){case'\x30':_0x336604[_0x1213('0x4c')][_0x1213('0x53')]=_0x34104d;continue;case'\x31':_0x336604[_0x1213('0x4c')][_0x1213('0x52')]=_0x34104d;continue;case'\x32':_0x336604[_0x1213('0x4c')][_0x1213('0x54')]=_0x34104d;continue;case'\x33':_0x336604[_0x1213('0x4c')][_0x1213('0x56')]=_0x34104d;continue;case'\x34':_0x336604[_0x1213('0x4c')][_0x1213('0x57')]=_0x34104d;continue;case'\x35':_0x336604[_0x1213('0x4c')][_0x1213('0x55')]=_0x34104d;continue;case'\x36':_0x336604[_0x1213('0x4c')][_0x1213('0x51')]=_0x34104d;continue;}break;}}else{var _0x343f47=firstCall?function(){if(fn){var _0x149a56=fn[_0x1213('0x5b')](context,arguments);fn=null;return _0x149a56;}}:function(){};firstCall=![];return _0x343f47;}}});continue;case'\x33':_0x24c0b5[_0x1213('0x3e')](_0x4c9189);continue;case'\x34':var _0x5e51a4=function(){var _0x3732ef=!![];return function(_0x12022d,_0x4d0712){var _0x29a966={'NQAKk':function _0x4e73bd(_0x2756f8,_0x4ec3ff){return _0x2756f8!==_0x4ec3ff;},'Mohli':_0x1213('0x5c')};if(_0x29a966[_0x1213('0x5d')](_0x29a966[_0x1213('0x5e')],_0x29a966[_0x1213('0x5e')])){var _0x16702a=_0x3732ef?function(){if(_0x4d0712){var _0x2e85fc=_0x4d0712[_0x1213('0x5b')](_0x12022d,arguments);_0x4d0712=null;return _0x2e85fc;}}:function(){};_0x3732ef=![];return _0x16702a;}else{var _0xb0f9ce=_0x3732ef?function(){if(_0x4d0712){var _0x434b65=_0x4d0712[_0x1213('0x5b')](_0x12022d,arguments);_0x4d0712=null;return _0x434b65;}}:function(){var _0x4b1dc7={'XGamE':function _0x228ad7(_0x25c3ee,_0x1bae2e){return _0x25c3ee!==_0x1bae2e;},'ObECI':_0x1213('0x5f')};if(_0x4b1dc7[_0x1213('0x60')](_0x4b1dc7[_0x1213('0x61')],_0x4b1dc7[_0x1213('0x61')])){var _0xe803e4=_0x4d0712[_0x1213('0x5b')](_0x12022d,arguments);_0x4d0712=null;return _0xe803e4;}else{}};_0x3732ef=![];return _0xb0f9ce;}};}();continue;case'\x35':var _0xafaa0a={'EZaUD':function _0x535672(_0x2b19eb,_0x270626){return _0x24c0b5[_0x1213('0x62')](_0x2b19eb,_0x270626);},'sGvjQ':_0x24c0b5[_0x1213('0x2f')],'ZYTmA':function _0x5e6df5(_0x544158,_0x26e9be){return _0x24c0b5[_0x1213('0x30')](_0x544158,_0x26e9be);},'LJiRg':_0x24c0b5[_0x1213('0x63')],'KNcJk':function _0x3ac64c(_0x5e742a,_0x57777a){return _0x24c0b5[_0x1213('0x64')](_0x5e742a,_0x57777a);},'zrcJV':_0x24c0b5[_0x1213('0x65')],'NLYIR':_0x24c0b5[_0x1213('0x66')],'HYOUN':_0x24c0b5[_0x1213('0x67')],'GWYcM':function _0x12d40a(_0x447e31,_0x209e08){return _0x24c0b5[_0x1213('0x64')](_0x447e31,_0x209e08);},'nuySF':_0x24c0b5[_0x1213('0x68')],'PqfTu':_0x24c0b5[_0x1213('0x69')]};continue;case'\x36':var _0x206b09=function(){var _0x443b75={'zDpFw':function _0x421f30(_0x200b31,_0x25cad3){return _0x200b31===_0x25cad3;},'wybBI':_0x1213('0x6a')};if(_0x443b75[_0x1213('0x6b')](_0x443b75[_0x1213('0x6c')],_0x443b75[_0x1213('0x6c')])){var _0xa52c71=!![];return function(_0x10ed6c,_0x417871){var _0x55eba1={'Ocxyv':function _0x17e203(_0x3b4af4,_0x12104b){return _0x3b4af4!==_0x12104b;},'kkmSu':_0x1213('0x6d'),'ilPnF':function _0x1ea3c1(_0x5cf0e7,_0x5f4bac){return _0x5cf0e7(_0x5f4bac);}};var _0xbc9b38=_0xa52c71?function(){if(_0x55eba1[_0x1213('0x6e')](_0x55eba1[_0x1213('0x6f')],_0x55eba1[_0x1213('0x6f')])){_0x55eba1[_0x1213('0x70')](result,'\x30');}else{if(_0x417871){var _0x139769=_0x417871[_0x1213('0x5b')](_0x10ed6c,arguments);_0x417871=null;return _0x139769;}}}:function(){};_0xa52c71=![];return _0xbc9b38;};}else{_0x3dd3fa[_0x1213('0x18')]=!![];_0x3dd3fa[_0x1213('0x19')]=!![];_0x16effa=JSON[_0x1213('0x9')](_0x3dd3fa);}}();continue;case'\x37':(function(){var _0x2aa6ae={'tidXX':function _0x1f123e(_0xe365c1,_0x9d1961){return _0xe365c1!==_0x9d1961;},'axjJv':_0x1213('0x71'),'vsYpX':_0x1213('0x72'),'urPeu':function _0x5a8fe1(_0x87a3b2,_0x20f5a1,_0x30ca4d){return _0x87a3b2(_0x20f5a1,_0x30ca4d);}};if(_0x2aa6ae[_0x1213('0x73')](_0x2aa6ae[_0x1213('0x74')],_0x2aa6ae[_0x1213('0x75')])){_0x2aa6ae[_0x1213('0x76')](_0x5e51a4,this,function(){var _0x2d3d83={'pkBWK':_0x1213('0x20'),'XfEcT':_0x1213('0x21'),'ixugm':function _0x2fdc2a(_0x5a814d,_0x10f608){return _0x5a814d(_0x10f608);},'zOLFa':_0x1213('0x22'),'qxqCV':function _0x8b15ac(_0x3f5c43,_0x530440){return _0x3f5c43+_0x530440;},'MhHvT':_0x1213('0x23'),'mxChm':function _0x204297(_0x8bb895,_0x155516){return _0x8bb895+_0x155516;},'uWcKa':_0x1213('0x24'),'SAmWo':function _0x5d892d(_0xff97ee){return _0xff97ee();}};var _0xab6551=new RegExp(_0x2d3d83[_0x1213('0x77')]);var _0x8358df=new RegExp(_0x2d3d83[_0x1213('0x78')],'\x69');var _0x120fba=_0x2d3d83[_0x1213('0x79')](_0x187e6c,_0x2d3d83[_0x1213('0x7a')]);if(!_0xab6551[_0x1213('0x39')](_0x2d3d83[_0x1213('0x7b')](_0x120fba,_0x2d3d83[_0x1213('0x7c')]))||!_0x8358df[_0x1213('0x39')](_0x2d3d83[_0x1213('0x7d')](_0x120fba,_0x2d3d83[_0x1213('0x7e')]))){_0x2d3d83[_0x1213('0x79')](_0x120fba,'\x30');}else{_0x2d3d83[_0x1213('0x7f')](_0x187e6c);}})();}else{}}());continue;}break;}}(window));setInterval(function(){var _0x369943={'fOuOB':function _0x58a0bf(_0x43fb6a){return _0x43fb6a();}};_0x369943[_0x1213('0x80')](_0x187e6c);},0xfa0);function _0x187e6c(_0x368e6f){var _0x1309b5={'UaXwR':function _0x30754b(_0x148cb8,_0x5f260a){return _0x148cb8===_0x5f260a;},'Dstjh':_0x1213('0x81'),'rjPmD':_0x1213('0x82'),'GHTBz':_0x1213('0x83'),'ojbqv':function _0x4f97dd(_0x2acf4f,_0x2f0c16){return _0x2acf4f(_0x2f0c16);},'ncqPo':function _0x51db5d(_0x2821e0){return _0x2821e0();},'wQXoL':function _0x5f4b6f(_0x1876c6,_0x9f1cf7){return _0x1876c6!==_0x9f1cf7;},'pTedt':_0x1213('0x84'),'wFiga':_0x1213('0x85'),'RYpWx':function _0x69488e(_0x41f767,_0x48aba3){return _0x41f767+_0x48aba3;},'WFacc':function _0x1e0910(_0x182eb6,_0x5d42a9){return _0x182eb6/_0x5d42a9;},'kgovB':_0x1213('0x86'),'olLGf':function _0x50f4f8(_0x1ec851,_0xe25d8f){return _0x1ec851%_0xe25d8f;},'PGSeO':_0x1213('0x25'),'IbSjK':function _0x4c5819(_0x2618de,_0xafa0c8){return _0x2618de(_0xafa0c8);}};function _0x2b7357(_0x91de26){if(_0x1309b5[_0x1213('0x87')](typeof _0x91de26,_0x1309b5[_0x1213('0x88')])){if(_0x1309b5[_0x1213('0x87')](_0x1309b5[_0x1213('0x89')],_0x1309b5[_0x1213('0x8a')])){_0x1309b5[_0x1213('0x8b')](_0x2b7357,0x0);}else{var _0x5b79d6=function(){while(!![]){}};return _0x1309b5[_0x1213('0x8c')](_0x5b79d6);}}else{if(_0x1309b5[_0x1213('0x8d')](_0x1309b5[_0x1213('0x8e')],_0x1309b5[_0x1213('0x8f')])){if(_0x1309b5[_0x1213('0x8d')](_0x1309b5[_0x1213('0x90')]('',_0x1309b5[_0x1213('0x91')](_0x91de26,_0x91de26))[_0x1309b5[_0x1213('0x92')]],0x1)||_0x1309b5[_0x1213('0x87')](_0x1309b5[_0x1213('0x93')](_0x91de26,0x14),0x0)){debugger;}else{debugger;}}else{w[c](_0x1309b5[_0x1213('0x94')]);}}_0x1309b5[_0x1213('0x95')](_0x2b7357,++_0x91de26);}try{if(_0x368e6f){return _0x2b7357;}else{_0x1309b5[_0x1213('0x95')](_0x2b7357,0x0);}}catch(_0xb310ce){}};encode_version = 'jsjiami.com.v5';
