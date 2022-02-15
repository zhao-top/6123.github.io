var points = 1,
	timer = null,
	stepCount = 0,
	rlevel = 2, //规定拼图的方块数2*7
	llevel = 7,
	tag = "none",
	btnTag = "false";
var fishAlert;
var num = 0;
var puzzleGame = function() {
	var square, sort = 0;
	for (var i = 0; i < llevel; i++) {
		for (var j = 0; j < rlevel; j++) {
			square = document.createElement("div");
			$(square).css({
				"width": 200 / rlevel,
				"height": 700 / llevel,
				"background": "url(img/luoXian/xw.png) no-repeat",
				"backgroundPosition": -j * 700 / llevel + "px " + (-i) * 200 / rlevel + "px"
			})
			sort++;
			$(square).attr({
				"sort": sort //给各个小方格加上正确的顺序
			})
			$(".piece_container").append(square);
		}
	}
	init();
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
			$(".Q_" + num).show();
			num++;
			if (num == 3) {
				num = 1;
			}

		}, spaceTime);
	}, aniTime);
}

init = function() {
	var pageLeft = 0,
		pageTop = 0,
		getStartX = 0,
		getStartY = 0,
		floatLayer = "",
		getSort = "",
		getBkP = "",
		playAgain = "<button class='playAgain'>再来一次</button>";
	//按下方格触发方法
	$("div[sort]").on("touchstart mousedown", function(e) {
		e.preventDefault();
		if (floatLayer != "") {
			floatLayer.remove();
		}
		var getEvent = window.event || arguments.callee.caller.arguments[0]; //获取触发事件的元素
		thisE = getEvent.target; //获取鼠标按下时的方格

		var thisElement = getEvent.target;
		getSort = $(thisElement).attr("sort"); //获取点击时的元素的sort
		getBkP = $(thisElement).css("backgroundPosition");
		var getBkImg = $(thisElement).css("backgroundImage");

		var getPoints = parseInt($(thisElement).parents(".piece_container").attr("points"));
		floatLayer = $(document.createElement("div")).attr({
			"sort": getSort
		}).css({
			"backgroundPosition": getBkP,
			"backgroundImage": getBkImg,
			"position": "fixed",
			"width": 200 / rlevel,
			"height": 700 / llevel
		}); //创建浮层并加上样式

		//取得手指相对于文档的边距
		getStartX = getEvent.pageX;
		getStartY = getEvent.pageY;

		pageLeft = $(thisElement).offset().left;
		pageTop = $(thisElement).offset().top;

		floatLayer.css({
			top: pageTop + 1,
			left: pageLeft + 1
		});
		floatLayer.appendTo("body");
		// }
		return true;
	})

	//移动手指或鼠标触发事件
	$(document).on("touchmove mousemove", function(e) {
		e.preventDefault();
		//获取触发touchmove的对象
		var getEvent = window.event || arguments.callee.caller.arguments[0];

		var getCurrentX = getEvent.pageX;
		var getCurrentY = getEvent.pageY;
		// }
		if (floatLayer) {
			floatLayer.css({
				top: getCurrentY - (getStartY - pageTop),
				left: getCurrentX - (getStartX - pageLeft)
			}); //决定图层的样式
		}
	})

	//手指离开触发事件
	$(document).on("touchend mouseup", function(e) {
		e.preventDefault();
		var getEvent = window.event || arguments.callee.caller.arguments[0]; //获取触发事件的元素
		if (floatLayer) {
			//取得浮层的位置
			var getLayerX = floatLayer.offset().left;
			var getLayerY = floatLayer.offset().top;

			var layerValX = parseInt(getLayerX);
			var layerValY = parseInt(getLayerY);

			var layerCenterX = layerValX + floatLayer.width() / 2;
			var layerCenterY = layerValY + floatLayer.height() / 2;

			floatLayer.remove(); //删除浮层
			var piece = $("div[sort]");
			for (var i = 0; i < piece.length; i++) {
				//取得每一个小方格的位置
				var getPieceX = $(piece[i]).offset().left;
				var getPieceY = $(piece[i]).offset().top;

				var pieceValX = parseInt(getPieceX);
				var pieceValY = parseInt(getPieceY);

				var pieceEndX = pieceValX + $(thisE).width();
				var pieceEndY = pieceValY + $(thisE).height();



				if (stepCount <= 100) { //限制最多移动的步数
					if ((pieceValX < layerCenterX && pieceValY < layerCenterY) && (pieceEndX > layerCenterX && pieceEndY >
							layerCenterY)) {
						var getEndSort = $(piece[i]).attr("sort"); //手指或鼠标松开时所在的方格
						var getEndBkP = $(piece[i]).css("backgroundPosition");
						if (getEndSort != getSort) { //确定把浮层移动到了另外一个方格
							stepCount++;
							$(thisE).attr("sort", getEndSort).css("backgroundPosition", getEndBkP);
							$(piece[i]).attr("sort", getSort).css("backgroundPosition", getBkP);
							$(".over-step").text(stepCount);
						}
					}
					//$(".messageDiv_style>p").text(stepCount);
				} else {

					$(".messageDiv_style>p").text("已经百步了哦");



					break;
				}
			}
			pageLeft = 0;
			pageTop = 0;
			getStartX = 0;
			getStartY = 0;
			floatLayer = "";
			getSort = "";
			getBkP = "";

			for (var i = 0; i < piece.length; i++) { //如果排序正确，继续往下执行！否则返回
				var getSortVal = parseInt($(piece[i]).attr("sort"));
				var number = i + 1;

				if (getSortVal == number) {
					continue;
				} else {
					return;
				}
			}
			tag = "success";
			$("#success_div").show();
			$(".messageDiv_style>p").text("你真棒！你是最棒的！你真的真的真的很棒！");
			$("#dialogue_l2").show();
			$("#game_bg").show();

		} else {
			return;
		}
	})
}


