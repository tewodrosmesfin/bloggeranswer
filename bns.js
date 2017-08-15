// JQuery hover event with timeout by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);

// Timeago jQuery plugin ~ URL: http://timeago.yarp.com
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function r(){var n=i(this);var r=t.settings;if(!isNaN(n.datetime)){if(r.cutoff==0||Math.abs(o(n.datetime))<r.cutoff){e(this).text(s(n.datetime))}}return this}function i(n){n=e(n);if(!n.data("timeago")){n.data("timeago",{datetime:t.datetime(n)});var r=e.trim(n.text());if(t.settings.localeTitle){n.attr("title",n.data("timeago").datetime.toLocaleString())}else if(r.length>0&&!(t.isTime(n)&&n.attr("title"))){n.attr("title",r)}}return n.data("timeago")}function s(e){return t.inWords(o(e))}function o(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){if(t instanceof Date){return s(t)}else if(typeof t==="string"){return s(e.timeago.parse(t))}else if(typeof t==="number"){return s(new Date(t))}else{return s(e.timeago.datetime(t))}};var t=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"in a moment",seconds:"a few seconds",minute:"%d minute",minutes:"%d mins",hour:"%d hour",hours:"%d hrs",day:"%d day",days:"%d days",month:"month",months:"%d months",year:"%d year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){function l(r,i){var s=e.isFunction(r)?r(i,t):r;var o=n.numbers&&n.numbers[i]||i;return s.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture){throw"timeago allowPast and allowFuture settings can not both be set to false."}var n=this.settings.strings;var r=n.prefixAgo;var i=n.suffixAgo;if(this.settings.allowFuture){if(t<0){r=n.prefixFromNow;i=n.suffixFromNow}}if(!this.settings.allowPast&&t>=0){return this.settings.strings.inPast}var s=Math.abs(t)/1e3;var o=s/60;var u=o/60;var a=u/24;var f=a/365;var c=s<45&&l(n.seconds,Math.round(s))||s<90&&l(n.minute,1)||o<45&&l(n.minutes,Math.round(o))||o<90&&l(n.hour,1)||u<24&&l(n.hours,Math.round(u))||u<42&&l(n.day,1)||a<30&&l(n.days,Math.round(a))||a<45&&l(n.month,1)||a<365&&l(n.months,Math.round(a/30))||f<1.5&&l(n.year,1)||l(n.years,Math.round(f));var h=n.wordSeparator||"";if(n.wordSeparator===undefined){h=" "}return e.trim([r,c,i].join(h))},parse:function(t){var n=e.trim(t);n=n.replace(/\.\d+/,"");n=n.replace(/-/,"/").replace(/-/,"/");n=n.replace(/T/," ").replace(/Z/," UTC");n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");n=n.replace(/([\+\-]\d\d)$/," $100");return new Date(n)},datetime:function(n){var r=t.isTime(n)?e(n).attr("datetime"):e(n).attr("title");return t.parse(r)},isTime:function(t){return e(t).get(0).tagName.toLowerCase()==="time"}});var n={init:function(){var n=e.proxy(r,this);n();var i=t.settings;if(i.refreshMillis>0){this._timeagoInterval=setInterval(n,i.refreshMillis)}},update:function(n){var i=t.parse(n);e(this).data("timeago",{datetime:i});if(t.settings.localeTitle)e(this).attr("title",i.toLocaleString());r.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:t.parse(t.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))});r.apply(this)},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null}}};e.fn.timeago=function(e,t){var r=e?n[e]:n.init;if(!r){throw new Error("Unknown function name '"+e+"' for timeago")}this.each(function(){r.call(this,t)});return this};document.createElement("abbr");document.createElement("time")});

// SelectNav.js - by: https://github.com/lukaszfiszer/selectnav.js - Adaptado por http://www.ideiasblog.com
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"-",u=n.label||"Menu",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();$(document).ready(function(){selectnav('nav');selectnav('nav1');});

// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:false,autorotate:false,pauseonhover:true,delay:2000,active:1,controls:{prev:".prev",next:".next"}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent;options.attribute=$this.data("attribute")||options.attribute;options.animation=$this.data("animation")||options.animation;options.autorotate=$this.data("autorotate")||options.autorotate;options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover;options.delay=$this.data("delay")||options.delay;options.active=$this.data("active")||options.active;$this.find("> div").hide();$this.find("> div").eq(options.active-1).show();$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before");$this.find("> ul li").removeClass("active");$(this).addClass("active");$this.find("> div").hide();var currentTab=$(this).find("a").attr(options.attribute);if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")})}else{$this.find(currentTab).show();$(this).trigger("_after")}return false});var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");init;var elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var t=setTimeout(forward,options.delay);$this.mouseover(function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}function move(direction){if(direction=="forward"){i=++i%elements.length}if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}$this.find(options.controls.next).click(function(){move("forward")});$this.find(options.controls.prev).click(function(){move("backward")});$this.on("destroy",function(){$(this).removeData()})})};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);

