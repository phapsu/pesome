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
        save : function(params, success, error){
            var petopic_id = params.petopic_id;
            var tick_id = params.tick_id;
            var comment = params.comment;
            return $.ajax({
                    type: 'POST',
                    url: $api_url.petick_postcomment(petopic_id),
                    data: {'tick_id' : tick_id, 'comment' : comment},
                    crossDomain: true,
                    async: false,
                    success: function (res) {
                       success(res);
                    },
                    error: function(e) {
                        error(e);
                    }
                });
        }
},
/* @Prototype */
{});

})