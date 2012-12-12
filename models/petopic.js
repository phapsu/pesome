steal('jquery/model', function(){

/**
 * @class Pesome.Models.Petopic
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend petopic services.  
 */
$.Model('Pesome.Models.Petopic',
/* @Static */
{
	
	findAll : function(params, success, error){
		// do the ajax request
		return $.get($api_url.petopic(),
		  params, 
		  success,
		  'jsonp');
	},
        getAllCategory : function(params, success, error){
		// do the ajax request
		return $.get($api_url.category(),
		  params, 
		  success,
		  'jsonp');
	}
},
/* @Prototype */
{});

})