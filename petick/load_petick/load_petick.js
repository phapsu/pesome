steal( 'jquery/controller','jquery/view/ejs' )
	.then(function($){

/**
 * @class Pesome.Petick.LoadPetick
 */
$.Controller('Pesome.Petick.LoadPetick',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(params, callback){
            var petopic_id = params.petopic_id;
            var tick_id = params.tick_id;
            var $super = params.controller;
            Pesome.Models.Petick.findOne({petopic_id: petopic_id, tick_id : tick_id},function(res){
                $super.element.html($super.view('init', res.petick));
                $('#petick_back_link').attr('href', 'petopic_detail.html?id='+petopic_id);
                callback($super);
            });
	}
})

});