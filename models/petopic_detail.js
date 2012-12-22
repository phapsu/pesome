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
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            var videoURI = params_post.video_url;
            
            var options = new FileUploadOptions();
            options.fileKey="video";
            options.fileName=videoURI.substr(videoURI.lastIndexOf('/')+1);
            options.mimeType="video/mpeg";
 
            var params = new Object();
            params.id = petopic_id;
            params.title = params_post.title;
            params.description = params_post.description;
 
            options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(videoURI, $api_url.petopic_post_video(), win, fail, options);  
        },
        create_audio : function(params_post, success, error){
            // do the ajax request
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            var audioURI = params_post.audio_url;
            
            var options = new FileUploadOptions();
            options.fileKey="audio";
            options.fileName=audioURI.substr(audioURI.lastIndexOf('/')+1);
            options.mimeType="audio/mp3";
 
            var params = new Object();
            params.id = petopic_id;
            params.title = params_post.title;
            params.description = params_post.description;
 
            options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(audioURI, $api_url.petopic_post_audio(), win, fail, options);  
        },
        create_photo : function(params_post, success, error){
            // do the ajax request
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            var imageURI = params_post.img_url;
            
            var options = new FileUploadOptions();
                options.fileKey="photo";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
 
                var params = new Object();
                params.id = petopic_id;
                params.photo_album_id = params_post.photo_album_id;
                params.title = params_post.title;
                 
                options.params = params;
                options.chunkedMode = false;
 
                var ft = new FileTransfer();
                ft.upload(imageURI, $api_url.petopic_post_photo(), win, fail, options);  
        },
        create_sharefile : function(params_post, success, error){
            // do the ajax request
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            var fileURI = params_post.file_url;
            
            var options = new FileUploadOptions();
                options.fileKey="files[]";
                options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
                options.mimeType="multipart/form-data";
 
                var params = new Object();
                params.id = petopic_id;
                params.content = params_post.content;
                 
                options.params = params;
                options.chunkedMode = false;
 
                var ft = new FileTransfer();
                ft.upload(fileURI, $api_url.petopic_post_sharefile(), win, fail, options);  
        },
        create_text : function(params, success, error){
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            
            data = {                
                'title': params.title, 
                'petopic_ids': petopic_id,
                'link': '',
                'tag': ''
                };
            return $.get($api_url.petick(),
                data, 
                function(res){
                    window.location.href = 'petopic_detail.html?petopic_id='+petopic_id;
                });
        },
        get_setting : function(params, success, error){
            // do the ajax request
            var petopic_id = params.petopic_id;
            return $.get($api_url.petopic_detail_get_setting(petopic_id), params, success, 'jsonp');
        },
        save_setting : function(params, success, error){
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            
            data = {                
                'id': petopic_id,
                'class_viewer_setting': params.class_viewer_setting, 
                'class_video_setting': params.class_video_setting, 
                'class_photo_setting': params.class_photo_setting, 
                'class_audio_setting': params.class_audio_setting, 
                'class_file_setting': params.class_file_setting, 
                'admin_verify_add_member': params.admin_verify_add_member                
                };
            return $.get($api_url.petopic_detail_save_setting(),
                data, 
                function(res){
                    window.location.href = 'petopic_detail.html?petopic_id='+petopic_id;
                });
        },
        add_me_in : function(params, success, error){
            var petopic_id = params.petopic_id;
            return $.get($api_url.petopic_add_me_in()+'&petopic_id='+petopic_id, function(res){
                    $('#AddmeinButton').attr('disabled', 'disabled');
                    alert(res.status.result);     
                });
        },
        follow : function(params, success, error){
            var petopic_id = params.petopic_id;
            return $.get($api_url.petopic_follow()+'&petopic_id='+petopic_id, function(res){
                    $('#FollowButton').attr('disabled', 'disabled');
                    alert(res.status.result);                    
                });
        }

    },
    /* @Prototype */
    {});

})