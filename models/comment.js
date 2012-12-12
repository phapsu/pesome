steal('jquery/model', function(){

/**
 * @class Pesome.Models.Comment
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend comment services.  
 */
$.Model('Pesome.Models.Comment',
/* @Static */
{
	findByTickId : function(params, success, error){
            var tick_id = params.tick_id;
            // do the ajax request
            return $.get($api_url.petick_getcomment(tick_id),
              params, 
              success,
              'jsonp');
	},
        
},
/* @Prototype */
{});

})