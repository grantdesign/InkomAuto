$(document).ready(function(){


	setInterval(function(){
	  $('.gosprogramm').addClass('blink_on');
	  setTimeout(function(){$('.gosprogramm').removeClass('blink_on')},1500);
	},3000)


	$('.mobile_button').on('click', function()
	{
		$('#mobilemenu').css('left', '0px');
		$('#mobilemenu').css('background', 'rgba(0, 0, 0, 0.5)'); 
		$('#mobilemenu').css('transition',  'left 1s, background 1s step-end'); 
		$('#mobilemenu .close').css('transition',  'visibility 1s step-end'); 
		$('#mobilemenu .close').css('visibility',  'visible'); 
	})



	$('#mobilemenu .close').on('click', function()
	{
		$('#mobilemenu').css('left', '-100%');
		$('#mobilemenu').css('background', 'rgba(0, 0, 0, 0)'); 
		$('#mobilemenu').css('transition',  'left 1s, background 1s step-start'); 
		$('#mobilemenu .close').css('transition',  'visibility 1s step-start'); 
		$('#mobilemenu .close').css('visibility',  'hidden'); 
	})



	$('.allButton').on('click', function()
	{
		$('.allButton').toggleClass('active');
		$('#car-carousel').toggleClass('active');
	})


$(document).mouseup(function (e) {
    var container = $(".header-city.in-bl-mid, .header-city.in-bl-mid .list");
    if (container.has(e.target).length === 0){
      $('.header-city.in-bl-mid .choose.open').removeClass("open");
    }
});



	$('.header-city .choose').click(function() {
		$(this).toggleClass('open');
	});



$('input#credit-phone-x').mask('+7 (999) 999-99-99');
$('input#credit-phone-xPOPUP').mask('+7 (999) 999-99-99');
$('input#credit_phone').mask('+7 (999) 999-99-99');
$('input#info_phone').mask('+7 (999) 999-99-99');
$('input#birthday.mask').mask('99.99.9999');


    $('body').on("click","a.anchor", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
       $('html, body').animate({ scrollTop: $("a[name="+id+"]").offset().top }, 500);
    });



$('.styler').styler();

				//Examples of how to assign the Colorbox event to elements
				$(".group1").colorbox({rel:'group1',maxWidth:800, maxHeight:600});
				$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});

				$('.non-retina').colorbox({rel:'group5', transition:'none'})
				$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});


$(document).ready(function(){
$('#owlRev').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:2000,
	rewindSpeed:1000,
	slideSpeed:100,
	pagination:	false,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
})
$(document).ready(function(){
$('#owlSpecials').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:2000,
	rewindSpeed:40000,
	slideSpeed:10,
	pagination:	false,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
})


			function initMap() {
				var latlng = new google.maps.LatLng(55.68546296, 37.65945721);
				var settings = {
					zoom: 10,
					center: latlng,
					mapTypeControl: false,
					mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
					navigationControl: false,
					navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
					mapTypeId: google.maps.MapTypeId.ROADMAP};
				var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
				
				var companyImage = new google.maps.MarkerImage('/images/mapLogo.png',
					new google.maps.Size(28,40)

				);



				var company1Image = new google.maps.MarkerImage('/images/mapLogo.png',
					new google.maps.Size(28,40));
				var company1Shadow = new google.maps.MarkerImage('/images/mapLogo_shadow.png',
					new google.maps.Size(30,17));

				var company1Pos = new google.maps.LatLng(55.7316016, 37.7386732);

				var company1Marker = new google.maps.Marker({
					position: company1Pos,
					map: map,
					icon: company1Image,
					shadow: company1Shadow,
					title:"Инком-авто",
					zIndex: 3});

				


		
			//	google.maps.event.addListener(companyMarker, 'click', function() {
			//		infowindow.open(map,companyMarker);
			//	});
			}

