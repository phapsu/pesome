steal('jquery/model', function(){

/**
 * @class Pesome.Models.PetopicDetail
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend petopic_detail services.
 */
$.Model('Pesome.Models.PetopicDetail',
/* @Static */
{
	findByTopicId : function(params, success, error){
		// do the ajax request
                var petopic_id = params.petopic_id
		return $.get($api_url.petopic_detail(petopic_id), params, success, 'jsonp');
	},
        findAllPetick : function(params, success, error){
		// do the ajax request
                var petopic_id = params.petopic_id
		return $.get($api_url.petopic_getpeticks(petopic_id), params, success, 'jsonp');
	}

},
/* @Prototype */
{});

})