
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if(isiPad){$("section.success").css("background-attachment","scroll")}
var apiKey  = 'NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1';
var userID  = 'rikirosales';

//http://www.behance.net/v2/users/rikirosales?callback=?&api_key=NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1
//http://www.behance.net/v2/projects/475570?callback=?&api_key=NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1
//http://www.behance.net/v2/users/rikirosales/projects?callback=?&api_key=NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1

// Cache the Dom
    window.scrollTo(0, 0);
    dom = { 

        window   : $(window),

        document : $(document),

        html     : $('html'),

        body     : $('body')

    }
    dom.window.load(function(){

        //Intro();
        init();
        loadMoreProject();

        
        //$('#page-preloader').fadeOut();

    });





function addScrollMagic() {
    // Init Controller
    var scrollMagicController = new ScrollMagic();
    // Create Animation for 0.5s
    

    var tween = new TimelineMax({yoyo: true})
    .add(TweenMax.to('h2.portfolioAnimate', .3, {opacity:1,marginTop: 0}), 0)
    .add(TweenMax.to('.star-primary.portfolioAnimate', .3, {opacity:1, left:0}),0)
    .add(TweenMax.to('#portfolioMessage', .3, {opacity:1,bottom:10}), "+=0.2")
    .add(TweenMax.to('.portfolio-item', .5, {opacity:1,bottom:10}), "+=0.2")
    ;
  /*   function getAnimation(){
       // TweenMax.to('h2.portfolioAnimate', .3, {opacity:1,marginTop: 0});
          TweenLite.set('h2.portfolioAnimate', {x:-30, y:300})
    }
    var tween = new TimelineMax();
    tween.add(getAnimation(),.5);*/
    
    
   


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

        offset: 150 /* offset the trigger 150px below #scene's top */
    })
    .setTween(tween2)
    .addTo(scrollMagicController);




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
    
    projectIDInit(1)
          $.getJSON("json/profile.json", function(user) {
        //$.getJSON(behanceUserAPI, function(user) {
            console.log(user)
            var data = JSON.stringify(user);

            sessionStorage.setItem('behanceUser', data);
            setUserTemplate();
            setAboutTemplate();

        }).error(function(jqXhr, textStatus, error) {
                alert("ERROR on profile:  " + textStatus + ", " + error);
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
    //var behanceProjectIDAPI = 'http://www.behance.net/v2/projects/'+ projectID +'?callback=?&api_key='+ apiKey;   
   
    $.getJSON("json/projectItem"+projectID+".json", function(user) {
   // $.getJSON(behanceProjectIDAPI, function(user) {
            
            var data = JSON.stringify(user);
           sessionStorage.setItem('behanceProjectID', data);
            setProjectIDTemplate();
        }).error(function(jqXhr, textStatus, error) {
                alert("ERROR in projectItem: " + textStatus + ", " + error);
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
    $.getJSON("json/projects.json", function(user) {
    //$.getJSON(behanceProjectsAPI, function(user) {
            
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
            $("body").removeClass("pageLoading");
             setTimeout( function(){$(".overlay").remove();},1000);
        }, 2000 );
       

     }).error(function(jqXhr, textStatus, error) {
                alert("ERROR in load more: " + textStatus + ", " + error);
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
           responsive:true,
           lazyLoad:true,
           navigation : true
         });
    };
}    
