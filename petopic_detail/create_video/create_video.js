steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'pesome/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Pesome.PetopicDetail.CreateVideo
 * @parent index
 * @inherits jQuery.Controller
 * CreateVideo
 */
$.Controller('Pesome.PetopicDetail.CreateVideo',
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
                var params = {'video_url' : $('#video_url').val(), 'title' : $('#title').val(), 'description' : $('#description').val(), 'petopic_id' : petopic_id};
		Pesome.Models.PetopicDetail.create_video(params ,
                    function(){                       
                        $.mobile.loading('hide');
                        window.location.href = 'petopic_detail.html?id='+petopic_id;
                    },
                    function(){                        
                        $.mobile.loading('hide');
                        window.location.href = 'petopic_detail.html?id='+petopic_id;
                    }
                );
	} 
//	submit : function(el, ev){
//		ev.preventDefault();
//		this.element.find('[type=submit]').val('Creating...')
//		new Pesome.Models.PetopicDetail.create_video(el.formParams()).save(this.callback('saved'));
//	},
//	saved : function(){
//		this.element.find('[type=submit]').val('Create');
//		this.element[0].reset()
//	}
})

});