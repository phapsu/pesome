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
	$.fixture.make("petick", 5, function(i, petick){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "petick "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("comment", 5, function(i, comment){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "comment "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("post", 5, function(i, post){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "post "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("pesome", 5, function(i, pesome){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "pesome "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("user", 5, function(i, user){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "user "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})