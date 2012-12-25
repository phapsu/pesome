steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    'pesome/models' )
.then('./views/init.ejs', function($){

    /**
 * @class Pesome.Comment.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates comments
 */
    $.Controller('Pesome.Comment.Create',
    /** @Prototype */
    {
        init : function(){
            this.element.html(this.view());

        },
        '#btSubmitComment click' : function(el){
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            var tick_id = $urlUtility.getVars()["tick_id"];
            var params = {
                'petopic_id':petopic_id,
                'tick_id':tick_id,
                'comment':$('#commentInput').val()
                };
            var $userInfo = null;
            el.attr('disabled', true);


            if($('#commentInput').val() == null || $('#commentInput').val() == EMPTY){
                $('#commentLabel').addClass(MISSING);
                el.attr('disabled', false);
            }else{
                Pesome.Models.Comment.create(params,
                    function(commentRes){
                        el.attr('disabled', false);
                        Pesome.Models.User.userInfo(function(userInfo){
                            $('#comment_list').append('<li><img src="'+$full_base_url+userInfo.user.image+'" alt="'+userInfo.user.name+'"><h3>'+commentRes.comment.comment+'</h3><p><small>'+userInfo.user.name+'</small></p></li>').listview('refresh');
                            $('#commentInput').val('');
                            $('#popupCommentClose').trigger('click');
                        });
                    },
                    function(e){
                        el.attr('disabled', false);
                        $('#commentInput').val('');
                        $('#popupCommentClose').trigger('click');
                    }
                );
            }
        }
    })

});