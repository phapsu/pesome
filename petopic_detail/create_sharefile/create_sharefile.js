steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'pesome/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Pesome.PetopicDetail.CreateSharefile
 * @parent index
 * @inherits jQuery.Controller
 * CreateSharefile
 */
$.Controller('Pesome.PetopicDetail.CreateSharefile',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
        '#btSubmit click' : function(el){
                $.mobile.loading( 'show', {
                        text: 'loading...',
                        textVisible: true,
                        theme: 'a',
                        html: ""
                });                
                var petopic_id = $urlUtility.getVars()["petopic_id"];                
                var params = {'file_url' : $('#file_url').val(), 'content' : $('#content').val(), 'petopic_id' : petopic_id};
		Pesome.Models.PetopicDetail.create_sharefile(params ,
                    function(r){                       
                        $.mobile.loading('hide');
                        
                        $('<div>').simpledialog2({
                        mode: 'button',
                        headerText: 'Pesome',
                        headerClose: true,
                        buttonPrompt: 'Upload successful.',
                        buttons : {
                          'OK': {
                            click: function () { 
                                 window.location.href = 'petopic_detail.html?id='+petopic_id+'&tick_id='+r.petick.tick_attach_id;
                            }
                          }
                        }
                      })
                    },
                    function(e){                        
                        $.mobile.loading('hide');
                        
                        $('<div>').simpledialog2({
                        mode: 'button',
                        headerText: 'Pesome',
                        headerClose: true,
                        buttonPrompt: 'Upload was not successful.',
                        buttons : {
                          'OK': {
                            click: function () { 
                                 window.location.href = 'petopic_detail.html?id='+petopic_id;
                            }
                          }
                        }
                      })
                    }
                );
	} 
//	submit : function(el, ev){
//		ev.preventDefault();
//		this.element.find('[type=submit]').val('Creating...')
//		new Pesome.Models.PetopicDetail.create_sharefile(el.formParams()).save(this.callback('saved'));
//	},
//	saved : function(){
//		this.element.find('[type=submit]').val('Create');
//		this.element[0].reset()
//	}
})

});