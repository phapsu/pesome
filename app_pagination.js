steal(
    /**
     * Petopic Paginate
     */
    function(){

         jQuery(document).ready(function() {
                 if ( $("#petopics").length > 0 ) {
                    $container = $("#petopics");
                    $loader = $("#pullUp");
                    $page = 1;
                    $url = $api_url.petopic();
                    $response = null;

                    function do_paginate($res){
                        $container.append('//pesome/petopic/list/views/init.ejs', $res);
                        $container.find("img").lazyload({effect : "fadeIn"});
                        $container.listview('refresh');
                        $loader.removeClass('loading');
                        $response = null;
                        $page++;
                    }


                    scroll.start($url, $page, function(res){
                        $response = res;
                        $page ++;
                    });

                    scroll.end(function(){
                         if($($response).length > 0){
                            do_paginate($response);
                         }
                    });


                    $(function(){
                            $loader.addClass('loading');
                            $loader.find('.pullUpLabel').html('Waiting...');
                            pesome_api.load($url, $page, function(res){
                                    setTimeout(function () {
                                        do_paginate(res);
                                        $page++;
                                    }, 800);
                                }
                            );
                    });

                }
        });
     },
    /**
     * Petopic Detail Paginate
     */
    function(){
        
        jQuery(document).ready(
            function() {
                    if ( $("#petopic_peticks_list").length > 0 ) {
                    $container = $("#petopic_peticks_list");
                    $loader = $("#pullUp");
                    $response = null;
                    $page = 1;

                    var petopic_id = $urlUtility.getVars()["id"];
                    $url = $api_url.petopic_getpeticks(petopic_id);


                    function do_paginate($res){
                        $obj = {'petopic_id':petopic_id, 'peticks':$res};
                        $container.append('//pesome/petopic_detail/peticks_list/views/peticks.ejs', $obj);
                        $container.find("img").lazyload({effect : "fadeIn"});
                        $loader.removeClass('loading');
                        $response = null;                        
                    }


                    scroll.start(function(){
                        $loader.addClass('loading');
                        $loader.find('.pullUpLabel').html('Pull up to refresh...');
                        $page++;
                        pesome_api.load($url,  $page, function(res){
                            if(res == 0){
                                $loader.removeClass('loading');
                                $loader.find('.pullUpLabel').html('No data found...');
                            }
                            $response = res;
                        });
                    });

                    scroll.end(function(){
                         if($($response).length > 0){
                            do_paginate($response);
                         }
                    });


                    $(function(){
//                            $loader.addClass('loading');
//                            $loader.find('.pullUpLabel').html('Waiting...');
//                            pesome_api.load($url, $page, function(res){
//                                    setTimeout(function () {
//                                        do_paginate(res);
//                                    }, 800);
//                                }
//                            );
                    });

                }
            }
         );
    },
    /**
     * Select Category - Paginate
     */
    function(){
        jQuery(document).ready(
            function() {
               if ( $("#select_category").length > 0 ) {
                  var category_id = $urlUtility.getVars()["category_id"];
                  $data = {'url': $api_url.petopic()+"&category_id="+category_id, 'current_page':1}
                  scroll.pagination($data, function(res){
                      $("#select_category").append('//pesome/petopic/select_category/views/init.ejs',res).listview('refresh');
                      $("#select_category").find("img").lazyload({
                                effect : "fadeIn"
                            });
                  });
               }
            }
         );
    },
    /**
     * My Petopic - Paginate
     */
    function(){
        jQuery(document).ready(
            function() {
               if ( $("#my_petopic").length > 0 ) {
                  $data = {'url': $api_url.petopic_mypetopic(), 'current_page':1}
                  scroll.pagination($data, function(res){
                      $("#my_petopic").append('//pesome/petopic/my_petopic/views/init.ejs',res).listview('refresh');
                      $("#my_petopic").find("img").lazyload({
                                effect : "fadeIn"
                            });
                  });
               }
            }
         );
    },
    /**
     * My Follow - Paginate
     */
    function(){
        jQuery(document).ready(
            function() {
               if ( $("#my_follow").length > 0 ) {
                  $data = {'url': $api_url.petopic_myfollow(), 'current_page':1}
                  scroll.pagination($data, function(res){
                      $("#my_follow").append('//pesome/petopic/my_follow/views/init.ejs',res).listview('refresh');
                      $("#my_follow").find("img").lazyload({
                                effect : "fadeIn"
                            });
                  });
               }
            }
         );
    },
    /**
     * I am a member - Paginate
     */
    function(){
        jQuery(document).ready(
            function() {
               if ( $("#is_member").length > 0 ) {
                  $data = {'url': $api_url.petopic_ismember(), 'current_page':1}
                  scroll.pagination($data, function(res){
                      $("#is_member").append('//pesome/petopic/is_member/views/init.ejs',res).listview('refresh');
                      $("#is_member").find("img").lazyload({
                                effect : "fadeIn"
                            });
                  });
               }
            }
         );
    }
)