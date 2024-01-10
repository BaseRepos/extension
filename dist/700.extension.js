"use strict";exports.id=700,exports.ids=[700],exports.modules={2700:(t,e,n)=>{n.d(e,{diagram:()=>C});var i=n(6804),s=n(7724),r=n(6500),a=n(2281),o=n(7201),c=(n(7484),n(7967),n(2424),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[6,8,10,11,12,14,16,17,20,21],n=[1,9],i=[1,10],s=[1,11],r=[1,12],a=[1,13],o=[1,16],c=[1,17],l={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:function(t,e,n,i,s,r,a){var o=r.length-1;switch(s){case 1:return r[o-1];case 2:case 6:case 7:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 8:i.getCommonDb().setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 9:this.$=r[o].trim(),i.getCommonDb().setAccTitle(this.$);break;case 10:case 11:this.$=r[o].trim(),i.getCommonDb().setAccDescription(this.$);break;case 12:i.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 15:i.addTask(r[o],0,""),this.$=r[o];break;case 16:i.addEvent(r[o].substr(2)),this.$=r[o]}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:n,12:i,14:s,16:r,17:a,18:14,19:15,20:o,21:c},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:18,11:n,12:i,14:s,16:r,17:a,18:14,19:15,20:o,21:c},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,19]},{15:[1,20]},t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),t(e,[2,4]),t(e,[2,9]),t(e,[2,10])],defaultActions:{},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=[0],n=[],i=[null],s=[],r=this.table,a="",o=0,c=0,l=s.slice.call(arguments,1),h=Object.create(this.lexer),d={yy:{}};for(var u in this.yy)Object.prototype.hasOwnProperty.call(this.yy,u)&&(d.yy[u]=this.yy[u]);h.setInput(t,d.yy),d.yy.lexer=h,d.yy.parser=this,void 0===h.yylloc&&(h.yylloc={});var p=h.yylloc;s.push(p);var g=h.options&&h.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var y,f,m,_,b,x,k,v,S,w={};;){if(f=e[e.length-1],this.defaultActions[f]?m=this.defaultActions[f]:(null==y&&(S=void 0,"number"!=typeof(S=n.pop()||h.lex()||1)&&(S instanceof Array&&(S=(n=S).pop()),S=this.symbols_[S]||S),y=S),m=r[f]&&r[f][y]),void 0===m||!m.length||!m[0]){var $;for(b in v=[],r[f])this.terminals_[b]&&b>2&&v.push("'"+this.terminals_[b]+"'");$=h.showPosition?"Parse error on line "+(o+1)+":\n"+h.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[y]||y)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==y?"end of input":"'"+(this.terminals_[y]||y)+"'"),this.parseError($,{text:h.match,token:this.terminals_[y]||y,line:h.yylineno,loc:p,expected:v})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+y);switch(m[0]){case 1:e.push(y),i.push(h.yytext),s.push(h.yylloc),e.push(m[1]),y=null,c=h.yyleng,a=h.yytext,o=h.yylineno,p=h.yylloc;break;case 2:if(x=this.productions_[m[1]][1],w.$=i[i.length-x],w._$={first_line:s[s.length-(x||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(x||1)].first_column,last_column:s[s.length-1].last_column},g&&(w._$.range=[s[s.length-(x||1)].range[0],s[s.length-1].range[1]]),void 0!==(_=this.performAction.apply(w,[a,c,o,d.yy,m[1],i,s].concat(l))))return _;x&&(e=e.slice(0,-1*x*2),i=i.slice(0,-1*x),s=s.slice(0,-1*x)),e.push(this.productions_[m[1]][0]),i.push(w.$),s.push(w._$),k=r[e[e.length-2]][e[e.length-1]],e.push(k);break;case 3:return!0}}return!0}},h={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 21;case 16:return 20;case 17:return 6;case 18:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:!0}}};function d(){this.yy={}}return l.lexer=h,d.prototype=l,l.Parser=d,new d}());c.parser=c;const l=c;let h="",d=0;const u=[],p=[],g=[],y=()=>i.K,f=function(){u.length=0,p.length=0,h="",g.length=0,(0,i.t)()},m=function(t){h=t,u.push(t)},_=function(){return u},b=function(){let t=S(),e=0;for(;!t&&e<100;)t=S(),e++;return p.push(...g),p},x=function(t,e,n){const i={id:d++,section:h,type:h,task:t,score:e||0,events:n?[n]:[]};g.push(i)},k=function(t){g.find((t=>t.id===d-1)).events.push(t)},v=function(t){const e={section:h,type:h,description:t,task:t,classes:[]};p.push(e)},S=function(){let t=!0;for(const[e,n]of g.entries())g[e].processed,t=t&&n.processed;return t},w={clear:f,getCommonDb:y,addSection:m,getSections:_,getTasks:b,addTask:x,addTaskOrg:v,addEvent:k},$=Object.freeze(Object.defineProperty({__proto__:null,addEvent:k,addSection:m,addTask:x,addTaskOrg:v,clear:f,default:w,getCommonDb:y,getSections:_,getTasks:b},Symbol.toStringTag,{value:"Module"}));function E(t,e){t.each((function(){var t,n=(0,s.Ys)(this),i=n.text().split(/(\s+|<br>)/).reverse(),r=[],a=n.attr("y"),o=parseFloat(n.attr("dy")),c=n.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",o+"em");for(let s=0;s<i.length;s++)t=i[i.length-1-s],r.push(t),c.text(r.join(" ").trim()),(c.node().getComputedTextLength()>e||"<br>"===t)&&(r.pop(),c.text(r.join(" ").trim()),r="<br>"===t?[""]:[t],c=n.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))}))}const I=function(t,e,n,i){const s=n%12-1,r=t.append("g");e.section=s,r.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+s);const a=r.append("g"),o=r.append("g"),c=o.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(E,e.width).node().getBBox(),l=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return e.height=c.height+1.1*l*.5+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,o.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),function(t,e,n){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${10-e.height} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)}(a,e,s),e},T=function(t,e,n){const i=t.append("g"),s=i.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(E,e.width).node().getBBox(),r=n.fontSize&&n.fontSize.replace?n.fontSize.replace("px",""):n.fontSize;return i.remove(),s.height+1.1*r*.5+e.padding},L=function(t,e,n,s,r,a,o,c,l,h,d){var u;for(const c of e){const e={descr:c.task,section:n,number:n,width:150,padding:20,maxHeight:a};i.l.debug("taskNode",e);const p=t.append("g").attr("class","taskWrapper"),g=I(p,e,n,o).height;if(i.l.debug("taskHeight after draw",g),p.attr("transform",`translate(${s}, ${r})`),a=Math.max(a,g),c.events){const e=t.append("g").attr("class","lineWrapper");let i=a;r+=100,i+=A(t,c.events,n,s,r,o),r-=100,e.append("line").attr("x1",s+95).attr("y1",r+a).attr("x2",s+95).attr("y2",r+a+(d?a:h)+l+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s+=200,d&&!(null==(u=o.timeline)?void 0:u.disableMulticolor)&&n++}r-=10},A=function(t,e,n,s,r,a){let o=0;const c=r;r+=100;for(const c of e){const e={descr:c,section:n,number:n,width:150,padding:20,maxHeight:50};i.l.debug("eventNode",e);const l=t.append("g").attr("class","eventWrapper"),h=I(l,e,n,a).height;o+=h,l.attr("transform",`translate(${s}, ${r})`),r=r+10+h}return r=c,o},C={db:$,renderer:{setConf:()=>{},draw:function(t,e,n,r){var a,o;const c=(0,i.c)(),l=c.leftMargin??50;i.l.debug("timeline",r.db);const h=c.securityLevel;let d;"sandbox"===h&&(d=(0,s.Ys)("#i"+e));const u=("sandbox"===h?(0,s.Ys)(d.nodes()[0].contentDocument.body):(0,s.Ys)("body")).select("#"+e);u.append("g");const p=r.db.getTasks(),g=r.db.getCommonDb().getDiagramTitle();i.l.debug("task",p),u.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z");const y=r.db.getSections();i.l.debug("sections",y);let f=0,m=0,_=0,b=0,x=50+l,k=50;b=50;let v=0,S=!0;y.forEach((function(t){const e=T(u,{number:v,descr:t,section:v,width:150,padding:20,maxHeight:f},c);i.l.debug("sectionHeight before draw",e),f=Math.max(f,e+20)}));let w=0,$=0;i.l.debug("tasks.length",p.length);for(const[t,e]of p.entries()){const n={number:t,descr:e,section:e.section,width:150,padding:20,maxHeight:m},s=T(u,n,c);i.l.debug("taskHeight before draw",s),m=Math.max(m,s+20),w=Math.max(w,e.events.length);let r=0;for(let t=0;t<e.events.length;t++){const n={descr:e.events[t],section:e.section,number:e.section,width:150,padding:20,maxHeight:50};r+=T(u,n,c)}$=Math.max($,r)}i.l.debug("maxSectionHeight before draw",f),i.l.debug("maxTaskHeight before draw",m),y&&y.length>0?y.forEach((t=>{const e=p.filter((e=>e.section===t)),n={number:v,descr:t,section:v,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:f};i.l.debug("sectionNode",n);const s=u.append("g"),r=I(s,n,v,c);i.l.debug("sectionNode output",r),s.attr("transform",`translate(${x}, 50)`),k+=f+50,e.length>0&&L(u,e,v,x,k,m,c,0,$,f,!1),x+=200*Math.max(e.length,1),k=50,v++})):(S=!1,L(u,p,v,x,k,m,c,0,$,f,!0));const E=u.node().getBBox();i.l.debug("bounds",E),g&&u.append("text").text(g).attr("x",E.width/2-l).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),_=S?f+m+150:m+100,u.append("g").attr("class","lineWrapper").append("line").attr("x1",l).attr("y1",_).attr("x2",E.width+3*l).attr("y2",_).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,i.o)(void 0,u,(null==(a=c.timeline)?void 0:a.padding)??50,(null==(o=c.timeline)?void 0:o.useMaxWidth)??!1)}},parser:l,styles:t=>`\n  .edge {\n    stroke-width: 3;\n  }\n  ${(t=>{let e="";for(let e=0;e<t.THEME_COLOR_LIMIT;e++)t["lineColor"+e]=t["lineColor"+e]||t["cScaleInv"+e],(0,r.Z)(t["lineColor"+e])?t["lineColor"+e]=(0,a.Z)(t["lineColor"+e],20):t["lineColor"+e]=(0,o.Z)(t["lineColor"+e],20);for(let n=0;n<t.THEME_COLOR_LIMIT;n++){const i=""+(17-3*n);e+=`\n    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} path  {\n      fill: ${t["cScale"+n]};\n    }\n    .section-${n-1} text {\n     fill: ${t["cScaleLabel"+n]};\n    }\n    .node-icon-${n-1} {\n      font-size: 40px;\n      color: ${t["cScaleLabel"+n]};\n    }\n    .section-edge-${n-1}{\n      stroke: ${t["cScale"+n]};\n    }\n    .edge-depth-${n-1}{\n      stroke-width: ${i};\n    }\n    .section-${n-1} line {\n      stroke: ${t["cScaleInv"+n]} ;\n      stroke-width: 3;\n    }\n\n    .lineWrapper line{\n      stroke: ${t["cScaleLabel"+n]} ;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    `}return e})(t)}\n  .section-root rect, .section-root path, .section-root circle  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .eventWrapper  {\n   filter: brightness(120%);\n  }\n`}}};