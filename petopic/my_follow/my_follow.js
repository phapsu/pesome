steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'pesome/models' )
.then( './views/init.ejs',
       './views/petopic.ejs',
       function($){

/**
 * @class Pesome.Petopic.MyFollow
 * @parent index
 * @inherits jQuery.Controller
 * Lists MyFollow and lets you destroy them.
 */
$.Controller('Pesome.Petopic.MyFollow',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(callback){
            $super = this;
            Pesome.Models.Petopic.myFollow({},function(res){
                $super.element.html($super.view('init', res) ).listview('refresh');
                $('#list_category').pesome_page_load_category();
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