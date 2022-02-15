var timer = null;
var fishAlert;
var num = 0;
//倒计时方法
function setTime() {
	$(".introDiv_style_img>img").attr('src', 'img/Q_character/1-1.gif');
}


function QCharactershow(aniTime, spaceTime) {
	//清空计时器
	clearInterval(fishAlert);
	$(".introDiv_style_img>img").hide();
	$(".Q_1").show();
	// 解绑事件
	$(".introDiv_style_img").off("tap");

	setTimeout(function() {
		
		//添加计时器
		fishAlert = setInterval(function() {
			$(".introDiv_style_img>img").hide();
			$(".Q_"+num).show();
			num++;
			if(num ==3){
				num = 1;
			}

		}, spaceTime);
	}, aniTime);
}



$(document).ready(function() {

	// 鼠标悬停、离开时的图片变换
	$("#M1").mouseenter(function() {
		$("#M1>img").attr('src', 'img/daoLian/D_coldwater2.png')

	});
	$("#M1").mouseleave(function() {
		$("#M1>img").attr('src', 'img/daoLian/D_coldwater.png')

	});

	$("#M2").mouseenter(function() {
		$("#M2>img").attr('src', 'img/daoLian/D_hotwater2.png')

	});
	$("#M2").mouseleave(function() {
		$("#M2>img").attr('src', 'img/daoLian/D_hotwater.png')

	});

	$("#M3").mouseenter(function() {
		$("#M3>img").attr('src', 'img/daoLian/D_vinegar2.png')

	});
	$("#M3").mouseleave(function() {
		$("#M3>img").attr('src', 'img/daoLian/D_vinegar.png')

	});

	$("#M4").mouseenter(function() {
		$("#M4>img").attr('src', 'img/daoLian/D_enzyme2.png')

	});
	$("#M4").mouseleave(function() {
		$("#M4>img").attr('src', 'img/daoLian/D_enzyme.png')

	});

	$("#M5").mouseenter(function() {
		$("#M5>img").attr('src', 'img/daoLian/D_plantash2.png')

	});
	$("#M5").mouseleave(function() {
		$("#M5>img").attr('src', 'img/daoLian/D_plantash.png')

	});

	

	// 返回上一个页面
	$("#back_btn").click(function() {
		$(window).attr("location", "./index.html");
	});

	
	
	// Q版人物 点击提示
		$(".introDiv_style_img").click(function() {
			
			clearInterval(timer);
			timer = setInterval(setTime, 6000);
			$(".introDiv_style_img>img").hide();
			$(".Q_1").show();
			$(".introDiv_style_img>img").attr('src', 'img/Q_character/1-2.gif');
			QCharactershow(2000, 4000);
		});
	

	// 定义判断标签
	var tag = "none";
	// 材料选择判断
	// 冷水材料选择——判断
	
	$("#dialogue_l>img").hide();
	$("#dialogue_r>img").hide();
	$(".introDiv_style_img>img").hide();
	
	QCharactershow(2000, 4000);
	
	$("#M1").click(function() {
		if (tag == "none") {
			$(".messageDiv_style>p").text("选择【溶剂】正确，请选择【碱性精炼剂】");
			$("#characterSelectDiv_style>img").attr('src', 'img/daoLian/DL.png');
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r2").show();
			tag = "col";
		} else if(tag == "col" || tag == "hot"){
			$(".messageDiv_style>p").text("选择【精炼剂】错误，请重新选择【溶剂】");
			$("#characterSelectDiv_style>img").attr('src', 'img/daoLian/DL.png');
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r6").show();
			tag = "none";
		}else if(tag == "enz"){
			$(".messageDiv_style>p").text("这里！这里！看这里！点击通关！！！");
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r8").show();
		}else {
			$(".messageDiv_style>p").text("选择【精炼剂】错误，请重新选择【溶剂】");
			$("#characterSelectDiv_style>img").attr('src', 'img/daoLian/DL.png');
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r7").show();
			tag = "none";
		}
		// $("#gif_style").attr('src', 'img/TU1.gif');
	});
	
	$("#M2").click(function() {
		if (tag == "none") {
			$(".messageDiv_style>p").text("选择【溶剂】正确，请选择【碱性精炼剂】");
			$("#characterSelectDiv_style>img").attr('src', 'img/daoLian/DL.png');
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r3").show();
			tag = "hot";
		}  else if(tag == "col" || tag == "hot"){
			$(".messageDiv_style>p").text("选择【精炼剂】错误，请重新选择【溶剂】");
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r6").show();
			tag = "none";
		}else if(tag == "enz"){
			$(".messageDiv_style>p").text("这里！这里！看这里！点击通关！！！");
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r8").show();
		}else{
			$(".messageDiv_style>p").text("选择【精炼剂】错误，请重新选择【溶剂】");
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r7").show();
			tag = "none";
		}
	});
	
	// 醋 材料
	$("#M3").click(function() {
		//$("p").slideToggle();
		if(tag == "none"){
			$(".messageDiv_style>p").text("选择材料错误，请重新开始选择【溶剂】");
			$("#characterSelectDiv_style>img").attr('src', 'img/daoLian/DL.png');
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_l7").show();
			tag = "none";
		}else if(tag == "col" || tag == "hot"){
			$(".messageDiv_style>p").text("选择材料错误，请重新开始选择【溶剂】");
			$("#characterSelectDiv_style>img").attr('src', 'img/daoLian/DL.png');
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_l3").show();
			tag = "none";
		}else if(tag == "enz"){
			$(".messageDiv_style>p").text("这里！这里！看这里！点击通关！！！");
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r8").show();
		}else{
			$(".messageDiv_style>p").text("选择材料错误，请重新开始选择【溶剂】");
			$("#characterSelectDiv_style>img").attr('src', 'img/daoLian/DL.png');
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_l4").show();
			tag = "none";
		}
		
	});

	
	// 草木灰 材料
	$("#M5").click(function() {
		if (tag == "hot") {
			$(".messageDiv_style>p").text("选择【碱性精炼剂】正确，请再选择【酶精炼剂】");
			$("#characterSelectDiv_style>img").attr('src', 'img/daoLian/TU1.gif');
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r5").show();
			tag = "hot_ash";
		} else if (tag == "col") {
			$(".messageDiv_style>p").text("选择【碱性精炼剂】正确，请再选择【酶精炼剂】");
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r5").show();
			tag = "col_ash";
			$("#characterSelectDiv_style>img").attr('src', 'img/daoLian/TU1.gif');
		} else if(tag == "none"){
			$(".messageDiv_style>p").text("选择【溶剂】错误，请重新选择【溶剂】");
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r4").show();
			tag = "none";
		}else if(tag == "enz"){
			$(".messageDiv_style>p").text("这里！这里！看这里！点击通关！！！");
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_r8").show();
		} else{
			$(".messageDiv_style>p").text("选择【精炼剂】错误，请重新选择【溶剂】");
			$("#dialogue_l>img").hide();
			$("#dialogue_r>img").hide();
			$("#dialogue_l1").show();
			tag = "none";
		}
	});
	
	// 酶 材料
	$("#M4").click(function() {
			if (tag == "hot_ash" || tag == "col_ash") {
				$(".messageDiv_style>p").text("你真棒！你是最棒的！你真的真的真的很棒！");
				$("#success_div").show();
				
				$("#dialogue_l>img").hide();
				$("#dialogue_r>img").hide();
				$("#dialogue_l6").show();
				$("#dialogue_r1").show();
				tag = "enz";
				$("#characterSelectDiv_style>img").attr('src', 'img/daoLian/TU1.gif');
			}  else if(tag == "none"){
				$(".messageDiv_style>p").text("选择【溶剂】错误，请重新选择【溶剂】");
				$("#dialogue_l>img").hide();
				$("#dialogue_r>img").hide();
				$("#dialogue_l5").show();
				tag = "none";
			}else if(tag == "enz"){
				$(".messageDiv_style>p").text("你真棒！你是最棒的！你真的真的真的很棒！");
				$("#dialogue_l>img").hide();
				$("#dialogue_r>img").hide();
				$("#dialogue_r8").show();
			}else{
				$(".messageDiv_style>p").text("选择【精炼剂】错误，请重新选择【溶剂】");
				$("#dialogue_l>img").hide();
				$("#dialogue_r>img").hide();
				$("#dialogue_l2").show();
				tag = "none";
			}
		});
	
	$("#success_div").hide();
	$("#success_div").click(function() {
		if (tag == "enz") {
			$(window).attr("location", "./luoXian.html");
		}

	});


});
