steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Pesome.Petick.TickAction
 */
$.Controller('Pesome.Petick.TickAction',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html("//pesome/petick/tick_action/views/init.ejs",{});
                $('#comment_action_form').pesome_comment_create();
	},
        '#btLike click' : function(el){
                $.mobile.loading( 'show', {
                        text: 'loading...',
                        textVisible: true,
                        theme: 'a',
                        html: ""
                });                
                var petopic_id = $urlUtility.getVars()["petopic_id"];                
                var tick_id = $urlUtility.getVars()["tick_id"];    
                
                var params = {
                    'id' : petopic_id,                     
                    'tick_id' : tick_id
                }
		Pesome.Models.Petick.like(params ,
                    function(r){                       
                        $.mobile.loading('hide');
                        
                        $('#btLike').attr('class', 'ui-disabled');
                    },
                    function(e){                        
                        $.mobile.loading('hide');
                        
                        $('<div>').simpledialog2({
                        mode: 'button',
                        headerText: 'Pesome',
                        headerClose: true,
                        buttonPrompt: 'Like was not successful.',
                        buttons : {
                          'OK': {
                            click: function () {}
                          }
                        }
                      })
                    }
                );
	} 
})

});