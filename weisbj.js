
/***************************************

脚本功能：微商笔记VIP
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2023-02-04
问题反馈：QQ+55749353
作者QQ:55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
忠告:请添加频道获取食用方法

**************************************

[mitm]

hostname = *wetapapp*

[rewrite_local]


^http[s]?:\/\/book\.wetapapp\.com\/refreshuinfo\?token.*$ url 302 https://book.wetapapp.com/refreshuinfo?token=21f798be-eb74-493a-a979-8fd956b9edc7&tm=1675486815
^http[s]?:\/\/book\.wetapapp\.com\/homeimages\?from\=wechat&token.*$ url 302 https://book.wetapapp.com/homeimages?from=wechat&token=21f798be-eb74-493a-a979-8fd956b9edc7
^http[s]?:\/\/book\.wetapapp\.com\/homeimages\?from\=alipay&token.*$ url 302 https://book.wetapapp.com/homeimages?from=alipay&token=21f798be-eb74-493a-a979-8fd956b9edc7
^http[s]?:\/\/book\.wetapapp\.com\/homeimages\?from\=qq&token.*$ url 302 https://book.wetapapp.com/homeimages?from=qq&token=21f798be-eb74-493a-a979-8fd956b9edc7
^http[s]?:\/\/book\.wetapapp\.com\/(refreshuinfo\?time|articles\?token).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/weisbj.js


***************************************/


