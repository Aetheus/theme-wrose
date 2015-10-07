
$("document").ready(function (){

    $(".navbar-nav > li > a").on("click", function(ev){
        $(".navbar-toggle").click();
        console.log("hi");
    });

    /*
    var officeLocation = new google.maps.LatLng(3.114588, 101.612075);

    function initialize() {
      var mapProp = {
        center:officeLocation,
        zoom:20,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    var marker=new google.maps.Marker({
        position:officeLocation,
    });*/

    var myCenter=new google.maps.LatLng(3.114362, 101.612465);
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


    $(".insurances").on("click", function(ev){

        var $thisInsurance =  $(this);

        $("#insurance-list > li").removeClass("active");
        $thisInsurance.parent().addClass("active");

        $("#insurance-content > h2").text($thisInsurance.text());

        ev.preventDefault();
        ev.stopPropagation();

    });

});
