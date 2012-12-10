steal('funcunit',function(){

module("Pesome.Petick.List", { 
	setup: function(){
		S.open("//pesome/petick/list/list.html");
	}
});

test("delete peticks", function(){
	S('#create').click()
	
	// wait until grilled cheese has been added
	S('h3:contains(Grilled Cheese X)').exists();
	
	S.confirm(true);
	S('h3:last a').click();
	
	
	S('h3:contains(Grilled Cheese)').missing(function(){
		ok(true,"Grilled Cheese Removed")
	});
	
});


});