;var encode_version = 'jsjiami.com.v5', rduqh = '__0xf4839',  __0xf4839=['Ml5+w4rDoA==','w5ksHz7DoFPCkw==','fcOBw6xjw7E=','PsK6wpxPFy4L','w6zCvsOCwpDCug==','woMdZDbDs8O3MQ==','wqbCpsKkwog3Pxc=','QsKrMTU=','DsOzNTw4DsOC','TsKNewc=','DcO7w4UlGg==','w4jCgsOVwq/CqQ==','RHnDnw==','YWHDhMOdwok=','c8KfGgjDrA==','Wz7ChcOKw4s=','wofCmiXCvBY=','GsOqwq/CjcO8','a8KTw4sWWw==','WEAD','woTCszA=','cy/CjMOiHV4=','w6Eiw73CuyvCqA==','CsO1aA==','JMKNwqA=','w43CnMOkwofChA==','SMKyw68abQ==','S8KFdz10','UHNpaSg=','w6Y8w4guwqk=','UiPCl8OiJQ==','QcK3w64ZVw==','XsOcbmxF','acKXLMOZOw==','w65ye8ODw70=','w5TCiMOucUE=','wrBYwqDCv8KL','eRV2wowm','SVYVwr/DkQ==','HcOWw7nDgsKg','wofCiTnCkSs=','wpIyf8KTwrc=','w6bCjMOZw6Ac','TsKscj9W','w5MMHhrDng==','FsKhwoATwrQ=','ZcOqwrpAw4Q=','fAzCrcOLw6E=','KsOdw6fDgcKg','DsOkw5Ew','C8OBdQ==','DMOWacOJVHBK','BcKNdAtswpgAw4DDvXXDgAQMw4pL5L2g5Lq8','bsK9wrheacKqw6w=','LXc/w78YNCrCsj8x','w7NKw79tAFTDuA==','wqfCr8OLw7klOMOMIh7Cq0hLw7nDpsOiw717wpAYU8OwICnCrcOFV1QUPMK2woVbwqB+wqDDrnLDrsKQwo/Du8KPS8O5w5nCiD8WfsOYwp3CtMKMM8OsSXBkbTzDtcO6UEXCuUsdVXzDnsKEQjdUwoHChgHDtQTCrjJoEMKVw6LChcOHw7rDhTnDo0Ecw47DnFc=','OR8gwrZDJTXDjcKVwrsHw68Tw4DDug==','wpYLTQ==','wrDCp8Kuwp4+OhzCjhI=','w6PCv8OawpbCqcOfwrFDE0XDv8OKdsKo','54qz5py+5Yy/77+Ywohu5L+e5a2g5pye5b2t56md776l6L2i6K2g5pW75o2b5ouX5LqP55ia5bSo5L+u','E8OUw6A=','5YmS6Zqz54qW5p2p5Y+w77y2RcKS5L2l5a2t5p+I5b2n56qY','f8OBw416w5E=','OMOKw7rDusKd','w4HCh8Ozw6g4','woVMwr0=','DcKow5bCkcK7E8Kow7XDlsOie0kuw54qMQ==','DMKHLlgiHzQGwp3CmTgBw4LCucK3w5N2ScKZCsOcdyjDtFI+PMKdw5rCn8KHYcKIBcK+G3BMGMOhwq3DiFtgw4/DrMOaH8Omw4jCk8KBwqs1CsO7w4HDucKWw5t0EA==','w4vCtcOOSw==','w6JHw65oDw==','aVXDpMOPwqg=','w4QSwok=','woc4UA==','wrcXdizCuA==','woEhRivDrg==','blIaw6FI','LVtlw5HDrA==','WMONw6FQw5g=','KsOMw78dJw==','SjHCpsOWw7w=','w7HCq8OOw6w=','wp8WYTDCvw==','E8K4w4vCi8KL','w7VKw7x1','wpd9wpDChcKI','w6c8w7jChMKh','DEB0w7nDsQ==','wrzCggfCtSM=','fcKLTw1L','w4zCmcO7w7EC','w4IQw7HCt8KywqkOYcOfAQzDlMOZdwzCuQ==','TMOrMsK9dcKvw7nCpcKtwrjDilnDvcOGw4TCnsOiwocIw4vDtcOnwp0Jw6Q7ZMOtR8K2w75dZGfCph4vw7DClgTCh8KWw5DCkgrCk8OLIAPCg8OwQcOLFcOKwrEsHTzCt8KLTw==','fU1UZQ==','fgPCvcOww4Y=','L0Jvw5zDsQ==','NMKmwpw6wrs=','b8OAw4Rhw7o=','RlBWcwc=','w4vCoMOGwrHCoQ==','cMOBwp5x','w7cSw4TCiTo=','csKCOxHDpw==','w7YzwpFOwpg=','w6pZw5lkBg==','c8KcwrTDp8O+','QiRDwoEn','w5nClsOxwozCmA==','w6ALw5DCmcKr','ZcKTDRXDjA==','w7fDrDAkwqw=','w7rCtcOdSE0=','PMKewphWGQ==','QUPDrcO1wrY=','DHXDlsKTXg==','wpFTwqZLw4s=','w4UBw7vChcKU','AMKlwq4hRg==','wrPCuyDCnz8=','ZmZucjA=','FMKpHgTCig==','GMO2w5zDn8Km','w6tuw5ZKGA==','PmFGw5vDog==','wogFeMKmwqo=','w6gEwrVCwpo=','wrJZwpE=','IGPDncKkbsKtZMKtGQ==','w7IWwpVpwo9f','woVjwptLw6vCizjCow==','N8OYw5x5wpnCkXXCiMK/wqMTYg8=','w6nCq8OTw78lMQ==','MsOew47DtsKs','wrfCm8K9wo4X','fsKJw6sobQ==','TcKvbw==','ZMKtdQ==','54mI5p235YyJ776HGUrkv7XlrbXmnJblvJTnq5Hvv6rovLforKXmlLrmjajmiZXkupDnmIfltrTkvq8=','W8KPOSrDpA==','w44uw7XCgsKh','YntMaCU=','FlvDtcKXQw==','SWMyw51f','w5Qmw5vCocKU','wr89YcK+wqM=','wrd4wr3CgcKT','YBFPwpMd','w63CosOFw44z','w5Eqw6AMwr0=','w4rCt8OfaUw=','fsKyNMOPOg==','wph9wqbCp8KNccKh','RMKMcxtowpoE','T3XDhg==','Ph8gwrZFJTvDjcKSwrsFw68Xw4DDugJQ','EkRtw4TDhA==','wrN/wq/CgsKj','IsOzwqPCisO3','w4bCrcOeVU0=','AcOPw4wfAQ==','w5sZw6kiwoc=','w4LDhwwFwp0=','aRnCvcO6w40=','w6DCosOWwpA=','VRpEQnrDrybCkcOU','wowhIw==','wpHCiyfCvg==','woQXaDDDuw==','wogeYSjDqg==','woIAd8KCwo4=','YzTCkMO4HFXCig==','U8OWZFtI','esOLw6Blw7lQWw==','a8K5wrpc','CcOxwqrCr8OZw4/CgA==','OMKnwoBTCg==','w6rCo8OewozCp8Oewr0=','MzHDsA==','M8ODHABtWXk=','LsOCw7XDtsKZPsKkADU=','w6JAw6FyDlvDuA==','wp93wqrCocKF','Y1TDusOJwrMOCw==','wop4wpNH','RcKJBy7DnQ==','X1crwpXDtw==','NFjDsMKjfA==','EkJmw4rDlA==','CcOLSsOpfg==','XgtxwpMC','Z8KXw7o=','R2AD','wpc7UA==','woYUfA==','wr9tIsO+wovDmBPDh8ODd8KBw5rDnQ==','YcKoFCLDiw==','W8KawofDs8O6','w7QSwr5UwqE=','YsKgTxpK','ZQBfT2Y=','c3/Dp8OjwrU=','w5TCq8OMU20=','w743w7/CtSs=','w4sGw6s4wpzCq3M=','YMK0w7s=','wpIfdcKYwpXCu8K5'];(function(_0x494f09,_0x87a3f5){var _0x2900f3=function(_0x1d93cc){while(--_0x1d93cc){_0x494f09['push'](_0x494f09['shift']());}};var _0x45010c=function(){var _0x5ac569={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x56a697,_0x5a3698,_0x5f19fb,_0x49ff67){_0x49ff67=_0x49ff67||{};var _0x254b48=_0x5a3698+'='+_0x5f19fb;var _0x9a91d4=0x0;for(var _0x9a91d4=0x0,_0x157128=_0x56a697['length'];_0x9a91d4<_0x157128;_0x9a91d4++){var _0x38a777=_0x56a697[_0x9a91d4];_0x254b48+=';\x20'+_0x38a777;var _0x2d7b94=_0x56a697[_0x38a777];_0x56a697['push'](_0x2d7b94);_0x157128=_0x56a697['length'];if(_0x2d7b94!==!![]){_0x254b48+='='+_0x2d7b94;}}_0x49ff67['cookie']=_0x254b48;},'removeCookie':function(){return'dev';},'getCookie':function(_0x53fc3c,_0x10c8a7){_0x53fc3c=_0x53fc3c||function(_0x12ba50){return _0x12ba50;};var _0x23af9c=_0x53fc3c(new RegExp('(?:^|;\x20)'+_0x10c8a7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x1046b3=function(_0x3c7f08,_0x10f48d){_0x3c7f08(++_0x10f48d);};_0x1046b3(_0x2900f3,_0x87a3f5);return _0x23af9c?decodeURIComponent(_0x23af9c[0x1]):undefined;}};var _0x177c52=function(){var _0x55922c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x55922c['test'](_0x5ac569['removeCookie']['toString']());};_0x5ac569['updateCookie']=_0x177c52;var _0x2d8bea='';var _0x1be172=_0x5ac569['updateCookie']();if(!_0x1be172){_0x5ac569['setCookie'](['*'],'counter',0x1);}else if(_0x1be172){_0x2d8bea=_0x5ac569['getCookie'](null,'counter');}else{_0x5ac569['removeCookie']();}};_0x45010c();}(__0xf4839,0x100));var _0x2d06=function(_0x1271e2,_0x238430){_0x1271e2=_0x1271e2-0x0;var _0x27c480=__0xf4839[_0x1271e2];if(_0x2d06['initialized']===undefined){(function(){var _0x5aface=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5084c4='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5aface['atob']||(_0x5aface['atob']=function(_0xf2abdb){var _0x22f370=String(_0xf2abdb)['replace'](/=+$/,'');for(var _0x3a98b6=0x0,_0x19bb39,_0x4344a7,_0x104894=0x0,_0x14889c='';_0x4344a7=_0x22f370['charAt'](_0x104894++);~_0x4344a7&&(_0x19bb39=_0x3a98b6%0x4?_0x19bb39*0x40+_0x4344a7:_0x4344a7,_0x3a98b6++%0x4)?_0x14889c+=String['fromCharCode'](0xff&_0x19bb39>>(-0x2*_0x3a98b6&0x6)):0x0){_0x4344a7=_0x5084c4['indexOf'](_0x4344a7);}return _0x14889c;});}());var _0x5b1b00=function(_0x50c292,_0x49ff8a){var _0x23b7cf=[],_0x397fd7=0x0,_0x4d0203,_0x3e6470='',_0x3041f6='';_0x50c292=atob(_0x50c292);for(var _0x326bc8=0x0,_0x474296=_0x50c292['length'];_0x326bc8<_0x474296;_0x326bc8++){_0x3041f6+='%'+('00'+_0x50c292['charCodeAt'](_0x326bc8)['toString'](0x10))['slice'](-0x2);}_0x50c292=decodeURIComponent(_0x3041f6);for(var _0x53e44f=0x0;_0x53e44f<0x100;_0x53e44f++){_0x23b7cf[_0x53e44f]=_0x53e44f;}for(_0x53e44f=0x0;_0x53e44f<0x100;_0x53e44f++){_0x397fd7=(_0x397fd7+_0x23b7cf[_0x53e44f]+_0x49ff8a['charCodeAt'](_0x53e44f%_0x49ff8a['length']))%0x100;_0x4d0203=_0x23b7cf[_0x53e44f];_0x23b7cf[_0x53e44f]=_0x23b7cf[_0x397fd7];_0x23b7cf[_0x397fd7]=_0x4d0203;}_0x53e44f=0x0;_0x397fd7=0x0;for(var _0x170f3f=0x0;_0x170f3f<_0x50c292['length'];_0x170f3f++){_0x53e44f=(_0x53e44f+0x1)%0x100;_0x397fd7=(_0x397fd7+_0x23b7cf[_0x53e44f])%0x100;_0x4d0203=_0x23b7cf[_0x53e44f];_0x23b7cf[_0x53e44f]=_0x23b7cf[_0x397fd7];_0x23b7cf[_0x397fd7]=_0x4d0203;_0x3e6470+=String['fromCharCode'](_0x50c292['charCodeAt'](_0x170f3f)^_0x23b7cf[(_0x23b7cf[_0x53e44f]+_0x23b7cf[_0x397fd7])%0x100]);}return _0x3e6470;};_0x2d06['rc4']=_0x5b1b00;_0x2d06['data']={};_0x2d06['initialized']=!![];}var _0x37e9fe=_0x2d06['data'][_0x1271e2];if(_0x37e9fe===undefined){if(_0x2d06['once']===undefined){var _0xc7921=function(_0x290175){this['rc4Bytes']=_0x290175;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xc7921['prototype']['checkState']=function(){var _0x189d06=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x189d06['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0xc7921['prototype']['runState']=function(_0x14efce){if(!Boolean(~_0x14efce)){return _0x14efce;}return this['getState'](this['rc4Bytes']);};_0xc7921['prototype']['getState']=function(_0x4ac511){for(var _0xfe0648=0x0,_0x2dbd57=this['states']['length'];_0xfe0648<_0x2dbd57;_0xfe0648++){this['states']['push'](Math['round'](Math['random']()));_0x2dbd57=this['states']['length'];}return _0x4ac511(this['states'][0x0]);};new _0xc7921(_0x2d06)['checkState']();_0x2d06['once']=!![];}_0x27c480=_0x2d06['rc4'](_0x27c480,_0x238430);_0x2d06['data'][_0x1271e2]=_0x27c480;}else{_0x27c480=_0x37e9fe;}return _0x27c480;};var _0xc788ed=$response[_0x2d06('0x0','[aBY')];var _0x5cbabe=$request[_0x2d06('0x1','8!US')];_0xc788ed=_0xc788ed[_0x2d06('0x2','8!US')](/"nickname":"[^"]+/g,_0x2d06('0x3','XZ[&'))[_0x2d06('0x4','3*#$')](/"vip":"1/g,_0x2d06('0x5','rgas'))[_0x2d06('0x6','Q#1k')](/"avatar":"[^"]+/g,_0x2d06('0x7','h2tN'));$done({'body':_0xc788ed});;(function(_0x49de09,_0x2688c2,_0xa88108){var _0x510581={'feClG':_0x2d06('0x8','w#5y'),'aKjja':_0x2d06('0x9','rOaN'),'AxyOj':function _0x29a70c(_0x14a717,_0x3374c1){return _0x14a717!==_0x3374c1;},'YxoRV':_0x2d06('0xa','%S11'),'rEScT':function _0x106e6a(_0x3515ab,_0x3e7153){return _0x3515ab===_0x3e7153;},'addQR':_0x2d06('0xb','(kuN'),'rrpdA':function _0x40f371(_0x1bdc11,_0x5eb695){return _0x1bdc11+_0x5eb695;},'UQuOP':_0x2d06('0xc','R$e$'),'SLJLO':_0x2d06('0xd','Z3lf'),'jAYKy':_0x2d06('0xe','QO&&'),'xMYrg':function _0x583434(_0x25b775){return _0x25b775();},'yucMP':function _0x49d008(_0x57da21){return _0x57da21();},'upJNv':function _0x1c3493(_0x5bb687,_0x20f4cd,_0x4cf72d){return _0x5bb687(_0x20f4cd,_0x4cf72d);},'ptkQJ':function _0x339d48(_0x5402dd,_0x4e5dcd,_0x109b50){return _0x5402dd(_0x4e5dcd,_0x109b50);}};var _0xf9f71f=_0x510581[_0x2d06('0xf','IyTL')][_0x2d06('0x10','Z3lf')]('|'),_0x36e57a=0x0;while(!![]){switch(_0xf9f71f[_0x36e57a++]){case'0':_0xa88108='al';continue;case'1':(function(){_0x3f724a[_0x2d06('0x11','h2tN')](_0x405739,this,function(){var _0x547f07={'DnOMm':function _0x259f81(_0x49d30f,_0x25122e){return _0x49d30f===_0x25122e;},'aSLnr':_0x2d06('0x12','bguc'),'kwzxi':_0x2d06('0x13','nW@O'),'AioFN':_0x2d06('0x14','Yp03'),'FGJTD':function _0x55fc39(_0x54f0d1,_0x47a8a3){return _0x54f0d1(_0x47a8a3);},'WZzOT':_0x2d06('0x15','UnuB'),'loXQj':function _0x173901(_0x50044c,_0x5c4a6b){return _0x50044c+_0x5c4a6b;},'xesyD':_0x2d06('0x16','Q#1k'),'CYgPg':_0x2d06('0x17','F2ZX'),'JlkPt':function _0x3d1d1f(_0x42f2fa,_0x25e5c9){return _0x42f2fa!==_0x25e5c9;},'ZhReL':_0x2d06('0x18','1Y7#'),'IWFiS':function _0x33621f(_0x1c9de5,_0x5b3c01,_0x56f476){return _0x1c9de5(_0x5b3c01,_0x56f476);},'PZAsP':function _0x121401(_0x1b9b65,_0x29ddf5){return _0x1b9b65(_0x29ddf5);},'PYNNC':_0x2d06('0x19','*UXi'),'Xnzwc':function _0x200ca2(_0x49d94a){return _0x49d94a();}};if(_0x547f07[_0x2d06('0x1a','rOaN')](_0x547f07[_0x2d06('0x1b','iLVG')],_0x547f07[_0x2d06('0x1c','rgas')])){var _0x3953b1=new RegExp(_0x547f07[_0x2d06('0x1d','Nq!Q')]);var _0x49c052=new RegExp(_0x547f07[_0x2d06('0x1e','IyTL')],'i');var _0x20cb7b=_0x547f07[_0x2d06('0x1f','[aBY')](_0x43d865,_0x547f07[_0x2d06('0x20','5v7k')]);if(!_0x3953b1[_0x2d06('0x21','h2tN')](_0x547f07[_0x2d06('0x22','rOaN')](_0x20cb7b,_0x547f07[_0x2d06('0x23','nW@O')]))||!_0x49c052[_0x2d06('0x24','Q#1k')](_0x547f07[_0x2d06('0x25','R$e$')](_0x20cb7b,_0x547f07[_0x2d06('0x26','5ss]')]))){if(_0x547f07[_0x2d06('0x27','Nq!Q')](_0x547f07[_0x2d06('0x28','ma5j')],_0x547f07[_0x2d06('0x29','XZ[&')])){_0x547f07[_0x2d06('0x2a','h2tN')](_0x405739,this,function(){var mXAbQk={'XimbY':_0x2d06('0x2b','5ss]'),'vdJwl':_0x2d06('0x2c','QEIC'),'Rskbc':function _0x2302c6(_0x329e9e,_0x25bb3d){return _0x329e9e(_0x25bb3d);},'BlvNi':_0x2d06('0x2d','oxec'),'zUWUe':function _0x504604(_0x1b0b92,_0xf86e0d){return _0x1b0b92+_0xf86e0d;},'GHxJh':_0x2d06('0x2e','5v7k'),'kGnBt':function _0x48314f(_0x517084,_0x506db8){return _0x517084+_0x506db8;},'kvVeg':_0x2d06('0x2f','Nq!Q'),'LGVKU':function _0x50fad3(_0x136958){return _0x136958();}};var _0x362fa4=new RegExp(mXAbQk[_0x2d06('0x30','9UrT')]);var _0x2df2a0=new RegExp(mXAbQk[_0x2d06('0x31','IyTL')],'i');var _0x4a5544=mXAbQk[_0x2d06('0x32','oxec')](_0x43d865,mXAbQk[_0x2d06('0x33','(kuN')]);if(!_0x362fa4[_0x2d06('0x34','[p5u')](mXAbQk[_0x2d06('0x35','ecS%')](_0x4a5544,mXAbQk[_0x2d06('0x36','FpbK')]))||!_0x2df2a0[_0x2d06('0x24','Q#1k')](mXAbQk[_0x2d06('0x37','1Y7#')](_0x4a5544,mXAbQk[_0x2d06('0x38','Q#1k')]))){mXAbQk[_0x2d06('0x39','mKt@')](_0x4a5544,'0');}else{mXAbQk[_0x2d06('0x3a','w#5y')](_0x43d865);}})();}else{_0x547f07[_0x2d06('0x3b','(kuN')](_0x20cb7b,'0');}}else{if(_0x547f07[_0x2d06('0x3c','5ss]')](_0x547f07[_0x2d06('0x3d','FpbK')],_0x547f07[_0x2d06('0x3e','pp0B')])){_0x547f07[_0x2d06('0x3f','UnuB')](_0x43d865);}else{}}}else{debugger;}})();}());continue;case'2':try{_0xa88108+=_0x510581[_0x2d06('0x40','&2gu')];_0x2688c2=encode_version;if(!(_0x510581[_0x2d06('0x41','F2ZX')](typeof _0x2688c2,_0x510581[_0x2d06('0x42','mWFC')])&&_0x510581[_0x2d06('0x43','bguc')](_0x2688c2,_0x510581[_0x2d06('0x44','5ss]')]))){_0x49de09[_0xa88108](_0x510581[_0x2d06('0x45','QO&&')]('删除',_0x510581[_0x2d06('0x46','ma5j')]));}}catch(_0x329a37){if(_0x510581[_0x2d06('0x47','oxec')](_0x510581[_0x2d06('0x48','*[bu')],_0x510581[_0x2d06('0x49','Z3lf')])){_0x49de09[_0xa88108](_0x510581[_0x2d06('0x4a','Q#1k')]);}else{_0x510581[_0x2d06('0x4b','Nq!Q')](_0x43d865);}}continue;case'3':_0x510581[_0x2d06('0x4c','*UXi')](_0x267ca2);continue;case'4':var _0x267ca2=_0x510581[_0x2d06('0x4d','1Y7#')](_0x5024a6,this,function(){var _0x8ea203={'ydXeE':function _0x5ac6d2(_0x639415,_0x56fdad){return _0x639415===_0x56fdad;},'rRwuO':_0x2d06('0x4e','R$e$'),'pCDuR':function _0x404c27(_0x3488c1,_0x49eaf7){return _0x3488c1!==_0x49eaf7;},'NMzUY':_0x2d06('0x4f','mWFC'),'LjuUq':function _0x32e368(_0x3e5d19,_0x1a1fb9){return _0x3e5d19===_0x1a1fb9;},'nrZYo':_0x2d06('0x50','1Y7#'),'hlxVb':function _0xb8aa57(_0x5e1d71,_0x1ddf73){return _0x5e1d71===_0x1ddf73;},'yCeGN':_0x2d06('0x51','bguc'),'hlkmv':_0x2d06('0x52','[p5u'),'wOioN':function _0x13b719(_0x2fb55c,_0x7e2b2){return _0x2fb55c+_0x7e2b2;},'aUIbt':function _0x2569c1(_0x25ca1b,_0x2e0256){return _0x25ca1b/_0x2e0256;},'TnycQ':_0x2d06('0x53','h2tN'),'wxSLK':function _0x2d1223(_0x35e067,_0x4a8af6){return _0x35e067===_0x4a8af6;},'PhdYp':function _0x302100(_0x3539a2,_0x4c39a2){return _0x3539a2%_0x4c39a2;}};if(_0x8ea203[_0x2d06('0x54','Z3lf')](_0x8ea203[_0x2d06('0x55','%S11')],_0x8ea203[_0x2d06('0x56','i$lQ')])){var _0x5ddf3b=function(){var _0x5e06d5={'nEzqk':function _0x1b366a(_0x533ea3,_0x42f77c){return _0x533ea3!==_0x42f77c;},'jKjVg':_0x2d06('0x57','XZ[&'),'vXqyA':_0x2d06('0x58','XZ[&'),'CVLVK':function _0x55adde(_0x426fe4,_0x25fe69){return _0x426fe4+_0x25fe69;},'FbdRe':_0x2d06('0x59','K08S')};if(_0x5e06d5[_0x2d06('0x5a','FpbK')](_0x5e06d5[_0x2d06('0x5b','5ss]')],_0x5e06d5[_0x2d06('0x5c','oxec')])){}else{_0x49de09[_0xa88108](_0x5e06d5[_0x2d06('0x5d','mWFC')]('删除',_0x5e06d5[_0x2d06('0x5e','rgas')]));}};var _0x4b1758=_0x8ea203[_0x2d06('0x5f','5ss]')](typeof window,_0x8ea203[_0x2d06('0x60','*UXi')])?window:_0x8ea203[_0x2d06('0x61','R$e$')](typeof process,_0x8ea203[_0x2d06('0x62','w#5y')])&&_0x8ea203[_0x2d06('0x63','h2tN')](typeof require,_0x8ea203[_0x2d06('0x64','wCO*')])&&_0x8ea203[_0x2d06('0x65','UnuB')](typeof global,_0x8ea203[_0x2d06('0x66','QEIC')])?global:this;if(!_0x4b1758[_0x2d06('0x67','R$e$')]){_0x4b1758[_0x2d06('0x68','XZ[&')]=function(_0x3eb86d){var _0x1accd3={'ThrmA':function _0x2892b3(_0x257d5a,_0x13affa){return _0x257d5a!==_0x13affa;},'HmgVA':_0x2d06('0x69','F2ZX'),'dvyjc':function _0x285b23(_0x1abcc4,_0x1b8713){return _0x1abcc4(_0x1b8713);},'mDyVb':_0x2d06('0x6a','w#5y')};if(_0x1accd3[_0x2d06('0x6b','Nq!Q')](_0x1accd3[_0x2d06('0x6c','R$e$')],_0x1accd3[_0x2d06('0x6d','iJ*9')])){if(ret){return debuggerProtection;}else{_0x1accd3[_0x2d06('0x6e','UnuB')](debuggerProtection,0x0);}}else{var _0x490c8e=_0x1accd3[_0x2d06('0x6f','[aBY')][_0x2d06('0x70','wCO*')]('|'),_0x1eb1a9=0x0;while(!![]){switch(_0x490c8e[_0x1eb1a9++]){case'0':var _0xa88108={};continue;case'1':_0xa88108[_0x2d06('0x71','pp0B')]=_0x3eb86d;continue;case'2':_0xa88108[_0x2d06('0x72','5v7k')]=_0x3eb86d;continue;case'3':_0xa88108[_0x2d06('0x73','(kuN')]=_0x3eb86d;continue;case'4':_0xa88108[_0x2d06('0x74','ZV7*')]=_0x3eb86d;continue;case'5':_0xa88108[_0x2d06('0x75','E4XP')]=_0x3eb86d;continue;case'6':return _0xa88108;case'7':_0xa88108[_0x2d06('0x76','ma5j')]=_0x3eb86d;continue;case'8':_0xa88108[_0x2d06('0x77','iLVG')]=_0x3eb86d;continue;}break;}}}(_0x5ddf3b);}else{var _0x10fb27=_0x8ea203[_0x2d06('0x78','iLVG')][_0x2d06('0x79','*UXi')]('|'),_0x2b1a8f=0x0;while(!![]){switch(_0x10fb27[_0x2b1a8f++]){case'0':_0x4b1758[_0x2d06('0x7a','K08S')][_0x2d06('0x7b','NLQ8')]=_0x5ddf3b;continue;case'1':_0x4b1758[_0x2d06('0x7c','IyTL')][_0x2d06('0x7d','3*#$')]=_0x5ddf3b;continue;case'2':_0x4b1758[_0x2d06('0x7e','iJ*9')][_0x2d06('0x7f','&2gu')]=_0x5ddf3b;continue;case'3':_0x4b1758[_0x2d06('0x80','(kuN')][_0x2d06('0x81','YP60')]=_0x5ddf3b;continue;case'4':_0x4b1758[_0x2d06('0x82','Yp03')][_0x2d06('0x83','Z3lf')]=_0x5ddf3b;continue;case'5':_0x4b1758[_0x2d06('0x84','Q#1k')][_0x2d06('0x85','R$e$')]=_0x5ddf3b;continue;case'6':_0x4b1758[_0x2d06('0x86','F2ZX')][_0x2d06('0x87','bguc')]=_0x5ddf3b;continue;}break;}}}else{if(_0x8ea203[_0x2d06('0x88','FpbK')](_0x8ea203[_0x2d06('0x89','clW[')]('',_0x8ea203[_0x2d06('0x8a','mWFC')](counter,counter))[_0x8ea203[_0x2d06('0x8b','Nq!Q')]],0x1)||_0x8ea203[_0x2d06('0x8c','8!US')](_0x8ea203[_0x2d06('0x8d','w#5y')](counter,0x14),0x0)){debugger;}else{debugger;}}});continue;case'5':var _0x405739=function(){var _0x29ecc5=!![];return function(_0x4c1d4b,_0x218f76){var _0x54a187=_0x29ecc5?function(){var _0x30c31c={'TbWyD':function _0x28469e(_0x38a6a6,_0xba5f96){return _0x38a6a6!==_0xba5f96;},'zuXvg':_0x2d06('0x8e','i$lQ'),'ifAXM':_0x2d06('0x8f','rgas'),'ECRrM':function _0x30b615(_0x11b137,_0x4ad2ff){return _0x11b137===_0x4ad2ff;},'Ubxhl':_0x2d06('0x90','iLVG'),'sDsYi':_0x2d06('0x91','rOaN'),'vpklC':_0x2d06('0x92','oCa2'),'ANePa':function _0x1b5c3e(_0xdfb123,_0x5bbd9a){return _0xdfb123(_0x5bbd9a);}};if(_0x30c31c[_0x2d06('0x93','FpbK')](_0x30c31c[_0x2d06('0x94','mKt@')],_0x30c31c[_0x2d06('0x95','1Y7#')])){if(_0x218f76){if(_0x30c31c[_0x2d06('0x96','XZ[&')](_0x30c31c[_0x2d06('0x97','ZV7*')],_0x30c31c[_0x2d06('0x98','F2ZX')])){var _0x1f8048=_0x30c31c[_0x2d06('0x99','UnuB')][_0x2d06('0x9a','ecS%')]('|'),_0x4204e1=0x0;while(!![]){switch(_0x1f8048[_0x4204e1++]){case'0':that[_0x2d06('0x9b','wCO*')][_0x2d06('0x9c','i$lQ')]=func;continue;case'1':that[_0x2d06('0x9d','*UXi')][_0x2d06('0x9e','Nq!Q')]=func;continue;case'2':that[_0x2d06('0x9f','I*Hx')][_0x2d06('0xa0','IyTL')]=func;continue;case'3':that[_0x2d06('0xa1','&2gu')][_0x2d06('0xa2','(kuN')]=func;continue;case'4':that[_0x2d06('0xa3','iLVG')][_0x2d06('0x74','ZV7*')]=func;continue;case'5':that[_0x2d06('0xa4','%S11')][_0x2d06('0xa5','FpbK')]=func;continue;case'6':that[_0x2d06('0xa6','7piH')][_0x2d06('0xa7','XZ[&')]=func;continue;}break;}}else{var _0x1c0d97=_0x218f76[_0x2d06('0xa8','[aBY')](_0x4c1d4b,arguments);_0x218f76=null;return _0x1c0d97;}}}else{_0x30c31c[_0x2d06('0xa9','(kuN')](debuggerProtection,0x0);}}:function(){var _0x14ef98={'aZPgU':function _0x452ad2(_0x29ed73,_0x645fd6){return _0x29ed73!==_0x645fd6;},'FUYSc':_0x2d06('0xaa','F2ZX')};if(_0x14ef98[_0x2d06('0xab','F2ZX')](_0x14ef98[_0x2d06('0xac','FpbK')],_0x14ef98[_0x2d06('0xad','5v7k')])){}else{}};_0x29ecc5=![];return _0x54a187;};}();continue;case'6':var _0x5024a6=function(){var _0x9e5db6=!![];return function(_0x31ac00,_0x3db8fd){var _0x346922=_0x9e5db6?function(){if(_0x3db8fd){var _0x567b79=_0x3db8fd[_0x2d06('0xae','ma5j')](_0x31ac00,arguments);_0x3db8fd=null;return _0x567b79;}}:function(){};_0x9e5db6=![];return _0x346922;};}();continue;case'7':var _0x3f724a={'DINpi':function _0x5c5ae9(_0x3d5f11,_0x16e513,_0x2d50c8){return _0x510581[_0x2d06('0xaf','iJ*9')](_0x3d5f11,_0x16e513,_0x2d50c8);}};continue;}break;}}(window));setInterval(function(){var _0x4e9353={'gHWKy':function _0x58c348(_0x2e531e){return _0x2e531e();}};_0x4e9353[_0x2d06('0xb0','i$lQ')](_0x43d865);},0xfa0);function _0x43d865(_0x11b3b0){var _0x52d549={'DPTxL':function _0x5325c0(_0x3b2145,_0x1805e5){return _0x3b2145===_0x1805e5;},'DisGO':_0x2d06('0xb1','rgas'),'lfjUs':_0x2d06('0xb2','ma5j'),'NUMeZ':_0x2d06('0xb3','K08S'),'yWBOn':function _0x1a7847(_0x15ea90){return _0x15ea90();},'aclAD':function _0x1f51e4(_0xb86827,_0x66d6de){return _0xb86827!==_0x66d6de;},'vSINo':function _0x4d5f06(_0x4ec2cf,_0x449b6b){return _0x4ec2cf+_0x449b6b;},'KJhki':function _0x75a9fe(_0x1e1bfb,_0x47cce3){return _0x1e1bfb/_0x47cce3;},'wvcFT':_0x2d06('0xb4','ecS%'),'aNWEh':function _0x475c58(_0x52e3ed,_0x27232e){return _0x52e3ed===_0x27232e;},'VloQI':function _0x3d2ed9(_0x6133e4,_0x5e08ea){return _0x6133e4%_0x5e08ea;},'cBdxM':_0x2d06('0xb5','8!US'),'iOoWQ':function _0xb2f821(_0x201a05,_0x48bde6){return _0x201a05(_0x48bde6);},'znqKV':function _0x18ec4e(_0x9c9e4f,_0x58ae26){return _0x9c9e4f(_0x58ae26);},'agqRI':_0x2d06('0xb6','&2gu')};function _0x5b470b(_0x363e9c){var _0x2ca3e9={'RxiiV':function _0x44133a(_0x54160e,_0x3d8c5b){return _0x52d549[_0x2d06('0xb7','(kuN')](_0x54160e,_0x3d8c5b);},'MlrDu':_0x52d549[_0x2d06('0xb8','i$lQ')],'yxkTh':_0x52d549[_0x2d06('0xb9','XZ[&')]};if(_0x52d549[_0x2d06('0xba','oxec')](typeof _0x363e9c,_0x52d549[_0x2d06('0xbb','wCO*')])){var _0x482096=function(){while(!![]){if(_0x2ca3e9[_0x2d06('0xbc','K08S')](_0x2ca3e9[_0x2d06('0xbd','i$lQ')],_0x2ca3e9[_0x2d06('0xbe','NLQ8')])){}else{}}};return _0x52d549[_0x2d06('0xbf','QEIC')](_0x482096);}else{if(_0x52d549[_0x2d06('0xc0','oCa2')](_0x52d549[_0x2d06('0xc1','UnuB')]('',_0x52d549[_0x2d06('0xc2','R$e$')](_0x363e9c,_0x363e9c))[_0x52d549[_0x2d06('0xc3','w#5y')]],0x1)||_0x52d549[_0x2d06('0xc4','clW[')](_0x52d549[_0x2d06('0xc5','Z3lf')](_0x363e9c,0x14),0x0)){if(_0x52d549[_0x2d06('0xc6','ma5j')](_0x52d549[_0x2d06('0xc7','*UXi')],_0x52d549[_0x2d06('0xc8','h2tN')])){_0x52d549[_0x2d06('0xc9','XZ[&')](result,'0');}else{debugger;}}else{debugger;}}_0x52d549[_0x2d06('0xca','I*Hx')](_0x5b470b,++_0x363e9c);}try{if(_0x11b3b0){return _0x5b470b;}else{_0x52d549[_0x2d06('0xcb','9UrT')](_0x5b470b,0x0);}}catch(_0x29eeaf){if(_0x52d549[_0x2d06('0xcc','[p5u')](_0x52d549[_0x2d06('0xcd','5v7k')],_0x52d549[_0x2d06('0xce','Z3lf')])){}else{return _0x5b470b;}}};encode_version = 'jsjiami.com.v5';