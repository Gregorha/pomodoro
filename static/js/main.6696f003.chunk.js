(this["webpackJsonpredux-react-project"]=this["webpackJsonpredux-react-project"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/inflicted.2d55e753.mp3"},32:function(e,t,a){e.exports=a(49)},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(18),r=a.n(o),l=(a(37),a(1)),i=a(2),c=a(7),m=a(3),u=a(4),d=a(8),h=a(11),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.labelId,a="session-label"===t?this.props.sessionLength:"break-label"===t?this.props.breakLength:this.props.longBreakLength;return s.a.createElement("div",{className:"container mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"break-input-label",id:t},this.props.label)),s.a.createElement("div",{className:"col settings-inputs"},s.a.createElement("div",{className:"row"},s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-outline-light btn-settings",id:this.props.increment,onClick:function(){return e.props.addTime(t)}},s.a.createElement("i",{className:"fas fa-angle-up"}))),s.a.createElement("div",{className:"break-input",id:this.props.lengthId},a),s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-outline-light btn-settings",id:this.props.decrement,onClick:function(){return e.props.subTime(t)}},s.a.createElement("i",{className:"fas fa-angle-down"})))))))}}]),a}(s.a.Component);var b=Object(h.b)((function(e){return{sessionLength:e.pomodoro.sessionLength,breakLength:e.pomodoro.breakLength,longBreakLength:e.pomodoro.longBreakLength}}),{addTime:function(e){return{type:"ADD_TIME",label:e}},subTime:function(e){return{type:"SUB_TIME",label:e}}})(p),g=[[{quote:"Vamos Come\xe7ar?"},{quote:"Pronto para mais uma sess\xe3o de foco total?"},{quote:"Se arrume na cadeira, bloqueie o celular e vamos come\xe7ar!"},{quote:"J\xe1 fez seu ciclo pomodoro de hoje? Bora!"}],[{quote:"Bota esse celular de lado e estuda meu filho!"},{quote:"Ta me lendo por qu\xea? \xc9 hora de estudarrr!!!"},{quote:"Momento de foco total agora!"},{quote:"Bora bora, hora de estudar, s\xf3 para quando ouvir o alarme!"}],[{quote:"Hora de levantar e alongar!"},{quote:"Que tal fazer algum exerc\xedcio nessa pausa, uma caminhada j\xe1 ajuda!"},{quote:"Aproveita esse tempinho pra pegar uma \xe1gua, hidrate-se!"},{quote:"Ta bom, agora pode usar um pouco o celular!"}],[{quote:"Agora sim, hora de dar uma boa descansada!"},{quote:"Parab\xe9ns pelo esfor\xe7o!! Hora de dar uma limpada no c\xe9rebro"},{quote:"Chegou a t\xe3o esperada pausa longa! Uma medi\xe7\xe3o pode ser \xf3timo!"},{quote:"Hora de ver aquele v\xeddeo no youtube, ou dar uma olhada no instagram!"}]],f=(a(43),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=g[this.props.sessionIndex][this.props.index].quote;return s.a.createElement("div",{className:"random-phrase"},s.a.createElement("p",{id:"text"},e))}}]),a}(s.a.Component)),v=a(20).DateTime,E=[{date:v.local().set({hours:16,minutes:30,seconds:0,milliseconds:0}),label:"Aula"},{date:v.local().set({hours:19,minutes:20,seconds:0,milliseconds:0}),label:"Forms"},{date:v.local().set({hours:19,minutes:40,seconds:0,milliseconds:0}),label:"Fechamento"}],L=a(29),k=a.n(L),O=(a(44),a(31)),j=a(20).DateTime,T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={sessionLength:25,breakLength:5,longBreakLength:20,timerLabel:"Sess\xe3o de Estudo",timeLeft:d.a.fromObject({minutes:25}),sessions:0,classDay:j.local().setLocale("pt-br").weekdayLong,nextImportantEvent:E[0].date,calcMessage:"Vimos que voc\xea est\xe1 em hor\xe1rio de aula, gostaria de calcular automaticamente os pr\xf3ximos intervalos?",index:Math.floor(4*Math.random()),sessionIndex:0,startStop:"reset",startPause:"pause"},n.nextQuote=n.nextQuote.bind(Object(c.a)(n)),n.reset=n.reset.bind(Object(c.a)(n)),n.startTimer=n.startTimer.bind(Object(c.a)(n)),n.timer=n.timer.bind(Object(c.a)(n)),n.handleStart=n.handleStart.bind(Object(c.a)(n)),n.calculateBreaks=n.calculateBreaks.bind(Object(c.a)(n)),n.handleTrybeMessages=n.handleTrybeMessages.bind(Object(c.a)(n)),n.nextEventHandler=n.nextEventHandler.bind(Object(c.a)(n)),n.setAudioRef=function(e){n.audioRef=e},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.checkDateTime()&&this.nextEventHandler()}},{key:"handleTrybeMessages",value:function(){var e=j.local().hour,t=j.local().minute;this.setState({trybeMessages:19===e&&t<20?"J\xe1 est\xe1 quase no hor\xe1rio de preenchimento do forms, aproveite esse tempo para preencher com calma":19===e&&t>=20&&t<40?"Est\xe1 no hor\xe1rio de preencher o forms, hora de dar uma descansada, enviar seus feedbacks e se preparar para o fechamento":19===e&&t>=40?"Voc\xea deveria estar no fechamento do dia, corre pro zoom!!!":"Voc\xea est\xe1 pr\xf3ximo de um momento s\xedncrono, hora de finalizar suas tarefas e se preparar, corre pro zoom!!!"})}},{key:"timer",value:function(e){var t=j.local().set({milliseconds:0}),a=e.plus({seconds:1});this.checkDateTime()&&this.nextEventHandler(),this.props.handleTimer(e),document.title=this.props.timeLeft.toFormat("mm ss").replace(/\s/,":"),+a===+t&&4!==this.props.sessions?(this.props.handleNewSession(!1),this.handleTrybeMessages(),this.audioRef.play(),this.startTimer()):+a===+t&&4===this.props.sessions&&(this.props.handleNewSession(!0),this.audioRef.play(),this.startTimer())}},{key:"handleStart",value:function(){this.props.toggleTimer(),this.startTimer()}},{key:"startTimer",value:function(){var e=this;if(this.timerID&&this.props.running)clearInterval(this.timerID);else{var t=j.local().set({milliseconds:0}).plus(this.props.timeLeft);this.timerID=setInterval((function(){e.timer(t)}),1e3),this.nextQuote()}}},{key:"reset",value:function(){this.props.resetTimer(),this.audioRef.pause(),this.audioRef.currentTime=0,clearInterval(this.timerID),this.nextQuote()}},{key:"checkDateTime",value:function(){var e=j.local().weekday,t=j.local().hour;return e>=1&&e<=5&&(t>=14&&t<20)}},{key:"calculateBreaks",value:function(){var e=this.state.nextImportantEvent.diffNow(["minutes"]).toObject().minutes,t=e/4;if(this.checkDateTime()){if(t<20)for(var a=3;t<20;a--)t=e/a;this.state.nextImportantEvent.diffNow(["minutes"]).toObject().minutes<15?this.handleTrybeMessages():this.setState({sessionLength:Math.floor(t/6*5),breakLength:Math.floor(t/6),timeLeft:d.a.fromObject({minutes:Math.floor(t/6*5)}),calcMessage:"Pronto para come\xe7ar a sess\xe3o de estudos!"})}}},{key:"nextEventHandler",value:function(){var e=this.state.nextImportantEvent,t=j.local(),a=j.local().hour,n=j.local().minute,s=e.hour,o=e.minute;if(a>s||a===s&&n>=o)for(var r=0;r<E.length-1;r++)E[r].date<t&&this.setState({nextImportantEvent:E[r+1].date})}},{key:"nextQuote",value:function(){this.setState((function(e){return{index:Math.floor(4*Math.random()),sessionIndex:"reset"===e.startStop?0:"Sess\xe3o de Estudo"===e.timerLabel?1:"Pausa Curta"===e.timerLabel?2:3}}))}},{key:"render",value:function(){var e,t=this;this.checkDateTime()&&(e=s.a.createElement("div",{className:"auto-calculate-wrapper"},s.a.createElement("button",{className:"classInfo",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},s.a.createElement("i",{className:"fa fa-info-circle","aria-hidden":"true"})),s.a.createElement("div",{className:"collapse",id:"collapseExample"},s.a.createElement("div",{className:"card card-body"},s.a.createElement("h3",null,this.state.calcMessage),s.a.createElement("button",{className:"btn-calculate",onClick:this.calculateBreaks},"Calcular")))));var a=["start_pause","reset"].map((function(e){return s.a.createElement(O.a,{variant:"outline-light",key:e,className:"reset"===e&&t.props.reset?"btn-start btn-outline-light start-stop hide":"reset"===e?"btn-start reset btn-outline-light start-stop":"start_pause"===e&&t.props.reset?"btn-start btn-outline-light start-stop":"btn-start btn-outline-light start-stop start-pause",onClick:"start_pause"===e?function(){t.handleStart()}:function(){t.reset()}},"reset"===e?"Zerar":"start_pause"===e&&t.props.running?"Pausar":"Come\xe7ar")}));return s.a.createElement("div",{className:"pomodoro-global-container container"},s.a.createElement("div",null,s.a.createElement("div",{id:"time-left",className:"clock-wrapper pt-5"},s.a.createElement("div",{className:"rounded-circle timer flex-clock"},s.a.createElement("h1",{className:"clock "},this.props.timeLeft.toFormat("mm ss").replace(/\s/,":")),s.a.createElement("div",{className:"time-label",id:"timer-label"},this.props.timerLabel))),s.a.createElement("div",{className:"container phrase-wrap"},s.a.createElement("div",{className:"text-center"},s.a.createElement(f,{label:this.state.timerLabel,onOff:this.state.startStop,index:this.state.index,sessionIndex:this.state.sessionIndex}))),s.a.createElement("div",{className:"container start-stop-wrapper mt-3"},a)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"container mt-4 col-12 col-md-4 ml-auto"},s.a.createElement("h2",{className:"text-center text-head"},"Config"),s.a.createElement("div",{className:"mt-4"},e,s.a.createElement(b,{length:this.state.breakLength,label:"Pausa Curta",labelId:"break-label",increment:"break-increment",decrement:"break-decrement",lengthId:"break-length",handleTimer:this.handleTimer,timeLeft:this.timeLeft}),s.a.createElement(b,{length:this.state.longBreakLength,label:"Pausa Longa",labelId:"long-break-label",increment:"long-break-increment",decrement:"long-break-decrement",lengthId:"long-break-length",handleTimer:this.handleTimer,timeLeft:this.timeLeft}),s.a.createElement(b,{length:this.state.sessionLength,label:"Sess\xe3o de Estudo",labelId:"session-label",increment:"session-increment",decrement:"session-decrement",lengthId:"session-length",handleTimer:this.handleTimer,timeLeft:this.timeLeft})))),s.a.createElement("audio",{id:"beep",preload:"auto",ref:this.setAudioRef,src:k.a}))}}]),a}(s.a.Component),y=Object(h.b)((function(e){return{running:e.pomodoro.running,reset:e.pomodoro.reseted,sessionLength:e.pomodoro.sessionLength,breakLength:e.pomodoro.breakLength,longBreakLength:e.pomodoro.longBreakLength,timeLeft:e.pomodoro.timeLeft,sessions:e.pomodoro.sessions,timerLabel:e.pomodoro.timerLabel,startPauseLabel:e.pomodoro.startPauseLabel}}),{toggleTimer:function(){return{type:"START_PAUSE"}},resetTimer:function(e){return{type:"RESET"}},handleTimer:function(e){return{type:"TIMER",end:e}},handleNewSession:function(e){return{type:"NEW_SESSION",isLongBreak:e}}})(T),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={textInput:"",textList:[]},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({textInput:e.target.value})}},{key:"handleSubmit",value:function(e){this.props.addTodo(this.state.textInput,Math.random().toString(36).substr(2,9)),e.preventDefault(),this.setState({textInput:""})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group row"},s.a.createElement("div",{className:"col-8 col-sm-9 col-md-10"},s.a.createElement("input",{value:this.state.textInput,className:"form-control",type:"text",placeholder:"tarefa",onChange:this.handleChange})),s.a.createElement("div",{className:"col-2"},s.a.createElement("button",{className:"btn-outline-success1 btn-settings ml-auto",type:"input"},"Adicionar")))))}}]),a}(s.a.Component),N=Object(h.b)(null,{addTodo:function(e,t){return{type:"ADD_TODO",id:t,text:e,complete:!1}}})(x),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.complete&&this.props.selected?"complete selected":this.props.complete?"complete":this.props.selected?"selected":"",onDoubleClick:this.props.check},s.a.createElement("div",{className:"row"},this.props.text,s.a.createElement("div",{className:"task-interactive ml-auto"},s.a.createElement("span",{onClick:this.props.check},this.props.complete?s.a.createElement("svg",{className:"bi bi-check",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{fillRule:"evenodd",d:"M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z",clipRule:"evenodd"})):s.a.createElement("svg",{className:"bi bi-square",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z",clipRule:"evenodd"}))),s.a.createElement("span",{onClick:this.props.remove},s.a.createElement("svg",{className:"bi bi-x",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z",clipRule:"evenodd"}),s.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z",clipRule:"evenodd"}))))))}}]),a}(s.a.Component),w=(a(45),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).updateDisplayStatus=n.updateDisplayStatus.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"updateDisplayStatus",value:function(e){this.props.updateDisplay(e)}},{key:"render",value:function(){var e=this,t=("all"===this.props.display?this.props.todo:"completed"===this.props.display?this.props.todo.filter((function(e){return e.complete})):this.props.todo.filter((function(e){return!e.complete}))).map((function(t){return s.a.createElement(S,{key:t.id,text:t.text,check:function(){e.props.toggleComplete(t.id)},remove:function(){e.props.removeTodo(t.id)},complete:t.complete,selected:t.selected})})),a=[{id:"all",label:"Todos"},{id:"completed",label:"Feitos"},{id:"active",label:"Ativos"}].map((function(t){return s.a.createElement("button",{key:t.id,className:e.props.display===t.id?"btn-outline-success1 btn-settings selected":"btn-outline-success1 btn-settings",onClick:function(){e.props.updateDisplay(t.id)}},t.label)}));return s.a.createElement("div",{className:"container todo-wrapper mt-3"},s.a.createElement("div",{className:"text-center pt-3 header1"},s.a.createElement("h2",null,"Lista de Tarefas")),s.a.createElement(N,{className:"mt-3"}),s.a.createElement("div",{className:"list-nav-buttons"},a),s.a.createElement("div",{className:"list container mt-3"},t))}}]),a}(s.a.Component)),I=Object(h.b)((function(e){return{todo:e.todoList.todos,display:e.todoList.display}}),{removeTodo:function(e){return{type:"REMOVE_TODO",id:e}},toggleComplete:function(e){return{type:"TOGGLE_TODO",id:e}},updateDisplay:function(e){return{type:"UPDATE_DISPLAY",text:e}}})(w);a(46);var D=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"global-container"},s.a.createElement(y,null),s.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47),a(27),a(48);var C=a(15),B=a(6),M=a(9),_={display:"all",todos:[]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var a=t.id,n=t.text,s=t.complete;return Object(M.a)({},e,{todos:[].concat(Object(B.a)(e.todos),[{id:a,text:n,complete:s}])});case"REMOVE_TODO":var o=e.todos.findIndex((function(e){return e.id===t.id}));return Object(M.a)({},e,{todos:[].concat(Object(B.a)(e.todos.slice(0,o)),Object(B.a)(e.todos.slice(o+1,e.todos.length)))});case"TOGGLE_TODO":var r=e.todos.findIndex((function(e){return e.id===t.id})),l=Object(B.a)(e.todos);return l[r].complete=!l[r].complete,Object(M.a)({},e,{todos:Object(B.a)(l)});case"UPDATE_DISPLAY":return Object(M.a)({},e,{display:t.text});default:return e}},R=a(20).DateTime,q={sessionLength:25,breakLength:5,longBreakLength:20,timerLabel:"Sess\xe3o de Estudo",timeLeft:d.a.fromObject({minutes:25}),running:!1,reseted:!0,sessions:0,startPauseLabel:"Come\xe7ar"},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TIME":return Object(M.a)({},e,{sessionLength:"session-label"===t.label&&e.sessionLength<60?e.sessionLength+1:e.sessionLength,breakLength:"break-label"===t.label&&e.breakLength<60?e.breakLength+1:e.breakLength,longBreakLength:"long-break-label"===t.label&&e.longBreakLength<60?e.longBreakLength+1:e.longBreakLength,timeLeft:"break-label"===t.label?d.a.fromObject({minutes:e.breakLength+1}):"long-break-label"===t.label?d.a.fromObject({minutes:e.longBreakLength+1}):d.a.fromObject({minutes:e.sessionLength+1}),timerLabel:"session-label"===t.label?"Sess\xe3o de Estudo":"break-label"===t.label?"Pausa Curta":"Pausa Longa"});case"SUB_TIME":return Object(M.a)({},e,{sessionLength:"session-label"===t.label&&e.sessionLength>1?e.sessionLength-1:e.sessionLength,breakLength:"break-label"===t.label&&e.breakLength>1?e.breakLength-1:e.breakLength,longBreakLength:"long-break-label"===t.label&&e.longBreakLength>1?e.longBreakLength-1:e.longBreakLength,timeLeft:"break-label"===t.label&&e.breakLength>1?d.a.fromObject({minutes:e.breakLength-1}):"long-break-label"===t.label&&e.breakLength>1?d.a.fromObject({minutes:e.longBreakLength-1}):"session-label"===t.label&&e.sessionLength>1?d.a.fromObject({minutes:e.sessionLength-1}):e.timeLeft,timerLabel:"session-label"===t.label?"Sess\xe3o de Estudo":"break-label"===t.label?"Pausa Curta":"Pausa Longa"});case"START_PAUSE":return Object(M.a)({},e,{running:!e.running,reseted:e.reseted&&!1,startPauseLabel:"Come\xe7ar"===e.startPauseLabel?"Pausar":"Come\xe7ar"});case"RESET":return Object(M.a)({},e,{running:!1,reseted:!0,sessionLength:25,breakLength:5,longBreakLength:20,timerLabel:"Sess\xe3o de Estudo",timeLeft:d.a.fromObject({minutes:25}),startPauseLabel:"Come\xe7ar"});case"TIMER":var a=R.local().set({milliseconds:0});return Object(M.a)({},e,{timeLeft:d.a.fromObject(t.end.diff(a,["minutes","seconds"]).toObject())});case"NEW_SESSION":return t.isLongBreak?Object(M.a)({},e,{timerLabel:"Pausa Longa",timeLeft:d.a.fromObject({minutes:e.longBreakLength}),sessions:0}):Object(M.a)({},e,{timerLabel:"Sess\xe3o de Estudo"===e.timerLabel?"Pausa Curta":"Sess\xe3o de Estudo",timeLeft:"Sess\xe3o de Estudo"===e.timerLabel?d.a.fromObject({minutes:e.breakLength}):d.a.fromObject({minutes:e.sessionLength}),sessions:e.sessions+1});default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Something":return t.filter;default:return e}},H=Object(C.b)({todoList:P,pomodoro:A,phrases:z}),V=Object(C.c)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(s.a.createElement(h.a,{store:V},s.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.6696f003.chunk.js.map