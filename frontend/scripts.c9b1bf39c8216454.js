RPGUI=function(){function R(e){g=null,window.removeEventListener("mousemove",C)}function A(e){var t=e.target||e.srcElement;if(n.has_class(t,E)){var s=(g=t).getBoundingClientRect();w={x:s.left-e.clientX,y:s.top-e.clientY},t.style.zIndex=U++,window.addEventListener("mousemove",C,!0)}}function C(e){g&&(g.style.position="absolute",g.style.left=e.clientX+w.x+"px",g.style.top=e.clientY+w.y+"px")}var n=n||{};n.version=1.03,n.author="Ronen Ness",n.init_on_load=!0,window.addEventListener("load",function(){n.init_on_load&&n.init()}),n.init=function(){if(n._was_init)throw"RPGUI was already init!";for(var e=0;e<n.__init_list.length;++e)n.__init_list[e]();n._was_init=!0},n.__init_list=[],n.on_load=function(e){n._was_init&&e(),n.__init_list.push(e)},n.__update_funcs={},n.__create_funcs={},n.__get_funcs={},n.__set_funcs={},n.create=function(e,t){if(!n.__create_funcs[t])throw"Not a valid rpgui type! options: "+Object.keys(n.__create_funcs);e.dataset.rpguitype=t,n.__create_funcs[t](e)},n.update=function(e){var t=e.dataset.rpguitype;n.__update_funcs[t]?n.__update_funcs[t](e):n.fire_event(e,"change")},n.set_value=function(e,t){var s=e.dataset.rpguitype;n.__set_funcs[s]?n.__set_funcs[s](e,t):e.value=t,n.update(e)},n.get_value=function(e){var t=e.dataset.rpguitype;return n.__get_funcs[t]?n.__get_funcs[t](e):e.value};var y="rpgui-checkbox";n.__create_funcs.checkbox=function(e){n.add_class(e,y),function z(e){var s,t=e.nextSibling;if(!t||"LABEL"!==t.tagName)throw"After a '"+y+"' there must be a label!";n.copy_event_listeners(e,t),s=e,t.addEventListener("click",function(){s.disabled||n.set_value(s,!s.checked)})}(e)},n.__set_funcs.checkbox=function(e,t){e.checked=t},n.__get_funcs.checkbox=function(e){return e.checked},n.on_load(function(){for(var e=document.getElementsByClassName(y),t=0;t<e.length;++t)n.create(e[t],"checkbox")}),n.on_load(function(){for(var e=document.getElementsByClassName("rpgui-content"),t=0;t<e.length;++t){var s=e[t];n.prevent_drag(s),n.set_cursor(s,"default")}});var g=null,w=null,U=1e3,E="rpgui-draggable";n.__create_funcs.draggable=function(e){e.draggable=!1,e.ondragstart=function(){return!1},n.add_class(e,E),e.addEventListener("mousedown",A)},n.on_load(function(){for(var e=document.getElementsByClassName(E),t=0;t<e.length;++t)n.create(e[t],"draggable");window.addEventListener("mouseup",R)});var k="rpgui-progress";n.__create_funcs.progress=function(e){n.add_class(e,k),function F(e){progress_container=e,n.insert_after(progress_container,e);var t=n.create_element("div");n.add_class(t,"rpgui-progress-track"),progress_container.appendChild(t);var s=n.create_element("div");n.add_class(s,"rpgui-progress-left-edge"),progress_container.appendChild(s);var a=n.create_element("div");n.add_class(a,"rpgui-progress-right-edge"),progress_container.appendChild(a);var r=n.create_element("div");n.add_class(r,"rpgui-progress-fill"),t.appendChild(r),n.has_class(e,"blue")&&(r.className+=" blue"),n.has_class(e,"red")&&(r.className+=" red"),n.has_class(e,"green")&&(r.className+=" green");var c=void 0!==e.dataset.value?parseFloat(e.dataset.value):1;n.set_value(e,c)}(e)},n.__set_funcs.progress=function(e,t){var s=n.get_child_with_class(e,"rpgui-progress-track"),a=n.get_child_with_class(s,"rpgui-progress-fill");n.get_child_with_class(e,"rpgui-progress-left-edge"),n.get_child_with_class(e,"rpgui-progress-right-edge"),a.style.left="0px",a.style.width=100*t+"%"},n.on_load(function(){for(var e=document.getElementsByClassName(k),t=0;t<e.length;++t)n.create(e[t],"progress")});var L="rpgui-radio";n.__create_funcs.radio=function(e){n.add_class(e,L),function P(e){var s,t=e.nextSibling;if(!t||"LABEL"!==t.tagName)throw"After a '"+L+"' there must be a label!";n.copy_event_listeners(e,t),s=e,t.addEventListener("click",function(){s.disabled||n.set_value(s,!0)})}(e)},n.__set_funcs.radio=function(e,t){e.checked=t},n.__get_funcs.radio=function(e){return e.checked},n.on_load(function(){for(var e=document.getElementsByClassName(L),t=0;t<e.length;++t)n.create(e[t],"radio")});var B="rpgui-dropdown";n.__create_funcs.dropdown=function(e){n.add_class(e,B),function S(e){var t="<label>&#9660;</label> ",s=n.create_element("p");e.id&&(s.id=e.id+"-rpgui-dropdown-head"),n.add_class(s,"rpgui-dropdown-imp rpgui-dropdown-imp-header"),n.insert_after(s,e);var a=n.create_element("ul");e.id&&(a.id=e.id+"-rpgui-dropdown"),n.add_class(a,"rpgui-dropdown-imp"),n.insert_after(a,s);var i,d,r=s.getBoundingClientRect();a.style.position="absolute",a.style.width=r.right-r.left-14+"px",a.style.display="none",e.style.display="none";for(var c=0;c<e.children.length;++c){var f=e.children[c];if("OPTION"==f.tagName){var u=n.create_element("li");u.innerHTML=f.innerHTML,a.appendChild(u),n.copy_event_listeners(f,u),function(i,d,p,_,l){p.addEventListener("click",function(){_.innerHTML=t+d.innerHTML,l.style.display="none",d.selected=!0,n.fire_event(i,"change")})}(e,f,u,s,a)}}i=e,d=a,s.onclick=function(){i.disabled||(d.style.display="none"==d.style.display?"block":"none")},d.onmouseleave=function(){d.style.display="none"},function(i,d,p){_on_change=function(){d.innerHTML=-1!=i.selectedIndex?t+i.options[i.selectedIndex].text:t,p.style.display="none"},i.addEventListener("change",_on_change),_on_change()}(e,s,a)}(e)},n.on_load(function(){for(var e=document.getElementsByClassName(B),t=0;t<e.length;++t)n.create(e[t],"dropdown")});var T="rpgui-list";n.__create_funcs.list=function(e){n.add_class(e,T),function W(e){e.size||(e.size=3);var t=n.create_element("ul");e.id&&(t.id=e.id+"-rpgui-list"),n.add_class(t,"rpgui-list-imp"),e.parentNode.insertBefore(t,e.nextSibling),e.style.display="none";for(var s=[],a=0;a<e.children.length;++a){var r=e.children[a];if("OPTION"==r.tagName){var c=n.create_element("li");c.innerHTML=r.innerHTML,t.appendChild(c),c.dataset.rpguivalue=r.value,s.push(c),n.copy_event_listeners(r,c),function(u,i,d,p,_){d.addEventListener("click",function(){u.disabled||(i.selected=!0,n.fire_event(u,"change"))})}(e,r,c)}}s.length&&e.size&&(t.style.height=s[0].offsetHeight*e.size+"px"),function(u,i){function d(p){for(var _=0;_<i.length;++_){var l=i[_];l.dataset.rpguivalue==p.value?n.add_class(l,"rpgui-selected"):n.remove_class(l,"rpgui-selected")}}u.addEventListener("change",function(){d(this)}),d(u)}(e,s)}(e)},n.on_load(function(){for(var e=document.getElementsByClassName(T),t=0;t<e.length;++t)n.create(e[t],"list")});var M="rpgui-slider";return n.__create_funcs.slider=function(e){n.add_class(e,M),function G(e){var t=n.has_class(e,"golden")?" golden":"",s=n.create_element("div");e.id&&(s.id=e.id+"-rpgui-slider"),n.copy_css(e,s),n.add_class(s,"rpgui-slider-container"+t),n.insert_after(s,e),s.style.width=e.offsetWidth+"px";var a=n.create_element("div");n.add_class(a,"rpgui-slider-track"+t),s.appendChild(a);var r=n.create_element("div");n.add_class(r,"rpgui-slider-left-edge"+t),s.appendChild(r);var c=n.create_element("div");n.add_class(c,"rpgui-slider-right-edge"+t),s.appendChild(c);var f=n.create_element("div");n.add_class(f,"rpgui-slider-thumb"+t),s.appendChild(f),e.style.display="none",n.copy_event_listeners(e,s),function(i,d,p,_,l,b,N){function H(o){h(v+Math.round(o/X*(m-v))-1)}function h(o){i.disabled||i.value==o||n.set_value(i,o)}function I(){var o=X/(m-v),x=Math.round(parseFloat(i.value)-v);p.style.left=Math.floor(.25*O)+x*o+"px"}var v=parseFloat(i.min),m=parseFloat(i.max),O=b.offsetWidth+N.offsetWidth,X=_.offsetWidth-O;d.addEventListener("mouseup",function(o){l.mouse_down=!1}),window.addEventListener("mouseup",function(o){l.mouse_down=!1}),_.addEventListener("mousedown",function(o){l.mouse_down=!0,H(o.offsetX||o.layerX)}),d.addEventListener("mousedown",function(o){l.mouse_down=!0}),N.addEventListener("mousedown",function(o){h(v)}),b.addEventListener("mousedown",function(o){h(m)}),N.addEventListener("mousemove",function(o){l.mouse_down&&h(v)}),b.addEventListener("mousemove",function(o){l.mouse_down&&h(m)}),_.addEventListener("mousemove",function(o){l.mouse_down&&!i.disabled&&H(o.offsetX||o.layerX)}),i.addEventListener("change",function(o){I()}),I()}(e,s,f,a,{mouse_down:!1},c,r)}(e)},n.on_load(function(){for(var e=document.getElementsByClassName(M),t=0;t<e.length;++t)n.create(e[t],"slider")}),n.create_element=function(e){return document.createElement(e)},n.set_cursor=function(e,t){n.add_class(e,"rpgui-cursor-"+t)},n.prevent_drag=function(e){},n.copy_css=function(e,t){t.style.cssText=e.style.cssText},n.has_class=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},n.add_class=function(e,t){n.has_class(e,t)||(e.className+=" "+t)},n.get_child_with_class=function(e,t){for(var s=0;s<e.childNodes.length;s++)if(n.has_class(e.childNodes[s],t))return e.childNodes[s]},n.remove_class=function(e,t){e.className=(" "+e.className+" ").replace(t,""),e.className=e.className.substring(1,e.className.length-1)},n.fire_event=function(e,t){if("createEvent"in document){var s=document.createEvent("HTMLEvents");s.initEvent(t,!1,!0),e.dispatchEvent(s)}else e.fireEvent("on"+t)},n.copy_event_listeners=function(e,t){if("function"==typeof getEventListeners){var s=getEventListeners(e);for(var a in s)s[a].forEach(function(r){t.addEventListener(a,r.listener,r.useCapture)})}for(attr in e)0===attr.indexOf("on")&&(t[attr]=e[attr])},n.insert_after=function(e,t){t.parentNode.insertBefore(e,t.nextSibling)},n}();