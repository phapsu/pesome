steal(  'jquery/controller',
        'jquery/view/ejs',
        'jquery/controller/view',
        'pesome/models' )
.then( 
        './views/init.ejs',        
        function($){

/**
 * @class Pesome.PetopicDetail.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists petopic_details and lets you destroy them.
 */
$.Controller('Pesome.PetopicDetail.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            var petopic_id = $urlUtility.getVars()["id"];
            var $super = this;
            Pesome.Models.PetopicDetail.findByTopicId({petopic_id: petopic_id},function(res){
                $super.element.html($super.view('init', res));
                $('#list_category').pesome_petopic_category();
            });            
	}

});

});