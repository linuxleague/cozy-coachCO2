!function(e){function t(t){for(var a,o,l=t[0],c=t[1],s=t[2],u=0,f=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={0:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=c;i.push([0,1]),n()}({"/KVF":function(e,t,n){var a={"./en":"7dT6","./en.json":"7dT6","./fr":"9pOX","./fr.json":"9pOX"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="/KVF"},"/kYV":function(e,t,n){},0:function(e,t,n){n("55Il"),n("7NIr"),e.exports=n("LiWt")},1:function(e,t){},"6QpA":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("J4zp"),r=n.n(a),i=n("q1tI"),o=n.n(i),l=Object(i.createContext)();t.b=function(e){var t=e.children,n=Object(i.useState)(null),a=r()(n,2),c=a[0],s=a[1];return o.a.createElement(l.Provider,{value:{selectedAccount:c,setSelectedAccount:s}},t)}},"7dT6":function(e){e.exports=JSON.parse('{"nav":{"trips":"Trips","settings":"Settings"},"account":{"notFound":"No account found"},"devices":{"select":"Select a device","label":"Devices"},"trips":{"from":"Trips from","modes":{"AIR_OR_HSR":"Plane","BICYCLING":"Bike","CAR":"Car","SUBWAY":"Subway","TRAIN":"Train","UNKNOWN":"","WALKING":"Walking","BUS":"Bus"}},"loadMore":"Load more trips"}')},"9pOX":function(e){e.exports=JSON.parse('{"nav":{"trips":"Déplacements","settings":"Paramètres"},"account":{"notFound":"Aucun compte trouvé"},"devices":{"select":"Sélectionnez un appareil","label":"Appareils"},"trips":{"from":"Déplacements depuis","modes":{"AIR_OR_HSR":"Avion","BICYCLING":"Vélo","CAR":"Voiture","SUBWAY":"Métro","TRAIN":"Train","UNKNOWN":"","WALKING":"Marche","BUS":"Bus"}},"loadMore":"Charger plus de trajets"}')},CTvO:function(e,t,n){"use strict";var a=n("lSNA"),r=n.n(a),i=n("QILm"),o=n.n(i),l=n("q1tI"),c=n.n(l),s=n("SH7X"),d=n("buk/"),u=n("V2U0"),f=n("dN3h"),p=n("17x9"),m=n.n(p),b=n("/Tkk"),_=n.n(b),C=n("c8ah"),j=n("cbAs"),v=n("ZLzk"),x=n("J4zp"),w=n.n(x),h=n("vEVt"),y=n("gPjO"),g=n("MSWZ"),O=n("aN1g"),E=n("eBdR"),M=n("JeaN"),L=n("QaI8"),N=n("qFRD"),D=n("y6ex"),k=n("4BeY"),P=n.n(k),V=n("IaFt"),B=n.n(V),S=new P.a({id:"avatar-bike_8b80aa846f61e6999f3781f89f759746",use:"avatar-bike_8b80aa846f61e6999f3781f89f759746-usage",viewBox:"0 0 32 32",content:'<symbol viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="avatar-bike_8b80aa846f61e6999f3781f89f759746">\n<path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#15CACD" />\n<path d="M20.5 11C20.5 12.1046 19.6046 13 18.5 13C17.3954 13 16.5 12.1046 16.5 11C16.5 9.89543 17.3954 9 18.5 9C19.6046 9 20.5 9.89543 20.5 11Z" fill="white" />\n<path d="M16.457 15.543C16.6393 15.699 16.836 15.8518 17.0452 15.9962C17.8165 16.5285 18.8381 17 20 17C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15C19.3793 15 18.7507 14.7432 18.1812 14.3502C17.6122 13.9575 17.1823 13.483 16.9774 13.1864C16.7231 12.8185 16.2724 12.5 15.7006 12.5C15.307 12.5 14.9294 12.6564 14.651 12.9348L12.4471 15.1386C12.1608 15.4249 12 15.8133 12 16.2181C12 16.7286 12.2551 17.2053 12.6798 17.4884L15 19.0352V22C15 22.5523 15.4477 23 16 23C16.5523 23 17 22.5523 17 22V18.5C17 18.1656 16.8329 17.8534 16.5547 17.6679L15.2211 16.7789L16.457 15.543Z" fill="white" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M24 21C24 22.6569 22.6569 24 21 24C19.3431 24 18 22.6569 18 21C18 19.3431 19.3431 18 21 18C22.6569 18 24 19.3431 24 21ZM22.5 21C22.5 21.8284 21.8284 22.5 21 22.5C20.1716 22.5 19.5 21.8284 19.5 21C19.5 20.1716 20.1716 19.5 21 19.5C21.8284 19.5 22.5 20.1716 22.5 21Z" fill="white" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11 24C12.6569 24 14 22.6569 14 21C14 19.3431 12.6569 18 11 18C9.34315 18 8 19.3431 8 21C8 22.6569 9.34315 24 11 24ZM11 22.5C11.8284 22.5 12.5 21.8284 12.5 21C12.5 20.1716 11.8284 19.5 11 19.5C10.1716 19.5 9.5 20.1716 9.5 21C9.5 21.8284 10.1716 22.5 11 22.5Z" fill="white" />\n</symbol>'}),H=(B.a.add(S),S),Z=new P.a({id:"avatar-bus_01cd5f34ca9f93afbc3d068fa8f85957",use:"avatar-bus_01cd5f34ca9f93afbc3d068fa8f85957-usage",viewBox:"0 0 32 32",content:'<symbol viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="avatar-bus_01cd5f34ca9f93afbc3d068fa8f85957">\n<path d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z" fill="#BA5AE8" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M9 19C9 19.88 9.39 20.67 10 21.22V22.5C10 23.33 10.67 24 11.5 24C12.33 24 13 23.33 13 22.5V22H19V22.5C19 23.32 19.67 24 20.5 24C21.32 24 22 23.33 22 22.5V21.22C22.61 20.67 23 19.88 23 19V12C23 9 20 8 16 8C12 8 9 9 9 12V19ZM12.5 20C11.67 20 11 19.33 11 18.5C11 17.67 11.67 17 12.5 17C13.33 17 14 17.67 14 18.5C14 19.33 13.33 20 12.5 20ZM19.5 20C18.67 20 18 19.33 18 18.5C18 17.67 18.67 17 19.5 17C20.33 17 21 17.67 21 18.5C21 19.33 20.33 20 19.5 20ZM21 15H11V11H21V15Z" fill="white" />\n</symbol>'}),A=(B.a.add(Z),Z),T=new P.a({id:"avatar-car_d3aee348619e1d182b1e8e1e404c7fbf",use:"avatar-car_d3aee348619e1d182b1e8e1e404c7fbf-usage",viewBox:"0 0 32 32",content:'<symbol viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="avatar-car_d3aee348619e1d182b1e8e1e404c7fbf">\n<path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#FF7B5E" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M24 21.5C24 22.33 23.32 23 22.5 23C21.7189 23 21.0794 22.3976 21.0069 21.6431L21 21.5V21H11V21.5C11 22.33 10.33 23 9.50003 23C8.71885 23 8.0794 22.4065 8.00688 21.6447L8.00003 21.5L7.99915 14.9865C8.0003 14.9078 8.01095 14.8278 8.03202 14.748L8.07155 14.6286L10.0715 9.62861C10.2082 9.28692 10.5197 9.0511 10.8788 9.00735L11 9H21C21.368 9 21.7027 9.20165 21.8766 9.51875L21.9285 9.62861L23.9285 14.6286C23.9723 14.7381 23.9953 14.8492 24.0001 14.9583L24 21.5ZM11.5 16C10.67 16 10 16.67 10 17.5C10 18.33 10.67 19 11.5 19C12.33 19 13 18.33 13 17.5C13 16.67 12.33 16 11.5 16ZM20.5 16C19.67 16 19 16.67 19 17.5C19 18.33 19.67 19 20.5 19C21.33 19 22 18.33 22 17.5C22 16.67 21.33 16 20.5 16ZM20.324 11H11.677L10.477 14H21.524L20.324 11Z" fill="white" />\n</symbol>'}),z=(B.a.add(T),T),I=new P.a({id:"avatar-plane_99d33162eb88de4d964586569ba717f1",use:"avatar-plane_99d33162eb88de4d964586569ba717f1-usage",viewBox:"0 0 32 32",content:'<symbol viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="avatar-plane_99d33162eb88de4d964586569ba717f1">\n<path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#F05759" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5388 8.46116C22.915 7.83732 21.9003 7.84775 21.2895 8.4843L17.8789 12.0807L10.0251 9.1355C9.83777 9.06526 9.62671 9.11098 9.48527 9.25242L8.1494 10.5883C7.9502 10.7875 7.9502 11.1105 8.1494 11.3097C8.18146 11.3417 8.21765 11.3694 8.25701 11.3918L14.8184 15.1412L11.2478 18.7118L9.50892 18.2771C9.32376 18.2308 9.12825 18.2917 9.00219 18.4351L8.14079 19.4144C7.95473 19.6259 7.97538 19.9482 8.18691 20.1343C8.22708 20.1696 8.27256 20.1984 8.32169 20.2196L10.7377 21.2622L11.7803 23.6782C11.892 23.9369 12.1921 24.0561 12.4508 23.9445C12.4999 23.9233 12.5454 23.8945 12.5856 23.8591L13.5649 22.9977C13.7082 22.8717 13.7692 22.6762 13.7229 22.491L13.2881 20.7521L16.8588 17.1815L20.6081 23.7429C20.7479 23.9875 21.0595 24.0725 21.3041 23.9327C21.3434 23.9102 21.3796 23.8826 21.4117 23.8505L22.7476 22.5146C22.889 22.3732 22.9347 22.1621 22.8645 21.9749L19.9193 14.121L23.5157 10.7105C24.1523 10.0996 24.1627 9.08502 23.5388 8.46116Z" fill="white" />\n</symbol>'}),R=(B.a.add(I),I),q=new P.a({id:"avatar-subway_1f8bf3ea5cf864da711392122cd8e1b3",use:"avatar-subway_1f8bf3ea5cf864da711392122cd8e1b3-usage",viewBox:"0 0 32 32",content:'<symbol viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="avatar-subway_1f8bf3ea5cf864da711392122cd8e1b3">\n<path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#8978FF" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M20.64 8.64C19.2 8.072 17.488 8 16 8C14.512 8 12.8 8.072 11.36 8.64C9.224 9.472 8 11.24 8 13.488V24H24V13.488C24 11.24 22.776 9.472 20.64 8.64ZM21 13.8571V18.8571C21 19.9278 20.2148 20.8151 19.1888 20.9745L20.2857 22.0714V22.4286H18.8571L17.4286 21H14.5714L13.1429 22.4286H11.7143V22.0714L12.8112 20.9745C11.7852 20.8151 11 19.9278 11 18.8571V13.8571C11 11.7143 13.1429 11 16 11C18.8571 11 21 11.7143 21 13.8571ZM12.4286 13.1429V16H19.5714V13.1429H12.4286ZM14.5714 18.5C14.5714 19.0917 14.0917 19.5714 13.5 19.5714C12.9083 19.5714 12.4286 19.0917 12.4286 18.5C12.4286 17.9083 12.9083 17.4286 13.5 17.4286C14.0917 17.4286 14.5714 17.9083 14.5714 18.5ZM18.5 19.5714C19.0917 19.5714 19.5714 19.0917 19.5714 18.5C19.5714 17.9083 19.0917 17.4286 18.5 17.4286C17.9083 17.4286 17.4286 17.9083 17.4286 18.5C17.4286 19.0917 17.9083 19.5714 18.5 19.5714Z" fill="white" />\n</symbol>'}),F=(B.a.add(q),q),U=new P.a({id:"avatar-train_c4b89a3f061643207aa762654ca423d5",use:"avatar-train_c4b89a3f061643207aa762654ca423d5-usage",viewBox:"0 0 32 32",content:'<symbol viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="avatar-train_c4b89a3f061643207aa762654ca423d5">\n<path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#F1B61E" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M23 12V19C23 20.4989 21.9007 21.7411 20.4643 21.9643L22 23.5V24H20L18 22H14L12 24H10V23.5L11.5357 21.9643C10.0993 21.7411 9 20.4989 9 19V12C9 9 12 8 16 8C20 8 23 9 23 12ZM11 15H15V11H11V15ZM17 11V15H21V11H17ZM14 18.5C14 19.3284 13.3284 20 12.5 20C11.6716 20 11 19.3284 11 18.5C11 17.6716 11.6716 17 12.5 17C13.3284 17 14 17.6716 14 18.5ZM19.5 20C20.3284 20 21 19.3284 21 18.5C21 17.6716 20.3284 17 19.5 17C18.6716 17 18 17.6716 18 18.5C18 19.3284 18.6716 20 19.5 20Z" fill="white" />\n</symbol>'}),Y=(B.a.add(U),U),Q=new P.a({id:"avatar-walk_d322b784e8eb3cd07a4ae64f7aed6974",use:"avatar-walk_d322b784e8eb3cd07a4ae64f7aed6974-usage",viewBox:"0 0 32 32",content:'<symbol viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="avatar-walk_d322b784e8eb3cd07a4ae64f7aed6974">\n<path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#21B930" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18.602 11.6629C18.2731 11.8827 17.8865 12 17.4909 12C16.9605 12 16.4518 11.7893 16.0767 11.4142C15.7016 11.0391 15.4909 10.5304 15.4909 10C15.4909 9.60444 15.6082 9.21776 15.828 8.88886C16.0477 8.55996 16.3601 8.30362 16.7255 8.15224C17.091 8.00087 17.4931 7.96126 17.8811 8.03843C18.269 8.1156 18.6254 8.30608 18.9051 8.58579C19.1848 8.86549 19.3753 9.22186 19.4525 9.60982C19.5296 9.99778 19.49 10.3999 19.3387 10.7654C19.1873 11.1308 18.9309 11.4432 18.602 11.6629ZM18.4807 15.3939C18.9048 15.7548 19.435 15.9676 19.9909 16C20.2561 16 20.5105 16.1053 20.698 16.2929C20.8855 16.4804 20.9909 16.7348 20.9909 17C20.9909 17.2652 20.8855 17.5195 20.698 17.7071C20.5105 17.8946 20.2561 18 19.9909 18C19.4289 18.0037 18.8722 17.8911 18.3558 17.6691C17.8395 17.447 17.3748 17.1205 16.9909 16.71L16.3009 18.29L18.6309 20.23C18.7438 20.324 18.8346 20.4417 18.8968 20.5748C18.959 20.7079 18.9911 20.8531 18.9909 21V23C18.9909 23.2652 18.8855 23.5195 18.698 23.7071C18.5105 23.8946 18.2561 24 17.9909 24C17.7257 24 17.4713 23.8946 17.2838 23.7071C17.0963 23.5195 16.9909 23.2652 16.9909 23V21.47L14.4109 19.35L12.9309 23.35C12.8381 23.5993 12.65 23.8015 12.4081 23.9121C12.1662 24.0228 11.8902 24.0328 11.6409 23.94C11.3916 23.8471 11.1894 23.6591 11.0787 23.4172C10.9681 23.1752 10.9581 22.8993 11.0509 22.65L13.8709 15L12.7509 15.32L11.9309 17.32C11.8328 17.5666 11.6407 17.7642 11.3969 17.8692C11.1531 17.9742 10.8776 17.9781 10.6309 17.88C10.3842 17.7818 10.1867 17.5898 10.0817 17.346C9.97664 17.1022 9.97277 16.8266 10.0709 16.58L11.0709 14.08C11.1282 13.9376 11.2176 13.8103 11.3321 13.708C11.4465 13.6056 11.583 13.5311 11.7309 13.49L15.0909 12.49H15.2109C15.3204 12.4755 15.4314 12.4755 15.5409 12.49H15.6409C16.0899 12.5025 16.5238 12.6546 16.8823 12.9253C17.2407 13.1959 17.5059 13.5716 17.6409 14C17.7618 14.5436 18.0566 15.0329 18.4807 15.3939Z" fill="white" />\n</symbol>'}),W=(B.a.add(Q),Q),J=new P.a({id:"icon-question-mark_236fd203a5fda0e1f7a71710266e99c7",use:"icon-question-mark_236fd203a5fda0e1f7a71710266e99c7-usage",viewBox:"0 0 16 16",content:'<symbol viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-question-mark_236fd203a5fda0e1f7a71710266e99c7">\n<g id="icon-question-mark_236fd203a5fda0e1f7a71710266e99c7_icons/16/icon-question-mark">\n<path id="icon-question-mark_236fd203a5fda0e1f7a71710266e99c7_Shape" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM9 8.80211C10.1218 8.35456 11 7.20899 11 6C11 4.44772 9.55228 3 8 3C6.44772 3 5 4.44772 5 6H7C7 5.55228 7.55228 5 8 5C8.44772 5 9 5.55228 9 6C9 6.44772 8.44772 7 8 7C7.44772 7 7 7.44772 7 8V10H9V8.80211ZM7 11V13H9V11H7Z" fill="#1D212A" fill-opacity="0.72" />\n</g>\n</symbol>'}),K=(B.a.add(J),J),G=n("qxfp"),X=n("mwIZ"),$=n.n(X),ee=n("QkVN"),te=n.n(ee),ne=n("QVEU"),ae=n.n(ne),re=n("TYy9"),ie=n.n(re),oe=n("7tbW"),le=n.n(oe),ce=n("NmtT"),se=n.n(ce);var de=function(e){var t=e.features,n=e.properties,a=ae()(t,(function(e){return e.id}));return te()({},e,{properties:{start_place:{data:a[n.start_place.$oid]},end_place:{data:a[n.end_place.$oid]}}})},ue=function(e){return $()(e,"properties.end_place.data.properties.display_name")},fe=function(e){var t=new Date(e.properties.start_fmt_time),n=new Date(e.properties.end_fmt_time);return se()(n,t)},pe=function(e){return le()(ie()(e.features.map((function(e){return e.features?e.features.map((function(e){return $()(e,"properties.sensed_mode")})):$()(e,"properties.sensed_mode")}))).map((function(e){return e?e.split("PredictedModeTypes.")[1]:null})).filter(Boolean))},me=function(e){return ie()(e.features.map((function(e){if(e.features)return e.features.map((function(e){return{mode:$()(e,"properties.sensed_mode").split("PredictedModeTypes.")[1],distance:$()(e,"properties.distance"),duration:$()(e,"properties.duration"),startDate:$()(e,"properties.start_fmt_time"),endDate:$()(e,"properties.end_fmt_time")}}))}))).filter(Boolean)},be=function(e){return new Date(e.properties.start_fmt_time)},_e=function(e){var t=e.trip,n=Object(l.useMemo)((function(){return function(e){var t=me(e);if(t.lengtth<1)return G.i;for(var n=t[0],a=1;a<t.length;a++)t[a].distance>n.distance&&(n=t[a]);return n.mode}(t)}),[t]);return c.a.createElement(D.a,{icon:function(){switch(n){case G.a:return R;case G.b:return H;case G.d:return z;case G.c:return A;case G.g:return F;case G.h:return Y;case G.j:return W;case G.i:default:return K}}(),width:"32",height:"32"})};_e.propTypes={trip:m.a.object.isRequired};var Ce=_e,je=n("4R65"),ve=n.n(je),xe=(n("bMVF"),n("hlFM")),we=n("SpDg"),he=n("JtXv"),ye=n.n(he),ge=n("aw/9"),Oe=n("JuPP"),Ee=n("LNIv"),Me=n("ehIU"),Le=n("X+Uv");function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke={height:500},Pe={radius:6,color:"#313640",weight:1,opacity:1,fillOpacity:.8},Ve={pointToLayer:function(e,t){return ve.a.circleMarker(t,De(De({},Pe),{},{fillColor:"end_place"==e.properties.feature_type?"#FF0017":"#00D35A"}))}},Be=function(e){var t=e.trip,n=Object(l.useRef)();return Object(l.useEffect)((function(){var e=function(e){var t=ve.a.map(e).setView([51.505,-.09],13);return ve.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t),t}(n.current),a=ve.a.geoJSON(t,Ve);e.fitBounds(a.getBounds()),e.addLayer(a)}),[t]),c.a.createElement("div",{style:ke,ref:n})},Se=function(){return c.a.createElement("span",{className:"u-mh-half"},"·")},He={marginRight:"0.3125rem"},Ze=function(e){var t,n,a,r=e.trip,i=e.loading,o=Object(d.e)().t,s=Object(l.useMemo)((function(){return r&&fe(r)}),[r]),u=Object(l.useMemo)((function(){return r&&pe(r)}),[r]);return c.a.createElement(Le.a,{spacing:"s"},c.a.createElement(Ee.c,null,c.a.createElement(Ee.b,null,c.a.createElement(D.a,{icon:Me.a,color:"var(--emerald)",className:"u-mr-half"})),c.a.createElement(Ee.a,null,i?c.a.createElement(we.a,{height:16,className:"u-pv-half"}):c.a.createElement(C.a,{variant:"body1"},function(e){return $()(e,"properties.start_place.data.properties.display_name")}(r)))),c.a.createElement(Ee.c,null,c.a.createElement(Ee.b,null,c.a.createElement(D.a,{icon:Me.a,color:"var(--pomegranate)",className:"u-mr-half"})),c.a.createElement(Ee.a,null,i?c.a.createElement(we.a,{height:20.5,className:"u-pv-half"}):c.a.createElement(C.a,{variant:"body1"},ue(r)))),c.a.createElement("div",null,i?null:c.a.createElement(C.a,{variant:"body2",color:"textSecondary"},c.a.createElement(D.a,{style:He,icon:ge.a,size:10}),s,c.a.createElement(Se,null),c.a.createElement(D.a,{style:He,icon:Oe.a,size:10}),(t=r.properties.distance,n="m",(a=t)>1e3&&(n="km",a/=1e3),"".concat(Math.round(a)," ").concat(n)),c.a.createElement(Se,null),u.map((function(e){return o("trips.modes.".concat(e))})).join(", "))))},Ae=Object(l.memo)(Ze),Te=function(e){var t=e.trip,n=e.loading,a=Object(d.e)().f;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"u-ph-1 u-mb-half"},c.a.createElement(C.a,{variant:"subtitle1"},function(e,t){var n=new Date,a=new Date(e.properties.start_fmt_time),r=new Date(e.properties.end_fmt_time);if(_()(a,r)){var i=ye()(a,n)?"":" YYYY";return"".concat(t(a,"ddd D MMM".concat(i,", HH:mm"))," - ").concat(t(r,"HH:mm"))}return"".concat(t(a,"D MMM YYYY, HH:mm")," - ").concat(t(r,"D MM YYYY, HH:mm"))}(t,a))),c.a.createElement(Ee.c,{className:"u-ph-1 u-mb-1"},c.a.createElement(Ee.a,null,c.a.createElement(xe.a,{ml:1,mr:1},n?c.a.createElement(Ae,{loading:!0}):c.a.createElement(Ae,{key:t.id,trip:t})))),n?c.a.createElement(we.a,{variant:"rect",width:"100%",height:300}):c.a.createElement(Be,{trip:t}))};Te.propTypes={trip:m.a.object.isRequired,loading:m.a.bool.isRequired};var ze=Te,Ie=function(e){var t=e.trip,n=e.withDateHeader,a=Object(d.e)(),r=a.f,i=a.t,o=Object(l.useState)(!1),s=w()(o,2),u=s[0],f=s[1],p=Object(l.useMemo)((function(){return ue(t)}),[t]),m=Object(l.useMemo)((function(){return fe(t)}),[t]),b=Object(l.useMemo)((function(){return pe(t)}),[t]),_=Object(l.useMemo)((function(){return function(e){var t="m",n=e.properties.distance;return n>1e3&&(t="km",n/=1e3),"".concat(Math.round(n)," ").concat(t)}(t)}),[t]),C=Object(l.useMemo)((function(){return r(be(t),"dddd DD MMMM")}),[r,t]),j=Object(l.useMemo)((function(){var e=b.map((function(e){return i("trips.modes.".concat(e))})).join(", ");return"".concat(m," · ").concat(e," · ").concat(_)}),[m,b,i,_]),v=Object(l.useCallback)((function(){f(!u)}),[f,u]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,{title:p,open:u,onClose:v,content:c.a.createElement(ze,{trip:t,loading:!1})}),n?c.a.createElement(E.a,null,C):null,c.a.createElement(y.a,{button:!0,onClick:v},c.a.createElement(O.a,null,c.a.createElement(Ce,{trip:t})),c.a.createElement(h.a,{primary:p,secondary:j}),c.a.createElement(M.a,null,c.a.createElement(D.a,{icon:L.a,color:"var(--secondaryTextColor)"}))),c.a.createElement(g.a,{variant:"inset"}))};Ie.propTypes={trip:m.a.object.isRequired,withDateHeader:m.a.bool.isRequired};var Re=Ie,qe=["data"],Fe=function(e){var t=e.account,n=Object(d.e)().t,a=Object(f.b)(t._id),r=Object(s.useQuery)(a.definition,a.options),i=r.data,p=o()(r,qe),m=Object(s.isQueryLoading)(p)&&!p.lastUpdate,b=Object(l.useMemo)((function(){return i&&i.length?(e=i,ie()(e.map((function(e){return e.series}))).map(de)):[];var e}),[i]);return m?c.a.createElement(u.a,{size:"xxlarge",className:"u-flex u-flex-justify-center"}):c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{variant:"h5",className:"u-mb-half"},n("trips.from")+" "+t.label),c.a.createElement(j.a,null,b.map((function(e,t){var n=0===t||!_()(be(e),be(b[t-1]));return c.a.createElement(Re,{key:t,trip:e,withDateHeader:n})})),p.hasMore&&c.a.createElement(v.a,{label:n("loadMore"),fetchMore:p.fetchMore})))};Fe.propTypes={account:m.a.object.isRequired};var Ue=Fe,Ye=n("6QpA"),Qe=["data"];function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?We(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(){var e=Object(d.e)().t,t=Object(l.useContext)(Ye.a).selectedAccount,n=Object(f.a)(),a=Object(s.useQuery)(n.definition,n.options),r=a.data,i=o()(a,Qe);return Object(s.isQueryLoading)(i)?c.a.createElement(u.a,{size:"xxlarge",className:"u-flex u-flex-justify-center"}):t||r.length>0?c.a.createElement(Ue,{account:t||Je(Je({},r[0]),{},{label:r[0].auth.login})}):c.a.createElement("p",null,e("account.notFound"))}},LiWt:function(e,t,n){"use strict";n.r(t);n("/8/d"),n("llna"),n("/kYV");var a=n("q1tI"),r=n.n(a),i=n("i8i4"),o=n("PRV4"),l=n("o8Rm"),c=n("SH7X"),s=n.n(c),d=n("buk/"),u=n("xIbs"),f=n("1I/2"),p=n("44Ds"),m=n.n(p),b=n("QCzH"),_=n("pZg0"),C=n.n(_),j={todos:{doctype:"io.mocks.todos",attributes:{},relationships:{}}},v=function(e,t){return/^\{\{\..*\}\}$/.test(e)?t:e},x=function(e){var t=e.app,a=e.locale,r={appIconDefault:n("ZAKO"),appNamePrefixDefault:C.a.name_prefix,appNameDefault:C.a.name,appLocaleDefault:"en"};return{appName:v(t.name,r.appNameDefault),appNamePrefix:v(t.prefix,r.appNamePrefixDefault),iconPath:v(t.icon,r.appIconDefault),lang:v(a,r.appLocaleDefault)}},w=m()((function(){var e=document.querySelector("[role=application]"),t=x(JSON.parse(e.dataset.cozy)),a=t.lang,r=t.appName,i=Object(b.a)(a,(function(e){return n("/KVF")("./".concat(e))})),o=function(){var e=document.querySelector("[role=application]"),t=JSON.parse(e.dataset.cozy),n=window.location.protocol,a="".concat(n,"//").concat(t.domain);return new s.a({uri:a,token:t.token,appMetadata:{slug:C.a.name,version:C.a.version},schema:j,store:!1})}();return function(e){var t=e.client,n=e.root,a=e.lang,r=e.appName,i=x(JSON.parse(n.dataset.cozy)),o=i.appNamePrefix,l=i.iconPath;cozy.bar.init({appName:r,appNamePrefix:o,cozyClient:t,iconPath:l,lang:a,replaceTitleOnMobile:!1})}({client:o,root:e,lang:a,appName:r}),{root:e,client:o,lang:a,polyglot:i}})),h=n("xYwX"),y=n("6QpA"),g=Object(o.a)({disableGlobal:!0});document.addEventListener("DOMContentLoaded",(function(){var e,t,n,a,o;e=w(),t=e.root,n=e.client,a=e.lang,o=e.polyglot,Object(i.render)(r.a.createElement(l.b,{generateClassName:g},r.a.createElement(c.CozyProvider,{client:n},r.a.createElement(y.b,null,r.a.createElement(d.b,{lang:a,polyglot:o},r.a.createElement(u.a,null,r.a.createElement(f.a,null,r.a.createElement(h.a,null))))))),t)}))},TT3P:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("xjMU"),o=n("w7SU"),l=n("buk/"),c=n("SH7X"),s=n("6QpA"),d=n("dN3h");t.a=function(){var e=Object(l.e)().t,t=Object(a.useContext)(s.a).setSelectedAccount,n=Object(d.a)(),u=Object(c.useQuery)(n.definition,n.options).data,f=Object(a.useMemo)((function(){return!u||u.length<1?[]:u.map((function(e){return{label:e.auth.login,_id:e._id}}))}),[u]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,e("devices.label")),r.a.createElement(i.a,{options:f,label:e("devices.label"),placeholder:e("devices.select"),onChange:function(e){return t(e)}}))}},ZAKO:function(e,t){e.exports="/img/icon.8bf777c1eccbdaed0fc4ef4d9bc4231b.svg"},dN3h:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var a=n("SH7X"),r=n.n(a),i=n("qxfp"),o=function(e){return{definition:Object(a.Q)(i.f).where({"cozyMetadata.sourceAccount":e}).sortBy([{"cozyMetadata.sourceAccount":"desc"},{startDate:"desc"}]).indexFields(["cozyMetadata.sourceAccount","startDate"]).limitBy(50),options:{as:"".concat(i.f,"/sourceAccount/").concat(e),fetchPolicy:r.a.fetchPolicies.olderThan(3e4)}}},l=function(){return{definition:Object(a.Q)(i.e).where({account_type:"tracemob"}).select(["auth.login"]).indexFields(["account_type"]).limitBy(100),options:{as:"".concat(i.e,"/account_type"),fetchPolicy:r.a.fetchPolicies.olderThan(3e4)}}}},fH6n:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("55Ip"),o=n("buk/"),l=n("9VR2"),c=n("fSd/"),s=n("rDu+"),d=n("Ratv");t.a=function(){var e=Object(o.e)().t;return r.a.createElement(l.a,null,r.a.createElement(c.e,null,r.a.createElement(c.b,null,r.a.createElement(i.b,{to:"/trips",className:c.c.className,activeClassName:c.c.activeClassName},r.a.createElement(c.a,{icon:s.a}),r.a.createElement(c.d,null,e("nav.trips")))),r.a.createElement(c.b,null,r.a.createElement(i.b,{to:"/settings",className:c.c.className,activeClassName:c.c.activeClassName},r.a.createElement(c.a,{icon:d.a}),r.a.createElement(c.d,null,e("nav.settings"))))))}},nw0P:function(e,t,n){var a={"./_lib/build_formatting_tokens_reg_exp/index.js":"kOWh","./ar/build_distance_in_words_locale/index.js":"XxX6","./ar/build_format_locale/index.js":"alis","./ar/index.js":"EDRf","./be/build_distance_in_words_locale/index.js":"LQ09","./be/build_format_locale/index.js":"kj7F","./be/index.js":"YEhR","./bg/build_distance_in_words_locale/index.js":"7K3h","./bg/build_format_locale/index.js":"RrdL","./bg/index.js":"isx8","./ca/build_distance_in_words_locale/index.js":"wqqj","./ca/build_format_locale/index.js":"qcV0","./ca/index.js":"Vwa+","./cs/build_distance_in_words_locale/index.js":"ZKDM","./cs/build_format_locale/index.js":"ipyF","./cs/index.js":"dvhP","./da/build_distance_in_words_locale/index.js":"2Mgc","./da/build_format_locale/index.js":"Gned","./da/index.js":"7ur/","./de/build_distance_in_words_locale/index.js":"5IWf","./de/build_format_locale/index.js":"THCn","./de/index.js":"bgw5","./el/build_distance_in_words_locale/index.js":"o/GB","./el/build_format_locale/index.js":"8T9h","./el/index.js":"dH0v","./en/build_distance_in_words_locale/index.js":"LZbM","./en/build_format_locale/index.js":"6DAA","./en/index.js":"Us+F","./eo/build_distance_in_words_locale/index.js":"qrnn","./eo/build_format_locale/index.js":"Bl15","./eo/index.js":"UB7v","./es/build_distance_in_words_locale/index.js":"GEfZ","./es/build_format_locale/index.js":"O+zC","./es/index.js":"/S0t","./fi/build_distance_in_words_locale/index.js":"VHtQ","./fi/build_format_locale/index.js":"Oydx","./fi/index.js":"ndVD","./fil/build_distance_in_words_locale/index.js":"uq4p","./fil/build_format_locale/index.js":"d7hw","./fil/index.js":"pNfm","./fr/build_distance_in_words_locale/index.js":"IzMR","./fr/build_format_locale/index.js":"I3Zg","./fr/index.js":"LKA2","./hr/build_distance_in_words_locale/index.js":"DPvn","./hr/build_format_locale/index.js":"puw3","./hr/index.js":"L9Jq","./hu/build_distance_in_words_locale/index.js":"w2RQ","./hu/build_format_locale/index.js":"/0iD","./hu/index.js":"Nm+E","./id/build_distance_in_words_locale/index.js":"JbvB","./id/build_format_locale/index.js":"0wlw","./id/index.js":"A6C3","./is/build_distance_in_words_locale/index.js":"qzMC","./is/build_format_locale/index.js":"S3yD","./is/index.js":"N4bE","./it/build_distance_in_words_locale/index.js":"MDEp","./it/build_format_locale/index.js":"aUJd","./it/index.js":"hmb4","./ja/build_distance_in_words_locale/index.js":"nNvt","./ja/build_format_locale/index.js":"buui","./ja/index.js":"uAXs","./ko/build_distance_in_words_locale/index.js":"oEw+","./ko/build_format_locale/index.js":"9SQf","./ko/index.js":"iW8+","./mk/build_distance_in_words_locale/index.js":"nmwZ","./mk/build_format_locale/index.js":"htxJ","./mk/index.js":"GzBU","./nb/build_distance_in_words_locale/index.js":"SL1f","./nb/build_format_locale/index.js":"CJ5F","./nb/index.js":"73vv","./nl/build_distance_in_words_locale/index.js":"Uyu0","./nl/build_format_locale/index.js":"doCD","./nl/index.js":"hCQt","./pl/build_distance_in_words_locale/index.js":"FUBD","./pl/build_format_locale/index.js":"nOYf","./pl/index.js":"B6yL","./pt/build_distance_in_words_locale/index.js":"aTPA","./pt/build_format_locale/index.js":"TTT0","./pt/index.js":"gdks","./ro/build_distance_in_words_locale/index.js":"gI+A","./ro/build_format_locale/index.js":"njjO","./ro/index.js":"r2yp","./ru/build_distance_in_words_locale/index.js":"KmPx","./ru/build_format_locale/index.js":"UUBw","./ru/index.js":"nz/o","./sk/build_distance_in_words_locale/index.js":"q2Bs","./sk/build_format_locale/index.js":"9sxn","./sk/index.js":"Wqan","./sl/build_distance_in_words_locale/index.js":"mlv2","./sl/build_format_locale/index.js":"vHkZ","./sl/index.js":"KYSo","./sr/build_distance_in_words_locale/index.js":"LlkS","./sr/build_format_locale/index.js":"RhjJ","./sr/index.js":"7mU3","./sv/build_distance_in_words_locale/index.js":"UNBN","./sv/build_format_locale/index.js":"zTNB","./sv/index.js":"hxgj","./th/build_distance_in_words_locale/index.js":"XAGa","./th/build_format_locale/index.js":"We2s","./th/index.js":"Pk+z","./tr/build_distance_in_words_locale/index.js":"aFZF","./tr/build_format_locale/index.js":"jh7A","./tr/index.js":"3ZWG","./zh_cn/build_distance_in_words_locale/index.js":"KdB7","./zh_cn/build_format_locale/index.js":"l4EP","./zh_cn/index.js":"8tMq","./zh_tw/build_distance_in_words_locale/index.js":"vyyr","./zh_tw/build_format_locale/index.js":"uYH7","./zh_tw/index.js":"QPlQ"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="nw0P"},pZg0:function(e,t){e.exports={name:"Coach CO2",slug:"coachco2",icon:"icon.svg",categories:[],version:"0.3.0",licence:"AGPL-3.0",editor:"Cozy Cloud",source:"https://github.com/cozy/coachCO2.git@build",developer:{name:"cozy",url:""},routes:{"/":{folder:"/",index:"index.html",public:!1}},permissions:{apps:{description:"Required by the cozy-bar to display the icons of the apps",type:"io.cozy.apps",verbs:["GET"]},settings:{description:"Required by the cozy-bar to display Claudy and know which applications are coming soon",type:"io.cozy.settings",verbs:["GET"]},accounts:{description:"Required to get konnector account",type:"io.cozy.accounts",verbs:["GET"]},"geojson-timeseries":{description:"Required to display geojson timeseries",type:"io.cozy.timeseries.geojson"}}}},qxfp:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"j",(function(){return d})),n.d(t,"i",(function(){return u})),n.d(t,"c",(function(){return f}));var a="io.cozy.timeseries.geojson",r="io.cozy.accounts",i="AIR_OR_HSR",o="BICYCLING",l="CAR",c="SUBWAY",s="TRAIN",d="WALKING",u="UNKNOWN",f="BUS"},xYwX:function(e,t,n){"use strict";(function(e){var a=n("q1tI"),r=n.n(a),i=n("55Ip"),o=n("Ty5D"),l=n("0cfB"),c=n("TSYQ"),s=n.n(c),d=n("SH7X"),u=n("jDpt"),f=n("le8I"),p=n("67rm"),m=n("buk/"),b=n("xIbs"),_=n("wvTK"),C=n("1I/2"),j=n("fH6n"),v=n("CTvO"),x=n("TT3P"),w=function(){var e=Object(m.e)().t,t=Object(d.useClient)(),n=Object(C.b)().isMobile,a=cozy.bar.BarCenter;return r.a.createElement(i.a,null,r.a.createElement(u.b,null,n&&r.a.createElement(a,null,r.a.createElement(b.a,null,r.a.createElement(_.a,null,t.appMetadata.slug))),r.a.createElement(j.a,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{className:s()({"u-mh-half u-mv-1":n,"u-mh-2 u-mv-1":!n})},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/trips",component:v.a}),r.a.createElement(o.b,{path:"/settings",component:x.a}),r.a.createElement(o.a,{from:"/",to:"/trips"}),r.a.createElement(o.a,{from:"*",to:"/trips"})))),r.a.createElement(p.a,{t:e}),r.a.createElement(f.a,null)))};t.a=Object(l.hot)(e)(r.a.memo(w))}).call(this,n("3UD+")(e))}});