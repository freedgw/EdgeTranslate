(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d="Google Tafsiri",e=this||self;function f(a,w){a=a.split(".");var b=e;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===w?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=w};var g={0:"Tafsiri",1:"Ghairi",2:"Funga",3:function(a){return"Google imetafsiri ukurasa huu kiotomati kwa:"+a},4:function(a){return"Tafsiri kwa: "+a},5:"Kosa: Seva haikuweza kukamilisha ombi lako. Jaribu tena baadaye.",6:"Jifunze mengi",7:function(a){return"Imedhaminiwa na "+a},8:d,9:"Utafsiri unaendelea",10:function(a){return"Tafsiri ukurasa huu kwa:"+(a+"kwa kutumia Tafsiri Google?")},11:function(a){return"Angalia ukurasa huu katika: "+a},12:"Onyesha halisi",13:"Yaliyomo ya jalada hili la kawaida yatatumwa kwa Google ili kutafsiriwa kwa kutumia muunganisho salama.",
14:"Yaliyomo ya ukurasa huu salama yatatumwa kwa Google ili kutafsiriwa kwa kutumia muunganisho salama.",15:"Yaliyomo ya ukurasa huu wa intraneti yatatumwa kwa Google ili kutafsiriwa kwa kutumia muunganisho salama.",16:"Teua Lugha",17:function(a){return"Zima utafsiri"+a},18:function(a){return"Zima ya: "+a},19:"Daima ficha",20:"Maandishi halisi:",21:"Changia utafsiri bora zaidi",22:"Changia",23:"Tafsiri zote",24:"Rejesha zote",25:"Ghairi zote",26:"Tafsiri sehemu kwa lugha yangu",27:function(a){return"Tafsiri kila kitu kwa "+
a},28:"Onyesha lugha halisi",29:"Chaguo",30:"Zima utafsiri wa lugha yangu",31:null,32:"Onyesha tafsiri nyingine",33:"Bonyeza maneno hapo juu ili kupata tafsiri mbadala",34:"Tumia",35:"Kokota na kitufe cha shift ili kupanga upya",36:"Bofya kwa tafsiri nyingine",37:"Shikilia kitufe cha shift, bofya, na ukokote maneno hapa juu ili upange upya.",38:"Asante kwa kuchangia pendekezo lako la utafsiri kwa Tafsiri Google",39:"Dhibiti tafsiri kwa wavuti huu",40:"Bonyeza neno kwa ajili ya tafsiri nyingine, au bofya mara mbili ili kuhariri moja kwa moja",
41:"Maandishi halisi",42:d,43:"Tafsiri",44:"Usahihisho wako umewasilishwa.",45:"Hitilafu: Lugha ya ukurasa wavuti haiwezi kutumiwa.",46:"Wijeti ya Kutafsiri Lugha"};var h=window.google&&google.translate&&google.translate._const;
if(h){var k;a:{for(var l=[],m=[""],n=0;n<m.length;++n){var p=m[n].split(","),q=p[0];if(q){var r=Number(p[1]);if(!(!r||.1<r||0>r)){var t=Number(p[2]),u=new Date,v=1E4*u.getFullYear()+100*(u.getMonth()+1)+u.getDate();!t||t<v||l.push({version:q,ratio:r,a:t})}}}var x=0,y=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),z=Number(y&&y[1])||Math.random();for(n=0;n<l.length;++n){var A=l[n];x+=A.ratio;if(1<=x)break;if(z<x){k=A.version;break a}}k="TE_20200210_00"}var B="/element/%s/e/js/element/element_main.js".replace("%s",
k);if("0"==k){var C=" element %s e js element element_main.js".split(" ");C[C.length-1]="main_sw.js";B=C.join("/").replace("%s",k)}if(h._cjlc)h._cjlc(this.EDGE_TRANSLATE_URL + "google/element_main.js");else{var D=this.EDGE_TRANSLATE_URL + "google/element_main.js",E=document.createElement("script");E.type="text/javascript";E.charset="UTF-8";E.src=D;var F=document.getElementsByTagName("head")[0];F||(F=document.body.parentNode.appendChild(document.createElement("head")));F.appendChild(E)}f("google.translate.m",g);f("google.translate.v",k)};}).call(window)