/* 

THINGS THAT NEED ATTENTION PLEASE FUCK HELP
- non-square album covers render improperly
- window resizing needs to be dealt with better i don't know how to do that help
- clicking out of search bar to select a searchtype clears text. i predicted this behavior but i don't know of any alternatives

*/

let searchparam = [document.querySelector("#bx").value, "a", ""];
function selectSearchType(t, txt) {
	searchparam[1] = t;
	document.getElementById("mouseoversearchtypes").innerHTML = "<span style=\"float: right;\">" + txt + "</span>";
}

function updateSearchQuery() {
	searchparam[2] = document.querySelector("#searchbar > input").value;
}

function makeSearchQuery() {
	var query = "search?bx=" + searchparam[0] + "&searchtype=" + searchparam[1] + "&searchterm=" + searchparam[2].replace(" ", "+");
	window.location.replace("https://rateyourmusic.com/" + query);
}

function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}

function doit(){var lazy_image_keywords = ['data', 'pagespeed', 'lazy', 'src']; var fix_lazy_load_element = function(element, src_attribute, keywords) {var last_valid = "";for (var attribute of element.attributes) {var number_of_keywords = 0;for (var keyword of keywords) {if (attribute.name.includes(keyword)){number_of_keywords += 1;if (number_of_keywords >= 2) {break}}}if (number_of_keywords >= 2) {last_valid = attribute;}}if (last_valid !== "") {element.setAttribute(src_attribute, last_valid.value);}}; for (var element of document.querySelectorAll('img')) {fix_lazy_load_element(element, "src", lazy_image_keywords);} for (var picture_element of document.querySelectorAll('picture')) {for (var source_element of picture_element.querySelectorAll("source")) {fix_lazy_load_element(source_element, "srcset", lazy_image_keywords)}}}

$('img').trigger('appear');
let old = document.querySelector("html");


if(document.readyState === "loading"){
    window.addEventListener('load', doit);
} else {
    doit();
}

function querySelectorAllInnerHTML(q, doc=old){
	let wiuefafdaga = [];
	[].forEach.call(doc.querySelectorAll(q), function(e){
		wiuefafdaga.push(e.innerHTML);
	});
	return wiuefafdaga;
}

function querySelectorAllHref(q, doc=old) {let afdiuhasdf = []; for (var element of Array.prototype.slice.call(doc.querySelectorAll(q))){
	afdiuhasdf.push(element.href);} return afdiuhasdf;}

