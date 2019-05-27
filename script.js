$("div[id^=div-gpt-ad]").parent("div").addClass("ad");
$("div[id^=div-gpt-ad]").addClass("ad_child");
$(".ad").css("height", "0");
$("a[title^=Front]").css("padding", "0 7px");
$("img.delayloadimg").each(function(){
	$(this).attr("src", $(this).attr("data-delayloadurl"));
});
document.querySelector("a[title^=Front]").parentNode.style += ";border-left: solid 2px #fff;";
$("a[title^=Front]").css("height", "3rem");
let user = $("#navtop a[title^=Your]").text();
document.querySelector("img#rstar").src = "https://e.snmc.io/3.0/img/logo/sonemic-512.png";
let loggedin = true;
try {
	document.querySelector("#navlist > li.sub > a > span.hide-for-small").innerHTML = "log out";
} catch (TypeError) {
	loggedin = false;
}
document.querySelectorAll("#navlist > li > a > span.hide-for-small")[1].innerHTML = "subscribe";
if (window.location.href.split("://")[1] == "rateyourmusic.com/" || (window.location.href.split("://")[1].split("/")[0] == "rateyourmusic.com" && window.location.href.split("://")[1].split("/")[1].startsWith("?"))) {
	if (!loggedin) {
		document.querySelector("body").innerHTML = document.querySelector("body").innerHTML.replace("<!-- ~~~~~~~~ begin content! ~~~~~~~~~~~~~~~ -->", "<div id=\"frontcontentheader\">\n<div id=\"headleft\"><img src=\"https://i.imgur.com/dvHdS2I.png\"></div>\n<div id=\"headright\">\n<div id=\"welcome\"><h1>welcome to rym</h1><br><span>yes, this site was designed by monkeys. no, godspeed you! black emperor is not good</span><div><br><a href=\"https://rateyourmusic.com/account/login\" id=\"loginthing\">create an account</a></div></div>\n</div>\n</div>");
	} else {
		document.querySelector("body").innerHTML = document.querySelector("body").innerHTML.replace("<!-- ~~~~~~~~ begin content! ~~~~~~~~~~~~~~~ -->", "<div id=\"frontcontentheader\">\n<div id=\"headleft\"><img src=\"https://i.imgur.com/dvHdS2I.png\"></div>\n<div id=\"headright\">\n<div id=\"welcome\"><h1>welcome to rym</h1><br><span>yes, this site was designed by monkeys. no, godspeed you! black emperor is not good</span><div><br><a id=\"loginthing\" href=\"https://rateyourmusic.com/release/album/kevin-and-the-bikes/dorkcore-101/\">try listening to this instead</span></div></div>\n</div>\n</div>");
	}
	$("div#content").css("padding-top", "0");
	$("div.frontpage_column div.bubble_header").css("text-align", "left");
	$("<hr style='margin-bottom: 0.5rem;'>").insertAfter("div.frontpage_column div.bubble_header, .page_home_feature_header h2");
	$("div.page_home_follow").insertAfter($("div.row"));
	$("div.bubble_content > div").css("padding", "0");
	let users = []; for (var a of document.querySelectorAll("table.mbgen span.medium a")) {users.push(a);}
	for (var b in document.querySelectorAll("span.card_link > span.card_small")) {
		try {
			$(users[b]).insertAfter(document.querySelectorAll("span.card_link > span.card_small")[b]);
		} catch (TypeError) {
			break;
		}
	}
	let ratings = [];
	for (var c of document.querySelectorAll("div.bubble_content table.mbgen td:nth-child(1) > img")) {
		ratings.push(c);
	}
	for (var d in ratings) {
		$(document.querySelectorAll("span.card_link")[d]).append(ratings[d]);
	}
	$("div.frontpage_column div.bubble_header").each(function() {
		$(this).text($(this).text().split("[+]")[0].toLowerCase());
	});
	document.querySelector("#content > div.row > div:nth-child(2) > div.page_home_feature > div.page_home_feature_header > h2").innerHTML = document.querySelector("#content > div.row > div:nth-child(2) > div.page_home_feature > div.page_home_feature_header > h2").innerHTML.split("[+]")[0].toLowerCase();
	$("table + div + br").remove();
	var articles = document.querySelectorAll('div.frontpage_column table.mbgen tr');
	for (var i = 0; i < articles.length-1; i ++) {
		var hr = document.createElement('div');
		hr.style.width = "100%";
    	articles[i].parentNode.insertBefore(hr, articles[i].nextSibling);
	}
}