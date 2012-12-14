steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'pesome/models' )
.then( './views/index.ejs',
       './views/petopic.ejs',
       function($){

/**
 * @class Pesome.Petopic.SelectCategory
 * @parent index
 * @inherits jQuery.Controller
 * Lists petopics and lets you destroy them.
 */
$.Controller('Pesome.Petopic.SelectCategory',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            var category_id = $urlUtility.getVars()["category_id"];
            $super = this;
            Pesome.Models.Petopic.findAll({'category_id': category_id},function(res){                    
                if(res[0] == null){                                           
                    window.location.href="sorry_no_data.html";                    
                }
                else{
                    $super.element.html($super.view('index', res) ).listview('refresh');                    
                }
            });
	}
//
//	'.destroy click': function( el ){
//		if(confirm("Are you sure you want to destroy?")){
//			el.closest('.petopic').model().destroy();
//		}
//	},
//	"{Pesome.Models.Petopic} destroyed" : function(Petopic, ev, petopic) {
//		petopic.elements(this.element).remove();
//	},
//	"{Pesome.Models.Petopic} created" : function(Petopic, ev, petopic){
//		this.element.append(this.view('init', [petopic]))
//	},
//	"{Pesome.Models.Petopic} updated" : function(Petopic, ev, petopic){
//		petopic.elements(this.element)
//		      .html(this.view('petopic', petopic) );
//	}
});

});