document.styleSheets[0].disabled = true;
document.styleSheets[2].disabled = true;
window.onload = function() {
var loggedin = (old.querySelector("#navlist > li:nth-child(5) > a").innerHTML != "log in / sign up");
let uname = old.querySelector("#navlist > li:nth-child(5) > a").innerHTML;
console.log("logged in: " + loggedin, "\nuser: " + uname);
let cool = "<div id=\"navbar\">\n<a style=\"width: 1.25vw; height: 4rem;\"></a> <a class=\"menuitem\" href=\"https://rateyourmusic.com\"><img src=\"https://e.snmc.io/3.0/img/logo/sonemic-256.png\"></img></a>\n<a class=\"menuitem\" href=\"https://rateyourmusic.com/charts/top/album/all-time\">charts</a>\n<a class=\"menuitem\" href=\"https://rateyourmusic.com/lists/\">lists</a>\n<a class=\"menuitem\" href=\"https://rateyourmusic.com/community/\">community</a>\n<a class=\"menuitem\" href=\"https://rateyourmusic.com/wiki\">wiki</a>";
if (loggedin) {
	cool += "<a class=\"menuitem\" href=\"https://rateyourmusic.com/~" + uname + "\">" + uname + "</a>";
} else {
	cool += "<a class=\"menuitem\" href=\"https://rateyourmusic.com/account/login\">log in</a>";
}
cool += "<div id=\"searchbar\">\n<input type=\"text\" style=\"color: #aaa\" onfocus=\"this.value=''; this.style.color='#000';\" onblur=\"this.value='search...'; this.style.color='#aaa';\" name=\"searchtext\" value=\"search...\" oninput=\"updateSearchQuery();\"><div id=\"mouseoversearchtypes\" onmouseover=\"document.querySelector('#searchtypes').style.display = 'block';\" onmouseout=\"document.querySelector('#searchtypes').style.display = 'none';\">\n<span style=\"float: right;\">artists ▾</span></div><div class=\"gobutton\" onclick=\"makeSearchQuery();\"> ►</div><div id=\"searchtypes\" onmouseover=\"document.querySelector('#searchtypes').style.display = 'block';\" onmouseout=\"document.querySelector('#searchtypes').style.display = 'none';\"><ul id=\"searchtypelist\"> <li class=\"searchtypetitle\">music</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('a', 'artists ▾');\">artists</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('l', 'all releases ▾');\">all releases</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('y', 'v/a releases ▾');\">v/a releases</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('b', 'label ▾');\">label</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('j', 'catalog no. ▾');\">catalog no.</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('r', 'classical work ▾');\">classical work</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('v', 'review ▾');\">review</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('g', 'genre ▾');\">genre</li>\n<li class=\"searchtypetitle\">film</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('F', 'film title ▾');\">film title</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('A', 'film cast/crew ▾');\">film cast/crew</li>\n<li class=\"searchtypetitle\">videogames</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('N', 'game person ▾');\">game person</li>\n<li class=\"searchtypetitle\">site</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('u', 'user ▾');\">user</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('boards', 'boards ▾');\">boards</li>\n<li class=\"searchtype\" onclick=\"selectSearchType('s', 'list ▾');\">list</li>\n</ul></div> </div>\n</div>";
console.log(window.location.href);
if (window.location.href.split("://")[1] == "rateyourmusic.com/") {
	cool += "<div id=\"frontcontentheader\">\n<div id=\"headleft\"><img src=\"https://i.imgur.com/dvHdS2I.png\"></div>\n<div id=\"headright\">\n<div id=\"welcome\"><h1 style='margin-top: 2rem'>welcome to rym</h1><div style='margin-top: 0.75rem;'>yes, this site was designed by monkeys. no, godspeed you! black emperor is not good</div><div><br><a href=\"login.html\" id=\"loginthing\">create an account</a></div></div>\n</div>\n</div>";
	let reviewedalbums = [];
	let reviewedartists = [];
	let reviewedalbumcovers = [];
	let reviewedalbumlinks = [];
	let reviewedartistlinks = [];
	let reviewedalbumyears = [];
	let reviewerlinks = [];
	let reviewers = [];
	let reviewratings = [];
	let reviewtitles = [];
	let reviews = [];
	for (var a of old.querySelectorAll("#content > div.row > div:nth-child(1) > div.bubble_content > div > div.or_card_frame")) {
		console.log(a.innerHTML);
		reviewedalbums.push(a.querySelector("span.card_link > em > a.card_link_bg").innerHTML);
		reviewedartists.push(a.querySelector("span.card_link > a.card_link_bg").innerHTML);
		reviewedalbumcovers.push(a.querySelector("a > img").src);
		reviewedalbumlinks.push(a.querySelector("a").href);
		reviewedartistlinks.push(a.querySelector("span.card_link > a.card_link_bg").href);
		reviewedalbumyears.push(a.querySelector("span.card_link > span.card_small").innerHTML);
	}
	for (var b of old.querySelectorAll("#content > div.row > div:nth-child(1) > div.bubble_content > div > table.mbgen > tbody > tr")) {
		reviewerlinks.push("https://rateyourmusic.com" + b.querySelector("td.medium > span.medium > a").href);
		reviewers.push(b.querySelector("td.medium > span.medium > a").href.split("/~")[1]);
		reviewratings.push(b.querySelector("td:nth-child(1) > img").src);
	}
	for (var c of old.querySelectorAll("#content > div.row > div:nth-child(1) > div.bubble_content > div > div[id^='review']")) {
		reviews.push(c.innerHTML.split(/^<b>.+?<\/b><br><br>/)[c.innerHTML.split(/^<b>.+?<\/b><br><br>/).length-1]);
		reviewtitles.push(c.innerHTML.split(c.innerHTML.split(/^<b>.+?<\/b><br><br>/)[c.innerHTML.split(/^<b>.+?<\/b><br><br>/).length-1])[0]);
	}
	for (var d in reviewtitles) {
		if (reviewtitles[d]) {
			reviewtitles[d] = reviewtitles[d].split("<b>")[1].split("<\/b><br><br>")[0];
		}
	}
	console.log(reviewedalbums.length, reviewedartists.length, reviewedalbumlinks.length, reviewedartistlinks.length, reviewedalbumyears.length, reviewerlinks.length, reviewers.length, reviewratings.length, reviewtitles.length, reviews.length, reviewedalbumcovers.length);
	cool += "<div id='frontcontent' class='content'><div id=\"frontreviews\"><h1>reviews</h1>";
	for (var e in reviewedalbums) {
		if (e == 0) {
			cool += "<div class=\"review\"><hr><div class=\"reviewhead\"><div class=\"albumart\"><img src=\"" + reviewedalbumcovers[e] + "\" href=\"" + reviewedalbumlinks[e] + "\"></div>\n<div class=\"reviewinfo\">\n<div class=\"albuminfo\"> <span class=\"nameyear\"><a class=\"albumname\" href=\"" + reviewedalbumlinks[e] + "\">" + reviewedalbums[e] + "</a></span> <a href=\"" + reviewedartistlinks[e] + "\" class=\"albumartist\">" + reviewedartists[e] + " <span class=\"albumyear\">" + reviewedalbumyears[e] + "</span></a> </div> <div class=\"reviewerinfo\">\n<a class=\"reviewername\" href=\"" + reviewerlinks[e] + "\">" + reviewers[e] + "</a><br>\n<img class=\"rating\" src=\"" + reviewratings[e] + "\"></img><br>\n</div>\n<div class=\"reviewtitle\"><span class=\"title\">" + reviewtitles[e] + "</span></div>\n</div></div>\n<div class=\"reviewbody\">" + reviews[e] + "</div>\n</div>";
		} else {
		cool += "<div class=\"review\"><div class=\"reviewhead\"><div class=\"albumart\"><img src=\"" + reviewedalbumcovers[e] + "\" href=\"" + reviewedalbumlinks[e] + "\"></div>\n<div class=\"reviewinfo\">\n<div class=\"albuminfo\"> <span class=\"nameyear\"><a class=\"albumname\" href=\"" + reviewedalbumlinks[e] + "\">" + reviewedalbums[e] + "</a></span> <a href=\"" + reviewedartistlinks[e] + "\" class=\"albumartist\">" + reviewedartists[e] + " <span class=\"albumyear\">" + reviewedalbumyears[e] + "</span></a><br> </div> <div class=\"reviewerinfo\">\n<a class=\"reviewername\" href=\"" + reviewerlinks[e] + "\">" + reviewers[e] + "</a><br>\n<img class=\"rating\" src=\"" + reviewratings[e] + "\"></img><br>\n</div>\n<div class=\"reviewtitle\"><span class=\"title\">" + reviewtitles[e] + "</span></div>\n</div></div>\n<div class=\"reviewbody\">" + reviews[e] + "</div>\n</div>";
		}
	}
	cool += "</div><div id=\"frontright\"><div id=\"frontfeatures\"><h1>features</h1><hr>";
	let featurenames = [];
	let featurelinks = [];
	let featureimages = [];
	for (var f of old.querySelectorAll("#content > div.row > div:nth-child(2) > div.page_home_feature > div.page_home_feature_item")) {
		featurenames.push(f.querySelector("a").innerHTML);
		featurelinks.push(f.querySelector("a").href);
		featureimages.push(f.querySelector("img").src);
	}
	for (var g in featurenames) {
		cool += "<div class='feature'>\n<img src=" + featureimages[g] + ">\n<a href=" + featurelinks[g] + ">" + featurenames[g] + "</a>\n</div>\n";
	}
	cool += "</div><br>\n<h1>latest ratings</h1><hr>\n<div id=\"latestratings\">";
	let latestratingalbums = [];
	let latestratingalbumlinks = [];
	let latestratingartists = [];
	let latestratingartistlinks = [];
	let latestratingcovers = [];
	let latestratingusers = [];
	let latestratinguserlinks = [];
	let latestratingratings = [];
	for (var h of old.querySelectorAll("#content > div.row > div:nth-child(2) > div:nth-child(5) > div > table.mbgen > tbody > tr")) {
		latestratingalbums.push(h.querySelector("td:nth-child(2) > span > a.album").innerHTML);
		latestratingalbumlinks.push(h.querySelector("td:nth-child(2) > span > a.album").href);
		try {
			latestratingartists.push(h.querySelector("td:nth-child(2) > span > a.artist").innerHTML);
			latestratingartistlinks.push(h.querySelector("td:nth-child(2) > span > a.artist").href);
		} catch (TypeError) {
			console.log(querySelectorAllInnerHTML("td:nth-child(2) > span > span.credited_name", h));
			latestratingartists.push(querySelectorAllInnerHTML("td:nth-child(2) > span > span.credited_name", h)[0].split("<div")[0]);
			latestratingartistlinks.push(querySelectorAllHref("td:nth-child(2) > span > span.credited_name > div.credited_list > div.credited_list_inner > a.artist", h)[0]);
		}
		latestratingcovers.push(h.querySelector("td:nth-child(1) > a > img").src);
		latestratingusers.push(h.querySelector("td:nth-child(2) > span > a.user").innerHTML);
		latestratinguserlinks.push(h.querySelector("td:nth-child(2) > span > a.user").href);
		latestratingratings.push(h.querySelector("td:nth-child(2) > span > span > img").src);
	}
	for (var i in latestratingalbums) {
		cool += "<div class='latestrating'>\n<div class='albumart'><img src=\"" + latestratingcovers[i] + "\" href='" + latestratingalbumlinks[i] + "'></div>\n<div class='ratinginfo'>\n<a class='albumname' href='" + latestratingalbumlinks[i] + "'>" + latestratingalbums[i] + "</a>\n<a class='albumartist' href='" + latestratingartistlinks[i] + "'>" + latestratingartists[i] + "</a><br>\n<div class='userrating'><a class='user' href='" + latestratinguserlinks[i] + "'>" + latestratingusers[i] + "</a> | <img src='" + latestratingratings[i] + "'></div>\n</div>\n</div>\n";
		if (i < 2) {
			cool += "<hr>";
		}
	}
	cool += "</div><br><h1>new releases</h1><hr><div id=\"newreleases\">";
	let newreleasecovers = [];
	let newreleasealbums = [];
	let newreleasealbumlinks = [];
	let newreleaseartists = [];
	let newreleaseartistlinks = [];
	let newreleasedates = [];
	for (var j of old.querySelectorAll("#content > div.row > div:nth-child(2) > div:nth-child(7) > div > table > tbody > tr")) {
		newreleasecovers.push(j.querySelector("td:nth-child(1) > a > img").src);
		newreleasealbums.push(j.querySelector("td:nth-child(2) > a.album").innerHTML);
		newreleasealbumlinks.push(j.querySelector("td:nth-child(2) > a.album").href);
		console.log(j.querySelector("td:nth-child(2)").innerHTML);
		try {
			newreleaseartists.push(j.querySelector("td:nth-child(2) > a.artist").innerHTML);
			newreleaseartistlinks.push(j.querySelector("td:nth-child(2) > a.artist").href);
		} catch (TypeError) {
			newreleaseartists.push(querySelectorAllInnerHTML("td:nth-child(2) > div.credited_list > div.credited_list_inner > a.artist", j).join(", "));
			newreleaseartistlinks.push(querySelectorAllHref("td:nth-child(2) > div.credited_list > div.credited_list_inner > a.artist", j)[0]);
		}
		newreleasedates.push(j.querySelector("td:nth-child(2) > span.smallgray").innerHTML);
	}
	for (var k in newreleasecovers) {
		cool += "<div class='newrelease'>\n<div class='albumart'><img src='" + newreleasecovers[k] + "'></div>\n<div class='releaseinfo'>\n<a class='albumname' href='" + newreleasealbumlinks[k] + "'>" + newreleasealbums[k] + "</a>\n<div class='artistdate'><a class='albumartist' href='" + newreleaseartistlinks[k] + "'>" + newreleaseartists[k] + "</a> " + newreleasedates[k] + "</div>\n</div>\n</div><hr>";
	}
	cool = cool.slice(0, cool.length-5);
	cool += "</div>";
	cool += "</div></div></div><br><br><br><br>";
} else if (window.location.href.split("://")[1].split("/")[1] == "charts") {
	cool += "<div class='content'>";
	let head = old.querySelector("#content > div:nth-child(5) > h1").innerHTML;
} else if (window.location.href.split("://")[1].split("/")[1].split("?")[0] == "customchart") {
	
}
document.querySelector("body").innerHTML = cool;
}

let h = $(window).height();
let w = $(window).width();
window.resizeTo(h-1, w-1);

function querySelectorAllSrc(q, doc=old) {let afdiuhasdf = []; for (var element of Array.prototype.slice.call(doc.querySelectorAll(q))){
	afdiuhasdf.push(element.src);} return afdiuhasdf;}

