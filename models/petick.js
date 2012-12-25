steal('jquery/model', function(){

/**
 * @class Pesome.Models.Petick
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend petick services.  
 */
$.Model('Pesome.Models.Petick',
/* @Static */
{
	findOne : function(params, success, error){
                var petopic_id = params.petopic_id;
                var tick_id = params.tick_id;
		return $.get($api_url.petick_detail(petopic_id, tick_id), params, success, 'jsonp');
	},
        like : function(params, success, error){
            return $.ajax({
                type: 'POST',
                url: $api_url.petick_postlike(params.id, params.tick_id),
                data: params,
                headers: {
                    'Authorization': 'Bearer ' + $access_token
                },
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