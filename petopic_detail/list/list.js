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
            
            /*Pesome.Models.User.is_viewable({petopic_id: petopic_id},function(res){                
                if(res.code==1){
                    var $super = this;
                    Pesome.Models.PetopicDetail.findByTopicId({petopic_id: petopic_id},function(res){
                        $super.element.html($super.view('init', res));                        
                    });  
                }else{
                    alert(res.result);
                    var previousPage =$.mobile.activePage.data('ui.prevPage');
                    if(typeof previousPage.prevObject[0]!='undefined'){	
                        $.mobile.changePage(previousPage.prevObject[0].id, 'slide', true, true);
                    }
                }
            });*/
            
            
            
            var $super = this;
            Pesome.Models.PetopicDetail.findByTopicId({petopic_id: petopic_id},function(res){
                $super.element.html($super.view('init', res));
                //$('#list_category').pesome_petopic_category();
            });            
	}

});

});