steal('funcunit').then(function(){

module("Pesome.Post.CreatePhoto", { 
	setup: function(){
		S.open("//pesome/post/create_photo/create_photo.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Pesome.Post.CreatePhoto Demo","demo text");
});


});