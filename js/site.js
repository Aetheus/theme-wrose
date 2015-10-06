
$("document").ready(function (){

    $(".navbar-nav > li > a").on("click", function(ev){
        $(".navbar-toggle").click();
        console.log("hi");
    });

});
