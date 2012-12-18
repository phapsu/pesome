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
    }
)