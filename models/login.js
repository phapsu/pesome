steal('jquery/model', function(){

    /**
 * @class Pesome.Models.Login
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend login services.  
 */
    $.Model('Pesome.Models.Login',
    /* @Static */
    {
        Auth : function(params, success, error){
            data = {
                'client_id': $client_id, 
                'client_secret': $client_secret, 
                'email': params.email, 
                'password': params.password
                };
            return $.get($api_url.auth(),
                data, 
                function(res){
                    if (res.hasOwnProperty('error')) {
                        return res.error;                        
                    }
                    else{
                        window.localStorage.setItem("access_token", res.access_token);
                        $access_token = res.access_token;
                        window.location.href = 'index.html';
                    }
                });
        }
    },
    /* @Prototype */
    {});

})