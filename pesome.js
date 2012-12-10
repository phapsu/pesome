steal(
    //'./cordova-2.2.0.js',
    {src : './css/jquery.mobile-1.2.0.min.css', compress : false},
    {src : './js/jquery-1.8.3.min.js', compress : false},
    {src : './js/klass.min.js', compress : false}
).then(
    './css/pesome.css',
    './css/photoswipe.css',
    './css/audio.css'
).then(
    './js/config.js',		// config app
    './models/models.js',		// steals all your models
    //'./fixtures/fixtures.js',	// sets up fixtures for your models    
    './js/video.js',
    'pesome/petopic/create',
    'pesome/petopic/list',
    'pesome/petopic_detail/peticks_list',
    'pesome/petopic_detail/list',
    'pesome/petick/link',
    'pesome/petick/video',
    'pesome/petick/audio',
    'pesome/petick/share_file',
    'pesome/petick/photo_album',
    'pesome/petick/text',        
	'pesome/login/create',
    function(){
        // configure your application
        $('#petopics').pesome_petopic_list();
        //$('#petopics_create').pesome_petopic_create();
        $('#petopic_details').pesome_petopic_detail_list();
        $('#petopic_peticks_list').pesome_petopic_detail_peticks_list();
    
    	$('#petick_link').pesome_petick_link();
    	$('#petick_video').pesome_petick_video();
    	$('#petick_photo_gallery').pesome_petick_photo_album();
    	$('#petick_audio').pesome_petick_audio();
		$('#login').pesome_login_create();
}).then(
    {src : './js/jquery.mobile-1.2.0.min.js', compress : false},
    {src : './js/photoswipe.min.js', compress : false}    
)