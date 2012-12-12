// steal model files
steal(
    'pesome/petopic/list',
    'pesome/petopic_detail/peticks_list',
    'pesome/petopic_detail/list',
    'pesome/petick/load_petick',
    'pesome/petick/link',
    'pesome/petick/video',
    'pesome/petick/audio',
    'pesome/petick/share_file',
    'pesome/petick/photo_album',
    'pesome/petick/text',
    'pesome/login/create',
    'pesome/comment/create',
    'pesome/comment/list',
    function(){
        // configure your application

        //petopic
        $('#petopics').pesome_petopic_list();

        //petopic detail
        $('#petopic_details').pesome_petopic_detail_list();
        $('#petopic_peticks_list').pesome_petopic_detail_peticks_list();

        //petick detail
    	$('#petick_link').pesome_petick_link();
    	$('#petick_text').pesome_petick_text();
    	$('#petick_video').pesome_petick_video();
    	$('#petick_photo_gallery').pesome_petick_photo_album();
    	$('#petick_audio').pesome_petick_audio();
    	$('#petick_share_file').pesome_petick_share_file();
        
        //comment
        $('#comment_list').pesome_comment_list();
        $('#comment_create').pesome_comment_create();

        //login
        $('#login').pesome_login_create();
    }
)