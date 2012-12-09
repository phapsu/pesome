// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("petopic", 5, function(i, petopic){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "petopic "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("petopic_detail", 5, function(i, petopic_detail){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "petopic_detail "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})