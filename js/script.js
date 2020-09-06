// Навигация (моб.)
$(function() {
	let $mnav_popup = $('.media_nav');
	
	$(".media_nav-triger, .media_nav-close").click(function(){
		$mnav_popup.slideToggle(300, function(){
			if ($mnav_popup.is(':hidden')) {
				$('pointer').removeClass('media_nav-pointer');
			} else {
				$('pointer').addClass('media_nav-pointer');
			}					
		});  
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.media_nav_wrapper').length){
			$('pointer').removeClass('media_nav-pointer');
			$mnav_popup.slideUp(300);
		}
	});
});


// Увеличение картинок
$(function(){
	$('.minimized').click(function(event) {
	  let i_path = $(this).attr('src');
	  $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
	  $('#magnify').css({
		  left: ($(document).width() - $('#magnify').outerWidth())/2,
			  top: ($(window).height() - $('#magnify').outerHeight())/2
		});
	  $('#overlay, #magnify').fadeIn('fast');
	});
	
	$('body').on('click', '#close-popup, #overlay', function(event) {
	  event.preventDefault();
   
	  $('#overlay, #magnify').fadeOut('fast', function() {
		$('#close-popup, #magnify, #overlay').remove();
	  });
	});
});


// Окно отправки
function form_popap(id_popap) {
	let id = "#" + id_popap;
	$(id).addClass('active');
}
  
$(".close_form").click( function(){
	$(".overlay_form").removeClass("active");
});


// Всплывающее уведомление
let alert1 = function(message, sec, color) {
    if (!message || message.length == 0) return;

    let parent = document.querySelector('.alert_list');

    if (!parent) {
        parent = document.createElement('div');
        parent.classList.add('.alert_list');
    }

    let element = document.createElement('div');
    element.classList.add('alert');

    element.innerHTML = message;

    parent.appendChild(element);
    document.body.appendChild(parent);

    if (sec > 0) setTimeout(function() {
        element.remove();
    }, sec * 1000);

    if (color) {
        element.classList.add(color);
    }
};

if (window.location.search.indexOf('otpravleno') > -1){
    alert1('В ближайшее время мы свяжемся с вами', 10);
}
if (window.location.search.indexOf('neverno') > -1){
    alert1('Вы указали не верный номер телефона', 10);
}
if (window.location.search.indexOf('nezapolneno') > -1){
    alert1('Заполните поле с номером телефона', 10);
}





// Окно отправки v.Sergey
// (function(){
// 	const popup = function() {
// 		let buttons = document.querySelectorAll('[data-popup]');

// 		const show = function(id) {
// 			const content = document.querySelector(`#${id}`);

// 			let popup_elem = document.querySelector('.popup');
// 			if (!popup_elem) {
// 				popup_elem = document.createElement('div');
// 				popup_elem.classList.add('popup');

// 				popup_elem.setAttribute('style', `
// 				position: fixed;
//     			top: 40%;
//     			left: 50%;
//     			width: 500px;
//     			transform: translate(-50%, -50%);
//     			background-color: #333;
//     			padding: 20px;
//     			box-shadow: 0 0 30px #555;
//     			z-index: 999;
// 				`);
// 			};

// 			popup_elem.innerHTML = content.innerHTML;
// 			document.body.appendChild(popup_elem);
// 		};

// 		buttons.forEach(function (button) {
// 			button.addEventListener('click', function () {
// 				show(this.dataset.popup);
// 			});
// 		});

// 	};
// 	window.addEventListener('load', function () {
// 		popup();
// 	})
// })();