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
        },
        is_viewable : function(params, success, error){
            // do the ajax request            
            return $.get($api_url.petopic_user_is_viewable(params.petopic_id),
              params, 
              success,
              'jsonp');
        },
        is_membership : function(params, success, error){
            // do the ajax request            
            return $.get($api_url.petopic_user_is_membership(params.petopic_id),
              params, 
              success,
              'jsonp');
        },
        is_follow : function(params, success, error){
            // do the ajax request            
            return $.get($api_url.petopic_user_is_follow(params.petopic_id),
              params, 
              success,
              'jsonp');
        }
},
/* @Prototype */
{});

})