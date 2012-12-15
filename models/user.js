steal('jquery/model', function(){

/**
 * @class Pesome.Models.User
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend user services.
 */
$.Model('Pesome.Models.User',
/* @Static */
{
	userInfo : function(success){
            if($local == 0){
                $.get($api_url.me(), {}, success,'jsonp');
            }else{
                $info = window.localStorage.getItem("userInfo");
                var isJqueryObject = $info instanceof jQuery;              
                if(!isJqueryObject){
                    $.get($api_url.me(), {}, function(res){
                        window.localStorage.setItem("userInfo", res);
                        success(res);
                    },'jsonp');

                }else{
                    success($info);
                }
            }


            return true;
        }
},
/* @Prototype */
{});

})