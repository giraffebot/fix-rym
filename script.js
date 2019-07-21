$("div[id^=div-gpt-ad]").parent("div").addClass("ad");
$("div[id^=div-gpt-ad]").addClass("ad_child");
$(".ad").css("height", "0");
$("a[title^=Front]").css("padding", "0 7px");
$("img.delayloadimg").each(function(){
	$(this).attr("src", $(this).attr("data-delayloadurl"));
});
document.querySelector("a[title^=Front]").parentNode.style += ";border-left: solid 2px #fff;";
$("a[title^=Front]").css("height", "3rem");
// let user = $("#navtop a[title^=Your]").text();
// document.getElementById("navtop").onmouseover = function(){
// 	document.getElementById("")
// };
document.querySelector("img#rstar").src = "https://e.snmc.io/3.0/img/logo/sonemic-512.png";
let loggedin = true;
try {
	document.querySelector("#navlist > li.sub > a > span.hide-for-small").innerHTML = "log out";
} catch (TypeError) {
	loggedin = false;
}

let togglesubmenu = function(){
	if (document.querySelector(".submenu_ext").style.display === "none") {
	    document.querySelector(".submenu_ext").style.display = "block";
	    $("div#content").removeClass("submenu_hidden");
	} else {
	    document.querySelector(".submenu_ext").style.display = "none";
	    $("div#content").addClass("submenu_hidden");
	}
};

