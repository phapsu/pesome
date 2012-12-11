steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'pesome/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Pesome.Login.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates login
 */
$.Controller('Pesome.Login.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
        submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Pesome.Models.Login.Auth(el.formParams(), this.callback('saved'));
	},
	saved : function(res){
		this.element.find('[type=submit]').after(res);
	}
})

});