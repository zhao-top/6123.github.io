var num = 0;
var WDnumTag = "none";
var timer = null;
var fishAlert;
var Qnum = 0;
//倒计时方法
function setTime() {
	$(".introDiv_style_img>img").attr('src', 'img/Q_character/3-1.gif');
}

function QCharactershow(aniTime, spaceTime) {
	//清空计时器
	clearInterval(fishAlert);
	$(".introDiv_style_img>img").hide();
	$(".Q_1").show();
	// 解绑事件
	$(".introDiv_style_img").off("tap");

	setTimeout(function() {

		//添加8秒计时器
		fishAlert = setInterval(function() {
			$(".introDiv_style_img>img").hide();
			$(".Q_" + Qnum).show();
			Qnum++;
			if (Qnum == 3) {
				Qnum = 1;
			}

		}, spaceTime);
	}, aniTime);
}

$(document).ready(function() {


	$("#dialogue_l>img").hide();
	$("#dialogue_r>img").hide();
	$("#dialogue_b>img").hide();
	$("#dialogue_l1").show();
	$("#gameAgain_btn").hide();

	// 鼠标悬停、离开时的图片变换	
	$("#character2").mouseenter(function() {
		$("#character2").attr('src', 'img/yunTang/Y_left5B.png');
		$("#gameAgain_btn").show();
		num = num + 1;
		if (num <= 10) {
			$("#WD_div>img").attr('src', 'img/yunTang/WD_1.png')
			$(".messageDiv_style>p").text("请挥动扇子，控制温度到合适时，即可通关。");
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_b>img").hide();
		} else if (num <= 20 && num >= 10) {
			$("#WD_div>img").attr('src', 'img/yunTang/WD_2.png')
			$(".messageDiv_style>p").text("请挥动扇子，控制温度到合适时，即可通关。" );
		} else if (num <= 30 && num >= 20) {
			$("#WD_div>img").attr('src', 'img/yunTang/WD_3.png');
			$("#dialogue_r1").show();
			$(".messageDiv_style>p").text("请挥动扇子，控制温度到合适时，即可通关。" );
		} else if (num <= 40 && num >= 30) {
			$("#WD_div>img").attr('src', 'img/yunTang/WD_4.png')
			$(".messageDiv_style>p").text("请挥动扇子，控制温度到合适时，即可通关。" );

		} else if (num <= 50 && num >= 40) {
			$("#WD_div>img").attr('src', 'img/yunTang/WD_5.png');
			$("#dialogue_r>img").hide();
			$("#dialogue_b1").show();
			$(".messageDiv_style>p").text("请挥动扇子，控制温度到合适时，即可通关。" );
		} else if (num <= 55 && num >= 50) {
			$("#WD_div>img").attr('src', 'img/yunTang/WD_6.png');
			$("#dialogue_b>img").hide();
			$("#dialogue_l2").show();
			$("#success_div").show();
			$("#success_div>p").text("恭喜通关，点击回到主界面");
			$(".messageDiv_style>p").text("你真棒！你是最棒的！你真的真的真的很棒！");
			WDnumTag = "true";
		} else {
			$(".messageDiv_style>p").text("温度过高，请重新开始");
			$("#WD_div>img").attr('src', 'img/yunTang/WD_7.png');
			$("#dialogue_l>img").hide();
			$("#dialogue_b2").show();
			WDnumTag = "false";
			$("#success_div").hide();
		}
	});
	$("#character2").mouseleave(function() {
		$("#character2").attr('src', 'img/yunTang/Y_left5.png');

	});


	$("#gameAgain_btn").mouseenter(function() {
		$("#gameAgain_btn>img").attr('src', 'img/yunTang/again_btn2.png');
	});
	$("#gameAgain_btn").mouseleave(function() {
		$("#gameAgain_btn>img").attr('src', 'img/yunTang/again_btn.png')
	});

	$("#gameAgain_btn").click(function() {
		num = 0;
		WDnumTag = "none";
		$("#WD_div>img").attr('src', 'img/yunTang/WD_1.png');
		$(".messageDiv_style>p").text("请挥动扇子，控制温度到合适时，即可通关。" );
		$("#success_div").hide();
	});

	// 返回上一个页面
	$("#back_btn").click(function() {
		$(window).attr("location", "./luoXian.html");
	});

	// Q版人物 点击提示
	$(".introDiv_style_img").click(function() {

		clearInterval(timer);
		timer = setInterval(setTime, 6000);
		$(".introDiv_style_img>img").hide();
		$(".Q_1").show();
		$(".introDiv_style_img>img").attr('src', 'img/Q_character/3-2.gif');
		QCharactershow(2000, 4000);
	});
	
	$(".introDiv_style_img>img").hide();
	
	QCharactershow(2000, 4000);


	// 游戏通关
	$("#success_div").hide();
	$("#success_div").click(function() {
		if (WDnumTag == "true") {
			$(window).attr("location", "./index.html");
		}
	});






});
