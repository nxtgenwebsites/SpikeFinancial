var owl = $(".owl-carousel");

$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100000,
    nav: false,
    // margin:40,
    navnavText:['next', 'previous'],
    loop: true,
    responsiveClass:true,
    responsive : {
        0 : {
            items:1,
            nav:false,
        },
        768 : {
            items:2,
            nav:false,
        },
        992 : {
            items:3,
            nav:false,
        },
        1200 : {
            items: 4,
        }
    }
});


$(".next-btn").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".prev-btn").click(function () {
    owl.trigger("prev.owl.carousel");
});