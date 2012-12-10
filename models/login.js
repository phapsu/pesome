steal('jquery/model', function(){

/**
 * @class Pesome.Models.Login
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend login services.  
 */
$.Model('Pesome.Models.Login',
/* @Static */
{
        Auth : function(params, success, error){
            d(params);
            return 'ok';
        }
},
/* @Prototype */
{});

})