steal('jquery/model', function(){

/**
 * @class Pesome.Models.Petopic
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend petopic services.  
 */
$.Model('Pesome.Models.Petopic',
/* @Static */
{
	
	findAll : function(params, success, error){
		// do the ajax request
		return $.get($api_url.petopic(),
		  params, 
		  success,
		  'jsonp');
	},
        myPetopic : function(params, success, error){
		// do the ajax request
		return $.get($api_url.petopic_mypetopic(),
		  params, 
		  success,
		  'jsonp');
	},
        isMember : function(params, success, error){
		// do the ajax request
		return $.get($api_url.petopic_ismember(),
		  params, 
		  success,
		  'jsonp');
	},
        myFollow : function(params, success, error){
		// do the ajax request
		return $.get($api_url.petopic_myfollow(),
		  params, 
		  success,
		  'jsonp');
	},
        getAllCategory : function(params, success, error){
		// do the ajax request
		return $.get($api_url.category(),
		  params, 
		  success,
		  'jsonp');
	},
        newPetopic : function(params_post, success, error){
            
            var imageURI = params_post.img_url;
            
            var options = new FileUploadOptions();
                options.fileKey="classroom_image";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
 
                var params = new Object();
                params.category_id = params_post.category_id;
                params.title = params_post.title;
                params.description = params_post.description;
 
                options.params = params;
                options.chunkedMode = false;
 
                var ft = new FileTransfer();
                ft.upload(imageURI, $api_url.petopic(), win, fail, options);  
        },
        deletePetopic: function(){
                
                var petopic_id = $urlUtility.getVars()["petopic_id"];
                return $.get($api_url.petopic()+'&id='+petopic_id,
		  function(res){
                      var result = res.status.result;
                      if(result=='Petopic has been deleted successfully'){
                          window.location.href = 'petopics.html';
                      }else{
                          return result;
                      }
                });
        },
        updatePetopic : function(params_post, success, error){
            var imageURI = params_post.img_url;
            
            if(imageURI!=''){
                var options = new FileUploadOptions();
                options.fileKey="classroom_image";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
 
                var params = new Object();
                params.id = params_post.id;
                params.category_id = params_post.category_id;
                params.title = params_post.title;
                params.description = params_post.description;
 
                options.params = params;
                options.chunkedMode = false;
 
                var ft = new FileTransfer();
                ft.upload(imageURI, $api_url.petopic(), win, fail, options);
            
                
                window.location.href = 'petopics.html';
            }
            else{
                data = {
                    'id': params_post.id,
                    'category_id': params_post.category_id, 
                    'title': params_post.title, 
                    'description': params_post.description
                };
                return $.get($api_url.petopic(),
                    data, 
                    function(res){
                        if (res.hasOwnProperty('error')) {
                            return res.error;                        
                        }
                        else{
                            window.localStorage.setItem("access_token", res.access_token);
                            $access_token = res.access_token;
                            window.location.href = 'petopics.html';
                        }
                    });
            }
        },
        photo_album: function(params, success, error){
                
                return $.get($api_url.petopic_photo_album()+'&id='+params.petopic_id,
		  params, 
		  success,
		  'jsonp');
        }
},
/* @Prototype */
{});

})