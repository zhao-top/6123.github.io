var timer = null;
//倒计时方法
function setTime() {
	$("#intro_text_divl>img").hide();
	$("#intro_text_divr>img").hide();
}
$(document).ready(function() {

	// 鼠标悬停、离开时的图片变换

	$("#tag_img1").mouseenter(function() {
		$("#tag_img1>img").attr('src', 'img/exhibtion/发钗-暗.png')
	});
	$("#tag_img1").mouseleave(function() {
		$("#tag_img1>img").attr('src', 'img/exhibtion/发钗-亮.png')
	});
	$("#tag_img4").mouseenter(function() {
		$("#tag_img4>img").attr('src', 'img/exhibtion/高髻-暗.png')
	});
	$("#tag_img4").mouseleave(function() {
		$("#tag_img4>img").attr('src', 'img/exhibtion/高髻-亮.png')
	});
	$("#tag_img3").mouseenter(function() {
		$("#tag_img3>img").attr('src', 'img/exhibtion/对襟窄袖上衫-暗.png')
	});
	$("#tag_img3").mouseleave(function() {
		$("#tag_img3>img").attr('src', 'img/exhibtion/对襟窄袖上衫-亮.png')
	});
	$("#tag_img2").mouseenter(function() {
		$("#tag_img2>img").attr('src', 'img/exhibtion/披帛-暗.png')
	});
	$("#tag_img2").mouseleave(function() {
		$("#tag_img2>img").attr('src', 'img/exhibtion/披帛-亮.png')
	});
	$("#tag_img5").mouseenter(function() {
		$("#tag_img5>img").attr('src', 'img/exhibtion/三白妆-暗.png')
	});
	$("#tag_img5").mouseleave(function() {
		$("#tag_img5>img").attr('src', 'img/exhibtion/三白妆-亮.png')
	});
	$("#tag_img6").mouseenter(function() {
		$("#tag_img6>img").attr('src', 'img/exhibtion/齐胸襦裙-暗.png')
	});
	$("#tag_img6").mouseleave(function() {
		$("#tag_img6>img").attr('src', 'img/exhibtion/齐胸襦裙-亮.png')
	});


	$("#tag_img11").mouseenter(function() {
		$("#tag_img11>img").attr('src', 'img/exhibtion/垂练髻-暗.png')
	});
	$("#tag_img11").mouseleave(function() {
		$("#tag_img11>img").attr('src', 'img/exhibtion/垂练髻-亮.png')
	});
	$("#tag_img12").mouseenter(function() {
		$("#tag_img12>img").attr('src', 'img/exhibtion/窄袖长衫-暗.png')
	});
	$("#tag_img12").mouseleave(function() {
		$("#tag_img12>img").attr('src', 'img/exhibtion/窄袖长衫-亮.png')
	});
	$("#tag_img13").mouseenter(function() {
		$("#tag_img13>img").attr('src', 'img/exhibtion/平头鞋-暗.png')
	});
	$("#tag_img13").mouseleave(function() {
		$("#tag_img13>img").attr('src', 'img/exhibtion/平头鞋-亮.png')

	});

	// 返回上一个页面
	$("#back_btn").click(function() {
		$(window).attr("location", "./index.html");
	});

	
	$("#intro_text_divl").hide();
	$("#tag_img1").click(function() {		
		$("#intro_text_divl").show();
		$("#intro_text_divl>img").hide();
		$("#text_img1").show();
		clearInterval(timer);
		timer = setInterval(setTime, 60000);
	});
	$("#tag_img2").click(function() {		
		$("#intro_text_divl").show();
		$("#intro_text_divl>img").hide();
		$("#text_img2").show();
		clearInterval(timer);
		timer = setInterval(setTime, 60000);
	});
	$("#tag_img3").click(function() {		
		$("#intro_text_divl").show();
		$("#intro_text_divl>img").hide();
		$("#text_img3").show();
		clearInterval(timer);
		timer = setInterval(setTime, 60000);
	});
	$("#tag_img4").click(function() {		
		$("#intro_text_divl").show();
		$("#intro_text_divl>img").hide();
		$("#text_img4").show();
		clearInterval(timer);
		timer = setInterval(setTime, 60000);
	});
	$("#tag_img5").click(function() {		
		$("#intro_text_divl").show();
		$("#intro_text_divl>img").hide();
		$("#text_img5").show();
		clearInterval(timer);
		timer = setInterval(setTime, 60000);
	});
	$("#tag_img6").click(function() {		
		$("#intro_text_divl").show();
		$("#intro_text_divl>img").hide();
		$("#text_img6").show();
		clearInterval(timer);
		timer = setInterval(setTime, 60000);
	});
	

	$("#intro_text_divr").hide();
	$("#tag_img11").click(function() {
		$("#intro_text_divr").show();
		$("#intro_text_divr>img").hide();
		$("#text_img11").show();
		clearInterval(timer);
		timer = setInterval(setTime, 60000);
	});
	$("#tag_img12").click(function() {
		$("#intro_text_divr").show();
		$("#intro_text_divr>img").hide();
		$("#text_img12").show();
		clearInterval(timer);
		timer = setInterval(setTime, 60000);
	});
	$("#tag_img13").click(function() {
		$("#intro_text_divr").show();
		$("#intro_text_divr>img").hide();
		$("#text_img13").show();
		clearInterval(timer);
		timer = setInterval(setTime, 60000);
	});
	


});
