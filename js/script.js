function open_box() {
	document.getElementById("enter_text").style.display = "block";
}

function close_box() {
	document.getElementById("enter_text").style.display = "none";
}

function add_text() {
	
	if (document.getElementById("en_text").value != "" && document.getElementById("le_text").value != "") {
		
		if (!localStorage.getItem("numbers")) {
			
			localStorage.setItem("numbers", 1);
			
			localStorage.setItem("en_text" + localStorage.getItem("numbers") + "", document.getElementById("en_text").value);
			localStorage.setItem("le_text" + localStorage.getItem("numbers") + "", document.getElementById("le_text").value);
			
			localStorage.setItem("numbers", Math.floor(Number(localStorage.getItem("numbers")) + 1));
			
		} else {
			
			localStorage.setItem("en_text" + localStorage.getItem("numbers") + "", document.getElementById("en_text").value);
			localStorage.setItem("le_text" + localStorage.getItem("numbers") + "", document.getElementById("le_text").value);
			
			localStorage.setItem("numbers", Math.floor(Number(localStorage.getItem("numbers")) + 1));
		}
		
		document.getElementById("enter_text").style.display = "none";
		
	} else {
		document.getElementById("alert_dialog").style.display = "block";
		
		setTimeout(function(){
			document.getElementById("alert_dialog").style.display = "none";
		}, 2000);
	}
	
}

var num = 1;
var fff = "'";

setInterval(function(){
	
	if (localStorage.getItem("en_text" + Number(num) + "") != null && localStorage.getItem("le_text" + Number(num) + "") != null) {
		
		document.getElementById("content_box").innerHTML += '<div class="top_l"><b>Text ' + Number(num) + '</b></div><div class="top_2"><b>English</b></div><div class="top_2"><b>Lerin</b></div><textarea id="en_text' + Number(num) + '" class="top_3">' + localStorage.getItem("en_text" + num + "") + '</textarea><textarea id="le_text' + Number(num) + '" class="top_3">' + localStorage.getItem("le_text" + Number(num) + "") + '</textarea><div class="top_4" onclick="localStorage.setItem(' + fff + 'en_text' + Number(num) + '' + fff + ', document.getElementById(' + fff + 'en_text' + Number(num) + '' + fff + ').value); localStorage.setItem(' + fff + 'le_text' + Number(num) + '' + fff + ', document.getElementById(' + fff + 'le_text' + Number(num) + '' + fff + ').value);">Save</div>';
		
		num++;
		
	}
	
}, 100);