//Q版人物 内容介绍消失计时器

//倒计时方法
function setTime() {
	$(".introDiv_style_img>img").attr('src', 'img/Q_character/2-1.gif');
}

//创建一个没有重复数字的随机数组，并打乱方格的顺序
function upsetPiece() {

	var pieceArr = $(".piece_container div[sort]"),
		randomArr = [], //创建一个随机数数组
		bkPArr = []; //创建一个数组，用来存储每个方格背景的定位！

	//取得每个方格的背景元素的定位
	for (var i = 0; i < pieceArr.length; i++) {
		bkPArr.push($(pieceArr[i]).css("backgroundPosition"));
	}

	for (var i = 0; i < pieceArr.length; i++) {
		var random = Math.floor(Math.random() * (rlevel * llevel + 1));
		if (random != 0) {
			if (randomArr.length == 0) {
				randomArr.push(random);
			} else {
				var la = 0;
				for (var j = 0; j < randomArr.length; j++) {
					if (randomArr[j] == random) {
						i--;
						break;
					}
					la++;
				}
				if (la == randomArr.length) {
					randomArr.push(random);
				}
			}
		} else {
			i--;
			continue;
		}
	}

	//打乱方格的顺序
	for (var i = 0; i < randomArr.length; i++) {
		$(pieceArr[i]).css("backgroundPosition", bkPArr[parseInt(randomArr[i]) - 1]);
		$(pieceArr[i]).attr("sort", randomArr[i]);
	}
}


$(document).ready(function() {

	$("#dialogue_l2").hide();

	puzzleGame();
	$("#game_bg").hide();

	// 游戏开始 按钮
	$("#startGame_btn").mouseenter(function() {
		$("#startGame_btn>img").attr('src', 'img/luoXian/start_btn2.png');
	});
	$("#startGame_btn").mouseleave(function() {
		$("#startGame_btn>img").attr('src', 'img/luoXian/start_btn.png')
	});
	$("#startGame_btn").click(function() {
		$("#success_div").hide();
		$("#dialogue_l>img").hide();
		$("#dialogue_r>img").hide();
		$("#game_bg").hide();
		tag = "none";
		upsetPiece();
		stepCount = 0;
		$(".cover").hide();
		btnTag = "true";
		if (btnTag == "true") {
			$("#startGame_btn").mouseenter(function() {
				$("#startGame_btn>img").attr('src', 'img/luoXian/again_btn2.png');
			});
			$("#startGame_btn").mouseleave(function() {
				$("#startGame_btn>img").attr('src', 'img/luoXian/again_btn.png')
			});

			$(".messageDiv_style>p").text("请把小方块移动到正确的位置");

		}

	});

	//游戏通关
	$("#success_div").hide();
	$("#success_div").click(function() {
		if (tag == "success") {
			$(window).attr("location", "./yunTang.html");
		}

	});


	// Q版人物 点击提示
	$(".introDiv_style_img").click(function() {
		clearInterval(timer);
		timer = setInterval(setTime, 6000);
		$(".introDiv_style_img>img").hide();
		$(".Q_1").show();
		$(".introDiv_style_img>img").attr('src', 'img/Q_character/2-2.gif');
		QCharactershow(2000, 4000);
	});
	
	$(".introDiv_style_img>img").hide();
	
	QCharactershow(2000, 4000);

	// 返回上一个页面
	$("#back_btn").click(function() {
		$(window).attr("location", "./daoLian.html");
	});

});
