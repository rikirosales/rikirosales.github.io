
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if(isiPad){$("section.success").css("background-attachment","scroll")}
var apiKey  = 'NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1';
var userID  = 'frederickrosales';

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
        startNAv();
        
        //$('#page-preloader').fadeOut();


    });


    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    // from http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    var docElem = window.document.documentElement,
        //nav buttons
        nav = Array.prototype.slice.call(document.querySelectorAll('nav > a') ),
        // support transitions
        support = Modernizr.csstransitions,
        // transition end event name
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        docscroll = 0,
        // click event (if mobile use touchstart)
        clickevent = mobilecheck() ? 'touchstart' : 'click';

    function startNAv() {
        var showMenu = document.getElementById( 'showMenu' ),
            perspectiveWrapper = document.getElementById( 'perspective' ),
            container = perspectiveWrapper.querySelector( '.perspective-container' ),
            contentWrapper = container.querySelector( '.wrapper' );

        showMenu.addEventListener( clickevent, function( ev ) {
            ev.stopPropagation();
            ev.preventDefault();
            docscroll = scrollY();
            // change top of contentWrapper
            //contentWrapper.style.top = docscroll * -1 + 'px';
            // mac chrome issue:
           // document.body.scrollTop = document.documentElement.scrollTop = 0;
            // add modalview class
            classie.add( perspectiveWrapper, 'modalview' );
            // animate..
            setTimeout( function() { classie.add( perspectiveWrapper, 'animate' ); }, 25 );
        });

        nav.forEach(function(el,i){
            
            el.addEventListener(clickevent,function(ev){
              
                var onEndTransFn = function( ev ) {
                    if( support && ( ev.target.className !== 'perspective-container' || ev.propertyName.indexOf( 'transform' ) == -1 ) ) return;
                    this.removeEventListener( transEndEventName, onEndTransFn );
                    classie.remove( perspectiveWrapper, 'modalview' );
                    // mac chrome issue:
                   // document.body.scrollTop = document.documentElement.scrollTop = docscroll;
                    // change top of contentWrapper
                    //contentWrapper.style.top = '0px';
                };
                if( support ) {
                    perspectiveWrapper.addEventListener( transEndEventName, onEndTransFn );
                }
                else {
                    onEndTransFn.call();
                }

                classie.remove( perspectiveWrapper, 'animate' );
               setTimeout( function() { window.scrollTo(0,$('#portfolio').offset().top)}, 500 );
                ev.preventDefault();
                
            })
        })
        
        container.addEventListener( clickevent, function( ev ) {
            if( classie.has( perspectiveWrapper, 'animate') ) {
                var onEndTransFn = function( ev ) {
                    if( support && ( ev.target.className !== 'perspective-container' || ev.propertyName.indexOf( 'transform' ) == -1 ) ) return;
                    this.removeEventListener( transEndEventName, onEndTransFn );
                    classie.remove( perspectiveWrapper, 'modalview' );
                    // mac chrome issue:
                    document.body.scrollTop = document.documentElement.scrollTop = docscroll;
                    // change top of contentWrapper
                    contentWrapper.style.top = '0px';
                };
                if( support ) {
                    perspectiveWrapper.addEventListener( transEndEventName, onEndTransFn );
                }
                else {
                    onEndTransFn.call();
                }
                classie.remove( perspectiveWrapper, 'animate' );
            }
        });

        perspectiveWrapper.addEventListener( clickevent, function( ev ) { return false; } );
    }



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



     //scene.addIndicators();

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
              $('nav>a').eq(1).click()  
             
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
