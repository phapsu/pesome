steal(
    /**
     * Petopic Paginate
     */
    function(){
         jQuery(document).ready(
             function() {
                 if ( $("#petopics").length > 0 ) {
                    $data = {'url': $api_url.petopic(), 'current_page':1}
                    scroll.pagination($data, function(res){
                        $("#petopics").append('//pesome/petopic/list/views/init.ejs', res);
                        $("#petopics").listview('refresh');
                    });
                }
             }
         );
     },
    /**
     * Petopic Detail Paginate
     */
    function(){
        jQuery(document).ready(
            function() {
               if ( $("#petopic_peticks_list").length > 0 ) {
                  var petopic_id = $urlUtility.getVars()["id"];
                  $data = {'url': $api_url.petopic_getpeticks(petopic_id), 'current_page':1}
                  scroll.pagination($data, function(res){
                      $obj = {'petopic_id':petopic_id, 'peticks':res};
                      $("#petopic_peticks_list").append('//pesome/petopic_detail/peticks_list/views/peticks.ejs',$obj);
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
                  });
               }
            }
         );
    }
)