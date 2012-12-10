steal("funcunit/qunit", "pesome/fixtures", "pesome/models/petick.js", function(){
	module("Model: Pesome.Models.Petick")
	
	test("findAll", function(){
		expect(4);
		stop();
		Pesome.Models.Petick.findAll({}, function(peticks){
			ok(peticks)
	        ok(peticks.length)
	        ok(peticks[0].name)
	        ok(peticks[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Pesome.Models.Petick({name: "dry cleaning", description: "take to street corner"}).save(function(petick){
			ok(petick);
	        ok(petick.id);
	        equals(petick.name,"dry cleaning")
	        petick.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Pesome.Models.Petick({name: "cook dinner", description: "chicken"}).
	            save(function(petick){
	            	equals(petick.description,"chicken");
	        		petick.update({description: "steak"},function(petick){
	        			equals(petick.description,"steak");
	        			petick.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Pesome.Models.Petick({name: "mow grass", description: "use riding mower"}).
	            destroy(function(petick){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})