function listVids(){var o=getElements}function playVid(){for(var o=0;vids.length-1;o++)vids2[o].play(),console.log(o)}function onLayout(){setTimeout(function(){$(window).trigger("scroll")},600)}function filter(){testParam===wintersport?($(".fashion, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook, .hiddenBlock").hide(),$(".wintersport").show(),$("li#wintersport").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===fashion?($(".wintersport, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook, .hiddenBlock").hide(),$(".fashion").show(),$("li#fashion").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===junior?($(".wintersport, .fashion, .outdoor, .bike, .gadgets, .christmas, .lookbook, .hiddenBlock").hide(),$(".junior").show(),$("li#junior").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===outdoor?($(".wintersport, .fashion, .junior, .bike, .gadgets, .christmas, .lookbook, .hiddenBlock").hide(),$(".outdoor").show(),$("li#outdoor").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===bike?($(".wintersport, .fashion, .junior, .outdoor, .gadgets, .christmas, .lookbook, .groeneprijzen, .hiddenBlock").hide(),$(".bike").show(),$("#bike").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===gadgets?($(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .lookbook, .groeneprijzen, .hiddenBlock").hide(),$(".gadgets").show(),$("#gadgets").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===lookbook?($(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .gadgets, .sfeer, .groeneprijzen, .hiddenBlock").hide(),$(".lookbook").show(),$("#lookbook").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===groeneprijzen?($(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .gadgets, .sfeer, .lookbook, .hiddenBlock").hide(),$(".groeneprijzen").show(),$("#groeneprijzen").addClass("active"),$("#alleFolderProducten").removeClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===christmas?($(".wintersport, .fashion, .junior, .outdoor, .bike, .gadgets, .lookbook, .groeneprijzen, .hiddenBlock").hide(),$(".christmas").show(),$("#christmas").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):($(".wintersport, .fashion, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook, .groeneprijzen").show(),$(".hiddenBlock").hide(),$("#alleFolderProducten").addClass("active"),imagesLoaded(container,function(){msnry.layout(),onLayout()})),$("#wintersport").click(function(){location.search=wintersport,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#fashion").click(function(){location.search=fashion,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#junior").click(function(){location.search=junior,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#outdoor").click(function(){location.search=outdoor,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#bike").click(function(){location.search=bike,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#gadgets").click(function(){location.search=gadgets,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#lookbook").click(function(){location.search=lookbook,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#acties").click(function(){location.search=acties,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#groeneprijzen").click(function(){location.search=groeneprijzen,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#christmas").click(function(){location.search=christmas,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#alleFolderProducten").click(function(){location.search="",imagesLoaded(container,function(){msnry.layout(),onLayout()})}),imagesLoaded(container,function(){msnry.layout()})}$time=7;var vid1=document.getElementById("loop-1"),vid2=document.getElementById("loop-2"),vid3=document.getElementById("loop-3"),vid4=document.getElementById("loop-4"),vid5=document.getElementById("loop-5"),vid6=document.getElementById("loop-6"),vid7=document.getElementById("loop-7"),vids=[vid1,vid2,vid3,vid4,vid5,vid6,vid7],vids2=[];setInterval(function(){playVid()},1e3*$time-200),!function(o,n,t,e){function i(o,n){return o[n]===e?w[n]:o[n]}function a(){var o=n.pageYOffset;return o===e?v.scrollTop:o}function r(o,n){var t=w["on"+o];t&&(b(t)?t.call(n[0]):(t.addClass&&n.addClass(t.addClass),t.removeClass&&n.removeClass(t.removeClass))),n.trigger("lazy"+o,[n]),l()}function s(n){r(n.type,o(this).off(f,s))}function d(t){if(C.length){t=t||w.forceLoad,B=1/0;var e,i,d=a(),c=n.innerHeight||v.clientHeight,l=n.innerWidth||v.clientWidth;for(e=0,i=C.length;i>e;e++){var u,h=C[e],g=h[0],y=h[m],k=!1,p=t;if(z(v,g)){if(t||!y.visibleOnly||g.offsetWidth||g.offsetHeight){if(!p){var L=g.getBoundingClientRect(),A=y.edgeX,j=y.edgeY;u=L.top+d-j-c,p=d>=u&&L.bottom>-j&&L.left<=l+A&&L.right>-A}if(p){r("show",h);var E=y.srcAttr,F=b(E)?E(h):g.getAttribute(E);F&&(h.on(f,s),g.src=F),k=!0}else B>u&&(B=u)}}else k=!0;k&&(C.splice(e--,1),i--)}i||r("complete",o(v))}}function c(){E>1?(E=1,d(),setTimeout(c,w.throttle)):E=0}function l(o){C.length&&(o&&"scroll"===o.type&&o.currentTarget===n&&B>=a()||(E||setTimeout(c,0),E=2))}function u(){L.lazyLoadXT()}function h(){d(!0)}var m="lazyLoadXT",g="lazied",f="load error",y="lazy-hidden",v=t.documentElement||t.body,k=n.onscroll===e||!!n.operamini||!v.getBoundingClientRect,w={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:k,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:y},onload:{removeClass:y,addClass:"lazy-loaded"},onerror:{removeClass:y},checkDuplicates:!0},p={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},L=o(n),b=o.isFunction,A=o.extend,j=o.data||function(n,t){return o(n).data(t)},z=o.contains||function(o,n){for(;n=n.parentNode;)if(n===o)return!0;return!1},C=[],B=0,E=0;o[m]=A(w,p,o[m]),o.fn[m]=function(t){t=t||{};var e,a=i(t,"blankImage"),s=i(t,"checkDuplicates"),d=i(t,"scrollContainer"),c={};o(d).on("scroll",l);for(e in p)c[e]=i(t,e);return this.each(function(e,i){if(i===n)o(w.selector).lazyLoadXT(t);else{if(s&&j(i,g))return;var d=o(i).data(g,1);a&&"IMG"===i.tagName&&!i.src&&(i.src=a),d[m]=A({},c),r("init",d),C.push(d)}})},o(t).ready(function(){r("start",L),L.on(w.loadEvent,u).on(w.updateEvent,l).on(w.forceEvent,h),o(t).on(w.updateEvent,l),w.autoInit&&u()})}(window.jQuery||window.Zepto||window.$,window,document),function(o){var n=o.lazyLoadXT;n.selector+=",video,iframe[data-src]",n.videoPoster="data-poster",o(document).on("lazyshow","video",function(t,e){var i=e.lazyLoadXT.srcAttr,a=o.isFunction(i);e.attr("poster",e.attr(n.videoPoster)).children("source,track").each(function(n,t){var e=o(t);e.attr("src",a?i(e):e.attr(i))}),this.load()})}(window.jQuery||window.Zepto||window.$),$(function(){$("img.lazy").lazyload({threshold:100,failure_limit:3,load:function(){imagesLoaded(container,function(){msnry.layout()})}})});var container=document.querySelector("#folderContent"),msnry=new Masonry(container,{gutter:".gutterSizer",columnWidth:".gridSizer",itemSelector:".folderItem"});msnry.on("layoutComplete",onLayout);var wintersport="?wintersport",fashion="?fashion",junior="?junior",outdoor="?outdoor",bike="?bike",gadgets="?gadgets",lookbook="?lookbook",groeneprijzen="?groeneprijzen",christmas="?christmas",navFix="navFix",testArray=location.search.split("&"),testParam=testArray[0],paramArray=["?wintersport","?fashion","?junior","?outdoor","?bike","?gadgets","?christmas"],classArray=[".wintersport",".fashion",".junior",".outdoor",".bike",".gadgets",".christmas"];filter();