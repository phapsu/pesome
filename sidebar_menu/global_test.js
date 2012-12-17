steal('funcunit').then(function(){

module("Pesome.Global", { 
	setup: function(){
		S.open("//pesome/global/global.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Pesome.Global Demo","demo text");
});


});