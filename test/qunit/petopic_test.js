steal("funcunit/qunit", "pesome/fixtures", "pesome/models/petopic.js", function(){
	module("Model: Pesome.Models.Petopic")
	
	test("findAll", function(){
		expect(4);
		stop();
		Pesome.Models.Petopic.findAll({}, function(petopics){
			ok(petopics)
	        ok(petopics.length)
	        ok(petopics[0].name)
	        ok(petopics[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Pesome.Models.Petopic({name: "dry cleaning", description: "take to street corner"}).save(function(petopic){
			ok(petopic);
	        ok(petopic.id);
	        equals(petopic.name,"dry cleaning")
	        petopic.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Pesome.Models.Petopic({name: "cook dinner", description: "chicken"}).
	            save(function(petopic){
	            	equals(petopic.description,"chicken");
	        		petopic.update({description: "steak"},function(petopic){
	        			equals(petopic.description,"steak");
	        			petopic.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Pesome.Models.Petopic({name: "mow grass", description: "use riding mower"}).
	            destroy(function(petopic){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})