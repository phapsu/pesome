steal('jquery/model', function(){

/**
 * @class Pesome
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend pesome services.  
 */
$.Model('Pesome',
/* @Static */
{
	findAll: "/pesomes.json",
  	findOne : "/pesomes/{id}.json", 
  	create : "/pesomes.json",
 	update : "/pesomes/{id}.json",
  	destroy : "/pesomes/{id}.json"
},
/* @Prototype */
{});

})