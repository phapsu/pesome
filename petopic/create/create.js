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
            ev.preventDefault();
            this.element.find('[type=submit]').val('Creating...')
            new Pesome.Models.Petopic.newPetopic(el.formParams(), this.callback('saved'));
        },
        saved : function(res){
            this.element.find('[type=submit]').after(res);
        }
})

});