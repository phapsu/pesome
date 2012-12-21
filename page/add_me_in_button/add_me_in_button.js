steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Pesome.Page.AddMeInButton
 */
$.Controller('Pesome.Page.AddMeInButton',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            Pesome.Models.PetopicDetail.add_me_in({},function(res){                
            });                
	}
})

});