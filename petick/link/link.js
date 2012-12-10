steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'pesome/models' )
.then( './views/init.ejs',
       './views/normal_link.ejs',
       './views/youtube.ejs',
       './views/vimeo.ejs',
       function($){

/**
 * @class Pesome.Petick.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists peticks and lets you destroy them.
 */
$.Controller('Pesome.Petick.Link',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            var tick_id = $urlUtility.getVars()["tick_id"];
            var $super = this;
            Pesome.Models.Petick.findOne({petopic_id: petopic_id, tick_id : tick_id},function(res){
                $super.element.html($super.view('init', res.petick));
                $('#petick_back_link').attr('href', 'petopic_detail.html?id='+petopic_id);
            });
	}
});

});