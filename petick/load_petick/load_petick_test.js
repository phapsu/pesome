steal('funcunit').then(function(){

module("Pesome.Petick.LoadPetick", { 
	setup: function(){
		S.open("//pesome/petick/load_petick/load_petick.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Pesome.Petick.LoadPetick Demo","demo text");
});


});