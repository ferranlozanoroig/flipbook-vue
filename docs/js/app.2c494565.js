(function(t){function i(i){for(var n,r,s=i[0],h=i[1],l=i[2],c=0,g=[];c<s.length;c++)r=s[c],a[r]&&g.push(a[r][0]),a[r]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);u&&u(i);while(g.length)g.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],n=!0,s=1;s<e.length;s++){var h=e[s];0!==a[h]&&(n=!1)}n&&(o.splice(i--,1),t=r(r.s=e[0]))}return t}var n={},a={app:0},o=[];function r(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,i,e){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)r.d(e,n,function(i){return t[i]}.bind(null,n));return e},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=i,s=s.slice();for(var l=0;l<s.length;l++)i(s[l]);var u=h;o.push(["1430","chunk-vendors"]),e()})({"034f":function(t,i,e){"use strict";var n=e("e2a1"),a=e.n(n);a.a},1430:function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("f751"),e("097d");var n,a,o,r,s=e("2b0e"),h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:{"has-mouse":t.hasMouse},attrs:{id:"app"},on:{touchstart:function(i){t.hasMouse=!1}}},[e("Ribbon",{attrs:{text:"Fork me on GitHub",url:"https://github.com/ts1/flipbook-vue"}}),e("Flipbook",{ref:"flipbook",staticClass:"flipbook",attrs:{pages:t.pages,pagesHiRes:t.pagesHiRes},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{staticClass:"action-bar"},[e("left-icon",{staticClass:"btn left",class:{disabled:!t.canFlipLeft},on:{click:t.flipLeft}}),e("plus-icon",{staticClass:"btn plus",class:{disabled:!t.canZoomIn},on:{click:t.zoomIn}}),e("minus-icon",{staticClass:"btn minus",class:{disabled:!t.canZoomOut},on:{click:t.zoomOut}}),e("right-icon",{staticClass:"btn right",class:{disabled:!t.canFlipRight},on:{click:t.flipRight}})],1)]}}])}),t._m(0)],1)},l=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticClass:"credit"},[t._v("\n    Photos from\n    "),e("a",{attrs:{href:"https://unsplash.com/",target:"_blank"}},[t._v("Unsplash")]),t._v(".\n  ")])}],u=(e("d48d"),e("a5bc")),c=e("71f6"),g=e("ef7a"),p=e("cd27"),f=e("55fe"),d=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._t("default",null,null,{canFlipLeft:t.canFlipLeft,canFlipRight:t.canFlipRight,canZoomIn:t.canZoomIn,canZoomOut:t.canZoomOut,flipLeft:t.flipLeft,flipRight:t.flipRight,zoomIn:t.zoomIn,zoomOut:t.zoomOut}),e("div",{ref:"viewport",staticClass:"viewport",class:{zoom:t.zooming||t.zoom>1},style:{cursor:t.cursor},on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd,touchcancel:t.onTouchEnd,mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp,pointerdown:t.onPointerDown,pointermove:t.onPointerMove,pointerup:t.onPointerUp,pointercancel:t.onPointerUp}},[e("div",{staticClass:"container",style:{transform:"scale("+t.zoom+")",width:t.containerWidth}},[e("div",{style:{transform:"translateX("+t.centerOffsetSmoothed+"px)"}},[e("div",{staticClass:"bounding-box",style:{left:t.boundingLeft+"px",top:t.yMargin+"px",width:t.boundingRight-t.boundingLeft+"px",height:t.pageHeight+"px"}}),t.pageUrl(t.leftPage,!0)?e("img",{staticClass:"page fixed",style:{width:t.pageWidth+"px",height:t.pageHeight+"px",left:t.xMargin+"px",top:t.yMargin+"px"},attrs:{src:t.pageUrl(t.leftPage,!0)},on:{load:function(i){return t.didLoadImage(i)}}}):t._e(),2===t.displayedPages&&t.pageUrl(t.rightPage,!0)?e("img",{staticClass:"page fixed",style:{width:t.pageWidth+"px",height:t.pageHeight+"px",left:t.viewWidth/2+"px",top:t.yMargin+"px"},attrs:{src:t.pageUrl(t.rightPage,!0)},on:{load:function(i){return t.didLoadImage(i)}}}):t._e(),t._l(t.polygonArray,function(i){var n=i[0],a=i[1],o=i[2],r=i[3],s=i[4],h=i[5];return e("div",{key:n,staticClass:"polygon",class:{blank:!a},style:{backgroundImage:a,backgroundSize:t.polygonBgSize,backgroundPosition:r,width:t.polygonWidth,height:t.polygonHeight,transform:s,zIndex:h}},[e("div",{directives:[{name:"show",rawName:"v-show",value:o.length,expression:"lighting.length"}],staticClass:"lighting",style:{backgroundImage:o}})])})],2),e("div",{staticClass:"guard"})])])],2)},m=[],b=(e("ac6a"),e("456d"),e("6b54"),e("c5f6"),e("75fc")),v=e("d225"),y=e("b0b4"),w=e("6e37"),P=function(){function t(i){Object(v["a"])(this,t),i?Array.isArray(i)?this.m=i:this.m=Object(b["a"])(i.m):this.m=Object(w["a"])()}return Object(y["a"])(t,[{key:"clone",value:function(){return new t(this)}},{key:"multiply",value:function(t){return Array.isArray(t)||(t=t.m),this.m=Object(w["b"])(this.m,t)}},{key:"computeX",value:function(t){return this.m[12]/(t*this.m[3]+this.m[15])}},{key:"translate",value:function(t,i){return this.multiply(Object(w["d"])(t,i))}},{key:"translateZ",value:function(t){return this.multiply(Object(w["e"])(t))}},{key:"rotateY",value:function(t){return this.multiply(Object(w["c"])(t))}},{key:"toString",value:function(){return"matrix3d(".concat(this.m.toString(),")")}}],[{key:"perspective",value:function(i){return new t([1,0,0,0,0,1,0,0,0,0,1,-1/i,0,0,0,1])}}]),t}();a=function(t){return Math.pow(t,2)},r=function(t){return 1-a(1-t)},o=function(t){return t<.5?a(2*t)/2:.5+r(2*(t-.5))/2},n=/Trident/.test(navigator.userAgent);var x={props:{pages:{type:Array,required:!0},pagesHiRes:{type:Array,default:function(){return[]}},flipDuration:{type:Number,default:1e3},zoomDuration:{type:Number,default:500},zooms:{type:Array,default:function(){return[1,2,4]}},perspective:{type:Number,default:2400},nPolygons:{type:Number,default:10},ambient:{type:Number,default:.4},gloss:{type:Number,default:.6},swipeMin:{type:Number,default:3}},data:function(){return{viewWidth:0,viewHeight:0,imageWidth:null,imageHeight:null,nPages:this.pages.length,displayedPages:1,nImageLoad:0,nImageLoadTrigger:0,imageLoadCallback:null,currentPage:0,leftPage:0,rightPage:1,nZooms:this.zooms.length,zoomIndex:0,zoom:this.zooms[0],zooming:!1,touchStartX:null,touchStartY:null,maxMove:0,canGrab:!1,grabbing:!1,hasTouchEvents:!1,hasPointerEvents:!1,containerWidth:"100%",minX:Infinity,maxX:-Infinity,preloadedImages:{},flip:{progress:0,direction:null,frontImage:null,backImage:null,auto:!1},currentCenterOffset:null,animatingCenter:!1}},computed:{canFlipLeft:function(){return!this.flip.direction&&this.currentPage>=this.displayedPages&&!(1===this.displayedPages&&!this.pageUrl(this.leftPage-1))},canFlipRight:function(){return!this.flip.direction&&this.currentPage<this.nPages-this.displayedPages},canZoomIn:function(){return!this.zooming&&this.zoomIndex<this.nZooms-1},canZoomOut:function(){return!this.zooming&&this.zoomIndex>0},cursor:function(){return this.grabbing?"grabbing":this.canGrab?"grab":this.zoomIndex<this.zooms.length-1?"zoom-in":"zoom-out"},pageScale:function(){var t,i,e,n;return i=this.viewWidth/this.displayedPages,e=i/this.imageWidth,n=this.viewHeight/this.imageHeight,t=e<n?e:n,t<1?t:1},pageWidth:function(){return Math.round(this.imageWidth*this.pageScale)},pageHeight:function(){return Math.round(this.imageHeight*this.pageScale)},xMargin:function(){return(this.viewWidth-this.pageWidth*this.displayedPages)/2},yMargin:function(){return(this.viewHeight-this.pageHeight)/2},polygonWidth:function(){var t;return t=this.pageWidth/this.nPolygons,t=Math.ceil(t+1/this.zoom),t+"px"},polygonHeight:function(){return this.pageHeight+"px"},polygonBgSize:function(){return"".concat(this.pageWidth,"px ").concat(this.pageHeight,"px")},polygonArray:function(){return this.makePolygonArray("front").concat(this.makePolygonArray("back"))},boundingLeft:function(){var t;return 1===this.displayedPages?this.xMargin:(t=this.pageUrl(this.leftPage)?this.xMargin:this.viewWidth/2,t<this.minX?t:this.minX)},boundingRight:function(){var t;return 1===this.displayedPages?this.viewWidth-this.xMargin:(t=this.pageUrl(this.rightPage)?this.viewWidth-this.xMargin:this.viewWidth/2,t>this.maxX?t:this.maxX)},centerOffset:function(){var t;return t=Math.round(this.viewWidth/2-(this.boundingLeft+this.boundingRight)/2),null===this.currentCenterOffset&&null!==this.imageWidth&&(this.currentCenterOffset=t),t},centerOffsetSmoothed:function(){return Math.round(this.currentCenterOffset)}},mounted:function(){var t=this;return window.addEventListener("resize",function(){return t.onResize()},{passive:!0}),this.onResize(),this.preloadImages()},methods:{onResize:function(){if(this.$refs.viewport)return this.viewWidth=this.$refs.viewport.clientWidth,this.viewHeight=this.$refs.viewport.clientHeight,this.displayedPages=this.viewWidth>this.viewHeight?2:1,2===this.displayedPages&&(this.currentPage&=-2),1!==this.displayedPages||this.pageUrl(this.leftPage)||this.currentPage++,this.minX=Infinity,this.maxX=-Infinity},pageUrl:function(t){var i,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&this.zoom>1&&!this.zooming&&(i=this.pagesHiRes[t],i)?i:this.pages[t]||null},flipLeft:function(){if(this.canFlipLeft)return this.flipStart("left",!0)},flipRight:function(){if(this.canFlipRight)return this.flipStart("right",!0)},makePolygonArray:function(t){var i,e,n,a,o,r,s,h,l,u,c,g,p,f,d,m,b,v,y,w,x,M,k,I,z,W,O;if(!this.flip.direction)return[];for(m=this.flip.progress,o=this.flip.direction,1===this.displayedPages&&"left"===o&&(m=1-m,o="right"),h="front"===t?this.flip.frontImage:this.flip.backImage,i=h&&"url('".concat(h,"')"),d=this.pageWidth/this.nPolygons,r=this.xMargin,g=!1,1===this.displayedPages?"back"===t&&(g=!0,r=this.xMargin-this.pageWidth):"left"===o?"back"===t?r=this.viewWidth/2:g=!0:"front"===t?r=this.viewWidth/2:g=!0,p=P.perspective(this.perspective),p.translate(r,this.yMargin),f=0,m>.5&&(f=2*-(m-.5)*180),"left"===o&&(f=-f),"back"===t&&(f+=180),f&&(g&&p.translate(this.pageWidth),p.rotateY(f),g&&p.translate(-this.pageWidth)),k=m<.5?2*m*Math.PI:(1-2*(m-.5))*Math.PI,0===k&&(k=1e-9),y=this.pageWidth/k,v=0,n=k/this.nPolygons,M=n/2/Math.PI*180,a=n/Math.PI*180,g&&(M=-k/Math.PI*180+a/2),"back"===t&&(M=-M,a=-a),this.minX=Infinity,this.maxX=-Infinity,x=[],s=l=0,w=this.nPolygons;0<=w?l<w:l>w;s=0<=w?++l:--l)e="".concat(s/(this.nPolygons-1)*100,"% 0px"),c=p.clone(),b=g?k-v:v,I=Math.sin(b)*y,g&&(I=this.pageWidth-I),O=(1-Math.cos(b))*y,"back"===t&&(O=-O),c.translate(I),c.translateZ(O),c.rotateY(-M),z=c.computeX(0),W=c.computeX(d),this.maxX=Math.max(Math.max(z,W),this.maxX),this.minX=Math.min(Math.min(z,W),this.minX),u=this.computeLighting(f-M,a),v+=n,M+=a,x.push([t+s,i,u,e,c.toString(),Math.abs(Math.round(O))]);return x},computeLighting:function(t,i){var e,a,o,r,s,h,l;return s=[],h=[-.5,-.25,0,.25,.5],this.ambient<1&&(o=1-this.ambient,r=h.map(function(e){return(1-Math.cos((t-i*e)/180*Math.PI))*o}),s.push("linear-gradient(to right,\n  rgba(0, 0, 0, ".concat(r[0],"),\n  rgba(0, 0, 0, ").concat(r[1],") 25%,\n  rgba(0, 0, 0, ").concat(r[2],") 50%,\n  rgba(0, 0, 0, ").concat(r[3],") 75%,\n  rgba(0, 0, 0, ").concat(r[4],"))"))),this.gloss>0&&!n&&(e=30,a=200,l=h.map(function(n){return Math.max(Math.pow(Math.cos((t+e-i*n)/180*Math.PI),a),Math.pow(Math.cos((t-e-i*n)/180*Math.PI),a))}),s.push("linear-gradient(to right,\n  rgba(255, 255, 255, ".concat(l[0]*this.gloss,"),\n  rgba(255, 255, 255, ").concat(l[1]*this.gloss,") 25%,\n  rgba(255, 255, 255, ").concat(l[2]*this.gloss,") 50%,\n  rgba(255, 255, 255, ").concat(l[3]*this.gloss,") 75%,\n  rgba(255, 255, 255, ").concat(l[4]*this.gloss,"))"))),s.join(",")},flipStart:function(t,i){var e=this;return"left"===t?1===this.displayedPages?(this.flip.frontImage=this.pageUrl(this.currentPage-1),this.flip.backImage=null):(this.flip.frontImage=this.pageUrl(this.leftPage),this.flip.backImage=this.pageUrl(this.currentPage-this.displayedPages+1)):1===this.displayedPages?(this.flip.frontImage=this.pageUrl(this.currentPage),this.flip.backImage=null):(this.flip.frontImage=this.pageUrl(this.rightPage),this.flip.backImage=this.pageUrl(this.currentPage+this.displayedPages)),this.flip.direction=t,this.flip.progress=0,requestAnimationFrame(function(){return requestAnimationFrame(function(){if("left"===e.flip.direction?2===e.displayedPages&&(e.leftPage=e.currentPage-e.displayedPages):1===e.displayedPages?e.leftPage=e.currentPage+e.displayedPages:e.rightPage=e.currentPage+1+e.displayedPages,i)return e.flipAuto(!0)})})},flipAuto:function(t){var i,e,n,a,r=this;return a=Date.now(),e=this.flipDuration*(1-this.flip.progress),n=this.flip.progress,this.flip.auto=!0,i=function(){return requestAnimationFrame(function(){var s,h;return h=Date.now()-a,s=n+h/e,s>1&&(s=1),r.flip.progress=t?o(s):s,s<1?i():("left"===r.flip.direction?r.currentPage-=r.displayedPages:r.currentPage+=r.displayedPages,1===r.displayedPages&&"right"===r.flip.direction?r.flip.direction=null:r.onImageLoad(1,function(){return r.flip.direction=null}),r.flip.auto=!1)})},i()},flipRevert:function(){var t,i,e,n,a=this;return n=Date.now(),i=this.flipDuration*this.flip.progress,e=this.flip.progress,this.flip.auto=!0,t=function(){return requestAnimationFrame(function(){var o,r;return r=Date.now()-n,o=e-e*r/i,o<0&&(o=0),a.flip.progress=o,o>0?t():(a.leftPage=a.currentPage,a.rightPage=a.currentPage+1,1===a.displayedPages&&"left"===a.flip.direction?a.flip.direction=null:a.onImageLoad(1,function(){return a.flip.direction=null}),a.flip.auto=!1)})},t()},onImageLoad:function(t,i){return this.nImageLoad=0,this.nImageLoadTrigger=t,this.imageLoadCallback=i},didLoadImage:function(t){if(null===this.imageWidth&&(this.imageWidth=(t.target||t.path[0]).naturalWidth,this.imageHeight=(t.target||t.path[0]).naturalHeight),this.imageLoadCallback)return++this.nImageLoad>=this.nImageLoadTrigger?(this.imageLoadCallback(),this.imageLoadCallback=null):void 0},zoomIn:function(){if(this.canZoomIn)return this.zoomIndex+=1,this.zoomTo(this.zooms[this.zoomIndex])},zoomOut:function(){if(this.canZoomOut)return this.zoomIndex-=1,this.zoomTo(this.zooms[this.zoomIndex])},zoomTo:function(t,i,e){var n,a,r,s,h,l,u,c,g,p,f,d=this;return u=this.zoom,s=t,f=this.$refs.viewport,c=f.scrollLeft,g=f.scrollTop,i||(i=f.clientWidth/2),e||(e=f.clientHeight/2),n=i+c,a=e+g,h=n/u*s-i,l=a/u*s-e,p=Date.now(),this.zooming=!0,r=function(){return requestAnimationFrame(function(){var i,e;return e=Date.now()-p,i=e/d.zoomDuration,i>1&&(i=1),i=o(i),d.zoom=u+(s-u)*i,d.$refs.viewport.scrollLeft=c+(h-c)*i,d.$refs.viewport.scrollTop=g+(l-g)*i,e<d.zoomDuration?r():(d.zooming=!1,d.zoom=t,"100%"===d.containerWidth?d.containerWidth="99.999%":d.containerWidth="100%")})},r()},zoomAt:function(t){var i,e,n;return i=this.$refs.viewport.getBoundingClientRect(),e=t.pageX-i.left,n=t.pageY-i.top,this.zoomIndex=(this.zoomIndex+1)%this.zooms.length,this.zoomTo(this.zooms[this.zoomIndex],e,n)},swipeStart:function(t){return this.touchStartX=t.pageX,this.touchStartY=t.pageY,1===this.zoom&&(this.canGrab=!0),this.maxMove=0},swipeMove:function(t){var i,e;if(null!=this.touchStartX&&(i=t.pageX-this.touchStartX,e=t.pageY-this.touchStartY,this.maxMove=Math.max(this.maxMove,Math.abs(i)),this.maxMove=Math.max(this.maxMove,Math.abs(e)),!(this.zoom>1)&&!(Math.abs(e)>Math.abs(i))))return this.grabbing=!0,this.canGrab=!1,i>0?(null===this.flip.direction&&this.canFlipLeft&&i>=this.swipeMin&&this.flipStart("left",!1),"left"===this.flip.direction&&(this.flip.progress=i/this.pageWidth,this.flip.progress>1&&(this.flip.progress=1))):(null===this.flip.direction&&this.canFlipRight&&i<=-this.swipeMin&&this.flipStart("right",!1),"right"===this.flip.direction&&(this.flip.progress=-i/this.pageWidth,this.flip.progress>1&&(this.flip.progress=1))),!0},swipeEnd:function(t){return this.maxMove<this.swipeMin&&this.zoomAt(t),null===this.flip.direction||this.flip.auto||(this.flip.progress>.25?this.flipAuto(!1):this.flipRevert()),this.touchStartX=null,this.grabbing=!1,this.canGrab=!1},onTouchStart:function(t){return this.hasTouchEvents=!0,this.swipeStart(t.changedTouches[0])},onTouchMove:function(t){if(this.swipeMove(t.changedTouches[0]))return t.preventDefault()},onTouchEnd:function(t){return this.swipeEnd(t.changedTouches[0])},onPointerDown:function(t){if(this.hasPointerEvents=!0,!this.hasTouchEvents){this.swipeStart(t);try{return t.target.setPointerCapture(t.pointerId)}catch(i){}}},onPointerMove:function(t){if(!this.hasTouchEvents)return this.swipeMove(t)},onPointerUp:function(t){if(!this.hasTouchEvents){this.swipeEnd(t);try{return t.target.releasePointerCapture(t.pointerId)}catch(i){}}},onMouseDown:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents)return this.swipeStart(t)},onMouseMove:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents)return this.swipeMove(t)},onMouseUp:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents)return this.swipeEnd(t)},preloadImages:function(){var t,i,e,n,a,o,r;for(Object.keys(this.preloadedImages).length>=10&&(this.preloadedImages={}),o=[],t=e=n=this.currentPage-3,a=this.currentPage+3;n<=a?e<=a:e>=a;t=n<=a?++e:--e)r=this.pageUrl(t),r?this.preloadedImages[r]?o.push(void 0):(i=new Image,i.src=r,o.push(this.preloadedImages[r]=i)):o.push(void 0);return o}},watch:{currentPage:function(){return this.leftPage=this.currentPage,this.rightPage=this.currentPage+1,this.preloadImages()},centerOffset:function(){var t,i=this;if(!this.animatingCenter)return t=function(){return requestAnimationFrame(function(){var e,n;return n=.1,e=i.centerOffset-i.currentCenterOffset,Math.abs(e)<.5?(i.currentCenterOffset=i.centerOffset,i.animatingCenter=!1):(i.currentCenterOffset+=e*n,t())})},this.animatingCenter=!0,t()}}},M=x,k=(e("fa4d"),e("2877")),I=Object(k["a"])(M,d,m,!1,null,"b2562d44",null),z=I.exports,W={name:"app",components:{Flipbook:z,LeftIcon:c["a"],RightIcon:g["a"],PlusIcon:p["a"],MinusIcon:f["a"],Ribbon:u["a"]},data:function(){return{pages:[null,"images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"],pagesHiRes:[null,"images-large/1.jpg","images-large/2.jpg","images-large/3.jpg","images-large/4.jpg","images-large/5.jpg","images-large/6.jpg"],hasMouse:!0}},mounted:function(){var t=this;return window.addEventListener("keydown",function(i){var e;if(e=t.$refs.flipbook,e)return 37===i.keyCode&&e.canFlipLeft&&e.flipLeft(),39===i.keyCode&&e.canFlipRight?e.flipRight():void 0})}},O=W,L=(e("034f"),Object(k["a"])(O,h,l,!1,null,null,null)),C=L.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(C)}}).$mount("#app")},"3f8c":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"body,html{margin:0;padding:0}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;height:100vh;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;background-color:#333;overflow:hidden}#app,a{color:#ccc}.flipbook{position:relative;width:90vw;height:calc(100vh - 90px);margin-top:50px}.flipbook .bounding-box{box-shadow:0 0 20px #000}.action-bar{position:absolute;top:-40px;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.action-bar .btn{font-size:30px;color:#999}.action-bar .btn:not(:first-child){margin-left:10px}.has-mouse .action-bar .btn:hover{color:#ccc;-webkit-filter:drop-shadow(1px 1px 5px #000);filter:drop-shadow(1px 1px 5px #000);cursor:pointer}.action-bar .btn:active{-webkit-filter:none!important;filter:none!important}.action-bar .btn.disabled{color:#666;pointer-events:none}.credit{font-size:12px;line-height:20px;margin:10px}",""])},6035:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".viewport[data-v-b2562d44]{-webkit-overflow-scrolling:touch;width:100%;height:100%}.viewport.zoom[data-v-b2562d44]{overflow:scroll}.container[data-v-b2562d44]{position:relative;width:100%;height:100%;-webkit-transform-origin:top left;transform-origin:top left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bounding-box[data-v-b2562d44]{position:absolute}.page[data-v-b2562d44],.polygon[data-v-b2562d44]{position:absolute;-webkit-backface-visibility:hidden;backface-visibility:hidden}.polygon[data-v-b2562d44]{top:0;left:0;background-repeat:no-repeat;-webkit-transform-origin:center left;transform-origin:center left}.polygon.blank[data-v-b2562d44]{background-color:#ddd}.guard[data-v-b2562d44],.polygon .lighting[data-v-b2562d44]{width:100%;height:100%}.guard[data-v-b2562d44]{position:absolute;top:0;left:0}",""])},e2a1:function(t,i,e){var n=e("3f8c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("499e").default;a("1f50beb8",n,!0,{sourceMap:!1,shadowMode:!1})},e8ff:function(t,i,e){var n=e("6035");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("499e").default;a("efaa72d4",n,!0,{sourceMap:!1,shadowMode:!1})},fa4d:function(t,i,e){"use strict";var n=e("e8ff"),a=e.n(n);a.a}});
//# sourceMappingURL=app.2c494565.js.map