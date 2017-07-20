$(document).ready(function(){
	
	GWprice();
	$("#gouwulist .cancel").each(function(){
		$(this).click(function(){
			$(this).parent().parent().remove();
			GWprice();
		});
	});
	
	
});

//购物计算钱
function GWprice(){
	$("#gouwulist .pricee").each(function(){
		
		var  price = $(this).text();
		
		var num =$(this).parent().parent().children("td").find(".num").val();
		
		$(this).parent().parent().children("td").find(".smalltotal").text(price*num);
	});
	
	
	var total=0.00;
	var rows= 0;
	
	$("#gouwulist .smalltotal").each(function(){
		 total =total+parseFloat($(this).text());
		 rows++;
		 $("#count").text(rows);
		 $(".total").text(total);
		 
		 $(".zhe").text(0.5*total);
		
	});
	
}
