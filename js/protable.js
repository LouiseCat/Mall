$(document).ready(function(e){
	var  color ="#FCDAD5";
	$(".tbprolist tr:odd td").css("background-color",color); //改变偶数行颜色
	//把背景色保存到属性当中
	$(".tbprolist tr:odd").attr("bg",color);
	$(".tbprolist tr:even").attr("bg","#fff");
	
	//鼠标移动显示颜色
	$(".tbprolist tr td ").mouseover(function(){
		$(this).parent().find("td").css("background-color","#C9E4D6")
	});
	
	//鼠标移开恢复颜色
	$(document).ready(function(){
		$(".tbprolist tr td").mouseout(function(){
			var  bgc =$(this).parent().attr("bg");
			$(this).parent().find("td").css("background-color",bgc);
		});
	});
});

