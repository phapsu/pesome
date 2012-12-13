steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Pesome.Comment.FormWarning
 */
$.Controller('Pesome.Comment.FormWarning',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html("//pesome/comment/form_warning/views/init.ejs", {});
	},
	'#buttonCommentErr click' : function(){
            $('#commentErrorDialog').hide(function(){
                $('#main-petick-content').show();
            });            
        }
})

});