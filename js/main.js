function bitly(t,a){var e="o_49r472vsrd",n="R_a023252cc7046b36d8b33ca9f406de18";$.getJSON("https://api-ssl.bitly.com/v3/shorten?callback=?",{format:"json",apiKey:n,login:e,longUrl:t},function(t){a(t.data.url)})}$(document).ready(function(){var t=$("[data-toggle-control]"),a=t.val(),e=t.attr("data-toggle-control"),n=$("[data-toggle-"+e+'*="'+a+'"]');a===n.attr("data-toggle-"+e)?n.css("display","block").removeAttr("hidden"):n.hide().attr("hidden",!0),t.on("change",function(t){$("[data-toggle-"+$(this).attr("data-toggle-control")+"]").hide().attr("hidden",!0),$("[data-toggle-"+$(this).attr("data-toggle-control")+'*="'+$(this).val()+'"]').css("display","block").removeAttr("hidden")})}),function(t,a){"use strict";var e=function(){function a(t){if(t){var a,e,r=t.offsetHeight;for(var i in o)a=i,document.body.clientWidth>a&&a>=e&&(n=o[i],e=a);t.style.marginBottom=n-r%n+"px"}}function e(e){a(e),"addEventListener"in t?t.addEventListener("resize",function(){a(e)},!1):"attachEvent"in t&&t.attachEvent("resize",function(){a(e)})}var n=0,o={};return function(t,a){var r="string"==typeof t?document.querySelectorAll(t):t,i=r.length;if("number"==typeof a)n=parseInt(a,10);else if("object"==typeof a){var s=parseInt(getComputedStyle(document.body,null).getPropertyValue("font-size"),10);for(var c in o){var d=/\d+em/.test(c)?parseInt(c,10)*s:/\d+px/.test(c)?parseInt(c,10):c;o[d]=parseInt(o[c],10)}}if(i>1)for(;i--;)e(r[i]);else e(r[0])}}();"undefined"!=typeof a?a.extend(a.fn,{baseline:function(t){return e(this,t)}}):t.baseline=e}(window,window.jQuery||window.Zepto||void 0),$(document).ready(function(){$("img").not('[data-js="promo-book-img"] img').baseline(6),$('[data-js="primary-nav-btn"]').on("click",function(t){t.preventDefault(),$("body").toggleClass("nav-open"),$('[data-js="primary-nav-close"]').on("click",function(t){t.preventDefault(),$("body").removeClass("nav-open"),$('[data-js="primary-nav-close"]').off("click")})});var t=$('[data-js="share"]').attr("data-permalink"),a=encodeURIComponent($('[data-js="share"]').attr("data-title"));bitly(t,function(e){$('[data-js="share-twitter"]').attr("href","https://twitter.com/share?text="+a+"%20-&url="+t+"&via=shayhowe&related=shayhowe"),$('[data-js="share-facebook"]').attr("href","http://www.facebook.com/sharer.php?u="+t),$('[data-js="share-google"]').attr("href","https://plus.google.com/share?url="+t)}),$('[data-js="share-twitter"]').click(function(){return window.open($(this).attr("href"),"sharer","toolbar=0,status=0,width=626,height=436"),!1}),$('[data-js="share-facebook"]').click(function(){return window.open($(this).attr("href"),"sharer","toolbar=0,status=0,width=626,height=436"),!1}),$('[data-js="share-google"]').click(function(){return window.open($(this).attr("href"),"sharer","toolbar=0,status=0,width=626,height=436"),!1}),$('[data-js="lesson"] h2').each(function(){var t=$(this).attr("id");$(this).append('<a class="lesson-anchor" data-js="lesson-anchor" href="#'+t+'">#'+t+"</a>"),$(this).hover(function(){$(this).children('[data-js="lesson-anchor"]').stop().css("display","inline-block").animate({opacity:"1"},150)},function(){$(this).children('[data-js="lesson-anchor"]').stop().animate({opacity:"0"},150,function(){$(this).css("display","none")})})})});