steal('funcunit').then(function(){

module("Pesome.Page.SettingButton", { 
	setup: function(){
		S.open("//pesome/page/setting_button/setting_button.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Pesome.Page.SettingButton Demo","demo text");
});


});