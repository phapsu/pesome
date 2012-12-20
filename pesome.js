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
            src : './js/jquery.scrolldown-pagination.js',
            compress : true
        },
        {
            src : './js/side_menu.js',
            compress : true
        },
        function(){
//            $.mobile.loading( 'show', {
//                    text: 'loading...',
//                    textVisible: true,
//                    theme: 'a',
//                    html: ""
//            });
        }
).then(
    './app_pagination.js'
).then(
    function(){
//        $.mobile.loading('hide');
        
        $( "#popupPanel" ).on({
            popupbeforeposition: function() {
                var h = $( window ).height();

                $( "#popupPanel" ).css( "height", h );
            }
        });
    }
)