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
$.Controller('Pesome.Petick.Text',
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
                $('#comment_action_button').pesome_petick_tick_action();
                $('#petick-text-page').trigger('create');
            });
	}
});

});