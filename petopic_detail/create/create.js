steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'pesome/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Pesome.PetopicDetail.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates petopic_details
 */
$.Controller('Pesome.PetopicDetail.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Pesome.Models.PetopicDetail(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});