function listVids(){var o=getElements}function playVid(){for(var o=0;vids.length-1;o++)vids2[o].play(),console.log(o)}function onLayout(){setTimeout(function(){$(window).trigger("scroll")},600)}$time=7;var vid1=document.getElementById("loop-1"),vid2=document.getElementById("loop-2"),vid3=document.getElementById("loop-3"),vid4=document.getElementById("loop-4"),vid5=document.getElementById("loop-5"),vid6=document.getElementById("loop-6"),vid7=document.getElementById("loop-7"),vids=[vid1,vid2,vid3,vid4,vid5,vid6,vid7],vids2=[];setInterval(function(){playVid()},1e3*$time-200),!function(o,t,e,n){function a(o,t){return o[t]===n?k[t]:o[t]}function i(){var o=t.pageYOffset;return o===n?v.scrollTop:o}function r(o,t){var e=k["on"+o];e&&(b(e)?e.call(t[0]):(e.addClass&&t.addClass(e.addClass),e.removeClass&&t.removeClass(e.removeClass))),t.trigger("lazy"+o,[t]),l()}function s(t){r(t.type,o(this).off(f,s))}function c(e){if(C.length){e=e||k.forceLoad,E=1/0;var n,a,c=i(),d=t.innerHeight||v.clientHeight,l=t.innerWidth||v.clientWidth;for(n=0,a=C.length;a>n;n++){var u,m=C[n],g=m[0],y=m[h],w=!1,p=e;if(z(v,g)){if(e||!y.visibleOnly||g.offsetWidth||g.offsetHeight){if(!p){var L=g.getBoundingClientRect(),A=y.edgeX,j=y.edgeY;u=L.top+c-j-d,p=c>=u&&L.bottom>-j&&L.left<=l+A&&L.right>-A}if(p){r("show",m);var F=y.srcAttr,P=b(F)?F(m):g.getAttribute(F);P&&(m.on(f,s),g.src=P),w=!0}else E>u&&(E=u)}}else w=!0;w&&(C.splice(n--,1),a--)}a||r("complete",o(v))}}function d(){F>1?(F=1,c(),setTimeout(d,k.throttle)):F=0}function l(o){C.length&&(o&&"scroll"===o.type&&o.currentTarget===t&&E>=i()||(F||setTimeout(d,0),F=2))}function u(){L.lazyLoadXT()}function m(){c(!0)}var h="lazyLoadXT",g="lazied",f="load error",y="lazy-hidden",v=e.documentElement||e.body,w=t.onscroll===n||!!t.operamini||!v.getBoundingClientRect,k={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:w,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:y},onload:{removeClass:y,addClass:"lazy-loaded"},onerror:{removeClass:y},checkDuplicates:!0},p={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},L=o(t),b=o.isFunction,A=o.extend,j=o.data||function(t,e){return o(t).data(e)},z=o.contains||function(o,t){for(;t=t.parentNode;)if(t===o)return!0;return!1},C=[],E=0,F=0;o[h]=A(k,p,o[h]),o.fn[h]=function(e){e=e||{};var n,i=a(e,"blankImage"),s=a(e,"checkDuplicates"),c=a(e,"scrollContainer"),d={};o(c).on("scroll",l);for(n in p)d[n]=a(e,n);return this.each(function(n,a){if(a===t)o(k.selector).lazyLoadXT(e);else{if(s&&j(a,g))return;var c=o(a).data(g,1);i&&"IMG"===a.tagName&&!a.src&&(a.src=i),c[h]=A({},d),r("init",c),C.push(c)}})},o(e).ready(function(){r("start",L),L.on(k.loadEvent,u).on(k.updateEvent,l).on(k.forceEvent,m),o(e).on(k.updateEvent,l),k.autoInit&&u()})}(window.jQuery||window.Zepto||window.$,window,document),function(o){var t=o.lazyLoadXT;t.selector+=",video,iframe[data-src]",t.videoPoster="data-poster",o(document).on("lazyshow","video",function(e,n){var a=n.lazyLoadXT.srcAttr,i=o.isFunction(a);n.attr("poster",n.attr(t.videoPoster)).children("source,track").each(function(t,e){var n=o(e);n.attr("src",i?a(n):n.attr(a))}),this.load()})}(window.jQuery||window.Zepto||window.$),$(function(){$("img.lazy").lazyload({threshold:100,failure_limit:3,load:function(){imagesLoaded(container,function(){msnry.layout()})}})});var container=document.querySelector("#folderContent"),msnry=new Masonry(container,{gutter:".gutterSizer",columnWidth:".gridSizer",itemSelector:".folderItem"});msnry.on("layoutComplete",onLayout);var wintersport="?wintersport",fashion="?fashion",junior="?junior",outdoor="?outdoor",bike="?bike",gadgets="?gadgets",lookbook="?lookbook",acties="?acties",groeneprijzen="?groeneprijzen",christmas="?christmas",navFix="navFix",testArray=location.search.split("&"),testParam=testArray[0],paramArray=["?wintersport","?fashion","?junior","?outdoor","?bike","?gadgets","?christmas"],classArray=[".wintersport",".fashion",".junior",".outdoor",".bike",".gadgets",".christmas"];testParam===wintersport?($(".fashion, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook, .acties").hide(),$(".wintersport").show(),$("li#wintersport").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===fashion?($(".wintersport, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook, .acties").hide(),$(".fashion").show(),$("li#fashion").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===junior?($(".wintersport, .fashion, .outdoor, .bike, .gadgets, .christmas, .lookbook, .acties").hide(),$(".junior").show(),$("li#junior").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===outdoor?($(".wintersport, .fashion, .junior, .bike, .gadgets, .christmas, .lookbook, .acties").hide(),$(".outdoor").show(),$("li#outdoor").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===bike?($(".wintersport, .fashion, .junior, .outdoor, .gadgets, .christmas, .lookbook, .acties, .groeneprijzen").hide(),$(".bike").show(),$("#bike").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===gadgets?($(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .lookbook, .acties, .groeneprijzen").hide(),$(".gadgets").show(),$("#gadgets").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===lookbook?($(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .gadgets, .sfeer, .acties, .groeneprijzen").hide(),$(".lookbook").show(),$("#lookbook").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===acties?($(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .gadgets, .sfeer, .lookbook, .groeneprijzen").hide(),$(".acties").show(),$("#acties").addClass("active"),$("#alleFolderProducten").removeClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===groeneprijzen?($(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .gadgets, .sfeer, .lookbook, .acties").hide(),$(".groeneprijzen").show(),$("#groeneprijzen").addClass("active"),$("#alleFolderProducten").removeClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===christmas?($(".wintersport, .fashion, .junior, .outdoor, .bike, .gadgets, .lookbook, .acties, .groeneprijzen").hide(),$(".christmas").show(),$("#christmas").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):($(".wintersport, .fashion, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook, .acties, .groeneprijzen").show(),$("#alleFolderProducten").addClass("active"),imagesLoaded(container,function(){msnry.layout(),onLayout()})),$("#wintersport").click(function(){location.search=wintersport,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#fashion").click(function(){location.search=fashion,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#junior").click(function(){location.search=junior,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#outdoor").click(function(){location.search=outdoor,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#bike").click(function(){location.search=bike,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#gadgets").click(function(){location.search=gadgets,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#lookbook").click(function(){location.search=lookbook,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#acties").click(function(){location.search=acties,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#groeneprijzen").click(function(){location.search=groeneprijzen,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#christmas").click(function(){location.search=christmas,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#alleFolderProducten").click(function(){location.search="",imagesLoaded(container,function(){msnry.layout(),onLayout()})}),imagesLoaded(container,function(){msnry.layout()});