$(document).ready(function(){
width=document.body.clientWidth;
if ($(document).width()>=1500)
{
width=(width-1038)/2;
width=(width-250)/2;
width=Math.round(width+250);
$('.thebest').css('margin-left','-'+width+'px');
$('.thebest').css('display','block');
}

$(window).resize(function(){
width=document.body.clientWidth;
if (width>=1500)
{
//width=$(document).width();
width=(width-1038)/2;
width=(width-250)/2;
width=Math.round(width+250);
$('.thebest').css('margin-left','-'+width+'px');
$('.thebest').css('display','block');
}
else
{
$('.thebest').css('display','none');
}
});

$(window).scroll(function(){
var scrollTop = $(window).scrollTop();
if (scrollTop>=370)
{
mar=$('.thebest').css('margin-top','20px');
mar=$('.thebest').css('position','fixed');
}
if (scrollTop<=370)
{
mar=$('.thebest').css('margin-top','400px');
mar=$('.thebest').css('position','absolute');
}
})


});



// Placeholder Plugin
jQuery.fn.extend({
    placeHolder : function() {
		
		this.focus(function(){ 
			if (jQuery(this).attr("value") == jQuery(this).attr("title")){
				jQuery(this).attr("value", "");
			}
			
		});
		this.blur(function(){
			if (jQuery(this).attr("value") == ""){
				jQuery(this).attr("value", jQuery(this).attr("title"));
			}
			
		});
		this.parents('form').submit(function(){
			if (jQuery(this).attr("value") == jQuery(this).attr("title")){
				jQuery(this).attr("value", "");
			}
			
		});
		
    }
});



$(document).ready(function() {


    jQuery("#breadCrumb").jBreadCrumb();

	// Placeholder Init
	$(".inputbox").placeHolder();
	
	
	// Bottom Carousel
	$("#bottom-carousel").jcarousel({
		scroll: 1,
		wrap: 'circular'
	});
	
		
    
    if (document.location.toString().split("https://www.incom-auto.ru/")[6] != "tehnicheskaja_harakteristika") { //�� �������� ���. ��������������, ����������� ��������� ��� ������
	   $("#complectation-accordion").accordion("option", "active", false);   
	   

    }

	
	// Menu Carousel Init
	
	var activeElem = 0;
	var visibleElems = 13;
	$("#menu-level-2 > li").each(function(e){
		if($(this).hasClass('active')){
			activeElem = e;
		}
	});

	if(activeElem >= visibleElems){
		activeElem = activeElem - visibleElems + 13; // ��� ����� �������� �� ������� ����� �����
	}
	
	// ��������� html ��� ������������� ������ ������ �� ���-�� ������� � ����
	html = '';
	for(i = 0; i < $("#menu-level-2 li").size(); i++){
		html += '<li>' + i + '</li>';
	}
	
	html = '<ul class="pagin hide">' + html + '</ul>';
	$("#mainnav-level-2-init").before(html); // �������� ��� ��� ���� �� ��������, �� �����. ��� ��� ����� �� �����
	
	data = $('.pagin li'); // ������ ���������� ��� �����������

	$("#mainnav-level-2-init").jCarouselLite({
		btnNext: ".next",
		btnPrev: ".prev",
		mouseWheel: true,
		visible: visibleElems,
		start: 0, // �������� � �������� ��������
		speed: 400, 
		btnGo: data // ��������� ������������� �����������
	});

	$('.pagin').find('li:eq(' + activeElem + ')').trigger('click'); // ��������� ���� �� �������� ��������� ��� �������� ��������
	
	
	

	// Cart Gallery
	$("a[rel='cart-big-img']").colorbox({transition:"fade"});
    $(".surprice").colorbox({width:"930px", href:"/images/banner_surprice.png"});
    
    //$(".order_credit").colorbox({width:"700", height:"750", iframe:true});
    //$(".order-now").colorbox({width:"700", height:"750", iframe:true});
    
    //� ie colorbox ����������� � PIE, ������� ��������� PIE ����� ��������� � ������� ��� ��������
    $("a[rel='send-order-1']").colorbox(
    {width:"832", height:"839", iframe:true,onOpen:function(){ 	if (window.PIE) {
        $(".pie_att").each(function() {
            PIE.detach(this);
        });
    } },onClosed:function(){ 	if (window.PIE) {
        $(".pie_att").each(function() {
            PIE.attach(this);
        });
    } } }
    
    );
    
    $("a[rel='send-order-2']").colorbox(
    {width:"832", height:"839", iframe:true,onOpen:function(){ 	if (window.PIE) {
        $(".pie_att").each(function() {
            PIE.detach(this);
        });
    } },onClosed:function(){ 	if (window.PIE) {
        $(".pie_att").each(function() {
            PIE.attach(this);
        });
    } } }
    
    );
    
    $("a[rel='send-order-3']").colorbox(
    	{width:"832", height:"839", iframe:true,onOpen:function(){ 	if (window.PIE) {
        $(".pie_att").each(function() {
            PIE.detach(this);
        });
    } },onClosed:function(){ 	if (window.PIE) {
        $(".pie_att").each(function() {
            PIE.attach(this);
        });
    } } }
    
    );


    $("a[rel='compare-complectations']").colorbox(
        {width:"1045", height:"600", iframe:true,onOpen:function(){ 	if (window.PIE) {
            $(".pie_att").each(function() {
                PIE.detach(this);
            });
        } },onClosed:function(){ 	if (window.PIE) {
            $(".pie_att").each(function() {
                PIE.attach(this);
            });
        } } }

    );
   

	// PIE Init
    if (window.PIE) {
        $(".pie_att").each(function() {
            PIE.attach(this);
        });
    }




$(".counter-place").append($("counter-code"));
$("counter-code").html("");




});








