steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'pesome/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Pesome.PetopicDetail.Setting
 * @parent index
 * @inherits jQuery.Controller
 * Creates Setting
 */
$.Controller('Pesome.PetopicDetail.Setting',
/** @Prototype */
{
	init : function(){
		$super = this;
                var petopic_id = $urlUtility.getVars()["petopic_id"];
                Pesome.Models.PetopicDetail.get_setting({'petopic_id': petopic_id},function(res){

                    $super.element.html($super.view('init', res)); 
                    $('#petopic-setting-page').trigger('create');
                });
	},
        '#btSubmit click' : function(el){
                $.mobile.loading( 'show', {
                        text: 'loading...',
                        textVisible: true,
                        theme: 'a',
                        html: ""
                });                
                var petopic_id = $urlUtility.getVars()["petopic_id"];                
                var params = {
                    'id' : petopic_id, 
                    'class_viewer_setting' : $('input:radio[name=class_viewer_setting]:checked').val(), 
                    'class_video_setting' : $('input:radio[name=class_video_setting]:checked').val(), 
                    'class_photo_setting' : $('input:radio[name=class_photo_setting]:checked').val(), 
                    'class_audio_setting' : $('input:radio[name=class_audio_setting]:checked').val(), 
                    'class_file_setting' : $('input:radio[name=class_file_setting]:checked').val(), 
                    'admin_verify_add_member' : $('input:radio[name=admin_verify_add_member]:checked').val()
                }
		Pesome.Models.PetopicDetail.save_setting(params ,
                    function(r){                       
                        $.mobile.loading('hide');
                        
                        $('<div>').simpledialog2({
                        mode: 'button',
                        headerText: 'Pesome',
                        headerClose: true,
                        buttonPrompt: 'Update setting successful.',
                        buttons : {
                          'OK': {
                            click: function () { 
                                 window.location.href = 'petopic_detail.html?id='+petopic_id;
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
                        buttonPrompt: 'Update setting was not successful.',
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
//		new Pesome.Models.PetopicDetail.save_setting(el.formParams()).save(this.callback('saved'));
//	},
//	saved : function(){
//		this.element.find('[type=submit]').val('Create');
//		this.element[0].reset()
//	}
})

});