steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'pesome/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Pesome.PetopicDetail.CreateText
 * @parent index
 * @inherits jQuery.Controller
 * CreateText
 */
$.Controller('Pesome.PetopicDetail.CreateText',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	'#btSubmit click' : function(el){
		el.val('Creating...');
                var petopic_id = $urlUtility.getVars()["petopic_id"];
                var params = {'title' : $('#title').val(), 'petopic_id' : petopic_id};
		Pesome.Models.PetopicDetail.create_text(params ,function(){
                        window.location.href = 'petopic_detail.html?id='+petopic_id;
                    },
                    function(){
                        l('error');
                    }
                );
	}
//	submit : function(el, ev){
//		ev.preventDefault();
//		this.element.find('[type=submit]').val('Creating...')
//		new Pesome.Models.PetopicDetail.create_text(el.formParams()).save(this.callback('saved'));
//	},
//	saved : function(){
//		this.element.find('[type=submit]').val('Create');
//		this.element[0].reset()
//	}
})

});