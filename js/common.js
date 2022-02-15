$(document).ready(function() {
	$("#back_btn").mouseenter(function() {
		$("#back_btn>img").attr('src', 'img/common/back_button2.png')

	});
	$("#back_btn").mouseleave(function() {
		$("#back_btn>img").attr('src', 'img/common/back_button.png')

	});

	$("#home_btn").mouseenter(function() {
		$("#home_btn>img").attr('src', 'img/common/home_btn2.png');


	});
	$("#home_btn").mouseleave(function() {
		$("#home_btn>img").attr('src', 'img/common/home_btn.png')

	});

	// 返回home页面
	$("#home_btn").click(function() {
		$(window).attr("location", "./index.html");
	});
	

});
