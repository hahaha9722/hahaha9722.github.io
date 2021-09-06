$(function(){
/////////////////start////////////////////
$("#Myportfolio").fullpage({
    anchors:['m01', 'm02', 'm03', 'm04', 'm05', 'm06', 'm07', 'm08', 'm09'],
	//navigation: true,
    afterLoad: function(origin, destination, direction){
        //console.log(destination.index);
        var idx=destination.index;
        $(".section").eq(idx).addClass("on").siblings().removeClass("on");
        $("nav li").eq(idx).addClass("on").siblings().removeClass("on");
    },
});

$("#intro").YTPlayer({
    containment:'.m01',
    autoPlay:true,
    mute:true,
    showControls: false,
    showYTLogo: false,
    playOnlyIfVisible: true,
    //realfullscreen: true,
    anchor: 'center,center',
    //ratio: '2/3',
});

//포폴동영상제어
$("#portfolio01").YTPlayer({
    containment:'.portfolio01',
    autoPlay:true,
    mute:true,
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: true,
    anchor: 'center,center',
    //ratio: '2/3',
    optimizeDisplay:false,
});

$(".m02 .xi-play").on("click", function(){
    $("#portfolio01").YTPPlay();
});

$(".m02 .xi-pause").on("click", function(){
    $("#portfolio01").YTPPause();
});


//포폴동영상제어
$("#portfolio02").YTPlayer({
    containment:'.portfolio02',
    autoPlay:true,
    mute:true,
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: true,
    anchor: 'center,center',
    //ratio: '2/3',
    optimizeDisplay:false,
});

$(".m03 .xi-play").on("click", function(){
    $("#portfolio02").YTPPlay();
});

$(".m03 .xi-pause").on("click", function(){
    $("#portfolio02").YTPPause();
});


//포폴동영상제어
$("#portfolio03").YTPlayer({
    containment:'.portfolio03',
    autoPlay:true,
    mute:true,
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: true,
    anchor: 'center,center',
    //ratio: '2/3',
    optimizeDisplay:false,
});

$(".m04 .xi-play").on("click", function(){
    $("#portfolio03").YTPPlay();
});

$(".m04 .xi-pause").on("click", function(){
    $("#portfolio03").YTPPause();
});


//포폴동영상제어
$("#portfolio04").YTPlayer({
    containment:'.portfolio04',
    autoPlay:true,
    mute:true,
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: true,
    anchor: 'center,center',
    //ratio: '2/3',
    optimizeDisplay:false,
});

$(".m05 .xi-play").on("click", function(){
    $("#portfolio04").YTPPlay();
});

$(".m05 .xi-pause").on("click", function(){
    $("#portfolio04").YTPPause();
});


//photo_slider 슬라이드
$(".photo_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 2,
    autoplay:3000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,            
          }
        }
      ]
});


$(".m08 i.xi-angle-left-thin").on("click", function(){
    $(".photo_slider").slick("slickPrev");
});


$(".m08 i.xi-angle-right-thin").on("click", function(){
    $(".photo_slider").slick("slickNext");
});


//full 소개 창 오픈
$("#header i, .m09 img").on("click", function(){
    $("#full").addClass("on")
});

$("#full i,#full a").on("click", function(){
    $("#full").removeClass("on")
});





/////////////////end////////////////////
});