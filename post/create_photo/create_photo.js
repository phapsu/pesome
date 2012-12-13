steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Pesome.Post.CreatePhoto
 */
$.Controller('Pesome.Post.CreatePhoto',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html("//pesome/post/create_photo/views/init.ejs",{
			message: "Hello World"
		});
	}
})

});