(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_popover",(function(){return h}));var o=n(2),i=n(12),r=(n(3),n(6),n(5)),a=(n(10),n(9)),s=n(155),c=n(157),l=n(158),u=function(e,t){var n="top",o="left",i=e.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,c=a.height,l=e.ownerDocument.defaultView.innerWidth,u=e.ownerDocument.defaultView.innerHeight,p=t&&t.target&&t.target.getBoundingClientRect(),f=null!=p&&"top"in p?p.top:u/2-c/2,v=null!=p&&"left"in p?p.left:l/2,h=p&&p.width||0,m=p&&p.height||0,b=e.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),w=g.width,y=g.height;null==p&&(b.style.display="none");var O={top:f+m,left:v+h/2-w/2},j={top:f+m+(y-1),left:v+h/2-s/2},x=!1,E=!1;j.left<d+25?(x=!0,j.left=d):s+d+j.left+25>l&&(E=!0,j.left=l-s-d,o="right"),f+m+c>u&&f-c>0?(O.top=f-(y+1),j.top=f-c-(y-1),e.className=e.className+" popover-bottom",n="bottom"):f+m+c>u&&(i.style.bottom=d+"%"),b.style.top=O.top+"px",b.style.left=O.left+"px",i.style.top=j.top+"px",i.style.left=j.left+"px",x&&(i.style.left="calc("+j.left+"px + var(--ion-safe-area-left, 0px))"),E&&(i.style.left="calc("+j.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=n+" "+o;var D=Object(r.a)(),k=Object(r.a)(),P=Object(r.a)();return k.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),P.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(e).easing("ease").duration(100).addAnimation([k,P])},d=5,p=function(e){var t=Object(r.a)(),n=Object(r.a)(),o=Object(r.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([n,o])},f=function(e,t){var n=e.ownerDocument,o="rtl"===n.dir,i="top",a=o?"right":"left",s=e.querySelector(".popover-content"),c=s.getBoundingClientRect(),l=c.width,u=c.height,d=n.defaultView.innerWidth,p=n.defaultView.innerHeight,f=t&&t.target&&t.target.getBoundingClientRect(),v=null!=f&&"bottom"in f?f.bottom:p/2-u/2,h=null!=f&&"left"in f?o?f.left-l+f.width:f.left:d/2-l/2,m=f&&f.height||0,b={top:v,left:h};b.left<12?(b.left=12,a="left"):l+12+b.left>d&&(b.left=d-l-12,a="right"),v+m+u>p&&v-u>0?(b.top=v-u-m,e.className=e.className+" popover-bottom",i="bottom"):v+m+u>p&&(s.style.bottom="12px");var g=Object(r.a)(),w=Object(r.a)(),y=Object(r.a)(),O=Object(r.a)(),j=Object(r.a)();return w.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),y.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),O.addElement(s).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":i+" "+a}).fromTo("transform","scale(0.001)","scale(1)"),j.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,y,O,j])},v=function(e){var t=Object(r.a)(),n=Object(r.a)(),o=Object(r.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([n,o])},h=function(){function e(e){var t=this;Object(i.l)(this,e),this.presented=!1,this.mode=Object(i.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,a.a)},this.onLifecycle=function(e){var n=t.usersElement,o=m[e.type];if(n&&o){var i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});n.dispatchEvent(i)}},Object(a.e)(this.el),this.didPresent=Object(i.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return Object(o.a)(this,void 0,void 0,(function(){var e,t,n;return Object(o.c)(this,(function(o){switch(o.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),n=this,[4,Object(c.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return n.usersElement=o.sent(),[4,Object(l.a)(this.usersElement)];case 2:return o.sent(),[2,Object(a.f)(this,"popoverEnter",u,f,this.event)]}}))}))},e.prototype.dismiss=function(e,t){return Object(o.a)(this,void 0,void 0,(function(){var n;return Object(o.c)(this,(function(o){switch(o.label){case 0:return[4,Object(a.g)(this,e,t,"popoverLeave",p,v,this.event)];case 1:return(n=o.sent())?[4,Object(c.b)(this.delegate,this.usersElement)]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2,n]}}))}))},e.prototype.onDidDismiss=function(){return Object(a.h)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(a.h)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=Object(i.e)(this),n=this.onLifecycle;return Object(i.i)(i.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(s.b)(this.cssClass)),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:n,onIonPopoverWillPresent:n,onIonPopoverWillDismiss:n,onIonPopoverDidDismiss:n,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(i.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.i)("div",{class:"popover-wrapper"},Object(i.i)("div",{class:"popover-arrow"}),Object(i.i)("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),e}(),m={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c}));var o=n(2),i=function(e,t){return null!==t.closest(e)},r=function(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},a=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},s=/^[a-z][a-z0-9+\-.]*:/,c=function(e,t,n){return Object(o.a)(void 0,void 0,void 0,(function(){var i;return Object(o.c)(this,(function(o){return null!=e&&"#"!==e[0]&&!s.test(e)&&(i=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,i.push(e,n)]):[2,!1]}))}))}},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var o=n(2),i=function(e,t,n,i,r){return Object(o.a)(void 0,void 0,void 0,(function(){var a;return Object(o.c)(this,(function(o){switch(o.label){case 0:if(e)return[2,e.attachViewToDom(t,n,r,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,i&&i.forEach((function(e){return a.classList.add(e)})),r&&Object.assign(a,r),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2,a]}}))}))},r=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return a}));var o=n(2),i=n(12),r=n(10),a=function(e){return new Promise((function(t,n){Object(i.m)((function(){s(e),c(e).then((function(n){n.animation&&n.animation.destroy(),l(e),t(n)}),(function(t){l(e),n(t)}))}))}))},s=function(e){var t=e.enteringEl,n=e.leavingEl;j(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),O(t,!1),n&&O(n,!1)},c=function(e){return Object(o.a)(void 0,void 0,void 0,(function(){var t;return Object(o.c)(this,(function(n){switch(n.label){case 0:return[4,u(e)];case 1:return t=n.sent(),[2,t?d(t,e):p(e)]}}))}))},l=function(e){var t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},u=function(e){return Object(o.a)(void 0,void 0,void 0,(function(){var t;return Object(o.c)(this,(function(o){switch(o.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,n.e(89).then(n.bind(null,162))]:[2,void 0];case 1:return t=o.sent().iosTransitionAnimation,[3,4];case 2:return[4,n.e(90).then(n.bind(null,163))];case 3:t=o.sent().mdTransitionAnimation,o.label=4;case 4:return[2,t]}}))}))},d=function(e,t){return Object(o.a)(void 0,void 0,void 0,(function(){var i,r;return Object(o.c)(this,(function(o){switch(o.label){case 0:return[4,f(t,!0)];case 1:o.sent(),o.label=2;case 2:return o.trys.push([2,5,,6]),[4,n.e(3).then(n.bind(null,65))];case 3:return[4,o.sent().create(e,t.baseEl,t)];case 4:return i=o.sent(),[3,6];case 5:return o.sent(),i=e(t.baseEl,t),[3,6];case 6:return m(t.enteringEl,t.leavingEl),[4,h(i,t)];case 7:return r=o.sent(),t.progressCallback&&t.progressCallback(void 0),r&&b(t.enteringEl,t.leavingEl),[2,{hasCompleted:r,animation:i}]}}))}))},p=function(e){return Object(o.a)(void 0,void 0,void 0,(function(){var t,n;return Object(o.c)(this,(function(o){switch(o.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,f(e,!1)];case 1:return o.sent(),m(t,n),b(t,n),[2,{hasCompleted:!0}]}}))}))},f=function(e,t){return Object(o.a)(void 0,void 0,void 0,(function(){var n,i;return Object(o.c)(this,(function(o){switch(o.label){case 0:return n=void 0!==e.deepWait?e.deepWait:t,i=n?[y(e.enteringEl),y(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)],[4,Promise.all(i)];case 1:return o.sent(),[4,v(e.viewIsReady,e.enteringEl)];case 2:return o.sent(),[2]}}))}))},v=function(e,t){return Object(o.a)(void 0,void 0,void 0,(function(){return Object(o.c)(this,(function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},h=function(e,t){var n=t.progressCallback,o=new Promise((function(t){e.onFinish((function(n){"number"==typeof n?t(1===n):void 0!==e.hasCompleted&&t(e.hasCompleted)}))}));return n?(e.progressStart(!0),n(e)):e.play(),o},m=function(e,t){g(t,r.c),g(e,r.a)},b=function(e,t){g(e,r.b),g(t,r.d)},g=function(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},w=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},y=function(e){return Object(o.a)(void 0,void 0,void 0,(function(){var t;return Object(o.c)(this,(function(n){switch(n.label){case 0:return(t=e)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(y))];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))},O=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},j=function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")}}}]);