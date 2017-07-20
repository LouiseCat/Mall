
window.onload=function showLeftTime()
{
var initializationTime=(new Date()).getTime();
var now=new Date();
var year=now.getFullYear(); 
var month=now.getMonth()+1;
var day=now.getDate();
var hours=now.getHours();
var minutes=now.getMinutes();
var seconds=now.getSeconds();
var time=""+year+"年"+month+"月"+day+"日 ";
//一秒刷新一次显示时间
var timeID=setTimeout(showLeftTime,1000);
Clock.innerHTML=time;
}

