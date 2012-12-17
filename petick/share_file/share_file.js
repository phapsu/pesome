steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'pesome/models' )
.then( './views/init.ejs', 
       './views/attach_file.ejs', 
       function($){

/**
 * @class Pesome.Petick.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists peticks and lets you destroy them.
 */
$.Controller('Pesome.Petick.ShareFile',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            var tick_id = $urlUtility.getVars()["tick_id"];
            Pesome.Petick.LoadPetick.prototype.init({'petopic_id' : petopic_id, 'tick_id' : tick_id, 'controller' : this}, 
                function($obj){
                    $obj.find('ul').listview('refresh');
                    $('#comment_action_button').pesome_petick_tick_action();
                    $('#petick-sharefile-page').trigger('create');
                });
	}	
});

});