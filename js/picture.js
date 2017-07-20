//小图变大图
function mouseOverHandler(src){
	var img = document.getElementById("bigimg");
	
	img.src=src;
}

function mouseOver(){
	var img = document.getElementById("bigimg");
	
	img.src=event.srcElement.src;
}
//显示图片
function displayobj(id){
	var obj =document.getElementById(id);
	obj.style.display="block";
	
}
//隐藏图片
function hiddenobj(id){
	var obj =document.getElementById(id);
	obj.style.display="none";
	
}
//初始化图片
function mindiv(){
	var obj1 = document.getElementById("targetimg");
	var obj2 =document.getElementById(event.srcElement.id);
	obj1.src=obj2.src;
	
}

//放大镜特效
function move(){
	displayobj("fullimgbox");
	mindiv();
	//获取放大镜图片
	var obj =document.getElementById("targetimg");
	//获取鼠标相对位移
	var offx= obj.width/event.srcElement.width;
	var offy= obj.height/event.srcElement.height;
	//获取放大镜div对象
	var div=document.getElementById("fullimgbox");
	//设置容器的滚动条
	div.scrollLeft=(event.offsetX*offx);
	div.scrollTop=(event.offsetY*offy);
	
}

//切换分类
function changefl(id){
	var name= document.getElementsByName("na");
	var  bg=document.getElementById("b"+id);
	
	for(var j=0;j<name.length;j++){
		var bgc=bg.style.backgroundColor;
		
		if(bgc=="white"){
			bg.style.background="img/sort1.gif";
		}
	}
	var  divs= document.getElementsByName("bp");
	
	bg.style.background="img/sortbg1.jpg";
	for(var i=0;i<divs.length;i++){
		if(divs[i].id=="bp"+id){
			divs[i].style.display="block";
		}else{
			divs[i].style.display="none";
		}
	}
	
}

//显示div容器
function changep(number){
	for(var i=1;i<=5;i++)
	{
		if(i==number){
			var obj =document.getElementById("info"+number);
			obj.style.display="block";
		}else{
			var obj= document.getElementById("info"+i);
			obj.style.display="none";
		}
	}
	
}
