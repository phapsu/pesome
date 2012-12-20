steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'pesome/models' )
.then( './views/init.ejs',
    './views/petopic.ejs',
    function($){

        /**
 * @class Pesome.Petopic.IsMember
 * @parent index
 * @inherits jQuery.Controller
 * Lists IsMember and lets you destroy them.
 */
        $.Controller('Pesome.Petopic.IsMember',
        /** @Static */
        {
            defaults : {}
        },
        /** @Prototype */
        {
            init : function(callback){
                $super = this;
                Pesome.Models.Petopic.isMember({},function(res){
                    if(res[0] == null){                                           
                        window.location.href="sorry_no_data.html";                    
                    }
                    else{
                        $super.element.html($super.view('init', res) ).listview('refresh');
                        $('#list_category').pesome_page_load_category();
                    }
                });
            }
        //
        //	'.destroy click': function( el ){
        //		if(confirm("Are you sure you want to destroy?")){
        //			el.closest('.petopic').model().destroy();
        //		}
        //	},
        //	"{Pesome.Models.Petopic} destroyed" : function(Petopic, ev, petopic) {
        //		petopic.elements(this.element).remove();
        //	},
        //	"{Pesome.Models.Petopic} created" : function(Petopic, ev, petopic){
        //		this.element.append(this.view('init', [petopic]))
        //	},
        //	"{Pesome.Models.Petopic} updated" : function(Petopic, ev, petopic){
        //		petopic.elements(this.element)
        //		      .html(this.view('petopic', petopic) );
        //	}
        });

    });