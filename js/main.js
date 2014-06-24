
var apiKey  = 'NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1';
var userID  = 'bigmints';
 (function() {
 var behanceUserAPI = 'http://www.behance.net/v2/users/'+ userID +'?callback=?&api_key='+ apiKey;
    
        $.getJSON(behanceUserAPI, function(user) {
            
            var data = JSON.stringify(user);
            sessionStorage.setItem('behanceUser', data);
            setUserTemplate();
            console.log(data)
        });

        function setUserTemplate() {
	        var userData    = JSON.parse(sessionStorage.getItem('behanceUser')),
	        getTemplate = $('#profile-template').html(),
	        template    = Handlebars.compile(getTemplate),
	        result      = template(userData);
	        $('div.header').html(result);
	        console.log(result)
    	};

})();


