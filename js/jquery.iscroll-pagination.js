var lazy = {
    load:function(){
        $("div#wrapper").bind('scroll', function() {
            $('img.lazyload').lazyload({
                effect: 'fadeIn'
            });
        });
        this.refresh();
    },
    refresh: function(){
        l('refresh');
        $("div#wrapper").trigger('scroll');
    }
}

/**
 * Make HTML like this
 *                 
 *                <div id="wrapper">
                    <div id="scroller">
                        <div id="pullDown">
                            <span class="pullDownIcon"></span><span class="pullDownLabel">Pull down to refresh...</span>
                        </div>

                        <!-- the container content that you want to load here-->
                        <ul id="petopics" data-role="listview"></ul>

                        <div id="pullUp">
                            <span class="pullUpIcon"></span><span class="pullUpLabel">Pull up to refresh...</span>
                        </div>
                    </div>
                </div>
 */
var iscroll = {
    pagination : function($data, callback){       
            $url = $data.url, $currentPage = $data.current_page, emptyDataResponse = false;       
            
            pullDownEl = document.getElementById('pullDown');
            $(pullDownEl).hide();
            pullDownOffset = pullDownEl.offsetHeight;
            pullUpEl = document.getElementById('pullUp');
            pullUpOffset = pullUpEl.offsetHeight;

            paginate = {
                scrollDown: function(){                    
                    $currentPage++;
                    //l($url+'&page='+$currentPage);
                    if(!emptyDataResponse){                        
                        $.ajax({
                            url: $url,
                            data: {
                                'page':$currentPage
                            },
                            dataType: "jsonp",
                            contentType: "application/json",
                            async: false,
                            success: function(res){                               
                                if(res.length > 0){
                                    callback(res);                                   
                                    myScroll.refresh();
                                    emptyDataResponse = false;
                                }else{
                                    emptyDataResponse = true;
                                }
                            },
                            error: function(e) {
                                l(e.message);
                            }
                        });
                    }
                },
                scrollUp: function(){                   
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
                    //lazy.refresh();
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
                    lazy.refresh();
                }
            });
            setTimeout(function () {
                document.getElementById('wrapper').style.left = '0';
            }, 800);
            lazy.load();
        }
};