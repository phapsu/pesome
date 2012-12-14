steal('jquery/model', function(){

/**
 * @class Pesome.Models.Post
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend post services.  
 */
$.Model('Pesome.Models.Post',
/* @Static */
{
	findAll: "/posts.json",
  	findOne : "/posts/{id}.json", 
  	create : "/posts.json",
 	update : "/posts/{id}.json",
  	destroy : "/posts/{id}.json"
},
/* @Prototype */
{});

})