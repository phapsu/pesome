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
$.Controller('Pesome.Petick.PhotoAlbum',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            var tick_id = $urlUtility.getVars()["tick_id"];
            Pesome.Petick.LoadPetick.prototype.init({'petopic_id' : petopic_id, 'tick_id' : tick_id, 'controller' : this}, function($obj){
                $obj.element.find('a').photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
                $obj.element.find("img").lazyload({
                    effect : "fadeIn"
                });
                $('#petick_comment_and_like_button').pesome_petick_tick_action();
                $('#petick-photoalbum-page').trigger('create');                
            });
//            var $super = this;
//            Pesome.Models.Petick.findOne({petopic_id: petopic_id, tick_id : tick_id},function(res){
//                $super.element.html($super.view('init', res.petick));
//                $super.element.find('a').photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
//                $('#petick_back_link').attr('href', 'petopic_detail.html?id='+petopic_id);
//            });

	}
});

});