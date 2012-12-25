steal('jquery/model', function(){

    /**
 * @class Pesome.Models.PetopicDetail
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend petopic_detail services.
 */
    $.Model('Pesome.Models.PetopicDetail',
    /* @Static */
    {
        findByTopicId : function(params, success, error){
            // do the ajax request
            var petopic_id = params.petopic_id;
            return $.get($api_url.petopic_detail(petopic_id), params, success, 'jsonp');
        },
        findAllPetick : function(params, success, error){
            // do the ajax request
            var petopic_id = params.petopic_id;
            return $.get($api_url.petopic_getpeticks(petopic_id), params, success, 'jsonp');
        },
        create_video : function(params_post, success, error){
            // do the ajax request
            var videoURI = params_post.video_url;

            var options = new FileUploadOptions();
            options.fileKey="video";
            options.fileName=videoURI.substr(videoURI.lastIndexOf('/')+1);
            options.mimeType="video/mpeg";

            var params = new Object();
            params.id = params_post.petopic_id;
            params.title = params_post.title;
            params.description = params_post.description;

            options.params = params;
            options.chunkedMode = false;

            var ft = new FileTransfer();
            ft.upload(videoURI, $api_url.petopic_post_video(), 
                function(r){
                    console.log("Code = " + r.responseCode);
                    console.log("Response = " + r.response);
                    console.log("Sent = " + r.bytesSent);
                    success(r);
                },
                function(e){
                    console.log("An error has occurred: Code = " + e.code);
                    error(e);
                }, options);
        },
        create_audio : function(params_post, success, error){
            // do the ajax request
            var audioURI = params_post.audio_url;

            var options = new FileUploadOptions();
            options.fileKey="audio";
            options.fileName=audioURI.substr(audioURI.lastIndexOf('/')+1);
            options.mimeType="audio/mp3";

            var params = new Object();
            params.id = params_post.petopic_id;
            params.title = params_post.title;
            params.description = params_post.description;

            options.params = params;
            options.chunkedMode = false;

            var ft = new FileTransfer();
            ft.upload(audioURI, $api_url.petopic_post_audio(), 
                function(r){
                    console.log("Code = " + r.responseCode);
                    console.log("Response = " + r.response);
                    console.log("Sent = " + r.bytesSent);
                    success(r);
                },
                function(e){
                    console.log("An error has occurred: Code = " + e.code);
                    error(e);
                }, options);
        },
        create_photo : function(params_post, success, error){
            // do the ajax request
            var imageURI = params_post.img_url;

            var options = new FileUploadOptions();
            options.fileKey="photo";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";

            var params = new Object();
            params.id = params_post.petopic_id;
            params.photo_album_id = params_post.photo_album_id;
            params.title = params_post.title;

            options.params = params;
            options.chunkedMode = false;

            var ft = new FileTransfer();
            ft.upload(imageURI, $api_url.petopic_post_photo(), 
                function(r){
                    console.log("Code = " + r.responseCode);
                    console.log("Response = " + r.response);
                    console.log("Sent = " + r.bytesSent);
                    success(r);
                },
                function(e){
                    console.log("An error has occurred: Code = " + e.code);
                    error(e);
                }, options);
        },
        create_sharefile : function(params_post, success, error){
            // do the ajax request
            var fileURI = params_post.file_url;

            var options = new FileUploadOptions();
            options.fileKey="files[]";
            options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
            options.mimeType="multipart/form-data";

            var params = new Object();
            params.id = params_post.petopic_id;
            params.content = params_post.content;

            options.params = params;
            options.chunkedMode = false;

            var ft = new FileTransfer();
            ft.upload(fileURI, $api_url.petopic_post_sharefile(), 
                function(r){
                    console.log("Code = " + r.responseCode);
                    console.log("Response = " + r.response);
                    console.log("Sent = " + r.bytesSent);
                    success(r);
                },
                function(e){
                    console.log("An error has occurred: Code = " + e.code);
                    error(e);
                }, options);
        },
        create_text : function(params, successCallback, errorCallback){
            $data = {
                'title': params.title,
                'petopic_ids': params.petopic_id,
                'link': '',
                'tag': ''
            };

            return $.ajax({
                type: 'POST',
                url: $api_url.petick(),
                data: $data,
                headers: {
                    'Authorization': 'Bearer ' + $access_token
                },
                success: function (res) {
                    successCallback(res);
                },
                error: function(e) {
                    errorCallback(e);
                }
            });

        },
        get_setting : function(params, success, error){
            // do the ajax request
            var petopic_id = params.petopic_id;
            return $.get($api_url.petopic_detail_get_setting(petopic_id), params, success, 'jsonp');
        },
        save_setting : function(params, success, error){
            return $.ajax({
                type: 'POST',
                url: $api_url.petopic_detail_save_setting(),
                data: params,
                headers: {
                    'Authorization': 'Bearer ' + $access_token
                },
                success: function (res) {
                    success(res);
                },
                error: function(e) {
                    error(e);
                }
            });
        },
        add_me_in : function(params, callbackFunc){
            var petopic_id = params.petopic_id;
            return $.get($api_url.petopic_add_me_in()+'&id='+petopic_id, callbackFunc, 'jsonp');
        },
        follow : function(params, callbackFunc){
            var petopic_id = params.petopic_id;           
            return $.get($api_url.petopic_follow()+'&id='+petopic_id, callbackFunc, 'jsonp');
        },
        unfollow : function(params, callbackFunc){
            var petopic_id = params.petopic_id;            
            return $.get($api_url.petopic_unfollow()+'&id='+petopic_id, callbackFunc, 'jsonp');
        }

    },
    /* @Prototype */
    {});

})