// Simple Tab JQuery Plugin by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(a){a.fn.simplyTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simplyTab").prepend('<ul class="wrap-tab"></ul>');c.addClass("content-tab").each(function(){a(this).hide();e.find(".wrap-tab").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".wrap-tab a").on("click",function(){var f=a(this).parent().index();a(this).closest(".wrap-tab").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);


$(document).ready(function() {
	$(".cmm-tabs").simplyTab({
		active: 1,
		fx: "fade",
		showSpeed: 400,
		hideSpeed: 400
	});
	$('.blogger-tab').append($('#comments'));
	$(".cmm-tabs.simplyTab .wrap-tab").wrap("<div class='cmm-tabs-header'/>");
	$('.cmm-tabs-header').prepend('<h3><h8>Post </h8>Comment<h9>s</h9></h3>')
});
$(document).ready(function(e) {
	e("abbr.timeago").timeago()
});
$(document).ready(function() {
	$("ul#sub-menu").parent("li").addClass("hasSub");
	(jQuery)
});
$(document).ready(function() {
	$('a[name="ads-post-in"]').before($('#ads-post10').html());
	$('#ads-post10').html('')
});
$(document).ready(function() {
	$(".sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>");
	$(".footer-sections .widget h2").wrap("<div class='widget-title'/>");
	$(".index .post-outer,.archive .post-outer").each(function() {
		$(this).find(".block-image .thumb a").attr("style", function(e, t) {
			return t.replace("/default.jpg", "/mqdefault.jpg")
		}).attr("style", function(e, t) {
			return t.replace("s72-c", "s1600")
		})
	});
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('#back-to-top').fadeIn()
		} else {
			$('#back-to-top').fadeOut()
		}
	});
	$('#back-to-top').hide().click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		return false
	});
	var search = $('.search');
	search.click(function(e) {
		e.preventDefault();
		if(search.is('.active') && $(e.target).is(search)) {
			search.removeClass('active')
		} else {
			search.addClass('active');
			search.find('input').focus()
		}
	});
	$('body').click(function(e) {
		if(search.is('.active') && !$(e.target).is('.search, .search form, .search input')) {
			search.removeClass('active')
		}
	});
	(function(e) {
		var t = e("a.newer-link");
		var n = e("a.older-link");
		e.get(t.attr("href"), function(n) {
			t.html('<strong>Next <i class="fa fa-arrow-circle-o-right"></i></strong><span>' + e(n).find(".post h1.post-title").text() + "</span>")
		}, "html");
		e.get(n.attr("href"), function(t) {
			n.html('<strong><i class="fa fa-arrow-circle-o-left"></i> Previous</strong><span>' + e(t).find(".post h1.post-title").text() + "</span>")
		}, "html")
	})(jQuery)
});
$(document).ready(function() {
	$('.HTML .widget-content').each(function() {
		var text = $(this).text();
		if(text.match('randomposts')) {
			$.ajax({
				url: "/feeds/posts/default?alt=json-in-script",
				type: 'get',
				dataType: "jsonp",
				success: function(datax) {
					var numpost = datax.feed.entry.length;
					var min = 0;
					var max = numpost - randomposts_number;
					var random = Math.floor(Math.random() * (max - min + 1)) + min;
					$.ajax({
						url: "/feeds/posts/default?alt=json-in-script&start-index=" + random + "&max-results=" + randomposts_number,
						type: 'get',
						dataType: "jsonp",
						success: function(data) {
							var posturl = "";
							var htmlcode = '<ul class="roma-widget">';
							for(var i = 0; i < data.feed.entry.length; i++) {
								for(var j = 0; j < data.feed.entry[i].link.length; j++) {
									if(data.feed.entry[i].link[j].rel == "alternate") {
										posturl = data.feed.entry[i].link[j].href;
										break
									}
								}
								var posttitle = data.feed.entry[i].title.$t;
								var author = data.feed.entry[i].author[0].name.$t;
								var get_date = data.feed.entry[i].published.$t,
									year = get_date.substring(0, 4),
									month = get_date.substring(5, 7),
									day = get_date.substring(8, 10),
									date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
								var tag = data.feed.entry[i].category[0].term;
								var content = data.feed.entry[i].content.$t;
								var $content = $('<div>').html(content);
								if(content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
									var src2 = data.feed.entry[i].media$thumbnail.url;
									var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
								} else if(content.indexOf("<img") > -1) {
									var src = $content.find('img:first').attr('src');
									var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
								} else {
									var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
								}
								htmlcode += '<li><div class="wid-thumb">' + thumb + '</div><div class="p-head"><h3 class="wrp-titulo"><a href="' + posturl + '">' + posttitle + '</a></h3></div></li>'
							}
							htmlcode += '</ul><div class="clear"/>';
							$('.HTML .widget-content').each(function() {
								if($(this).text().match('randomposts')) {
									$(this).html(htmlcode);
									$(this).parent().addClass('ideias-widget');
									$(this).find('.rcp-thumb').each(function() {
										$(this).attr('style', function(i, src) {
											return src.replace('/default.jpg', '/mqdefault.jpg')
										}).attr('style', function(i, src) {
											return src.replace('s72-c', 's1600')
										})
									});
									$("p.trans").each(function() {
										var e = $(this).text();
										var t = $(this).attr("data-tran");
										$("#pages-wrapper *").replaceText(e, t)
									})
								}
							})
						}
					})
				}
			})
		}
		if(text.match('recentposts')) {
			$.ajax({
				url: "/feeds/posts/default?alt=json-in-script",
				type: 'get',
				dataType: "jsonp",
				success: function(datax) {
					$.ajax({
						url: "/feeds/posts/default?alt=json-in-script&max-results=" + recentposts_number,
						type: 'get',
						dataType: "jsonp",
						success: function(data) {
							var posturl = "";
							var htmlcode = '<ul class="roma-widget">';
							for(var i = 0; i < data.feed.entry.length; i++) {
								for(var j = 0; j < data.feed.entry[i].link.length; j++) {
									if(data.feed.entry[i].link[j].rel == "alternate") {
										posturl = data.feed.entry[i].link[j].href;
										break
									}
								}
								var posttitle = data.feed.entry[i].title.$t;
								var author = data.feed.entry[i].author[0].name.$t;
								var get_date = data.feed.entry[i].published.$t,
									year = get_date.substring(0, 4),
									month = get_date.substring(5, 7),
									day = get_date.substring(8, 10),
									date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
								var tag = data.feed.entry[i].category[0].term;
								var content = data.feed.entry[i].content.$t;
								var $content = $('<div>').html(content);
								if(content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
									var src2 = data.feed.entry[i].media$thumbnail.url;
									var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
								} else if(content.indexOf("<img") > -1) {
									var src = $content.find('img:first').attr('src');
									var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
								} else {
									var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
								}
								htmlcode += '<li><div class="wid-thumb">' + thumb + '</div><div class="p-head"><h3 class="wrp-titulo"><a href="' + posturl + '">' + posttitle + '</a></h3></div></li>'
							}
							htmlcode += '</ul><div class="clear"/>';
							$('.HTML .widget-content').each(function() {
								if($(this).text().match('recentposts')) {
									$(this).html(htmlcode);
									$(this).parent().addClass('ideias-widget');
									$(this).find('.rcp-thumb').each(function() {
										$(this).attr('style', function(i, src) {
											return src.replace('/default.jpg', '/mqdefault.jpg')
										}).attr('style', function(i, src) {
											return src.replace('s72-c', 's1600')
										})
									});
									$("p.trans").each(function() {
										var e = $(this).text();
										var t = $(this).attr("data-tran");
										$("#pages-wrapper *").replaceText(e, t)
									})
								}
							})
						}
					})
				}
			})
		}
	});
	$(".feat-layout .HTML .widget-content").each(function() {
		var t = $(this).html(),
			k = $(this).prev("h2").text();
		var z = t.match(/[^[\]]+(?=])/g);
		$(this).html("<span>" + z[0] + "</span><span>" + z[1] + "</span>");
		var ideas = $(this).text();
		var g = $(this).find("span").eq(0).text();
		var style = $(this).find("span").eq(1).text();
		if(style.match('feat1')) {
			$.ajax({
				url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + feat1_number,
				type: 'get',
				dataType: "jsonp",
				success: function(data) {
					var posturl = "";
					var htmlcode = '<ul>';
					for(var i = 0; i < data.feed.entry.length; i++) {
						for(var j = 0; j < data.feed.entry[i].link.length; j++) {
							if(data.feed.entry[i].link[j].rel == "alternate") {
								posturl = data.feed.entry[i].link[j].href;
								break
							}
						}
						var posttitle = data.feed.entry[i].title.$t;
						var author = data.feed.entry[i].author[0].name.$t;
						var get_date = data.feed.entry[i].published.$t,
							year = get_date.substring(0, 4),
							month = get_date.substring(5, 7),
							day = get_date.substring(8, 10),
							date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
						var content = data.feed.entry[i].content.$t;
						var $content = $('<div>').html(content);
						if(i == 0) {
							var re = /<\S[^>]*>/g;
							var postcontent = content.replace(re, "");
							if(postcontent.length > 100) {
								postcontent = '' + postcontent.substring(0, 130) + '...'
							}
							if(content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
								var src2 = data.feed.entry[i].media$thumbnail.url;
								var thumb = '<a class="primeiro-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
							} else if(content.indexOf("<img") > -1) {
								var src = $content.find('img:first').attr('src');
								var thumb = '<a class="primeiro-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
							} else {
								var thumb = '<a class="primeiro-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
							}
						} else {
							if(content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
								var src2 = data.feed.entry[i].media$thumbnail.url;
								var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
							} else if(content.indexOf("<img") > -1) {
								var src = $content.find('img:first').attr('src');
								var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
							} else {
								var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
							}
						};
						if(i == 0) {
							htmlcode += '<div class="primeiro"><div class="feat-thumb">' + thumb + '</div><div class="primeiro-content"><h3 class="feat-headline"><a href="' + posturl + '">' + posttitle + '</a></h3><span class="p-author">' + author + '</span><span class="p-date">' + date + '</span><p class="recent-des">' + postcontent + '</p></div></div>'
						} else {
							htmlcode += '<li><div class="feat-thumb">' + thumb + '</div><div class="mag-content"><span class="p-author">' + author + '</span><h3 class="feat-headline"><a href="' + posturl + '">' + posttitle + '</a></h3></div><div class="clear"/></li></div>'
						}
					}
					htmlcode += '</ul>';
					$(".feat-layout .HTML .widget-content").each(function() {
						var text = $(this).text();
						if(text == ideas) {
							$(this).html(htmlcode);
							$(this).parent().addClass('feat1');
							$(this).parent().addClass('feat');
							$(this).prev("h2").html('<a href="/search/label/' + g + '">' + k + '</a>');
							$(this).prev("h2").wrap('<div class="feat-title"></div>');
							$(this).removeClass('widget-content').addClass('layout-content');
							$(this).find('.mag-thumb').each(function() {
								$(this).attr('style', function(i, src) {
									return src.replace('/default.jpg', '/mqdefault.jpg')
								}).attr('style', function(i, src) {
									return src.replace('s72-c', 's1600')
								})
							});
							$("p.trans").each(function() {
								var e = $(this).text();
								var t = $(this).attr("data-tran");
								$("#pages-wrapper *").replaceText(e, t)
							})
						}
					})
				}
			})
		}
	})
});
$("#related-posts").each(function() {
	var g = $(this).html();
	$.ajax({
		url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + related_number,
		type: 'get',
		dataType: "jsonp",
		success: function(data) {
			var posturl = "";
			var htmlcode = '<div class="related">';
			for(var i = 0; i < data.feed.entry.length; i++) {
				for(var j = 0; j < data.feed.entry[i].link.length; j++) {
					if(data.feed.entry[i].link[j].rel == "alternate") {
						posturl = data.feed.entry[i].link[j].href;
						break
					}
				}
				var posttitle = data.feed.entry[i].title.$t;
				var content = data.feed.entry[i].content.$t;
				var $content = $('<div>').html(content);
				if(content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
					var src2 = data.feed.entry[i].media$thumbnail.url;
					var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
				} else if(content.indexOf("<img") > -1) {
					var src = $content.find('img:first').attr('src');
					var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
				} else {
					var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
				}
				htmlcode += '<li><div class="related-thumb">' + thumb + '</div><h3 class="related-title"><a href="' + posturl + '">' + posttitle + '</a></h3></li>'
			}
			htmlcode += '</div><div class="clear"/>';
			$("#related-posts").html(htmlcode);
			$('.related-img').each(function() {
				$(this).attr('style', function(i, src) {
					return src.replace('/default.jpg', '/mqdefault.jpg')
				}).attr('style', function(i, src) {
					return src.replace('s72-c', 's1600')
				})
			});
			$("p.trans").each(function() {
				var e = $(this).text();
				var t = $(this).attr("data-tran");
				$("#pages-wrapper *").replaceText(e, t)
			})
		}
	})
});




