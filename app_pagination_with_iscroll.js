steal(
    /**
     * Petopic Paginate
     */
    function(){
         jQuery(document).ready(
             function() {
                 if ( $("#petopics").length > 0 ) {
                    $currentPage = 1;
                    emptyDataResponse = false;
                    pullDownEl = document.getElementById('pullDown');
                    $(pullDownEl).hide();
                    pullDownOffset = pullDownEl.offsetHeight;
                    pullUpEl = document.getElementById('pullUp');
                    pullUpOffset = pullUpEl.offsetHeight;

                    paginate = {
                        scrollDown: function(){
                                    $currentPage++;
                                    if(!emptyDataResponse){
                                        $.ajax({
                                            url: $api_url.petopic(),
                                            data: {'page':$currentPage},
                                            dataType: "jsonp",
                                            contentType: "application/json",
                                            async: false,
                                            success: function(res){
                                                d(res);
                                                if(res.length > 0){
                                                    $("#petopics").append('//pesome/petopic/list/views/init.ejs', res, function(){
                                                        $("#petopics").listview('refresh');
                                                        $("#petopics").find("img").lazyload({effect : "fadeIn"});
                                                    });
                                                    myScroll.refresh();
                                                    emptyDataResponse = false;
                                                }else{
                                                    emptyDataResponse = true;
                                                }
                                                $.mobile.loading( 'hide');
                                            },
                                            error: function(e) {
                                                l(e.message);
                                            }
                                        });
                                    }
                            },
                       scrollUp: function(){
                           l('up');
                           $("#petopics").find("img").lazyload({effect : "fadeIn"});
                           myScroll.refresh();
                       }
                    };
                    myScroll = new iScroll('wrapper', {
                            useTransition: true,
                            topOffset: pullDownOffset,
                            onRefresh: function () {
                                    if (pullDownEl.className.match('loading')) {
                                            pullDownEl.className = '';
                                            pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                                    } else if (pullUpEl.className.match('loading')) {
                                            pullUpEl.className = '';
                                            pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                                    }
                                     $("#petopics").find("img").lazyload({effect : "fadeIn"}); 
                            },
                            onScrollMove: function () {
                                    if (this.y > 5 && !pullDownEl.className.match('flip')) {
                                            pullDownEl.className = 'flip';
                                            pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
                                            this.minScrollY = 0;
                                    } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                                            pullDownEl.className = '';
                                            pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                                            this.minScrollY = -pullDownOffset;
                                    } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                                            pullUpEl.className = 'flip';
                                            pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
                                            this.maxScrollY = this.maxScrollY;
                                    } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                                            pullUpEl.className = '';
                                            pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                                            this.maxScrollY = pullUpOffset;
                                    }
                                     $("#petopics").find("img").lazyload({effect : "fadeIn"}); 
                            },
                            onScrollEnd: function () {
                                    if (pullDownEl.className.match('flip')) {
                                            pullDownEl.className = 'loading';
                                            pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';
                                            paginate.scrollUp(); // Execute custom function (ajax call?)
                                    } else if (pullUpEl.className.match('flip')) {
                                            pullUpEl.className = 'loading';
                                            pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';
                                            paginate.scrollDown(); // Execute custom function (ajax call?)
                                    }
                                     $("#petopics").find("img").lazyload({effect : "fadeIn"}); 
                            }
                    });
                    setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
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
                      $("#petopic_peticks_list").find("img").lazyload({
                                effect : "fadeIn"
                            });
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