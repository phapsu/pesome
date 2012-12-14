steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'pesome/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Pesome.Comment.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates comments
 */
$.Controller('Pesome.Comment.Create',
/** @Prototype */
{
	init : function(){            
            this.element.html(this.view());
            
	},
	'#btSubmitComment click' : function(){
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            var tick_id = $urlUtility.getVars()["tick_id"];
            var params = {'petopic_id':petopic_id, 'tick_id':tick_id, 'comment':$('#commentInput').val()};
            
            if($('#commentInput').val() == null || $('#commentInput').val() == EMPTY){
                $('#commentLabel').addClass(MISSING);
                $('#main-petick-content').hide();
                $('#commentErrorDialog').show();
            }else{        
                $('#main-petick-content').hide();
                $('#commentErrorDialog').hide();
                $('#commentContentTransition').show('fast', 
                    function(){                        
                        Pesome.Models.Comment.save(params, 
                            function(res){
                                $('#commentContentTransition').hide('slow', function(){ window.location.reload(); });
                            },
                            function(e){
                                d(e);
                                $('#commentContentTransition').hide('slow', function(){ window.location.reload(); });
                            }
                        );
                    }
                );
            }
        }
})

});