var section = document.location.toString().split("https://www.incom-auto.ru/")[3];
var subSection = document.location.toString().split("https://www.incom-auto.ru/")[4];

if (section == "") { 
	$("#logo-container").html('<span></span>');
	section = "root";
}
else {
	$("#logo-container").html('<a href="https://www.incom-auto.ru/"><span></span></a>');	
	
}

$("#menu-"+section).attr("class", "active"); 
$("#mainnav-"+subSection).attr("class", "menu-item active");


// Promo Slider Init
$("#ny-banner-slides").slides({
	preload: true,
	preloadImage: '/images/loading.gif',
	play: 3000,
	container: "ny-banner-slides_container",
	hoverPause: false,
	effect: 'fade',
	generatePagination: false,
	slideEasing:'easeInBounce',
});	
		
		
  $('.tabs').delegate('span:not(.current)', 'click', function() {
    $(this).addClass('current').siblings().removeClass('current')
      .parents('.map-tabs').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
    });
	
	
	/* ALEXA ADD SCRIPTS */
	
	/* inputFocus */
	var parentArray = ['.input-holder'];
	function inputFocus(parent){
		var parentSize = parent.length;
		var n = 0;
		for ( n; n < parentSize; n++ ) {
			var obj = parent[n];
			var input = $(obj).find(':text, textarea, :password');
			if ( $(input).length ) {
				$(obj).each(function(){
					var el = $(this);
					$(input).on('focus', function(){$(this).parents(obj).addClass('focus');});
					var inputBlur = function(){
						$(input).on('blur', function(){$(this).parents(obj).removeClass('focus');});
					}
					inputBlur();
					el.on('click', function(e){
						var thisObj = $(this);
						input = thisObj.find(':text, textarea, :password');
						$(this).addClass('focus');
						$(input).trigger('focus');
						$(input).on('blur', inputBlur);
					});
				});
			}
		}
	}
	/* inputFocus end */
	inputFocus(parentArray);
	
$(document).ready(function(){	
$('.fly-close').click( function() { 
        $(this).closest('.fly-tradein').slideUp(300);
});	
});