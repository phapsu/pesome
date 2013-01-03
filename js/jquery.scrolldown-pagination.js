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

var pesome_api = {
    load : function(url, offset, callback){
        l(url+'&page='+offset);
        $.ajax({
            url: url,
            dataType: 'jsonp',
            data:  {'page':offset, 'jsonp' : 'pesomeApiDataCallback'},
            success: function(data){
                if(data.length == 0){
                      callback(0);
                }else{                
                    callback(data);                
                }
            }
        });
    }
};


var scroll = {
    start : function(callback){
            $(window).bind('scrollstart', function () {
                    scrollRefresh.bottom(function(){
                        callback();                        
                    });
            });
    },
    end : function(callback){
            $(window).bind('scrollstop', function () {               
                    setTimeout(function () {
                        callback();
                    }, 800);
            });
            
    }
    
}

/*
var scroll = {
    pagination : function($data, callback){
        $url = $data.url, $currentPage = $data.current_page, emptyDataResponse = false;
        $(window).scroll(function() {
            scrollRefresh.bottom(function(pos) {
                $currentPage++;
                console.log("Loading bottom. " + pos + '  ' +$currentPage);
                if(!emptyDataResponse){ //check if empty respond data, so do not send request to server
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
                            if(res.length > 0){
                                callback(res);
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
            });
        });
    }
}
*/