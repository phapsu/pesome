steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Pesome.Page.Follow
 */
$.Controller('Pesome.Page.FollowButton',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            Pesome.Models.PetopicDetail.follow({},function(res){                
            });                
	}
})

});