if (loggedin) {
	var li = document.createElement("li");
	li.innerHTML = "<span class='sub'>...</span>";
	document.getElementById("navlist").appendChild(li);
	document.querySelector("#navlist > li:nth-child(8)").onclick = togglesubmenu;
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
	$("div.ad").remove();
	$("#loginthing > table").remove();
	$("table + div + br").remove();
	$("#content > div.row > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").remove();
	var articles = document.querySelectorAll('div.frontpage_column table.mbgen tr');
	for (var i = 0; i < articles.length-1; i ++) {
		var hr = document.createElement('div');
		hr.style.width = "100%";
    	articles[i].parentNode.insertBefore(hr, articles[i].nextSibling);
	}
	$("h2:contains(Features)").text("features");
} else if (window.location.href.split("rateyourmusic.com/")[1].startsWith("~")) {
	var pfp = document.querySelector("td#profile_image").outerHTML;
	var ph_name = document.querySelector("#content > table > tbody > tr > td > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > table:nth-child(1) tr").length;
} else if (window.location.href.split("rateyourmusic.com/")[1].split("/")[0] == "account") {
	document.querySelector("div#profile_tab").innerHTML = "<ul><li><a href='/account/profile_edit'>user profile</a></li><li><a href='/account/change_password'>change password</a></li><li><a onclick=\"settingspage('display')\">display</a></li><li><a onclick=\"settingspage('privacy')\">privacy</a></li><li><a onclick=\"settingspage('integration')\">account integration</a></li><li><a onclick=\"settingspage('subscription')\">subscription settings</a></li><li><a href='/account/rating_system'>rating system</a></li><li><a href='/account/requests'>requests</a></li><li><a onclick=\"settingspage('delete')\">delete account</a></li>" + /*"<li><a onclick=\"settingspage('all')\">all</a></li>" +*/ "</ul>";
	if (window.location.href.split("rateyourmusic.com/")[1] == "account/preferences") {
		var show = [];
		var hide = [];
		console.log(localStorage.getItem("settingspage"));
		switch (localStorage.getItem("settingspage")) {
			case "display":
				var all = document.querySelectorAll('#mediumForm > fieldset > *'), i;
				for (i = 0; i < all.length; ++i) {
					all[i].style.display = "none";
				}
				var clear = document.querySelectorAll("div.clear"), i;
				for (i = 0; i < clear.length; ++i) {
					clear[i].style.display = "";
				}
				document.querySelector("#mediumForm > fieldset > small").innerHTML += "<br><br><br>";
				show = ["#mediumForm > fieldset > b:nth-child(15)", "#mediumForm > fieldset > label:nth-child(17)", "#mediumForm > fieldset > label:nth-child(18)", "#mediumForm > fieldset > label:nth-child(19)", "#mediumForm > fieldset > label:nth-child(20)", "#mediumForm > fieldset > small", "#mediumForm > fieldset > label:nth-child(25)", "#mediumForm > fieldset > b:nth-child(27)", "#mediumForm > fieldset > label:nth-child(29)", "#mediumForm > fieldset > label:nth-child(30)", "#mediumForm > fieldset > label:nth-child(31)", "#mediumForm > fieldset > label:nth-child(32)", "#mediumForm > fieldset > label:nth-child(33)", "#mediumForm > fieldset > label:nth-child(34)", "#mediumForm > fieldset > label:nth-child(35)", "#mediumForm > fieldset > label:nth-child(45)", "#mediumForm > fieldset > label:nth-child(46)", "#mediumForm > fieldset > label:nth-child(47)", "#mediumForm > fieldset > label:nth-child(48)", "#mediumForm > fieldset > label:nth-child(54)", "#mediumForm > fieldset > label:nth-child(55)", "#mediumForm > fieldset > label:nth-child(56)", "#mediumForm > fieldset > label:nth-child(57)", "#mediumForm > fieldset > div:nth-child(58) > div:nth-child(2)", "#mediumForm > fieldset > div:nth-child(58)", "#mediumForm > fieldset > h4:nth-child(3)"];
				for (i = 0; i < show.length; ++i) {
					document.querySelector(show[i]).style.display = "";
				}
				document.querySelector("#mediumForm > fieldset > div:nth-child(58) > div.clear").style.display = "none";
				document.querySelector("#mediumForm > fieldset > div:nth-child(52)").style.display = "none";
				document.querySelector("#mediumForm > fieldset > div:nth-child(7)").style.display = "none";
				document.querySelector("#mediumForm > fieldset > div:nth-child(44)").style.display = "none";
				document.querySelector("#mediumForm > fieldset > label:nth-child(20)").style.marginBottom = "0";
				document.querySelector("#mediumForm > fieldset > h4:nth-child(3)").innerHTML = "display";
				document.querySelector("#mediumForm > fieldset > h4:nth-child(3)").style.marginTop = "0";
				document.querySelector("#go").style.display = "";
				document.querySelector("fieldset").innerHTML += "<br><br>" + document.querySelector("#go").outerHTML;
				break;
			case "privacy":
				var all = document.querySelectorAll('#mediumForm > fieldset > *'), i;
				for (i = 0; i < all.length; ++i) {
					all[i].style.display = "none";
				}
				var clear = document.querySelectorAll("div.clear"), i;
				for (i = 0; i < clear.length; ++i) {
					clear[i].style.display = "";
				}
				show = ["#mediumForm > fieldset > h4:nth-child(3)", "#mediumForm > fieldset > p", "#mediumForm > fieldset > p > a", "#mediumForm > fieldset > b:nth-child(6)", "#mediumForm > fieldset > a:nth-child(8)", "#mediumForm > fieldset > a:nth-child(11)", "#mediumForm > fieldset > b:nth-child(37)", "#mediumForm > fieldset > br:nth-child(38)", "#mediumForm > fieldset > span", "#mediumForm > fieldset > br:nth-child(40)", "#mediumForm > fieldset > br:nth-child(41)", "#mediumForm > fieldset > label:nth-child(43)", "#mediumForm > fieldset > label:nth-child(50)", "#mediumForm > fieldset > label:nth-child(51)", "#mediumForm > fieldset > div:nth-child(52)"];
				for (i = 0; i < show.length; ++i) {
					document.querySelector(show[i]).style.display = "";
				}
				document.querySelector("#mediumForm > fieldset > div:nth-child(58)").style.display = "none";
				document.querySelector("#mediumForm > fieldset > div:nth-child(16)").style.display = "none";
				document.querySelector("#mediumForm > fieldset > h4:nth-child(3)").innerHTML = "privacy";
				document.querySelector("#mediumForm > fieldset > h4:nth-child(3)").style.marginTop = "0";
				document.querySelector("#go").style.display = "";
				document.querySelector("fieldset").innerHTML += document.querySelector("#go").outerHTML;
				break;
			case "integration":
				var all = document.querySelectorAll('#mediumForm > fieldset > *'), i;
				for (i = 0; i < all.length; ++i) {
					all[i].style.display = "none";
				}
				var clear = document.querySelectorAll("div.clear"), i;
				for (i = 0; i < clear.length; ++i) {
					clear[i].style.display = "";
				}
				show = ["#mediumForm > fieldset > div:nth-child(58) > div.clear"];
				for (i = 0; i < show.length; ++i) {
					document.querySelector(show[i]).style.display = "";
				}
				hide = ["#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > hr", "#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > a.smallbutton", "#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > h4:nth-child(1)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(4) > a", "#mediumForm > fieldset > div:nth-child(58) > div:nth-child(2)", "#mediumForm > fieldset > div:nth-child(52)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > br:nth-child(11)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > br:nth-child(12)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > br:nth-child(1)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > br:nth-child(2)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > br:nth-child(3)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > br:nth-child(5)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > br:nth-child(6)", "#mediumForm > fieldset > div:nth-child(58) > br", "#mediumForm > fieldset > div:nth-child(7)", "#mediumForm > fieldset > div:nth-child(44)", "#mediumForm > fieldset > div:nth-child(28)", "#mediumForm > fieldset > div:nth-child(16)", "#mediumForm > fieldset > div:nth-child(14)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > table"];
				for (i = 0; i < hide.length; ++i) {
					document.querySelector(hide[i]).style.display = "none";
				}
				document.querySelector("#mediumForm > fieldset > div:nth-child(58)").innerHTML = document.querySelector("#mediumForm > fieldset > div:nth-child(58)").innerHTML.split("When an artist's name is in a character set other than Latin:").join("");
				document.querySelector("#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7)").innerHTML = document.querySelector("#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7)").innerHTML.split('<hr noshade="noshade" style="display: none;">')[1];
				document.querySelector("#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > h4:nth-child(3)").style.marginTop = "0";
				document.querySelector("#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > p > br:nth-child(5)").style.display = "none";
				document.querySelector("#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > p > br:nth-child(4)").style.display = "none";
				document.querySelector("#go").style.display = "";
				break;
			case "subscription":
				var all = document.querySelectorAll('#mediumForm > fieldset > *'), i;
				for (i = 0; i < all.length; ++i) {
					all[i].style.display = "none";
				}
				var clear = document.querySelectorAll("div.clear"), i;
				for (i = 0; i < clear.length; ++i) {
					clear[i].style.display = "";
				}
				show = ["#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > h4:nth-child(1)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7) > a.smallbutton", "#mediumForm > fieldset > h4:nth-child(1)", "#mediumForm > fieldset > div:nth-child(2)"];
				for (i = 0; i < show.length; ++i) {
					console.log(show[i]);
					document.querySelector(show[i]).style.display = "";
				}
				hide = ["#mediumForm > fieldset > div:nth-child(52)", "#mediumForm > fieldset > div:nth-child(58) > div:nth-child(2) > label:nth-child(1)", "#mediumForm > fieldset > div:nth-child(58) > div:nth-child(2) > label:nth-child(2)", "#mediumForm > fieldset > div:nth-child(58) > div:nth-child(2) > label:nth-child(3)", "#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(4) > a"];
				for (i = 0; i < hide.length; ++i) {
					console.log(hide[i]);
					document.querySelector(hide[i]).style.display = "none";
				}
				document.querySelector("#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7)").innerHTML = document.querySelector("#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7)").innerHTML.split("<hr noshade=\"noshade\">")[0];
				document.querySelector("#mediumForm > fieldset > div:nth-child(58)").innerHTML = document.querySelector("#mediumForm > fieldset > div:nth-child(58)").innerHTML.split("When an artist's name is in a character set other than Latin:").join("");
				var br = document.querySelectorAll("fieldset div br"), i;
				for (i = 0; i < br.length; ++i) {
					console.log(br[i]);
					br[i].style.display = "none";
				}
				document.querySelector("#mediumForm > fieldset > h4:nth-child(1)").style.marginTop = "0";
				document.querySelector("fieldset").innerHTML += "<input type=\"submit\" id=\"go\" value=\"Change Preferences >>\">";
				break;
			case "delete":
				var all = document.querySelectorAll('#mediumForm > fieldset > *'), i;
				for (i = 0; i < all.length; ++i) {
					all[i].style.display = "none";
				}
				show = ["#mediumForm > fieldset > div:nth-child(58)"];
				for (i = 0; i < show.length; ++i) {
					console.log(show[i]);
					document.querySelector(show[i]).style.display = "";
				}
				hide = ["#mediumForm > fieldset > div:nth-child(52)", "#mediumForm > fieldset > div:nth-child(58) > div:nth-child(2) > label:nth-child(1)", "#mediumForm > fieldset > div:nth-child(58) > div:nth-child(2) > label:nth-child(2)", "#mediumForm > fieldset > div:nth-child(58) > div:nth-child(2) > label:nth-child(3)"];
				for (i = 0; i < hide.length; ++i) {
					console.log(hide[i]);
					document.querySelector(hide[i]).style.display = "none";
				}
				document.querySelector("#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7)").innerHTML = document.querySelector("#mediumForm > fieldset > div:nth-child(58) > div.clear > div:nth-child(7)").innerHTML.split("<h4>Subscription status</h4>")[0];
				document.querySelector("#mediumForm > fieldset > div:nth-child(58)").innerHTML = document.querySelector("#mediumForm > fieldset > div:nth-child(58)").innerHTML.split("When an artist's name is in a character set other than Latin:").join("");
				document.querySelector("fieldset").innerHTML += "<input type=\"submit\" id=\"go\" value=\"Change Preferences >>\">";
				var br = document.querySelectorAll("fieldset div br"), i;
				for (i = 0; i < br.length; ++i) {
					console.log(br[i]);
					br[i].style.display = "none";
				}
				break;
		}
	}
}

var settingspage = function(page) {
	if (window.location.href.split("rateyourmusic.com/")[1].split("/")[0] == "account") {
		localStorage.setItem("settingspage", page);
		if (window.location.href != "https://rateyourmusic.com/account/preferences") {
			window.location.href = "https://rateyourmusic.com/account/preferences";
		} else {
			window.location.reload();
		}
	} else {
		return false;
	}
};

for (var c of document.querySelectorAll("img.coverart_img")) {
	c.parentNode.style += "; background: none;";	
}
