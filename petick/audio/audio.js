steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'pesome/models' )
.then( './views/init.ejs',
function($){

    /**
     * @class Pesome.Petick.List
     * @parent index
     * @inherits jQuery.Controller
     * Lists peticks and lets you destroy them.
     */
    $.Controller('Pesome.Petick.Audio',
    /** @Static */
    {
            defaults : {}
    },
    /** @Prototype */
    {
            init : function(){
                var petopic_id = $urlUtility.getVars()["petopic_id"];
                var tick_id = $urlUtility.getVars()["tick_id"];
                Pesome.Petick.LoadPetick.prototype.init({'petopic_id' : petopic_id, 'tick_id' : tick_id, 'controller' : this}, function($obj){
                    $('#petick_comment_and_like_button').pesome_petick_tick_action();
                    $('#petick-audio-page').trigger('create');
                });
            },
            '#play click' : function(el){
                audioURL =  encodeURIComponent($.trim($full_base_url + el.attr('data-url')));
                playAudio(audioURL);
                el.button('disable');
                $("#pause").button('enable');
            },
            '#pause click' : function(el){
                pauseAudio();
                el.button('disable');
                $("#play").button('enable');
            },
            '#stop click' : function(el){
                stopAudio();
                // reset slider
                $('#slider').val(0);
                $('#slider').slider('refresh');

                $("#pause").button('disable');
                $("#play").button('enable');
            },
            '#stop click' : function(el){
                audioURL =  encodeURIComponent($.trim($full_base_url + el.attr('data-url')));

                stopAudio();
                playAudio(audioURL);

                $("#play").button('enable');
		$("#pause").button('disable');
            }
    });


    /**
     * AUDIO PLAYER
     *
     * /
    /* Audio player */
    var audio = null;
    var audioTimer = null;
    var pausePos = 0;

    /* play audio file */
    function playAudio(file){
       file = decodeURIComponent(file);
           audio = new Media(file, function(){ // success callback
           console.log("playAudio():Audio Success");
       }, function(error){ // error callback
           alert('code: '    + error.code    + '\n' +
                     'message: ' + error.message + '\n');
       });

       // get audio duration
       var duration = audio.getDuration();

       // set slider data
       if( duration > 0 ){
               $('#slider').attr( 'max', Math.round(duration) );
               $('#slider').slider('refresh');
       }

       // play audio
       audio.play();

       audio.seekTo(pausePos*1000);

       // update audio position every second
       if (audioTimer == null) {
           audioTimer = setInterval(function() {
               // get audio position
               audio.getCurrentPosition(
                   function(position) { // get position success
                       if (position > -1) {
                           setAudioPosition(position);
                       }
                   }, function(e) { // get position error
                       console.log("Error getting pos=" + e);
                       //setAudioPosition(duration);
                   }
               );
           }, 1000);
       }
    }

    /* pause audio */
    function pauseAudio() {
       if (audio) {
           audio.pause();
       }
    }

    /* stop audio */
    function stopAudio() {
       if (audio) {
           audio.stop();
           audio.release();
       }
       clearInterval(audioTimer);
       audioTimer = null;
       pausePos = 0;
    }

    /* set audio position */
    function setAudioPosition(position) {
           pausePos = position;
           position = Math.round(position);
       $('#slider').val(position);
       $('#slider').slider('refresh');
    }

    /* record audio file */
    function recordAudio(file){
           audioRec = new Media(file, function(){ // success callback
           console.log("recordAudio():Audio Success");
       }, function(error){ // error callback
           alert('recording error : ' + error.message);
       });

       // start recording
       audioRec.startRecord();

       // stop recording after 10 seconds
       setTimeout(function(){
           audioRec.stopRecord();
           audioRec.release();
       }, 10000);
    }

});