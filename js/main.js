
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if(isiPad){$("section.success").css("background-attachment","scroll")}
var apiKey  = 'NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1';
var userID  = 'rikirosales';


init();
loadMoreProject();
function addScrollMagic() {
    // Init Controller
    var scrollMagicController = new ScrollMagic();
    // Create Animation for 0.5s
    

    var tween = new TimelineMax({yoyo: true})
    .add(TweenMax.to('h2.portfolioAnimate', .3, {opacity:1,marginTop: 0}))
    .add(TweenMax.to('.star-primary.portfolioAnimate', .3, {opacity:1, left:0}))
    .add(TweenMax.to('#portfolioMessage', .2, {opacity:1,bottom:10}))
    .add(TweenMax.to('.portfolio-item', .2, {opacity:1,bottom:10}))
    ;




    // Portfolio
    var scene = new ScrollScene({
        triggerElement: '#portfolio',
        offset: 100 /* offset the trigger 150px below #scene's top */
    })
    .setTween(tween)
    .addTo(scrollMagicController);


    //About
    var tween2 = new TimelineMax({yoyo: true})
    .add(TweenMax.to('h2.aboutAnimate', .2, {opacity:1,marginTop: 0}))
    .add(TweenMax.to('.aboutBorder', .2, {opacity:1,marginTop: 0}))
    .add(TweenMax.to('#aboutContent', .2, {opacity:1,marginTop: 0}))
    ;



    // Create the Scene and trigger when visible with ScrollMagic
    var scene = new ScrollScene({
        triggerElement: '#about',
<<<<<<< HEAD
        offset: 200 /* offset the trigger 150px below #scene's top */
=======
        offset: 150 /* offset the trigger 150px below #scene's top */
>>>>>>> 486e4cf73e3652f7e3d6a539b2a804189397a79c
    })
    .setTween(tween2)
    .addTo(scrollMagicController);



     scene.addIndicators();

};

function toolsClick(e){
    TweenMax.to('h3.aboutAnimate', .8, {opacity:1,marginTop: 118});
    TweenMax.to('ul.logo-icons.about li', .8, {opacity:1,delay:.6});
    e.preventDefault();
}
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
    $(".overlay").show();
    $.getJSON(behanceProjectsAPI, function(user) {
            
            var data = JSON.stringify(user);
            sessionStorage.setItem('behanceProjects', data);
            setProjectTemplate();
            $("#loadMore img").hide();
            //console.log(result)
        })
     .done(function() {
        setTimeout( function(){
            $("#loadMore ").hide();
            $(".overlay").addClass("close");
            $("img#profileImage").removeClass("riki"); 
            addScrollMagic();    
            
             setTimeout( function(){$(".overlay").remove();},2000);
        }, 2000 );
       

     });

    function setProjectTemplate() {
        var userData    = JSON.parse(sessionStorage.getItem('behanceProjects')),
        getTemplate = $('#project-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(userData);
        $('#projects').html(result);

         $("#projects").owlCarousel({
           //singleItem:true,
           items:3,
           itemsScaleUp:true,
           responsive:true,
           lazyLoad:true,
           navigation : true

         });
        //$(".img-responsive").addClass("imgAnimation")
    };

}    
        




