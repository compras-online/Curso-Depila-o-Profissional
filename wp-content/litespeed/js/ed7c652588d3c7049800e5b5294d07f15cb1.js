window._wpemojiSettings={"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/priscillafidelisacademy.com.br\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.6.1"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83d\udc26\u200d\u2b1b","\ud83d\udc26\u200b\u2b1b")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings)
;!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1019242678949638');fbq('track','PageView')
;const lazyloadRunObserver=()=>{const lazyloadBackgrounds=document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);const lazyloadBackgroundObserver=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){let lazyloadBackground=entry.target;if(lazyloadBackground){lazyloadBackground.classList.add('e-lazyloaded')}
lazyloadBackgroundObserver.unobserve(entry.target)}})},{rootMargin:'200px 0px 200px 0px'});lazyloadBackgrounds.forEach((lazyloadBackground)=>{lazyloadBackgroundObserver.observe(lazyloadBackground)})};const events=['DOMContentLoaded','elementor/lazyload/observe',];events.forEach((event)=>{document.addEventListener(event,lazyloadRunObserver)})
;(()=>{"use strict";var __webpack_exports__={};class elementorHelloThemeHandler{constructor(){this.initSettings();this.initElements();this.bindEvents()}
initSettings(){this.settings={selectors:{menuToggle:'.site-header .site-navigation-toggle',menuToggleHolder:'.site-header .site-navigation-toggle-holder',dropdownMenu:'.site-header .site-navigation-dropdown'}}}
initElements(){this.elements={window,menuToggle:document.querySelector(this.settings.selectors.menuToggle),menuToggleHolder:document.querySelector(this.settings.selectors.menuToggleHolder),dropdownMenu:document.querySelector(this.settings.selectors.dropdownMenu)}}
bindEvents(){var _this$elements$menuTo;if(!this.elements.menuToggleHolder||(_this$elements$menuTo=this.elements.menuToggleHolder)!==null&&_this$elements$menuTo!==void 0&&_this$elements$menuTo.classList.contains('hide')){return}
this.elements.menuToggle.addEventListener('click',()=>this.handleMenuToggle());this.elements.menuToggle.addEventListener('keyup',event=>{const ENTER_KEY=13;const SPACE_KEY=32;if(ENTER_KEY===event.keyCode||SPACE_KEY===event.keyCode){event.currentTarget.click()}});this.elements.dropdownMenu.querySelectorAll('.menu-item-has-children > a').forEach(anchorElement=>anchorElement.addEventListener('click',event=>this.handleMenuChildren(event)))}
closeMenuItems(){this.elements.menuToggleHolder.classList.remove('elementor-active');this.elements.window.removeEventListener('resize',()=>this.closeMenuItems())}
handleMenuToggle(){const isDropdownVisible=!this.elements.menuToggleHolder.classList.contains('elementor-active');this.elements.menuToggle.setAttribute('aria-expanded',isDropdownVisible);this.elements.dropdownMenu.setAttribute('aria-hidden',!isDropdownVisible);this.elements.menuToggleHolder.classList.toggle('elementor-active',isDropdownVisible);this.elements.dropdownMenu.querySelectorAll('.elementor-active').forEach(item=>item.classList.remove('elementor-active'));if(isDropdownVisible){this.elements.window.addEventListener('resize',()=>this.closeMenuItems())}else{this.elements.window.removeEventListener('resize',()=>this.closeMenuItems())}}
handleMenuChildren(event){const anchor=event.currentTarget;const parentLi=anchor.parentElement;if(!(parentLi!==null&&parentLi!==void 0&&parentLi.classList)){return}
parentLi.classList.toggle('elementor-active')}}
document.addEventListener('DOMContentLoaded',()=>{new elementorHelloThemeHandler()})})()
;