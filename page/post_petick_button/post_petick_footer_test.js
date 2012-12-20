steal('funcunit').then(function(){

module("Pesome.Page.PostPetickFooter", { 
	setup: function(){
		S.open("//pesome/page/post_petick_footer/post_petick_footer.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Pesome.Page.PostPetickFooter Demo","demo text");
});


});