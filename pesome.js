steal(
    './cordova-2.2.0.js',
    './js/jquery-1.8.3.min.js',
    './css/jquery.mobile-1.2.0.min.css',
    './css/pesome.css'
, 
	'pesome/petopic_detail/peticks_list', 
	'pesome/petopic_detail/list').then(
	'./js/config.js',		// config app
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'pesome/petopic/create',
	'pesome/petopic/list',
	function(){
                // configure your application
		$('#petopics').pesome_petopic_list();                
		//$('#petopics_create').pesome_petopic_create();
                $('#petopic_details').pesome_petopic_detail_list();
                $('#petopic_peticks_list').pesome_petopic_detail_peticks_list();
		//$('#petopic_details_create').pesome_petopic_detail_create();
}).then(
    './js/jquery.mobile-1.2.0.min.js'    
)