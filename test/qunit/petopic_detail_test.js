steal("funcunit/qunit", "pesome/fixtures", "pesome/models/petopic_detail.js", function(){
	module("Model: Pesome.Models.PetopicDetail")
	
	test("findAll", function(){
		expect(4);
		stop();
		Pesome.Models.PetopicDetail.findAll({}, function(petopic_details){
			ok(petopic_details)
	        ok(petopic_details.length)
	        ok(petopic_details[0].name)
	        ok(petopic_details[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Pesome.Models.PetopicDetail({name: "dry cleaning", description: "take to street corner"}).save(function(petopic_detail){
			ok(petopic_detail);
	        ok(petopic_detail.id);
	        equals(petopic_detail.name,"dry cleaning")
	        petopic_detail.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Pesome.Models.PetopicDetail({name: "cook dinner", description: "chicken"}).
	            save(function(petopic_detail){
	            	equals(petopic_detail.description,"chicken");
	        		petopic_detail.update({description: "steak"},function(petopic_detail){
	        			equals(petopic_detail.description,"steak");
	        			petopic_detail.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Pesome.Models.PetopicDetail({name: "mow grass", description: "use riding mower"}).
	            destroy(function(petopic_detail){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})