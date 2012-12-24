steal(  'jquery/controller',
        'jquery/view/ejs',
        'jquery/controller/view',
        'pesome/models' )
.then( 
        './views/peticks.ejs',  
        './views/photo_album.ejs',  
        './views/video.ejs',  
        './views/link.ejs',  
        './views/share_file.ejs',  
        './views/audio.ejs',  
        './views/text.ejs',  
        './views/userInfo.ejs',  
        './views/petickStats.ejs',  
        function($){


$.Controller('Pesome.PetopicDetail.PeticksList',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            var petopic_id = $urlUtility.getVars()["id"];
            var $super = this;            
            
            Pesome.Models.PetopicDetail.findAllPetick({petopic_id: petopic_id},function(res){                
                $obj = {'petopic_id':petopic_id, 'peticks':res};
                $super.element.html($super.view('peticks', $obj)).find("img").lazyload({
                    effect : "fadeIn",
                    threshold : 200
                });
                
            });
            
	},
        '.open-petick-detail click' : function(el){

            var url = el.attr('data-href');
//            $.mobile.changePage( url, { transition: "slideup"} );
                                
            $('<div>').simpledialog2({
                    mode: 'blank',
                    headerText: el.html(),
                    headerClose: true,
                    fullScreen: true,
                    fullScreenForce: true,
                    blankContent : '<iframe src="'+url+'" style="width:100%; height:100%"></iframe>'
                }); 
            
//            $.mobile.loading('show');
//            Pesome.Models.Petick.findOne({'petopic_id': petopic_id, 'tick_id' : tick_id},function(res){
//                
//                $.mobile.loading('hide');
//                $('#petick-content').html('//pesome/petick/link/views/init.ejs', res.petick, function(){ 
//                    //$('#comment_action_form').pesome_comment_create();               
//                    
//                    Pesome.Models.Comment.findByTickId({'tick_id' : tick_id},function(res){
//                        $('#comment_list').html('//pesome/comment/list/views/init.ejs', res).listview('refresh');
//                        $('#petick-link-page').trigger('create');
//                    });
//                    
//                    $('<div>').simpledialog2({
//                        mode: 'blank',
//                        headerText: 'Some Stuff',
//                        headerClose: true,
//                        fullScreen: true,
//                        fullScreenForce: true,
//                        blankContent : $('#petick-content').html()
//                    });                   
//                    
//                });
//            });
        }
});

});