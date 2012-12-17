steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/sidebar_menu.ejs', function($){

/**
 * @class Pesome.Global
 */
$.Controller('Pesome.SidebarMenu',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            var index = $urlUtility.getVars()["index"];
            var $super = this;
            $super.element.html("//pesome/sidebar_menu/views/sidebar_menu.ejs",{}, function(){
                index = (typeof(index)=='undefined') ? 1 : index;
                $super.find('li').removeClass('active');
                $super.find('#menu'+index).addClass('active');                
            });
	}
})

});