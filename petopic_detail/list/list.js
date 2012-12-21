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
            
               Pesome.Models.User.is_viewable({petopic_id: petopic_id},function(res){                
                if(res.status.code=='pesome_1'){
                    //duoc phep view petopic
                    var $super = this;
                    Pesome.Models.PetopicDetail.findByTopicId({petopic_id: petopic_id},function(res){
                        if(res.petopic.membership.code=='pesome_1'){
                            //current user is Admin cua petopic
                            res.is_membership   = 'pesome_1';
                            res.is_follow       = 'pesome_1';
                        }
                        else{
                            //current user is Guest cua petopic                    
                            var is_membership;
                            Pesome.Models.User.is_membership({petopic_id: petopic_id},function(res){
                                is_membership = res.status.code;                
                            });

                            var is_follow;
                            Pesome.Models.User.is_follow({petopic_id: petopic_id},function(res){
                                is_follow = res.status.code; 
                            });

                            res.is_membership   = is_membership;
                            res.is_follow       = is_follow;
                        }                

                        $super.element.html($super.view('init', res));                
                    }); 
                }else{
                    alert(res.status.message);      
                    history.back();
                    return false;
                }
            });        
	}
        
        

});

});