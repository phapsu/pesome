steal('funcunit').then(function(){

module("Pesome.Comment.FormWarning", { 
	setup: function(){
		S.open("//pesome/comment/form_warning/form_warning.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Pesome.Comment.FormWarning Demo","demo text");
});


});