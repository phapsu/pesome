steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Pesome.Page.PostPetickFooter
 */
$.Controller('Pesome.Page.PostPetickButton',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(callback){
            var petopic_id = $urlUtility.getVars()["id"];
            this.element.html("//pesome/page/post_petick_button/views/init.ejs",{
                    'petopic_id': petopic_id
            }, function(){                   
            });
	}
})

});