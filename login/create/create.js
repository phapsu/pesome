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
	'#btLogin click' : function(el){
            alert('sssssssss');
            Pesome.Models.Login.Auth({petopic_id: 321},function(res){
                d(res);
            });
            //Pesome.Models.PetopicDetail.findByTopicId({petopic_id: 321},function(res){

            //});
        }
})

});