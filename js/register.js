function checkUser(){
	if($("#username").val()==""){
		$("#ckusername").html("用户名不能为空！");
			$("#username").focus();
			return  false;
	}else{
		$("#ckusername"). html("");
			return  true;
	}
}

function checkPwd(){
	if($("#pwd").val().length!==6){
		$("#ckpwd").html("请输入6位数密码");
		$("#pwd").focus();
		return false;
	}else {
		$("#ckpwd"). html("");
			return  true;
	}
	
	
}

function checkRpwd(){
	var pwd1=$("#repwd");
	if(pwd1.val()!=$("#pwd").val()){
		$("#ckrpwd").html("密码输入错误！");
		$("#repwd").focus();
		return false;
	}else{
		$("#ckrpwd"). html("");
			return  true;
	}
}


function checkEmail(){
	var email =$("#email").val();
	var szReg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/; 
	var bChk=szReg.test(email); 
	
	if(bChk){
		$("#ckemail"). html("");
		return true;
	}else{
		$("#ckemail"). html("邮箱输入错误！");
		$("#email").focus();
		return false;
	}

	
}

function checkB(){
	if($("#checkboxx").is(':checked'))
	{
		$("#ckbox").html("");
		return true;
	}else{
		$("#ckbox").html("请同意协议");
		return false;
	}
}


function allCheck(){
				
				if(!checkUser()){
					return false;
				}
				if(!checkPwd()){
					return false;
				}
				if(!checkRpwd()){
					return false;
				}
				if(!checkEmail()){
					return false;
				}
				if(!checkB()){
					return  false;
				}
					return true;
			}