steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'pesome/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Pesome.Petopic.Delete
 * @parent index
 * @inherits jQuery.Controller
 * Delete petopics
 */
$.Controller('Pesome.Petopic.Delete',
/** @Prototype */
{
	init : function(){                
            this.element.html(this.view());
        },
        submit : function(el, ev){
            ev.preventDefault();
            this.element.find('[type=submit]').val('Creating...')
            new Pesome.Models.Petopic.deletePetopic(el.formParams(), this.callback('saved'));
        },
        saved : function(res){
            this.element.find('[type=submit]').after(res);
        }
})

});