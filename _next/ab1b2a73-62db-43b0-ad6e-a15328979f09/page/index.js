module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([4],{155:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(e,t,a){for(var n=!0;n;){var i=e,l=t,r=a;n=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,l);if(void 0!==s){if("value"in s)return s.value;var o=s.get;if(void 0===o)return;return o.call(r)}var c=Object.getPrototypeOf(i);if(null===c)return;e=c,t=l,a=r,n=!0,s=c=void 0}};function l(e){return e&&e.__esModule?e:{default:e}}var r=a(0),s=l(r),o=l(a(338)),c=l(a(1)),m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,o.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var a=this;this.delayedAnimationTimeout=setTimeout(function(){a.animating=!0,a.setState({classes:"animated "+e,style:{animationDuration:a.props.duration+"s"}}),a.callbackTimeout=setTimeout(t,1e3*a.props.duration)},this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var a=t.getVisibility();e&&e(a)})}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var a=t.getVisibility();a.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(a)})}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return s.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}();t.default=m,m.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},m.propTypes={animateIn:c.default.string,animateOut:c.default.string,offset:c.default.number,duration:c.default.number,delay:c.default.number,initiallyVisible:c.default.bool,animateOnce:c.default.bool,style:c.default.object,scrollableParentSelector:c.default.string,className:c.default.string,animatePreScroll:c.default.bool},e.exports=t.default},335:function(e,t,a){e.exports=a(336)},336:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),i=a.n(n),l=a(337),r=a(14),s=a(155),o=a.n(s),c=(a(137),a(133)),m=a.n(c),u=(a(1),function(e){return i.a.createElement("div",{id:"MenuToggleIcon",className:"alt"},i.a.createElement("nav",null,i.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu",i.a.createElement("i",{class:"fas fa-bars"}))))}),d=a(136),p=a(104);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){function t(e){var a,n,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(i=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==f(i)&&"function"!=typeof i?g(n):i).state={isMenuVisible:!1,loading:"is-loading"},a.handleToggleMenu=a.handleToggleMenu.bind(g(a)),a}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),a=t,(n=[{key:"componentDidMount",value:function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"handleToggleMenu",value:function(){this.setState({isMenuVisible:!this.state.isMenuVisible})}},{key:"render",value:function(){return i.a.createElement("div",{className:"body ".concat(this.state.loading," ").concat(this.state.isMenuVisible?"is-menu-visible":"")},i.a.createElement(m.a,null,i.a.createElement("title",null,"Lanco"),i.a.createElement("meta",{name:"description",content:"Lanco"}),i.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",key:"viewport"}),i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700",rel:"stylesheet"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800",rel:"stylesheet"}),i.a.createElement("link",{rel:"stylesheet",href:"/_next/static/style.css"})),i.a.createElement("div",{id:"Wrappage"},i.a.createElement(u,{onToggleMenu:this.handleToggleMenu}),this.props.children,i.a.createElement(p.a,null)),i.a.createElement(d.a,{onToggleMenu:this.handleToggleMenu}))}}])&&h(a.prototype,n),l&&h(a,l),t}(),E={backgroundImage:"url(static/img/selector-1.jpg)"},v={backgroundImage:"url(static/img/selector-2.jpg)"},y={backgroundImage:"url(static/img/selector-3.jpg)"},w={backgroundImage:"url(static/img/selector-4.jpg)"},I=function(){return i.a.createElement("div",{class:"propertySelector"},i.a.createElement(r.g,null,i.a.createElement(r.a,{sm:"7",className:"SMfullMB"},i.a.createElement(r.g,{class:"left-col"},i.a.createElement(r.a,{sm:"3",className:"select-item SMfullMB"},i.a.createElement(o.a,{animateIn:"slideInDown",delay:200,animateOnce:!0},i.a.createElement("div",{class:"parallax-holder image-wrapper fullSize overflow-hidden"},i.a.createElement("div",{class:"outer-parallax overflow-hidden relative"},i.a.createElement("div",{class:"fullSize cover parallax absolute",style:E}))),i.a.createElement("a",{href:"#",class:"btns btn--black selector-btn btn--noresize btn--side"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"2+KK")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"2+KK"))))),i.a.createElement(r.a,{sm:"3",className:"select-item SMfullMB"},i.a.createElement(o.a,{animateIn:"slideInDown",delay:400,animateOnce:!0},i.a.createElement("div",{class:"parallax-holder image-wrapper fullSize overflow-hidden"},i.a.createElement("div",{class:"outer-parallax overflow-hidden relative"},i.a.createElement("div",{class:"fullSize cover parallax absolute",style:v}))),i.a.createElement("a",{href:"#",class:"btns btn--black selector-btn btn--noresize btn--side"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"2+KK")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"2+KK"))))),i.a.createElement(r.a,{sm:"3",className:"select-item SMfullMB"},i.a.createElement(o.a,{animateIn:"slideInDown",delay:600,animateOnce:!0},i.a.createElement("div",{class:"parallax-holder image-wrapper fullSize overflow-hidden"},i.a.createElement("div",{class:"outer-parallax overflow-hidden relative"},i.a.createElement("div",{class:"fullSize cover parallax absolute",style:y}))),i.a.createElement("a",{href:"#",class:"btns btn--black selector-btn btn--noresize btn--side"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"2+KK")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"2+KK"))))),i.a.createElement(r.a,{sm:"3",className:"select-item SMfullMB"},i.a.createElement(o.a,{animateIn:"slideInDown",delay:800,animateOnce:!0},i.a.createElement("div",{class:"parallax-holder image-wrapper fullSize overflow-hidden"},i.a.createElement("div",{class:"outer-parallax overflow-hidden relative"},i.a.createElement("div",{class:"fullSize cover parallax absolute",style:w}))),i.a.createElement("a",{href:"#",class:"btns btn--black selector-btn btn--noresize btn--side"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"2+KK")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"2+KK"))))))),i.a.createElement(r.a,{sm:"5",className:"right-col SMfullMB"},i.a.createElement(o.a,{animateIn:"fadeIn",delay:1400,animateOnce:!0},i.a.createElement("div",{class:"wrap-prp-details"},i.a.createElement("h1",null,"CHOOSE THE FLAT TYPE"),i.a.createElement("p",null,"Living right next to the romantic Vltava, yet in close proximity to the city centre. The surrounding greenery, fascinating views and aquatic scents will take you far away from the rigours of the day."))))))},O=(a(32),a(33),a(34),{backgroundImage:"url(static/img/md_marina_boulevar_8k_kv.jpg)"}),S={backgroundImage:"url(static/img/md_mb2.jpg)"},x={backgroundImage:"url(static/img/md_standards-final-living1.jpg)"},P={backgroundImage:"url(static/img/md_marina_boulevar_8k_kv.jpg)"},M={backgroundImage:"url(static/img/lg_Dock-Molo-2.jpg)"},T={backgroundImage:"url(static/img/lg_Dock-Molo-6.jpg)"};t.default=function(){return i.a.createElement(b,null,i.a.createElement("div",{className:"wrapHead"},i.a.createElement(l.Parallax,{bgImage:"static/img/banner.jpg",strength:80},i.a.createElement("div",{style:{height:750}},i.a.createElement("div",{className:"container-fluid"},i.a.createElement(r.g,null,i.a.createElement(r.a,null,i.a.createElement("div",{class:"logo"},i.a.createElement("img",{src:"static/img/logo_03.png",alt:""})))),i.a.createElement(r.g,null,i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement("div",{class:"banner-details"},i.a.createElement("div",{class:"big-headline"},i.a.createElement("p",null,"Because home is a place where"),i.a.createElement("h2",null,"our emotions and feelings reside")),i.a.createElement("a",{id:"viewProperties",href:"#",class:"btns white"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE"))))),i.a.createElement(r.a,{sm:"6"},i.a.createElement("div",{class:"wrapHbox"},i.a.createElement("a",{href:"#",className:"HovBox1"},i.a.createElement("div",{class:"bg"}),i.a.createElement("div",{class:"boxwrapS"},i.a.createElement("span",{className:"top-right"},"FLATS LEFT",i.a.createElement("br",null)," 10"),i.a.createElement("div",{className:"bottom-box"},i.a.createElement("span",{class:"bottom-left"},"DHAKA",i.a.createElement("br",null)," MIRPUR"),i.a.createElement("p",{class:"details"},"The final phase is underway, do not miss the chance to buy yourself a brand new home in the final stages of the DOCK project.")))),i.a.createElement("a",{href:"#",className:"HovBox2"},i.a.createElement("div",{class:"bg"}),i.a.createElement("div",{class:"boxwrapS"},i.a.createElement("span",{className:"top-right"},"FLATS LEFT",i.a.createElement("br",null)," 5"),i.a.createElement("div",{className:"bottom-box"},i.a.createElement("span",{class:"bottom-left"},"DHAKA",i.a.createElement("br",null)," DHANMONDI"),i.a.createElement("p",{class:"details"},"The final phase is underway, do not miss the chance to buy yourself a brand new home in the final stages of the DOCK project.")))),i.a.createElement("a",{href:"#",className:"HovBox3"},i.a.createElement("div",{class:"bg"}),i.a.createElement("div",{class:"boxwrapS"},i.a.createElement("span",{className:"top-right"},"FLATS LEFT",i.a.createElement("br",null)," 20"),i.a.createElement("div",{className:"bottom-box"},i.a.createElement("span",{class:"bottom-left"},"DHAKA",i.a.createElement("br",null)," UTTORA"),i.a.createElement("p",{class:"details"},"The final phase is underway, do not miss the chance to buy yourself a brand new home in the final stages of the DOCK project.")))))))))),i.a.createElement("div",{class:"secontSection"},i.a.createElement("div",{class:"RowCustom"},i.a.createElement("div",{class:"CusCol-2"}),i.a.createElement("div",{class:"CusCol-8"},i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(r.g,null,i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement("div",{class:"wrapcontBox"},i.a.createElement("div",{className:"inner-wrapbox"},i.a.createElement(o.a,{animateIn:"slideInRight",animateOnce:!0},i.a.createElement("h2",null,"PEOPLE-ORIENTED")),i.a.createElement(o.a,{animateIn:"slideInLeft",animateOnce:!0},i.a.createElement("p",null,"We devote all our energy to improving people's lives. Our priority is always the development and happiness not only of our employees and customers but of all the people touched by the value we generate.")),i.a.createElement(o.a,{animateIn:"slideInUp",animateOnce:!0},i.a.createElement("a",{id:"viewProperties",href:"#",class:"btns white oliv"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE"))))),i.a.createElement("div",{className:"empty-box"}))),i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement(o.a,{animateIn:"fadeIn",animateOnce:!0},i.a.createElement("div",{class:"wrapimgBox"},i.a.createElement("div",{className:"wrapimgBOXInner"},i.a.createElement("div",{class:"box-bgImg",style:O})))))),i.a.createElement(r.g,null,i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement(o.a,{animateIn:"fadeIn",animateOnce:!0},i.a.createElement("div",{class:"wrapimgBox"},i.a.createElement("div",{className:"wrapimgBOXInner"},i.a.createElement("div",{class:"box-bgImg",style:S}))))),i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement("div",{class:"wrapcontBox"},i.a.createElement("div",{className:"inner-wrapbox"},i.a.createElement(o.a,{animateIn:"slideInRight",animateOnce:!0},i.a.createElement("h2",null,"INTEGRITY")),i.a.createElement(o.a,{animateIn:"slideInLeft",animateOnce:!0},i.a.createElement("p",null,"Our conduct towards our clients, shareholders, employees, suppliers, subcontractors, governmental and regulatory authorities, competitors and towards society as a whole is without fault.")),i.a.createElement(o.a,{animateIn:"slideInUp",animateOnce:!0},i.a.createElement("a",{id:"viewProperties",href:"#",class:"btns white oliv"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE"))))),i.a.createElement("div",{className:"empty-box custom-boxBG1"})))),i.a.createElement(r.g,null,i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement("div",{class:"wrapcontBox"},i.a.createElement("div",{className:"inner-wrapbox"},i.a.createElement(o.a,{animateIn:"slideInRight",animateOnce:!0},i.a.createElement("h2",null,"SUSTAINABILITY")),i.a.createElement(o.a,{animateIn:"slideInLeft",animateOnce:!0},i.a.createElement("p",null,"A corporate sustainability approach that imparts awareness of economic, environmental and social responsibilities towards internal and external stakeholders. Our good reputation comes before anything else. We value long-term, continuous success and respect the environment.")),i.a.createElement(o.a,{animateIn:"slideInUp",animateOnce:!0},i.a.createElement("a",{id:"viewProperties",href:"#",class:"btns white oliv"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE"))))),i.a.createElement("div",{className:"empty-box"}))),i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement(o.a,{animateIn:"fadeIn",animateOnce:!0},i.a.createElement("div",{class:"wrapimgBox"},i.a.createElement("div",{className:"wrapimgBOXInner"},i.a.createElement("div",{class:"box-bgImg",style:x})))))),i.a.createElement(r.g,null,i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement(o.a,{animateIn:"fadeIn",animateOnce:!0},i.a.createElement("div",{class:"wrapimgBox"},i.a.createElement("div",{className:"wrapimgBOXInner"},i.a.createElement("div",{class:"box-bgImg",style:P}))))),i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement("div",{class:"wrapcontBox"},i.a.createElement("div",{className:"inner-wrapbox"},i.a.createElement(o.a,{animateIn:"slideInRight",animateOnce:!0},i.a.createElement("h2",null,"ETHICS")),i.a.createElement(o.a,{animateIn:"slideInLeft",animateOnce:!0},i.a.createElement("p",null,"Transparency, Accountability and Discipline in our business. At work and in our principles, we are a family that is motivated by what is right and fair.")),i.a.createElement(o.a,{animateIn:"slideInUp",animateOnce:!0},i.a.createElement("a",{id:"viewProperties",href:"#",class:"btns white oliv"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE"))))),i.a.createElement("div",{className:"empty-box custom-boxBG1"})))),i.a.createElement(r.g,null,i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement("div",{class:"wrapcontBox"},i.a.createElement("div",{className:"inner-wrapbox"},i.a.createElement(o.a,{animateIn:"slideInRight",animateOnce:!0},i.a.createElement("h2",null,"TRUST")),i.a.createElement(o.a,{animateIn:"slideInLeft",animateOnce:!0},i.a.createElement("p",null,"An open relationship with our employees based on mutual trust, respect and success.")),i.a.createElement(o.a,{animateIn:"slideInUp",animateOnce:!0},i.a.createElement("a",{id:"viewProperties",href:"#",class:"btns white oliv"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE"))))),i.a.createElement("div",{className:"empty-box"}))),i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement(o.a,{animateIn:"fadeIn",animateOnce:!0},i.a.createElement("div",{class:"wrapimgBox"},i.a.createElement("div",{className:"wrapimgBOXInner"},i.a.createElement("div",{class:"box-bgImg",style:M})))))),i.a.createElement(r.g,null,i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement(o.a,{animateIn:"fadeIn",animateOnce:!0},i.a.createElement("div",{class:"wrapimgBox"},i.a.createElement("div",{className:"wrapimgBOXInner"},i.a.createElement("div",{class:"box-bgImg",style:T}))))),i.a.createElement(r.a,{sm:"6",className:"SMfullMB"},i.a.createElement("div",{class:"wrapcontBox"},i.a.createElement("div",{className:"inner-wrapbox"},i.a.createElement(o.a,{animateIn:"slideInRight",animateOnce:!0},i.a.createElement("h2",null,"COMMITMENT")),i.a.createElement(o.a,{animateIn:"slideInLeft",animateOnce:!0},i.a.createElement("p",null,"Uncompromising commitment to Quality, Health, Safety and Environment. No matter what, we put our hearts into what we do for our company, to achieve our goals and to realize projects we firmly believe will add value to people's lives.")),i.a.createElement(o.a,{animateIn:"slideInUp",animateOnce:!0},i.a.createElement("a",{id:"viewProperties",href:"#",class:"btns white oliv"},i.a.createElement("span",{class:"text"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE")),i.a.createElement("span",{class:"hover"},i.a.createElement("span",{class:"inner"},"PROPERTIES FOR SALE"))))),i.a.createElement("div",{className:"empty-box custom-boxBG1"})))))),i.a.createElement("div",{class:"CusCol-2 bg-color-cus1"}))),i.a.createElement(I,null),i.a.createElement("div",{class:"video-sec"},i.a.createElement(r.b,null,i.a.createElement(r.g,null,i.a.createElement(r.a,{md:"4"},i.a.createElement("div",{className:"video-mame"},i.a.createElement("h1",null,"VIDEO TITLE"),i.a.createElement("p",null,"LET THE DOCK GUIDE YOU TO YOUR NEW HOME"))),i.a.createElement(r.a,{md:"6"},i.a.createElement("div",{class:"video-u"},i.a.createElement("iframe",{src:"https://www.youtube.com/embed/yAw-bXs9YxA?start=60",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}))))))))}},337:function(e,t,a){var n;n=function(e,t,a){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=n(a(1)),r=n(a(0)),s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),i(t,[{key:"render",value:function(){return r.default.createElement("div",{className:"react-parallax-background "+this.props.className},this.props.children)}}],[{key:"isParallaxBackground",value:function(){return!0}}]),t}();s.propTypes={children:l.default.node,className:l.default.string},s.defaultProps={className:""},t.default=s},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=n(a(1)),r=n(a(0)),s=n(a(6)),o=a(5),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onWindowResize=function(){a.parentHeight=(0,o.getNodeHeight)(a.canUseDOM,a.parent),a.updatePosition()},a.onWindowLoad=function(){a.updatePosition()},a.onScroll=function(e){if(a.canUseDOM){var t=Date.now();t-a.timestamp>=10&&(0,o.isScrolledIntoView)(a.node,100,a.canUseDOM)&&(window.requestAnimationFrame(a.updatePosition),a.timestamp=t)}},a.updatePosition=function(){var e=!1;if(a.content=a.ReactDOM.findDOMNode(a.refs.content),a.contentHeight=a.content.getBoundingClientRect().height,a.contentWidth=a.node.getBoundingClientRect().width,a.content){a.img&&a.img.naturalWidth/a.img.naturalHeight<a.contentWidth/a.getImageHeight()&&(e=!0);var t=(0,o.getRelativePosition)(a.node,a.canUseDOM,a.parent);a.img&&a.setImagePosition(t,e),a.bg&&a.splitChildren.bgChildren.length>0&&a.setBackgroundPosition(t)}},a.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,childStyle:{position:"relative"}},a.canUseDOM=(0,o.canUseDOM)(),a.ReactDOM=s.default.findDOMNode?s.default:r.default,a.node=null,a.content=null,a.splitChildren=(0,o.getSplitChildren)(e),a.bgImageLoaded=!1,a.bgImageRef=void 0,a.parent=e.parent,a.parentHeight=(0,o.getNodeHeight)(a.canUseDOM,a.parent),a.timestamp=Date.now(),a.dynamicBlur=!(!e.blur||void 0===e.blur.min||void 0===e.blur.max),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),i(t,[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,a=t.bgImage,n=t.bgImageSrcSet,i=t.bgImageSizes;this.parent=e||document,this.addListeners(this.props),this.node=this.ReactDOM.findDOMNode(this),a?this.loadImage(a,n,i):this.updatePosition(),this.setParallaxStyle(),this.setInitialBackgroundStyles(this.img),this.setInitialBackgroundStyles(this.bg)}},{key:"componentWillReceiveProps",value:function(e){var t=e.parent,a=e.bgImage,n=e.bgImageSrcSet,i=e.bgImageSizes;this.splitChildren=(0,o.getSplitChildren)(e),t&&this.parent!==t&&(this.parent=t,this.removeListeners(),this.addListeners()),this.parentHeight=(0,o.getNodeHeight)(this.canUseDOM,this.parent),this.state.bgImage!==a&&this.loadImage(a,n,i)}},{key:"shouldComponentUpdate",value:function(e,t){return e.bgImage===this.props.bgImage||t.bgImage!==this.state.bgImage}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setParallaxStyle",value:function(){this.node&&(this.node.style.position="relative",this.node.style.overflow="hidden")}},{key:"setInitialBackgroundStyles",value:function(e){var t=this;e&&(e.style.position="absolute",e.style.left="50%",e.style.WebkitTransform="translate3d(-50%, 0, 0)",e.style.transform="translate3d(-50%, 0, 0)",e.style.WebkitTransformStyle="preserve-3d",e.style.WebkitBackfaceVisibility="hidden",e.style.MozBackfaceVisibility="hidden",e.style.MsBackfaceVisibility="hidden",this.props.bgStyle&&Object.keys(this.props.bgStyle).forEach(function(a){e.style[a]=t.props.bgStyle[a]}))}},{key:"setBackgroundPosition",value:function(e){var t=this.props,a=t.disabled,n=t.strength;if(!0!==a){var i=(n<0?n:0)-n*e;this.bg.style.WebkitTransform="translate3d(-50%, "+i+"px, 0)",this.bg.style.transform="translate3d(-50%, "+i+"px, 0)"}}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.props,n=a.bgHeight,i=a.bgWidth,l=a.disabled,r=a.strength,s=a.blur,c=n||(t?"auto":this.getImageHeight()+"px"),m=i||(t?this.contentWidth+"px":"auto");if(this.img.style.height=c,this.img.style.width=m,!0!==l){var u=(r<0?r:0)-r*e;if(this.img.style.WebkitTransform="translate3d(-50%, "+u+"px, 0)",this.img.style.transform="translate3d(-50%, "+u+"px, 0)",s){var d=this.dynamicBlur?s.min+(1-e)*s.max:s;(0,o.setBlur)(this.img,d)}}}},{key:"getImageHeight",value:function(){var e=(this.props.strength<0?2.5:1)*Math.abs(this.props.strength);return Math.floor(this.contentHeight+e)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"loadImage",value:function(e,t,a){var n=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(i){n.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:a},function(){return n.updatePosition()})},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=a||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"bgMounted",value:function(e){this.bg=this.ReactDOM.findDOMNode(e)}},{key:"log",value:function(){if(this.props.log){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log(t)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.style,i=t.bgClassName,l=t.bgImageAlt,s=this.state,o=s.bgImage,c=s.bgImageSrcSet,m=s.bgImageSizes,u=s.childStyle;return r.default.createElement("div",{className:"react-parallax "+a,style:n},o?r.default.createElement("img",{className:i,src:o,srcSet:c,sizes:m,ref:function(t){return e.img=t},alt:l}):null,this.splitChildren.bgChildren.length>0?r.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){return e.bgMounted(t)}},this.splitChildren.bgChildren):null,r.default.createElement("div",{className:"react-parallax-content",style:u,ref:"content"},this.splitChildren.children))}}]),t}();c.propTypes={bgClassName:l.default.string,bgHeight:l.default.string,bgImage:l.default.string,bgImageAlt:l.default.string,bgImageSizes:l.default.string,bgImageSrcSet:l.default.string,bgStyle:l.default.object,bgWidth:l.default.string,blur:l.default.oneOfType([l.default.number,l.default.object]),className:l.default.string,disabled:l.default.bool,log:l.default.bool,parent:l.default.any,strength:l.default.number,style:l.default.object},c.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",disabled:!1,log:!1,strength:100},t.default=c},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var i=n(a(3)),l=n(a(2));t.Parallax=i.default,t.Background=l.default},function(e,t,a){"use strict";function n(e){if(!e)return 0;var t=window,a=document,n=a.documentElement,i=a.getElementsByTagName("body")[0];return t.innerHeight||n.clientHeight||i.clientHeight}function i(e,t){return e?t?t.clientHeight:n(e):0}function l(e,t,a){return(a-e)/(t-e)||0}Object.defineProperty(t,"__esModule",{value:!0}),t.getWindowHeight=n,t.isScrolledIntoView=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments[2];if(!a)return!1;var i=e.getBoundingClientRect().top-t,l=e.getBoundingClientRect().bottom+t;return i<=n(a)&&l>=0},t.getNodeHeight=i,t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},t.getPercentage=l,t.getRelativePosition=function(e,t,a){if(!t)return 0;var n=e,r=Math.round(n.getBoundingClientRect().top),s=i(t);return l(0,s,r=r>s?s:r)},t.getSplitChildren=function(e){var t=[],a=r.default.Children.toArray(e.children);return a.forEach(function(e,n){e.type&&e.type.isParallaxBackground&&(t=t.concat(a.splice(n,1)))}),{bgChildren:t,children:a}},t.setBlur=function(e,t){e.style.WebkitFilter="blur("+t+"px)",e.style.filter="blur("+t+"px)"};var r=function(e){return e&&e.__esModule?e:{default:e}}(a(0))},function(e,t){e.exports=a}])},e.exports=n(a(0),a(1),a(31))},338:function(e,t,a){(function(t){var a="Expected a function",n=NaN,i="[object Symbol]",l=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,o=/^0o[0-7]+$/i,c=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,d=m||u||Function("return this")(),p=Object.prototype.toString,f=Math.max,h=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var i,l,r,s,o,c,m=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(a);function b(t){var a=i,n=l;return i=l=void 0,m=t,s=e.apply(n,a)}function y(e){var a=e-c;return void 0===c||a>=t||a<0||d&&e-m>=r}function w(){var e=g();if(y(e))return I(e);o=setTimeout(w,function(e){var a=t-(e-c);return d?h(a,r-(e-m)):a}(e))}function I(e){return o=void 0,p&&i?b(e):(i=l=void 0,s)}function O(){var e=g(),a=y(e);if(i=arguments,l=this,c=e,a){if(void 0===o)return function(e){return m=e,o=setTimeout(w,t),u?b(e):s}(c);if(d)return o=setTimeout(w,t),b(c)}return void 0===o&&(o=setTimeout(w,t)),s}return t=v(t)||0,E(n)&&(u=!!n.leading,r=(d="maxWait"in n)?f(v(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==o&&clearTimeout(o),m=0,i=c=l=o=void 0},O.flush=function(){return void 0===o?s:I(g())},O}function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==i}(e))return n;if(E(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=E(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var a=s.test(e);return a||o.test(e)?c(e.slice(2),a?2:8):r.test(e)?n:+e}e.exports=function(e,t,n){var i=!0,l=!0;if("function"!=typeof e)throw new TypeError(a);return E(n)&&(i="leading"in n?!!n.leading:i,l="trailing"in n?!!n.trailing:l),b(e,t,{leading:i,maxWait:t,trailing:l})}}).call(t,a(16))}},[335]).default}});