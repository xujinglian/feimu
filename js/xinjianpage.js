jQuery(document).ready(function(){
    $.ajax({ 
        'url':'http://47.95.115.143/upload', 
        'data':$("#updateUserInfo").serialize(),
        'success':function(data){ 
            switch(data.type){ 
                case 0:alert('账户不存在');break; 
                case 502:alert('fsdf账户不存在');break;
                    }, 
        'type':'post',
        'dataType':'json',
        'enctype'='multipart/form-data',
    });
});