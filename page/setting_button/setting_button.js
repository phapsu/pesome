steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Pesome.Page.SettingButton
 */
$.Controller('Pesome.Page.SettingButton',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            var petopic_id = $urlUtility.getVars()["id"];
            this.element.html("//pesome/page/setting_button/views/init.ejs",{
                    'petopic_id': petopic_id
            });
	}
})

});