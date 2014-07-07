
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if(isiPad){$("section.success").css("background-attachment","scroll")}
var apiKey  = 'NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1';
var userID  = 'rikirosales';

var loadMore = document.getElementById("loadMore");
loadMore.addEventListener("click",loadMoreProject);

init();
//loadMoreProject();
function init() {
    //if( document.querySelector('#username').value){
    //    userID = document.querySelector('#username').value
    //}
    //submitBtn.addEventListener("click",submitBtnClick);
    var behanceUserAPI = 'http://www.behance.net/v2/users/'+ userID +'?callback=?&api_key='+ apiKey;
    
    projectIDInit(475570)
        $.getJSON(behanceUserAPI, function(user) {
            
            var data = JSON.stringify(user);
            sessionStorage.setItem('behanceUser', data);
            setUserTemplate();
            setAboutTemplate();

        });

        function setUserTemplate() {
            Handlebars.registerHelper('noop', function() {
            return "rikis";
            });        

	        var userData    = JSON.parse(sessionStorage.getItem('behanceUser')),
	        getTemplate = $('#profile-template').html(),
	        template    = Handlebars.compile(getTemplate),
	        result      = template(userData);

	        $('div.header').html(result);
            cbpAnimatedHeader();
            $("#copyright").html(userData.user.display_name)

        };
        function setAboutTemplate() {
            var userData    = JSON.parse(sessionStorage.getItem('behanceUser')),
            getTemplate = $('#about-template').html(),
            template    = Handlebars.compile(getTemplate),
            result      = template(userData);
            $('div#aboutContent').html(result);
        };
    };


function projectIDInit(projectID){
    var behanceProjectIDAPI = 'http://www.behance.net/v2/projects/'+ projectID +'?callback=?&api_key='+ apiKey;   
    $.getJSON(behanceProjectIDAPI, function(user) {
            
            var data = JSON.stringify(user);
           sessionStorage.setItem('behanceProjectID', data);
            setProjectIDTemplate();
        });

        function setProjectIDTemplate() {
            var userData    = JSON.parse(sessionStorage.getItem('behanceProjectID')),
            getTemplate = $('#projectID-template').html(),
            template    = Handlebars.compile(getTemplate),
            result      = template(userData);
            $('div.modal-content').eq(0).html(result);
            //alert(userData)
            
            
        };
}


function loadMoreProject(event){
    var behanceProjectsAPI = 'http://www.behance.net/v2/users/'+ userID +'/projects?callback=?&api_key='+ apiKey;
    $("#loadMore img").show();
    $.getJSON(behanceProjectsAPI, function(user) {
            
            var data = JSON.stringify(user);
            sessionStorage.setItem('behanceProjects', data);
            setProjectTemplate();
            $("#loadMore img").hide();
            //console.log(result)
        })
     .done(function() {
       $("#loadMore ").hide();

     });

    function setProjectTemplate() {
        var userData    = JSON.parse(sessionStorage.getItem('behanceProjects')),
        getTemplate = $('#project-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(userData);
        $('#projects').html(result);
        //$(".img-responsive").addClass("imgAnimation")
    };
    event.preventDefault();
}    
        




