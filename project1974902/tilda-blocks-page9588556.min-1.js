window.isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.isMobile=!0}
window.isiOS=!1;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){window.isiOS=!0}
window.isiOSVersion='';if(window.isiOS){var version=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);if(version!==null){window.isiOSVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t228__init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menuBlock=rec.querySelector('.t228');var mobileMenu=rec.querySelector('.t228__mobile');var menuSubLinkItems=rec.querySelectorAll('.t-menusub__link-item');var rightBtn=rec.querySelector('.t228__right_buttons_but .t-btn');var mobileMenuPosition=mobileMenu?mobileMenu.style.position||window.getComputedStyle(mobileMenu).position:'';var mobileMenuDisplay=mobileMenu?mobileMenu.style.display||window.getComputedStyle(mobileMenu).display:'';var isFixedMobileMenu=mobileMenuPosition==='fixed'&&mobileMenuDisplay==='block';var overflowEvent=document.createEvent('Event');var noOverflowEvent=document.createEvent('Event');overflowEvent.initEvent('t228_overflow',!0,!0);noOverflowEvent.initEvent('t228_nooverflow',!0,!0);if(menuBlock){menuBlock.addEventListener('t228_overflow',function(){t228_checkOverflow(recid)});menuBlock.addEventListener('t228_nooverflow',function(){t228_checkNoOverflow(recid)})}
rec.addEventListener('click',function(e){var targetLink=e.target.closest('.t-menusub__target-link');if(targetLink&&window.isMobile){if(targetLink.classList.contains('t-menusub__target-link_active')){if(menuBlock)menuBlock.dispatchEvent(overflowEvent)}else{if(menuBlock)menuBlock.dispatchEvent(noOverflowEvent)}}
var currentLink=e.target.closest('.t-menu__link-item:not(.tooltipstered):not(.t-menusub__target-link):not(.t794__tm-link):not(.t966__tm-link):not(.t978__tm-link):not(.t978__menu-link)');if(currentLink&&mobileMenu&&isFixedMobileMenu)mobileMenu.click()});Array.prototype.forEach.call(menuSubLinkItems,function(linkItem){linkItem.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})});if(rightBtn){rightBtn.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})}
if(menuBlock){menuBlock.addEventListener('showME601a',function(){var menuLinks=rec.querySelectorAll('.t966__menu-link');Array.prototype.forEach.call(menuLinks,function(menuLink){menuLink.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})})})}}
function t228_checkOverflow(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t228'):null;if(!menu)return;var mobileContainer=document.querySelector('.t228__mobile_container');var mobileContainerHeight=t228_getFullHeight(mobileContainer);var windowHeight=document.documentElement.clientHeight;var menuPosition=menu.style.position||window.getComputedStyle(menu).position;if(menuPosition==='fixed'){menu.classList.add('t228__overflow');menu.style.setProperty('height',(windowHeight-mobileContainerHeight)+'px','important')}}
function t228_checkNoOverflow(recid){var rec=document.getElementById('rec'+recid);if(!rec)return!1;var menu=rec.querySelector('.t228');var menuPosition=menu?menu.style.position||window.getComputedStyle(menu).position:'';if(menuPosition==='fixed'){if(menu)menu.classList.remove('t228__overflow');if(menu)menu.style.height='auto'}}
function t228_setWidth(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menuCenterSideList=rec.querySelectorAll('.t228__centerside');Array.prototype.forEach.call(menuCenterSideList,function(menuCenterSide){menuCenterSide.classList.remove('t228__centerside_hidden')});if(window.innerWidth<=980)return;var menuBlocks=rec.querySelectorAll('.t228');Array.prototype.forEach.call(menuBlocks,function(menu){var maxWidth;var centerWidth=0;var paddingWidth=40;var leftSide=menu.querySelector('.t228__leftside');var rightSide=menu.querySelector('.t228__rightside');var menuList=menu.querySelector('.t228__list');var mainContainer=menu.querySelector('.t228__maincontainer');var leftContainer=menu.querySelector('.t228__leftcontainer');var rightContainer=menu.querySelector('.t228__rightcontainer');var centerContainer=menu.querySelector('.t228__centercontainer');var centerContainerLi=centerContainer?centerContainer.querySelectorAll('li'):[];var leftContainerWidth=t228_getFullWidth(leftContainer);var rightContainerWidth=t228_getFullWidth(rightContainer);var mainContainerWidth=mainContainer?mainContainer.offsetWidth:0;var dataAlign=menu.getAttribute('data-menu-items-align');var isDataAlignCenter=dataAlign==='center'||dataAlign===null;maxWidth=leftContainerWidth>=rightContainerWidth?leftContainerWidth:rightContainerWidth;maxWidth=Math.ceil(maxWidth);Array.prototype.forEach.call(centerContainerLi,function(li){centerWidth+=t228_getFullWidth(li)});if(mainContainerWidth-(maxWidth*2+paddingWidth*2)>centerWidth+20){if(isDataAlignCenter){if(leftSide)leftSide.style.minWidth=maxWidth+'px';if(rightSide)rightSide.style.minWidth=maxWidth+'px'}}else{if(leftSide)leftSide.style.minWidth=maxWidth+'';if(rightSide)rightSide.style.minWidth=maxWidth+''}
if(menuList&&menuList.classList.contains('t228__list_hidden'))menuList.classList.remove('t228__list_hidden')})}
function t228_getFullWidth(el){if(!el)return 0;var marginLeft=el.style.marginLeft||window.getComputedStyle(el).marginLeft;var marginRight=el.style.marginRight||window.getComputedStyle(el).marginRight;marginLeft=parseInt(marginLeft,10)||0;marginRight=parseInt(marginRight,10)||0;return el.offsetWidth+marginLeft+marginRight}
function t228_getFullHeight(el){if(!el)return 0;var marginTop=el.style.marginTop||window.getComputedStyle(el).marginTop;var marginBottom=el.style.marginBottom||window.getComputedStyle(el).marginBottom;marginTop=parseInt(marginTop,10)||0;marginBottom=parseInt(marginBottom,10)||0;return el.offsetHeight+marginTop+marginBottom}
function t480_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t480');if(!container)return;var isJquery=typeof jQuery!=='undefined';t480_setHeight(recId);if(window.isMobile){if(isJquery){$(window).on('orientationchange',t_throttle(function(){setTimeout(function(){t480_setHeight(recId)},200)}))}else{window.addEventListener('orientationchange',t_throttle(function(){setTimeout(function(){t480_setHeight(recId)},200)}))}}else{window.addEventListener('resize',t_throttle(function(){if(window.noAdaptive&&window.noAdaptive===!0&&window.isMobile)return;t480_setHeight(recId)}))}
if(isJquery){$(container).on('displayChanged',function(){t480_setHeight(recId)})}else{container.addEventListener('displayChanged',function(){t480_setHeight(recId)})}}
function t480_setHeight(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t480');if(!container)return;var sizer=rec.querySelector('.t480__sizer');var sizerStyle=getComputedStyle(sizer,null);var sizerPaddingTop=parseInt(sizerStyle.paddingTop);var sizerPaddingBottom=parseInt(sizerStyle.paddingBottom);var sizerPaddingLeft=parseInt(sizerStyle.paddingLeft);var sizerPaddingRight=parseInt(sizerStyle.paddingRight);var sizerHeight=sizer.clientHeight-(sizerPaddingTop+sizerPaddingBottom);var sizerWidth=sizer.clientWidth-(sizerPaddingLeft+sizerPaddingRight);var ratio=sizerWidth/sizerHeight;var imgWrapper=rec.querySelector('.t480__blockimg');var imgWidth=imgWrapper.clientWidth;var sizerAttrStyle=sizer.getAttribute('style');var windowHeight=window.innerHeight;if(window.isMobile&&sizerAttrStyle&&sizerAttrStyle.indexOf('vh')!==-1){sizerHeight=document.documentElement.clientHeight*parseFloat(windowHeight/sizerHeight);imgWrapper.style.height=(imgWidth/ratio)+'px'}else if(sizerHeight!=windowHeight){imgWrapper.style.height=(imgWidth/ratio)+'px'}}
function t841_init(recId){t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)})}
function t230_setHeight(rec){var videoLazy=rec.querySelector('.t-video-lazyload');if(!videoLazy)return;var videoIframe=videoLazy.querySelector('iframe');var videoWidth=parseInt(window.getComputedStyle(videoLazy).width,10);var computedHeight=videoWidth/(16/9);if(videoLazy)videoLazy.style.height=computedHeight+'px';if(videoIframe)videoIframe.height=computedHeight}
function t537_setHeight(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t537');if(!container)return;var images=rec.querySelectorAll('.t537__bgimg');if(!images[0])return;var imageWidth=images[0].getAttribute('data-image-width');var imageHeight=images[0].getAttribute('data-image-height');var imageRatio=imageHeight/imageWidth;var imagePadding=imageRatio*100;for(var i=0;i<images.length;i++){images[i].style.paddingBottom=imagePadding+'%'}}
function t223_initThumbnail(rec){t_onFuncLoad('t223_setThumbnailHeight',function(){t223_setThumbnailHeight(rec)});t_onFuncLoad('t223_setThumbnail',function(){t223_setThumbnail(rec)});t_onFuncLoad('t223_setYouTubeIframeHeight',function(){t223_setYouTubeIframeHeight(rec)})}
function t223_setThumbnail(rec){var thumbnails=rec.querySelectorAll('.t223__video-thumbnail');if(!thumbnails.length)return;Array.prototype.forEach.call(thumbnails,function(thumbnail){var blockTop=thumbnail.getBoundingClientRect().top;var windowHeight=document.documentElement.clientHeight;var scrollDiffHeigth=400;if(window.pageYOffset>blockTop-windowHeight-scrollDiffHeigth){var youTubeID=thumbnail.getAttribute('data-youtube-id').trim();thumbnail.style.backgroundImage='url("https://img.youtube.com/vi/'+youTubeID+'/sddefault.jpg")';thumbnail.addEventListener('click',function(event){event.preventDefault();var youTubeWrapper=thumbnail.parentNode;var youTubeIframe='<iframe class="t223__youtube-iframe" width="100%" height="" src="https://www.youtube.com/embed/'+youTubeID+'?autoplay=1&rel=0" frameborder="0" allow="autoplay" allowfullscreen></iframe>';thumbnail.innerHTML=youTubeIframe;t223_setYouTubeIframeHeight(rec)})}})}
function t223_setThumbnailHeight(rec){var thumbnail=rec.querySelectorAll('.t223__video-thumbnail');if(!thumbnail.length)return;Array.prototype.forEach.call(thumbnail,function(image){var imageWidth=image.offsetWidth;var computedHeight=imageWidth/(16/9);image.style.height=computedHeight+'px'})}
function t223_setYouTubeIframeHeight(rec){var youTubeIframes=rec.querySelectorAll('iframe');if(!youTubeIframes.length)return;Array.prototype.forEach.call(youTubeIframes,function(youTubeIframe){var iframeParent=youTubeIframe.parentNode;var iframeParentWidth=iframeParent.offsetWidth;var computedHeight=iframeParentWidth/(16/9);youTubeIframe.height=computedHeight})}
function t668_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t668');if(!container)return;var accordion=rec.querySelectorAll('.t668__accordion')[0];var headers=rec.querySelectorAll('.t668__header');var isLazy=document.getElementById('allrecords').getAttribute('data-tilda-lazy');var content=rec.querySelector('.t668__content');if(!content)return;var contentStyle=window.getComputedStyle(content,null);if(!contentStyle&&typeof contentStyle!=='object')return;var oldStyle={paddingTop:contentStyle.paddingTop,paddingBottom:contentStyle.paddingBottom};if(accordion){accordion=accordion.getAttribute('data-accordion')}else{accordion='false'}
for(var i=0;i<headers.length;i++){headers[i].addEventListener('click',function(){var element=this;var container=element.nextElementSibling;var triggerButton=element.querySelector('.t668__trigger-button');if(triggerButton){var isExpanded=triggerButton.getAttribute('aria-expanded')==='true';triggerButton.setAttribute('aria-expanded',!isExpanded);container.hidden=isExpanded}
if(element.classList.contains('t668__opened')){element.classList.remove('t668__opened');t668_accordionHide(container)}else{if(accordion==='true'){t668_accordionAllHide(headers)}
element.classList.add('t668__opened');container.style.display='block';var height=container.scrollHeight;container.style.maxHeight='0px';setTimeout(function(){container.style.maxHeight=height+'px';container.setAttribute('style',t668_addStyle(container)+' padding-top: '+oldStyle.paddingTop+'; padding-bottom: '+oldStyle.paddingBottom+';')},0)}
if(window.lazy==='y'||isLazy==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}})}}
function t668_accordionAllHide(headers){for(var i=0;i<headers.length;i++){var elementHide=headers[i];elementHide.classList.remove('t668__opened');t668_accordionHide(elementHide.nextElementSibling)}}
function t668_accordionHide(container){if(!container.style.maxHeight)container.style.maxHeight=container.scrollHeight+'px';setTimeout(function(){container.style.maxHeight=0;container.setAttribute('style',t668_addStyle(container)+' padding-top: 0px !important; padding-bottom: 0px !important;')},0)}
function t668_addStyle(container){var attrStyle=container.getAttribute('style');var arrStyle=attrStyle.split(';');var newArr=[];for(var i=0;i<arrStyle.length;i++){var style=arrStyle[i];if(style.indexOf('padding-top')===-1&&style.indexOf('padding-bottom')===-1){newArr.push(style)}}
return newArr.join(';')}
function t718_onSuccess(form){form=form[0]?form[0]:form;if(!form)return;if(form.tagName&&form.tagName.toLowerCase()==='input'){form=form.closest('.t-form')}
var inputsWrapper=form.querySelector('.t-form__inputsbox');if(!inputsWrapper)return;var paddingTopInputs=parseInt(inputsWrapper.style.paddingTop,10)||0;var paddingBottomInputs=parseInt(inputsWrapper.style.paddingBottom,10)||0;var inputsHeight=inputsWrapper.clientHeight-(paddingTopInputs+paddingBottomInputs);var inputsOffset=inputsWrapper.getBoundingClientRect().top+window.pageYOffset;var inputsBottom=inputsHeight+inputsOffset;var targetOffset=form.querySelector('.t-form__successbox').getBoundingClientRect().top+window.pageYOffset;var target=null;if(window.innerWidth>960){target=targetOffset-200}else{target=targetOffset-100}
var documentHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);if(targetOffset>window.pageYOffset||documentHeight-inputsBottom<window.innerHeight-100){inputsWrapper.classList.add('t718__inputsbox_hidden');var body=document.body;var paddingTopBody=parseInt(body.style.paddingTop,10)||0;var paddingBottomBody=parseInt(body.style.paddingBottom,10)||0;var bodyHeight=body.clientHeight-(paddingTopBody+paddingBottomBody);setTimeout(function(){if(window.innerHeight>bodyHeight){setTimeout(function(){var tildaLabel=document.querySelector('.t-tildalabel');if(!tildaLabel)return;t718__fadeOut(tildaLabel)},50)}},300)}else{t718_scrollToTop(target);setTimeout(function(){inputsWrapper.classList.add('t718__inputsbox_hidden')},400)}
var successUrl=form.getAttribute('data-success-url');if(successUrl){setTimeout(function(){window.location.href=successUrl},500)}}
function t718_scrollToTop(target){if(target===window.pageYOffset){return!1}
var duration=400;var difference=window.pageYOffset;var cashedDiff=window.pageYOffset;var step=(Math.abs(window.pageYOffset-target)*10)/duration;var scrollInterval=setInterval(function(){if(cashedDiff>target){difference-=step}else{difference+=step}
window.scrollTo(0,difference);document.body.setAttribute('data-scrollable','true');if(cashedDiff>target&&window.pageYOffset<=target){document.body.removeAttribute('data-scrollable');clearInterval(scrollInterval)}else if(cashedDiff<=target&&window.pageYOffset>=target){document.body.removeAttribute('data-scrollable');window.scrollTo(0,target);clearInterval(scrollInterval)}},10);var scrollTimeout=setTimeout(function(){clearInterval(scrollInterval);document.body.removeAttribute('data-scrollable');clearTimeout(scrollTimeout)},duration*2)}
function t718__fadeOut(element){if(element.style.display==='none')return;var opacity=1;var timer=setInterval(function(){element.style.opacity=opacity;opacity-=0.1;if(opacity<=0.1){clearInterval(timer);element.style.display='none';element.style.opacity=null}},50)}
function t898_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t898');if(!container)return;rec.setAttribute('data-animationappear','off');rec.style.opacity=1;var whatsApp=rec.querySelector('.t898__icon-whatsapp_wrapper');if(whatsApp){var whatsAppHref=whatsApp.getAttribute('href');if(whatsAppHref&&(whatsAppHref.indexOf('whatsapp://')>-1||whatsAppHref.indexOf('wa.me')>-1)){t898_removeExtraSymbolsFromWhatsApp(whatsApp,whatsAppHref)}}
if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
function t898_removeExtraSymbolsFromWhatsApp(whatsApp,whatsAppHref){if(whatsAppHref&&whatsAppHref.indexOf('?text=')!==-1){var whatsAppHrefArr=whatsAppHref.split('?text=');whatsAppHrefArr[0]=whatsAppHrefArr[0].replace(/[\(\)+-]/g,'');whatsAppHref=whatsAppHrefArr[0]+'?text='+whatsAppHrefArr[1]}else{whatsAppHref=whatsAppHref.replace(/[\(\)+-]/,'')}
whatsApp.setAttribute('href',whatsAppHref)}
function t702_initPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;rec.setAttribute('data-animationappear','off');rec.setAttribute('data-popup-subscribe-inited','y');rec.style.opacity=1;var documentBody=document.body;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var analitics=popup.getAttribute('data-track-popup');var popupCloseBtn=popup.querySelector('.t-popup__close');var hrefs=rec.querySelectorAll('a[href*="#"]');var submitHref=rec.querySelector('.t-submit[href*="#"]');if(popupTooltipHook){t_onFuncLoad('t_popup__addAttributesForAccessibility',function(){t_popup__addAttributesForAccessibility(popupTooltipHook)});document.addEventListener('click',function(event){var target=event.target;var href=target.closest('a[href$="'+popupTooltipHook+'"]')?target:!1;if(!href)return;event.preventDefault();t702_showPopup(recId);t_onFuncLoad('t_popup__resizePopup',function(){t_popup__resizePopup(recId)});t702__lazyLoad();if(analitics&&window.Tilda){Tilda.sendEventToStatistics(analitics,popupTooltipHook)}});t_onFuncLoad('t_popup__addClassOnTriggerButton',function(){t_popup__addClassOnTriggerButton(document,popupTooltipHook)})}
popup.addEventListener('scroll',t_throttle(function(){t702__lazyLoad()}));popup.addEventListener('click',function(event){var windowWithoutScrollBar=window.innerWidth-17;if(event.clientX>windowWithoutScrollBar)return;if(event.target===this)t702_closePopup(recId)});popupCloseBtn.addEventListener('click',function(){t702_closePopup(recId)});if(submitHref){submitHref.addEventListener('click',function(){if(documentBody.classList.contains('t-body_scroll-locked')){documentBody.classList.remove('t-body_scroll-locked')}})}
for(var i=0;i<hrefs.length;i++){hrefs[i].addEventListener('click',function(){var url=this.getAttribute('href');if(!url||url.substring(0,7)!='#price:'){t702_closePopup(recId);if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed')},300)}}})}
function t702_escClosePopup(event){if(event.key==='Escape')t702_closePopup(recId)}
popup.addEventListener('tildamodal:show'+popupTooltipHook,function(){document.addEventListener('keydown',t702_escClosePopup)});popup.addEventListener('tildamodal:close'+popupTooltipHook,function(){document.removeEventListener('keydown',t702_escClosePopup)})}
function t702_lockScroll(){var documentBody=document.body;if(!documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=typeof window.pageYOffset!=='undefined'?window.pageYOffset:(document.documentElement||documentBody.parentNode||documentBody).scrollTop;documentBody.classList.add('t-body_scroll-locked');documentBody.style.top='-'+bodyScrollTop+'px';documentBody.setAttribute('data-popup-scrolltop',bodyScrollTop)}}
function t702_unlockScroll(){var documentBody=document.body;if(documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=documentBody.getAttribute('data-popup-scrolltop');documentBody.classList.remove('t-body_scroll-locked');documentBody.style.top=null;documentBody.removeAttribute('data-popup-scrolltop');document.documentElement.scrollTop=parseInt(bodyScrollTop)}}
function t702_showPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;var windowWidth=window.innerWidth;var screenMin=rec.getAttribute('data-screen-min');var screenMax=rec.getAttribute('data-screen-max');if(screenMin&&windowWidth<parseInt(screenMin,10))return;if(screenMax&&windowWidth>parseInt(screenMax,10))return;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var ranges=rec.querySelectorAll('.t-range');var documentBody=document.body;if(ranges.length){Array.prototype.forEach.call(ranges,function(range){t702__triggerEvent(range,'popupOpened')})}
t_onFuncLoad('t_popup__showPopup',function(){t_popup__showPopup(popup)});if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed');documentBody.classList.add('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){setTimeout(function(){t702_lockScroll()},500)}
t702__lazyLoad();t702__triggerEvent(popup,'tildamodal:show'+popupTooltipHook)}
function t702_closePopup(recId){var rec=document.getElementById('rec'+recId);var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var popupAll=document.querySelectorAll('.t-popup_show:not(.t-feed__post-popup):not(.t945__popup)');if(popupAll.length==1){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}else{var newPopup=[];for(var i=0;i<popupAll.length;i++){if(popupAll[i].getAttribute('data-tooltip-hook')===popupTooltipHook){popupAll[i].classList.remove('t-popup_show');newPopup.push(popupAll[i])}}
if(newPopup.length===popupAll.length){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}}
if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');popup.classList.remove('t-popup_show');document.body.classList.remove('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){t702_unlockScroll()}
t_onFuncLoad('t_popup__addFocusOnTriggerButton',function(){t_popup__addFocusOnTriggerButton()});setTimeout(function(){var popupHide=document.querySelectorAll('.t-popup:not(.t-popup_show)');for(var i=0;i<popupHide.length;i++){popupHide[i].style.display='none'}},300);t702__triggerEvent(popup,'tildamodal:close'+popupTooltipHook)}
function t702_sendPopupEventToStatistics(popupName){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupName.substring(0,7)=='#popup:'){popupName=popupName.substring(7)}
virtPage+=popupName;virtTitle+=popupName;if(window.Tilda&&typeof Tilda.sendEventToStatistics=='function'){Tilda.sendEventToStatistics(virtPage,virtTitle,'',0)}else{if(ga){if(window.mainTracker!='tilda'){ga('send',{hitType:'pageview',page:virtPage,title:virtTitle})}}
if(window.mainMetrika&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}}
function t702_onSuccess(form){t_onFuncLoad('t_forms__onSuccess',function(){t_forms__onSuccess(form)})}
function t702__lazyLoad(){if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
function t702__triggerEvent(el,eventName){var event;if(typeof window.CustomEvent==='function'){event=new CustomEvent(eventName)}else if(document.createEvent){event=document.createEvent('HTMLEvents');event.initEvent(eventName,!0,!1)}else if(document.createEventObject){event=document.createEventObject();event.eventType=eventName}
event.eventName=eventName;if(el.dispatchEvent){el.dispatchEvent(event)}else if(el.fireEvent){el.fireEvent('on'+event.eventType,event)}else if(el[eventName]){el[eventName]()}else if(el['on'+eventName]){el['on'+eventName]()}}
function t450_showMenu(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menu=rec.querySelector('.t450');var overlay=rec.querySelector('.t450__overlay');var menuElements=rec.querySelectorAll('.t450__overlay, .t450__close, a[href*="#"]');if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');document.body.classList.add('t450__body_menushowed');if(menu)menu.classList.add('t450__menu_show');if(overlay)overlay.classList.add('t450__menu_show');if(menu){menu.addEventListener('clickedAnchorInTooltipMenu',function(){t450_closeMenu(menu,overlay)})}
Array.prototype.forEach.call(menuElements,function(element){element.addEventListener('click',function(){if(element.closest('.tooltipstered, .t-menusub__target-link, .t794__tm-link, .t966__tm-link, .t978__tm-link'))return;if(element.href&&(element.href.substring(0,7)==='#price:'||element.href.substring(0,9)==='#submenu:'))return;t450_closeMenu(menu,overlay)})});document.addEventListener('keydown',function(e){if(e.keyCode===27){document.body.classList.remove('t390__body_popupshowed');var popups=document.querySelectorAll('.t390');Array.prototype.forEach.call(popups,function(popup){popup.classList.remove('t390__popup_show')})}});rec.addEventListener('click',function(e){if(e.target.closest('.t966__tm-link, .t978__tm-link')){t450_checkSize(recid);if(e.target.closest('.t978__tm-link')){setTimeout(function(){var hookLink=e.target.closest('.t978__tm-link');var menuBlock=hookLink.nextElementSibling;var submenuLinks=menuBlock?menuBlock.querySelectorAll('.t978__menu-link'):[];Array.prototype.forEach.call(submenuLinks,function(link){link.addEventListener('click',function(){t450_checkSize(recid)})})},300)}}});menu.addEventListener('menuOverflow',function(){t450_checkSize(recid)});t450_highlight(recid)}
function t450_closeMenu(menu,overlay){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t450__body_menushowed');if(menu)menu.classList.remove('t450__menu_show');if(overlay)overlay.classList.remove('t450__menu_show')}
function t450_checkSize(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t450'):null;if(!menu)return;var container=menu.querySelector('.t450__container');var topContainer=menu.querySelector('.t450__top');var rightContainer=menu.querySelector('.t450__rightside');setTimeout(function(){var topContainerHeight=topContainer?topContainer.offsetHeight:0;var rightContainerHeight=rightContainer?rightContainer.offsetHeight:0;var containerPaddingTop=container?window.getComputedStyle(container).paddingTop:'0';var containerPaddingBottom=container?window.getComputedStyle(container).paddingBottom:'0';containerPaddingTop=parseInt(containerPaddingTop,10);containerPaddingBottom=parseInt(containerPaddingBottom,10);if(topContainerHeight+rightContainerHeight+containerPaddingTop+containerPaddingBottom>document.documentElement.clientHeight){menu.classList.add('t450__overflowed')}else{menu.classList.remove('t450__overflowed')}})}
function t450_appearMenu(recid){var rec=document.getElementById('rec'+recid);var burger=rec?rec.querySelector('.t450__menu__content'):null;if(!burger)return;var burgerAppearOffset=burger?burger.getAttribute('data-appearoffset'):'';var burgerHideOffset=burger?burger.getAttribute('data-hideoffset'):'';if(burgerAppearOffset){burgerAppearOffset=t450_appearMenuParseNumber(burgerAppearOffset);if(window.pageYOffset>=burgerAppearOffset){if(burger.classList.contains('t450__beforeready')){burger.classList.remove('t450__beforeready')}}else{burger.classList.add('t450__beforeready')}}
if(burgerHideOffset){burgerHideOffset=t450_appearMenuParseNumber(burgerHideOffset);var scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);if(window.pageYOffset+window.innerHeight>=scrollHeight-burgerHideOffset){if(!burger.classList.contains('t450__beforeready')){burger.classList.add('t450__beforeready')}}else if(burgerAppearOffset){if(window.pageYOffset>=burgerAppearOffset){burger.classList.remove('t450__beforeready')}}else{burger.classList.remove('t450__beforeready')}}}
function t450_appearMenuParseNumber(string){if(string.indexOf('vh')>-1){string=Math.floor((window.innerHeight*(parseInt(string)/100)))}
return parseInt(string,10)}
function t450_initMenu(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t450'):null;var overlay=rec?rec.querySelector('.t450__overlay'):null;var burger=rec?rec.querySelector('.t450__burger_container'):null;var menuLinks=rec?rec.querySelectorAll('.t-menu__link-item.t450__link-item_submenu'):[];var hook=menu?menu.getAttribute('data-tooltip-hook'):'';if(hook){document.addEventListener('click',function(e){if(e.target.closest('a[href="'+hook+'"]')){e.preventDefault();t450_closeMenu(menu,overlay);t450_showMenu(recid);t450_checkSize(recid)}})}
if(burger){burger.addEventListener('click',function(){t450_closeMenu(menu,overlay);t450_showMenu(recid);t450_checkSize(recid)})}
window.addEventListener('resize',function(){t450_checkSize(recid)});if(!window.isMobile)return;Array.prototype.forEach.call(menuLinks,function(link){link.addEventListener('click',function(){t450_checkSize(recid)})})}
function t450_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;var hash=window.location.hash;if(url.substr(url.length-1)==='/'){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)==='/'){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)==='/'){pathname=pathname.slice(1)}
if(pathname===''){pathname='/'}
var shouldBeActiveElements=document.querySelectorAll('.t450__menu a[href=\''+url+'\'], '+'.t450__menu a[href=\''+url+'/\'], '+'.t450__menu a[href=\''+pathname+'\'], '+'.t450__menu a[href=\'/'+pathname+'\'], '+'.t450__menu a[href=\''+pathname+'/\'], '+'.t450__menu a[href=\'/'+pathname+'/\']'+(hash?', .t450__menu a[href=\''+hash+'\']':''));var rec=document.getElementById('rec'+recid);var menuLinks=rec?rec.querySelectorAll('.t450__menu a'):[];Array.prototype.forEach.call(menuLinks,function(link){if(link.getAttribute('data-highlighted-by-user')!=='y')link.classList.remove('t-active')});Array.prototype.forEach.call(shouldBeActiveElements,function(link){link.classList.add('t-active')})}