steal(
    /**
     * Petopic Paginate
     */
    function(){

         jQuery(document).ready(function() {
                 if ( $("#petopics").length > 0 ) {
                    $container = $("#petopics");
                    $loader = $("#pullUp");
                    $url = $api_url.petopic();

                    scroll.paginate({'container' : $container, 'loader' : $loader, 'url' : $url}, function(res){
                        $container.append('//pesome/petopic/list/views/init.ejs', res);
                        $container.find("img").lazyload({effect : "fadeIn"});
                        $container.listview('refresh');
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
                    var petopic_id = $urlUtility.getVars()["id"];
                    $url = $api_url.petopic_getpeticks(petopic_id);

                    scroll.paginate({'container' : $container, 'loader' : $loader, 'url' : $url}, function(res){
                        $obj = {'petopic_id':petopic_id, 'peticks':$res};
                        $container.append('//pesome/petopic_detail/peticks_list/views/peticks.ejs', $obj);
                        $container.find("img").lazyload({effect : "fadeIn"});
                    });
            }
        });
    },
    /**
     * Select Category - Paginate
     */
    function(){
        jQuery(document).ready(
            function() {
               if ( $("#select_category").length > 0 ) {
                    $container = $("#select_category");
                    $loader = $("#pullUp");
                    var category_id = $urlUtility.getVars()["category_id"];
                    $url = $api_url.petopic()+"&category_id="+category_id;

                    scroll.paginate({'container' : $container, 'loader' : $loader, 'url' : $url}, function(res){
                        $container.append('//pesome/petopic/select_category/views/init.ejs',res).listview('refresh');
                        $container.find("img").lazyload({effect : "fadeIn"});
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
                    $container = $("#my_petopic");
                    $loader = $("#pullUp");
                    $url = $api_url.petopic_mypetopic();

                    scroll.paginate({'container' : $container, 'loader' : $loader, 'url' : $url}, function(res){
                        $container.append('//pesome/petopic/my_petopic/views/init.ejs',res).listview('refresh');
                        $container.find("img").lazyload({effect : "fadeIn"});
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
                    $container = $("#my_follow");
                    $loader = $("#pullUp");
                    $url = $api_url.petopic_myfollow();

                    scroll.paginate({'container' : $container, 'loader' : $loader, 'url' : $url}, function(res){
                        $container.append('//pesome/petopic/my_follow/views/init.ejs',res).listview('refresh');
                        $container.find("img").lazyload({effect : "fadeIn"});
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
                    $container = $("#is_member");
                    $loader = $("#pullUp");
                    $url = $api_url.petopic_ismember();

                    scroll.paginate({'container' : $container, 'loader' : $loader, 'url' : $url}, function(res){
                        $container.append('//pesome/petopic/is_member/views/init.ejs',res).listview('refresh');
                        $container.find("img").lazyload({effect : "fadeIn"});
                    });
               }
            }
         );
    }
)