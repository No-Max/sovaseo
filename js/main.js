$(document).ready(function() { 
	showSlide(1);
	$(".header .call-me").click(function(){
		optionsClear();
		showSlide(5);	
	});
	$(".arrows").on("click","a", function (event) {
		event.preventDefault();
		optionsClear();
		showSlide($(this).attr("href")*1);
	});

	function addHandler(object, event, handler) {
		if (object.addEventListener) {
			object.addEventListener(event, handler, false);
		}
		else if (object.attachEvent) {
			object.attachEvent('on' + event, handler);
		}
	}
	// обработчики для разных браузеров
	addHandler(window, 'DOMMouseScroll', wheel);
	addHandler(window, 'mousewheel', wheel);
	addHandler(document, 'mousewheel', wheel);

	var wheelCounter = 1;
	// Функция, обрабатывающая событие
	var startTime = new Date();
	function wheel(event) {
	    var delta; // Направление колёсика мыши
	    event = event || window.event;
	    // Opera и IE работают со свойством wheelDelta
	    if (event.wheelDelta) { // В Opera и IE
	    	delta = event.wheelDelta / 120;
	    	// В Опере значение wheelDelta такое же, но с противоположным знаком
	    	if (window.opera) delta = -delta; // Дополнительно для Opera
	    }
	    else if (event.detail) { // Для Gecko
	    	delta = -event.detail / 3;
	    }
	    // Запрещаем обработку события браузером по умолчанию
	    if (event.preventDefault) event.preventDefault();
	    event.returnValue = false;
	    var endTime = new Date();
	    

	    if(endTime - startTime>1500){
	    	if(delta>0 ){
	    		if(wheelCounter<=1) wheelCounter =1;
	    		else wheelCounter--;
	    		startTime = new Date();
	    	}else{
	    		if(wheelCounter>=5) wheelCounter =1;
	    		else wheelCounter++;
	    		startTime = endTime;
	    	}
	    	//console.log(wheelCounter);
	    	showSlide(wheelCounter); 	
	    }   
	}
	
});

function showSlide(slideNumber){
	switch (slideNumber) {
		case 1:{
			optionsClear();
			optionsForAll(slideNumber);
			$(".cloud-1").animate({left:"-20%","top":"1%"},1450);
			$(".cloud-2").animate({right:"3%","top":"1%"},1500);
			$(".left").animate({"margin-top":0,"opacity":1},800);
			$(".right-content, .center").animate({"margin-top":0,"opacity":1},1000);
			$(".plane").animate({right:"60%","bottom":"-100%"},1300);
			break;
		}
		case 2:{
			optionsForAll(slideNumber);
			$(".cloud-1").animate({left:"-20%","top":"60%"},1000);
			$(".cloud-2").animate({right:"3%","top":"60%"},1000);
			$(".cloud-3").animate({right:"20%","top":"-100%"},1000);
			$(".plane").animate({right:"1%","bottom":"-20%"},1300);
			$(".shuttle").animate({right:"-70%","bottom":"-100%"},1300);
		}
		break;
		case 3:{
			optionsForAll(slideNumber);
			$(".plane").animate({right:"-100%","bottom":"70%"},1300);
			$(".cloud-1").animate({left:"-20%","top":"110%"},1000);
			$(".cloud-2").animate({right:"3%","top":"110%"},1000);
			$(".cloud-3").animate({right:"1%","top":"1%"},1000);
			$(".shuttle").animate({right:"-13%","bottom":"-5%"},1300);
			$(".satellite-1").animate({left:"-60%","top":"-100%"},1300);
			$(".satellite-2").animate({right:"60%","top":"-100%"},1300);
		}
		break;
		case 4:{
			optionsForAll(slideNumber);
			$(".cloud-3").animate({right:"-10%","top":"70%"},1000);
			$(".shuttle").animate({right:"40%","bottom":"100%"},1000);
			$(".satellite-1").animate({left:"-10%","top":"20%"},1500);
			$(".satellite-2").animate({right:"5%","top":"50%"},1500);
			$(".left").animate({"opacity":1},400);
			$(".ufo").animate({left:"60%","top":"-100%","width":"30%"},1500);
		}
		break;
		case 5:{
			optionsForAll(slideNumber);
			$(".cloud-3").animate({right:"-20%","top":"100%"},1000);
			$(".satellite-1").animate({left:"40%","top":"100%"},1300);
			$(".satellite-2").animate({right:"-65%","top":"100%"},1300);
			$(".left").animate({"opacity":0},300);
			$(".ufo").animate({left:"-22%","top":"16%","width":"65%"},1500);
		}
		break;
	}
}

function optionsForAll(id){
	$(".left").animate({"margin-top":0,"opacity":1},800);
	$(".right-content, .center").animate({"margin-top":0,"opacity":1},1000);
	$("section").removeAttr("class");
	$(".our-site").hide();
	$(".change-contant").hide();
	$(".change-contant").css({"margin-top":"-15px","opacity":0});
	$(".center").animate({"opacity":"0"},500);
	$(".arrows li").removeClass("active");

	$("section").addClass("page-"+id);
	$(".right-content-"+id).fadeIn(600);
	$(".content-"+id).fadeIn(800);
	$(".content-"+id).animate({"margin-top":"0","opacity":1},500);	
	$(".our-site-"+id).fadeIn(800);
	$(".arrows li:nth-child("+id+")").addClass("active");
}

function optionsClear(){
	$("[style]").removeAttr("style");
}

