steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    'pesome/models' )
.then('./views/init.ejs', function($){

    /**
 * @class Pesome.PetopicDetail.CreatePhoto
 * @parent index
 * @inherits jQuery.Controller
 * CreatePhoto
 */
    $.Controller('Pesome.PetopicDetail.CreatePhoto',
    /** @Prototype */
    {
        init : function(){
            $super = this;
            var petopic_id = $urlUtility.getVars()["petopic_id"];
            Pesome.Models.Petopic.photo_album({'petopic_id': petopic_id},function(res){
                
                $super.element.html($super.view('init', res)); 
                $('#create-photo-page').trigger('create');
            });
        },
        submit : function(el, ev){
            ev.preventDefault();
            this.element.find('[type=submit]').val('Creating...')
            new Pesome.Models.PetopicDetail.create_photo(el.formParams()).save(this.callback('saved'));
        },
        saved : function(){
            this.element.find('[type=submit]').val('Create');
            this.element[0].reset()
        }
    })

});