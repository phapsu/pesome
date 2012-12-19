steal(
    'pesome/sidebar_menu',
    'pesome/page/load_category',
    'pesome/petopic/list',    
    'pesome/petopic/select_category',
    'pesome/petopic/is_member',
    'pesome/petopic/my_petopic',
    'pesome/petopic/my_follow',
    'pesome/petopic/create',
    'pesome/petopic_detail/peticks_list',
    'pesome/petopic_detail/list',
    'pesome/petick/load_petick',
    'pesome/petick/link',
    'pesome/petick/video',
    'pesome/petick/audio',
    'pesome/petick/share_file',
    'pesome/petick/photo_album',
    'pesome/petick/text',
    'pesome/petick/tick_action',
    'pesome/login/create',
    'pesome/comment/create',
    'pesome/comment/list',
//    'pesome/comment/form_warning',
    function(){
        // configure your application

        //load left side bar menu
        $('#sidebar_menu').pesome_sidebar_menu();        
        
        //petopic
        $('#petopics').pesome_petopic_list();
        
        //select category
        $('#select_category').pesome_petopic_select_category();
        $('#is_member').pesome_petopic_is_member();
        $('#my_petopic').pesome_petopic_my_petopic();
        $('#my_follow').pesome_petopic_my_follow();
        $('#create_new_petopic').pesome_petopic_create();
		
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
        //$('#comment_create').pesome_comment_create();
        //$('#comment_warning').pesome_comment_form_warning();

        //login
        $('#login').pesome_login_create();
    },
    function(){
        if($('#petopics').length > 0 || $('#my_petopic').length > 0  || $('#my_follow').length > 0 || $('#select_category').length > 0 || $('#is_member').length > 0){
            //Don't know why the controller Pesome.Page.LoadCategory can not load the same time with Pesome.Petopic.List & MyPetopic controller'
            //so if exist petopics do nothing
        }else{
            $('#list_category').pesome_page_load_category();
        }
    }
)