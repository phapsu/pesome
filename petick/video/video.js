steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'pesome/models' )
.then( './views/init.ejs',       
       function($){

/**
 * @class Pesome.Petick.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists peticks and lets you destroy them.
 */
$.Controller('Pesome.Petick.Video',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            var tick_id = $urlUtility.getVars()["tick_id"];
            Pesome.Petick.LoadPetick.prototype.init({'petopic_id' : petopic_id, 'tick_id' : tick_id, 'controller' : this}, function(){
                $('#petick_comment_and_like_button').pesome_petick_tick_action();
                $('#petick-video-page').trigger('create');
            });            
	},
	'#playVideo click': function( el ){
            window.plugins.videoPlayer.play($full_base_url + el.attr('data-url'));
	}
});

});