var id,password;
id=prompt("아이디입력");

if(id == "admin"){
	document.write("관리자입니다.");
	password = prompt("비밀번호입력");
	if(password == "1234"){
		// location.href = "http://www.naver.com";
		location.href = "login.html";
	}else{
		// location.href = "http://www.daum.net"
		location.href="error.html";
	}
}else{
	alert("나가주세요");
	location.href="error.html";
}