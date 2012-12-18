var scrollRefresh = {
    pastBottom: false,
    previous: 0,
    bottom: function(callback) {
        var pBottom = $(window).height() + $(window).scrollTop() >= $(document).height();
        if(!this.pastBottom && pBottom) {
            callback($(window).height() + $(window).scrollTop());
            this.pastBottom = true;
        } else {
            if(!pBottom) this.pastBottom = false;
        }
        this.previous = $(window).scrollTop();
    }
}

var scroll = {
    pagination : function($data, callback){
        $url = $data.url, $currentPage = $data.current_page;
        $(window).scroll(function() {
            scrollRefresh.bottom(function(pos) {
                $currentPage++;
                console.log("Loading bottom. " + pos + '  ' +$currentPage);
                $.ajax({
                    url: $url,
                    data: {'page':$currentPage},
                    dataType: "jsonp",
                    contentType: "application/json",
                    async: false,
                    beforeSend: function(){
                        $.mobile.loading( 'show', {
                                text: 'loading...',
                                textVisible: true,
                                theme: 'a',
                                html: ""
                        });
                    },
                    success: function(res){ 
                       callback(res);
                       $.mobile.loading( 'hide');
                    },
                    error: function(e) {
                        l(e.message);
                    }
                });
            });
        });
    }
}