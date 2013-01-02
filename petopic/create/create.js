steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'pesome/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Pesome.Petopic.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates petopics
 */
$.Controller('Pesome.Petopic.Create',
/** @Prototype */
{
	init : function(){         
            $super = this;
            Pesome.Models.Petopic.getAllCategory({},function(res){
                $super.element.html($super.view('init', res)); 
                $('#new-petopic-page').trigger('create');
            });
            
            
        },
        submit : function(el, ev){
            $.mobile.loading( 'show', {
                        text: 'loading...',
                        textVisible: true,
                        theme: 'a',
                        html: ""
                });
            
            ev.preventDefault();
            this.element.find('[type=submit]').val('Creating...')
            new Pesome.Models.Petopic.newPetopic(el.formParams(), 
            function(r){
                        $.mobile.loading('hide');
                        
                        $('<div>').simpledialog2({
                        mode: 'button',
                        headerText: 'Pesome',
                        headerClose: true,
                        buttonPrompt: 'Create successful.',
                        buttons : {
                          'OK': {
                            click: function () { 
                                 window.location.href = 'petopic_detail.html?id='+r.petopic.id;
                            }
                          }
                        }
                      })
                    },
                    function(e){
                        $.mobile.loading('hide');
                        
                        $('<div>').simpledialog2({
                            mode: 'blank',
                            headerText: '',
                            headerClose: true,
                            fullScreen: false,
                            fullScreenForce: false,
                            'useModal':true,
                            blankContent : '<div class="popupMsgContainer">Create was not successful.</div>'
                        });
                    }
            );
        },
        saved : function(res){
            this.element.find('[type=submit]').after(res);
        }
})

});