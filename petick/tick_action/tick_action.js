steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Pesome.Petick.TickAction
 */
$.Controller('Pesome.Petick.TickAction',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html("//pesome/petick/tick_action/views/init.ejs",{});
                $('#comment_action_form').pesome_comment_create();
	}
})

});