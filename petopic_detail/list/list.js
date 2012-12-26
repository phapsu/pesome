steal(  'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'pesome/models' )
.then(
    './views/init.ejs',
    function($){

        /**
 * @class Pesome.PetopicDetail.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists petopic_details and lets you destroy them.
 */
        $.Controller('Pesome.PetopicDetail.List',
        /** @Static */
        {
            defaults : {}
        },
        /** @Prototype */
        {
            init : function(){
                var petopic_id = $urlUtility.getVars()["id"];
                var $super = this;
                Pesome.Models.User.is_viewable({
                    petopic_id: petopic_id
                },function(res){

                    /**
                     * pesome 1: is follower
                     * pesome 2: is not follower
                     */
                    if(res.status.code=='pesome_1'){
                        //duoc phep view petopic

                        Pesome.Models.PetopicDetail.findByTopicId({
                            petopic_id: petopic_id
                        },function(res){
                            $auth_code = res.petopic.membership.code;
                            if($auth_code != AUTH_ADMIN){                                
                                $('#setting-link').find('a').addClass('ui-disabled');
                            }
                            $super.element.html($super.view('init', res)).find("img").lazyload({
                                effect : "fadeIn"
                            });
                            
                        });
                    }else{
                        $('<div>').simpledialog2({
                        mode: 'button',
                        headerText: 'Pesome',
                        headerClose: true,
                        buttonPrompt: res.status.message,
                        buttons : {
                          'OK': {
                            click: function () { 
                                 history.back();
                                return false;
                            }
                          }
                        }
                      })
                    }
                });
            },
            "#FollowButton click" : function() {
                var petopic_id = $('#FollowButton').attr('petopic_id');
                Pesome.Models.PetopicDetail.follow({'petopic_id': petopic_id},
                    function(res){
                        $('#FollowButton').attr('disabled', 'disabled');
                        msg = res.result.message;
                        $('<div>').simpledialog2({
                            mode: 'blank',
                            headerText: '',
                            headerClose: true,
                            fullScreen: false,
                            fullScreenForce: false,
                            'useModal':true,
                            blankContent : '<div class="popupMsgContainer">'+msg+'</div>'
                        });
                    }
                );
            },
            "#UnFollowButton click" : function() {
                var petopic_id = $('#UnFollowButton').attr('petopic_id');
                Pesome.Models.PetopicDetail.unfollow({'petopic_id': petopic_id},
                    function(res){
                        $('#UnFollowButton').attr('disabled', 'disabled');
                        msg = res.status.message;
                        $('<div>').simpledialog2({
                            mode: 'blank',
                            headerText: '',
                            headerClose: true,
                            fullScreen: false,
                            fullScreenForce: false,
                            'useModal':true,
                            blankContent : '<div class="popupMsgContainer">'+msg+'</div>'
                        });
                    },
                    function(e){
                        $('<div>').simpledialog2({
                            mode: 'blank',
                            headerText: '',
                            headerClose: true,
                            fullScreen: false,
                            fullScreenForce: false,
                            'useModal':true,
                            blankContent : '<div class="popupMsgContainer">UnFollow was not successful.</div>'
                        });
                    }
                );
            },
            "#AddMeInButton click" : function() {
                var petopic_id = $('#AddMeInButton').attr('petopic_id');
                Pesome.Models.PetopicDetail.add_me_in({'petopic_id': petopic_id},
                    function(res){
                        $('#AddMeInButton').attr('disabled', 'disabled');
                        msg = res.result.message;
                        $('<div>').simpledialog2({
                            mode: 'blank',
                            headerText: '',
                            headerClose: true,
                            fullScreen: false,
                            fullScreenForce: false,
                            'useModal':true,
                            blankContent : '<div class="popupMsgContainer">'+msg+'</div>'
                        });
                    }
                );
            },
            "#RemoveMeOutButton click" : function() {
                var petopic_id = $('#RemoveMeOutButton').attr('petopic_id');
                Pesome.Models.PetopicDetail.remove_me_out({'petopic_id': petopic_id},
                    function(res){                        
                        $('#RemoveMeOutButton').attr('disabled', 'disabled');
                        msg = res.status.message;
                        $('<div>').simpledialog2({
                            mode: 'blank',
                            headerText: '',
                            headerClose: true,
                            fullScreen: false,
                            fullScreenForce: false,
                            'useModal':true,
                            blankContent : '<div class="popupMsgContainer">'+msg+'</div>'
                        });
                    },
                    function(e){
                        $('<div>').simpledialog2({
                            mode: 'blank',
                            headerText: '',
                            headerClose: true,
                            fullScreen: false,
                            fullScreenForce: false,
                            'useModal':true,
                            blankContent : '<div class="popupMsgContainer">Remove was not successful.</div>'
                        });
                    }
                );
            }


        });

    });