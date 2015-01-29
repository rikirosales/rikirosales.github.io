
var apiKey  = 'NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1';
var userID  = 'ionman';
 (function() {
 var behanceUserAPI = 'http://www.behance.net/v2/users/'+ userID +'?callback=?&api_key='+ apiKey;
    
        $.getJSON(behanceUserAPI, function(user) {
            
            var data = JSON.stringify(user);
            sessionStorage.setItem('behanceUser', data);
            setUserTemplate();
        });

        function setUserTemplate() {
	        var userData    = JSON.parse(sessionStorage.getItem('behanceUser')),
	        getTemplate = $('#profile-template').html(),
	        template    = Handlebars.compile(getTemplate),
	        result      = template(userData);
	        $('#header').html(result);
    	};

})();


