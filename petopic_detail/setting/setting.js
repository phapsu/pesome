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
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Pesome.Models.PetopicDetail.save_setting(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});