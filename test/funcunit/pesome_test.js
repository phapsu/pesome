steal("funcunit", function(){
	module("pesome test", { 
		setup: function(){
			S.open("//pesome/pesome.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})