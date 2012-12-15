steal('funcunit').then(function(){

module("Pesome.Petick.TickAction", { 
	setup: function(){
		S.open("//pesome/petick/tick_action/tick_action.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Pesome.Petick.TickAction Demo","demo text");
});


});