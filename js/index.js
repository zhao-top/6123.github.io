// 计时器变量
var fishAlert;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var musicTag = "play";
// 文本显示内容
function textShow1(aniTime, spaceTime) {
	//清空计时器
	clearInterval(fishAlert);
	// 解绑事件
	$("#TU3_div").off("tap");

	setTimeout(function() {

		//添加计时器
		fishAlert = setInterval(function() {

			$("#p_show_div1>div").hide();
			$("#p1_show" + num1).show();
			num1++;
			if (num1 == 6) {
				num1 = 0;
			}
		}, spaceTime);
	}, aniTime);
}

function textShow2(aniTime, spaceTime) {
	//清空计时器
	clearInterval(fishAlert);
	// 解绑事件
	$("#TU3_div").off("tap");

	setTimeout(function() {

		//添加计时器
		fishAlert = setInterval(function() {

			$("#p_show_div2>div").hide();
			$("#p2_show" + num2).show();
			num2++;
			if (num2 == 6) {
				num2 = 0;
			}
		}, spaceTime);
	}, aniTime);
}

function textShow3(aniTime, spaceTime) {
	//清空计时器
	clearInterval(fishAlert);
	// 解绑事件
	$("#TU3_div").off("tap");

	setTimeout(function() {

		//添加计时器
		fishAlert = setInterval(function() {

			$("#p_show_div3>div").hide();
			$("#p3_show" + num3).show();
			num3++;
			if (num3 == 7) {
				num3 = 0;
			}
		}, spaceTime);
	}, aniTime);
}

$(document).ready(function() {
	// 鼠标悬停、离开时 图片切换
	// 展示按钮
	$(".exhibition_btn").mouseenter(function() {
		$(".exhibition_btn>img").attr('src', 'img/index/exhibtion_btn2.png')

	});
	$(".exhibition_btn").mouseleave(function() {
		$(".exhibition_btn>img").attr('src', 'img/index/exhibtion_btn.png')

	});

	// 游戏按钮
	$(".game_btn").mouseenter(function() {
		$(".game_btn>img").attr('src', 'img/index/start_btn2.png')

	});
	$(".game_btn").mouseleave(function() {
		$(".game_btn>img").attr('src', 'img/index/start_btn.png')

	});

	// 鼠标点击事件
	
	
	// 展示按钮
	$(".exhibition_btn").click(function() {
		$(window).attr("location", "./exhibition.html");
	});

	// 游戏按钮
	$(".game_btn").click(function() {
		$(window).attr("location", "./daoLian.html");
	});
	//
	$("#TU1_div").click(function() {
		$(window).attr("location", "./daoLian.html");
	});

	$("#TU2_div").click(function() {
		$(window).attr("location", "./luoXian.html");
	});

	$("#TU3_div").click(function() {
		$(window).attr("location", "./yunTang.html");
	});

	$("#p_show_div1>div").hide();
	$("#p_show_div2>div").hide();
	$("#p_show_div3>div").hide();
	textShow1(2000, 4000);
	textShow2(2000, 4500);
	textShow3(2000, 5000);


});
