// $(function(){
// 	$("button").html("Click");
// 	$("button").css("background","#000033");
// });

// $(function(){
// 	alert($("button").html());
// 	$("button").css("background","#000033");
// });

// $(function(){
// 	$("button").click(function(){
// 		$("button").html("Click");
// 		$("button").css("background","#000033");
// 	});
// });

// thisで簡略化
// $(function(){
// 	$("button").click(function(){
// 		$(this).html("Click");
// 		$(this).css("background","#000033");
// 	});
// });

// メソッドチェーン
$(function(){
	$("button").click(function(){
		$(this).html("Click").css("background","#000033");
	});
});
