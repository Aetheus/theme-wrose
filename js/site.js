
$("document").ready(function (){


    /*on mobile screens, collapses navbar after a link is clicked*/
    $(".navbar-nav * a").not("a.dropdown-toggle").on("click", function(ev){
        $(".navbar-toggle").filter(":visible").click(); //only clicks the navbar toggle if its visible - and if it's on a large screen, it won't be
    });

    /*smooth scroll for navbar, plus fixes navbar dropdown*/
    $(".navbar-nav * a").on('click', function(event){
        event.preventDefault();

        if( $(this).data("target") != undefined ){
            var hash = "#insurance-policies";
        }else{
            var hash = this.hash;
        }

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    });

    /*when the navbar option for an insurance policy is clicked, go there and simulate clicking on the pill for it*/
    $("#navbar-insurance-dropdown-list > li > a").on("click", function (ev){
        var $thisLink = $(this);
        $('a.insurance-pill[href = '+$thisLink.data("target")+']').click();
    });

    /*g-maps API stuff*/
    var myCenter=new google.maps.LatLng(3.114367, 101.612444);
    function initialize()
    {
        var mapProp = {
          center:myCenter,
          zoom:18,
          mapTypeId:google.maps.MapTypeId.ROADMAP
          };

        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

        var marker=new google.maps.Marker({
          position:myCenter,
        });

        marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);


    /*Disable auto-carousel if user clicks on either the left/right controls or the indicators*/
    $(".carousel-control, .carousel-indicators > li").click(function (){
        $(".carousel").carousel("pause");
    });

    /*quick hack to fix the non-functioning carousel indicators*/
    $("#news-carousel").on("slid.bs.carousel", function (){
        var itemPos = 0;
        $("#news-carousel > .carousel-inner > .item").each(function(){
            console.log("hi");
            var $thisItem = $(this);
            if ($thisItem.hasClass("active")){
                $("li[data-target='#news-carousel']").each(function(){
                    if( $(this).data("slide-to") == itemPos ){
                        $(this).addClass("active");
                    }else{
                        $(this).removeClass("active");
                    }
                });
            }
            itemPos++;
        });
    });
    $(".carousel-indicators > li").on("click", function (ev){
        $(this).addClass("active").siblings().removeClass("active");
    })

    /*open g-maps link in phone app where applicable*/
    $("#googleMap").on("click", function() {

        // if on an iOS device:
        if( (navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)){
            //window.open("maps://maps.google.com/maps?daddr=3.114367, 101.612444&amp;ll=");
            window.open("http://maps.apple.com/maps/dir//3.114367,101.612444/@3.114198,101.6124309,20z");
        }else{
            window.open("http://www.google.com/maps/dir//3.114367,101.612444/@3.114198,101.6124309,20z");
        }
    });
});
