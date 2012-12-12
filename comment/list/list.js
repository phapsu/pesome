steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'pesome/models' )
.then( './views/init.ejs', 
       './views/comment.ejs', 
       function($){

/**
 * @class Pesome.Comment.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists comments and lets you destroy them.
 */
$.Controller('Pesome.Comment.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            var tick_id = $urlUtility.getVars()["tick_id"];
            var $super = this;            
            Pesome.Models.Comment.findByTickId({'tick_id' : tick_id},function(res){
                $super.element.html($super.view('init', res)).listview('refresh');
            });
            
	}
//	'.destroy click': function( el ){
//		if(confirm("Are you sure you want to destroy?")){
//			el.closest('.comment').model().destroy();
//		}
//	},
//	"{Pesome.Models.Comment} destroyed" : function(Comment, ev, comment) {
//		comment.elements(this.element).remove();
//	},
//	"{Pesome.Models.Comment} created" : function(Comment, ev, comment){
//		this.element.append(this.view('init', [comment]))
//	},
//	"{Pesome.Models.Comment} updated" : function(Comment, ev, comment){
//		comment.elements(this.element)
//		      .html(this.view('comment', comment) );
//	}
});

});