steal(
    //'./cordova-2.2.0.js',
    {
        src : './css/jquery.mobile-1.2.0.min.css',
        compress : false
    },

    {
        src : './js/jquery-1.8.3.min.js',
        compress : false
    },

    {
        src : './js/klass.min.js',
        compress : false
    }
).then(
        './css/pesome.css',
        './css/photoswipe.css',
        './css/audio.css'
).then(
        './js/video.js'
).then(
        './js/config.js',		// config app
        './models/models.js',		// steals all your models
        './controllers.js'		// steals all your controllers
        //'./fixtures/fixtures.js',	// sets up fixtures for your models
).then(
        {
            src : './js/jquery.mobile-1.2.0.min.js',
            compress : false
        },
        {
            src : './js/photoswipe.min.js',
            compress : false
        },
        {
            src : './js/jquery.scrollExtend.min.js',
            compress : false
        },function(){
            //@see http://contextllc.com/tools/jQuery-infinite-scroll-live-scroll
            jQuery(document).ready(
                function() {
                    jQuery('#petopics-container').scrollExtend(
                    {
                        'target': 'ul#petopics',
                        'url': 'more_content.html',
                        'newElementType': '<li/>',
                        'beforeStart' : function(){
                            $('#petopics-loading').show();
                            return true;
                        },
                        'onSuccess' : function(){
                            $('#petopics-loading').hide();
                            $('#petopics').listview('refresh');
                        }
                    });
                }
            );
        },
        {
            src : './js/side_menu.js',
            compress : true
        }
)