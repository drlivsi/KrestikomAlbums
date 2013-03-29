window.onload = function (){
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("images").innerHTML = getImages(xmlhttp.responseText);
		}
	}
	
	xmlhttp.open("GET", "http://krestikom.net/forum/picall.php", true);
	xmlhttp.send();
	
	
	function getImages(htmltext) {
		pattern = /<a class="picture"[\s\S]+?<\/a>/gm;
		var res = '';
		var html = '';
		var counter = 0;
		var res = htmltext.match(pattern);
		for(var i = 0; i< res.length; i++) {
			var realUrl = res[i].replace("attachment.php", "http://krestikom.net/forum/attachment.php");
			realUrl = realUrl.replace("album.php", "http://krestikom.net/forum/album.php");
			realUrl = realUrl.replace("href", "target='_blank' href");
			html = html + realUrl;	
		}
		document.getElementById("loader").style.display="none";
		return html;
	}
}