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
        {
            src : './css/pesome.css',
            compress : true
        },
//        {
//            src : './css/jquery.mobile.iscrollview.css',
//            compress : true
//        },
        './css/photoswipe.css',
        './css/audio.css',
        {
            src : './css/jquery.mobile.simpledialog.min.css',
            compress : false
        }
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
//        {
//            src : './js/jquery.iscroll-pagination.js',
//            compress : true
//        },
//        {
//            src : './js/iscroll.js',
//            compress : true
//        },

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
//    {
//        src : './js/jquery.mobile.iscrollview.js',
//        compress : true
//    },
    {
        src : './app_pagination.js',
        compress : true
    },
    {
            src : './js/jquery.mobile.simpledialog2.min.js',
            compress : false
    },
    {
            src : './js/jquery.lazyload.min.js',
            compress : false
    }
).then(
//    {
//        src : './js/jquery.icontacts.js',
//        compress : true
//    },
//    {
//        src : './js/slidernav.js',
//        compress : true
//    }
).then(
    function(){
        $(document).ready(function() {
//             if ( $("#icontacts-popover").length > 0 ) {
//                contactList = new iScroll('icontacts-popover',
//                        {
//                                zoom: true,
//                                onBeforeScrollStart:function(e){
//                                        var target = e.target;
//                                        while (target.nodeType != 1) target = target.parentNode;
//                                        if (target.tagName != 'BUTTON' && target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') e.preventDefault();
//                                }
//                        }
//                );
//
//                $('.icontacts').iContacts('#contactsearch', {});
//                $('#category-button').click(function(e){
//                    $('#icontacts-popover-bound').toggle();
//                    contactList.refresh();
//                    e.stopPropagation();
//                });
//                $('#icontacts-popover-bound').click(function(e){
//                    e.stopPropagation();
//                });
//                $('body').click(function(){
//                    $('#icontacts-popover-bound').hide();
//                });
//                $('#icontacts-char').sliderNav();
//                $('#icontacts-char a').click(function(){
//                    target = ('#icontacts-popover ' + $(this).attr('alt'))
//                    contactList.scrollToElement(target, 500);
//                });
//
//            }
        });
    }
)