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
                $super.element.html($super.view('peticks', $obj)).listview('refresh');
            });
            
	}

});

});