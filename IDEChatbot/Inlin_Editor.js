const functions = require('firebase-functions');
const admin=require('firebase-admin');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: 'ws://idechatbot-xsrbmv.firebaseio.com/'
});
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  function handleSTL(agent){
  	const a=agent.parameters.STL;
    b=agent.parameters.function;
    if(b=="component"){b='component';}
    else{b='idea';}
    return admin.database().ref().once("value").then((snapshot)=>{
    	var STLInfo=snapshot.child('answer/'+a+'/'+b).val();
      	agent.add(STLInfo);});
  }
  
  function handlestaticallocation(agent){
  	const a=agent.parameters.staticallocation;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var allocationInfo=snapshot.child('answer/'+a+'/idea').val();
      	agent.add(allocationInfo);});
  }
  
  function handleabstraction(agent){
  	a=agent.parameters.abstraction;
    b=agent.parameters.use;
    if(b!="use"){b='idea';}
    return admin.database().ref().once("value").then((snapshot)=>{
    	var  abstractionInfo=snapshot.child('answer/'+a+'/'+b).val();
      	agent.add(abstractionInfo);});
  }
  
  function handlevector(agent){
  	const a=agent.parameters.vector;
    b=agent.parameters.function;
    
    if(b=="function"){b='function';}
    else{b='idea';}
    return admin.database().ref().once("value").then((snapshot)=>{
    	var  vectorInfo=snapshot.child('answer/'+a+'/'+b).val();
      	agent.add(vectorInfo); });
  }
  
  function handleiterator(agent){
  	const a=agent.parameters.iterator;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var iteratorInfo=snapshot.child('answer/'+a+'/idea').val();
      	agent.add(iteratorInfo);});
  }
  
  function handletemplate(agent){
  	const a=agent.parameters.template;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var templateInfo=snapshot.child('answer/'+a+'/idea').val();
      	agent.add(templateInfo);});
  }
  
  function handlegeneric(agent){
  	const a=agent.parameters.generic;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var ideaInfo=snapshot.child('answer/'+a+'/idea').val();
      	var codeInfo=snapshot.child('answer/'+a+'/code').val();
      	agent.add(ideaInfo+"이고 "+codeInfo+"를 추가하면 된다."); });
  }
  
  function handlemap(agent){
  	const a=agent.parameters.map;
     b=agent.parameters.function;
    if(b=="function"){b='function';} else{b='idea';}
    return admin.database().ref().once("value").then((snapshot)=>{
    	var  mapInfo=snapshot.child('answer/'+a+'/'+b).val();
      	agent.add(mapInfo); });
  }
  
  function handlestream(agent){
  	a=agent.parameters.stream;
    b=agent.parameters.iostream;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var streamInfo=snapshot.child('answer/'+a+'/idea').val();
      	var iostreamInfo=snapshot.child('answer/stream/'+b).val();
      	if(a=="stream") agent.add(streamInfo); 
      	else agent.add(iostreamInfo);});
  }
  
  function handleupcasting(agent){
  	const a=agent.parameters.upcasting;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var ideaInfo=snapshot.child('answer/'+a+'/idea').val();
      	agent.add(ideaInfo); });
  }

  function handleoverriding(agent){
	const a=agent.parameters.overriding;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var ideaInfo=snapshot.child('answer/'+a+'/idea').val();
      	agent.add(ideaInfo); });
  }

  function handlememoryallocation(agent){
	const a=agent.parameters.memoryallocation;
    const b=agent.parameters.careful;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var ideaInfo=snapshot.child('answer/'+a+'/'+b).val();
      	agent.add(ideaInfo); });
  }
  
  function handlemalloc(agent){
  	const a=agent.parameters.malloc;
    const b=agent.parameters.need;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var ideaInfo=snapshot.child('answer/'+a+'/'+b).val();
      	agent.add(ideaInfo); });
  }
  
  function handlereuse(agent){
  	const a=agent.parameters.reuse;
    const b=agent.parameters.how;
    const c=agent.parameters.mean;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var howInfo=snapshot.child('answer/'+a+'/'+b).val();
      	var meanInfo=snapshot.child('answer/'+a+'/'+c).val();
      	if(b=="how") agent.add(howInfo); else agent.add(meanInfo); });
  }
  
  function handledynamicbinding(agent){
  	const a=agent.parameters.dynamicbinding;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var ideaInfo=snapshot.child('answer/'+a+'/idea').val();
      	agent.add(ideaInfo); });
  }
  
   function handleoperatingoverloading(agent){
    const a=agent.parameters.operatingoverloading;
    const b=agent.parameters.exam;
    const c=agent.parameters.function;
    const d=agent.parameters.postfixoperator;
    const e=agent.parameters.prefixoperator;
    const f=agent.parameters.idea;
    return admin.database().ref().once("value").then((snapshot)=>{
      var ideaInfo=snapshot.child('answer/'+a+'/idea').val();
      var examInfo=snapshot.child('answer/'+a+'/exam').val();
      var postfixInfo=snapshot.child('answer/operatingoverloading/'+d).val();
      var prefixInfo=snapshot.child('answer/operatingoverloading/'+e).val();
      if(b=="exam")agent.add(examInfo);
      else if(d=="postfixoperator")
      {agent.add(postfixInfo);}
      else if(e=="prefixoperator")
      {agent.add(prefixInfo);}
      else{agent.add(ideaInfo);}
   });
  }
  
   function handlevariable(agent){
    const a=agent.parameters.Variable;
    const b=agent.parameters.type;
    const c=agent.parameters.default;
    const d=agent.parameters.advantage;
    const e=agent.parameters.exam;
    const f=agent.parameters.idea;
    return admin.database().ref().once("value").then((snapshot)=>{
      if(c=="default")
      {
        var ideaInfo=snapshot.child('answer/Variable/'+c+'/idea').val();
        var examInfo=snapshot.child('answer/Variable/'+c+'/exam').val();
        var adInfo=snapshot.child('answer/Variable/'+c+'/advantage').val();
        if(f=="idea") 
        { agent.add(ideaInfo);}
         else if(e=="exam")
         {agent.add(examInfo);}
        else{agent.add(adInfo);}
      }
      else if(b=="type")
      {
        var variabletype=snapshot.child('answer/'+a+'/type').val();
        agent.add(variabletype);
      }});
  }
  
  function handlethis(agent){
  	const a=agent.parameters.this;
    const b=agent.parameters.where;
    const c=agent.parameters.need;
    const d=agent.parameters.handling;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var ideaInfo=snapshot.child('answer/'+a+'/idea').val();
      	var whereInfo=snapshot.child('answer/'+a+'/'+b).val();
      	var needInfo=snapshot.child('answer/'+a+'/'+c).val();
      	var handlingInfo=snapshot.child('answer/'+a+'/'+d).val();
      	if(b=="where") agent.add(whereInfo);
      	else if(c=="need") agent.add(needInfo);
      	else if(d=="handling") agent.add(handlingInfo);
      	else agent.add(ideaInfo);
    });
  }
  
  function handlestring(agent){
    const a=agent.parameters.string;
    const b=agent.parameters.function;
    const c=agent.parameters.header;
    const d=agent.paramerters.gap;
    return admin.database().ref().once("value").then((snapshot)=>{
      var functionInfo=snapshot.child('answer/string/function').val();
      var headerInfo=snapshot.child('answer/string/header').val();
      var gapInfo=snapshot.child('answer/string/gap').val();
      if(b=="function")agent.add(functionInfo);
      else if(d=="gap")
      {
        agent.add(gapInfo);
      }
      else agent.add(headerInfo);});
  }
  
  function handledestructor(agent){
    const a=agent.parameters.destructor;
    const b=agent.parameters.call;
    const c=agent.parameters.dynamicobject;
    const d=agent.parameters.idea;
    const e=agent.parameters.order;
    const f=agent.parameters.redundancy;
    const g=agent.parameters.return;
    const h=agent.parameters.when;
    const i=agent.parameters.why;
     const j=agent.parameters.how;
    return admin.database().ref().once("value").then((snapshot)=>{
      var callInfo=snapshot.child('answer/'+a+'/'+b+'/'+j).val();
      var dynamicobjectInfo=snapshot.child('answer/destructor/'+c).val();
      var ideaInfo=snapshot.child('answer/'+a+'/'+d).val();
      var orderInfo=snapshot.child('answer/'+a+'/'+e).val();
      var redundancyInfo=snapshot.child('answer/'+a+'/'+f).val();
      var returnInfo=snapshot.child('answer/'+a+'/'+g).val();
      var whenInfo=snapshot.child('answer/'+a+'/'+h).val();
       var whyInfo=snapshot.child('answer/'+a+'/'+i).val();
      if(c=="dynamicobject")agent.add(dynamicobjectInfo);
      else if(e=="order")agent.add(orderInfo);
      else if(f=="redundancy")agent.add(redundancyInfo);
      else if(g=="return")agent.add(returnInfo);
      else if(h=="when")agent.add(whenInfo);
      else if(i=="why")agent.add(whyInfo);
      else if(j=="how")agent.add(callInfo);
      else agent.add(ideaInfo);
      });
  }
    function handlefriend(agent){
    const a=agent.parameters.friend;
    const b=agent.parameters.how;
    const c=agent.parameters.idea;
    const d=agent.parameters.location;
    const e=agent.parameters.possible;
    const f=agent.parameters.when;
    return admin.database().ref().once("value").then((snapshot)=>{
      var howInfo=snapshot.child('answer/'+a+'/'+b).val();
       var ideaInfo=snapshot.child('answer/'+a+'/'+c).val();
       var locationInfo=snapshot.child('answer/'+a+'/'+d).val();
       var possibleInfo=snapshot.child('answer/'+a+'/'+e).val();
       var whenInfo=snapshot.child('answer/'+a+'/'+f).val();
      if(b=="how")agent.add(howInfo);
      else if(d=="location")agent.add(locationInfo);
      else if(e=="possible")agent.add(possibleInfo);
      else if(f=="when")agent.add(whenInfo);
      else agent.add(ideaInfo);
      });
  }
  
  function handlec(agent){
  	const a=agent.parameters.c;
    const b=agent.parameters.similar;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var ideaInfo=snapshot.child('answer/c++/similar').val();
      	agent.add(ideaInfo); });
  }
  function handlearray(agent){
  	const a=agent.parameters.object;
    const b=agent.parameters.array;
    const c=agent.parameters.initialization;
    const d=agent.parameters.destructor;
    const e=agent.parameters.declare;
    const f=agent.parameters.relation;
    const g=agent.parameters.why;
    const h=agent.parameters.error;
    return admin.database().ref().once("value").then((snapshot)=>{
      	var destructInfo=snapshot.child('answer/array/destruct').val();
      	var relationInfo=snapshot.child('answer/array/object/constructor/relation').val();
      	var whyInfo=snapshot.child('answer/array/object/compileerror/why').val();
      	var declare=snapshot.child('answer/array/object/declare').val();
      	var initInfo=snapshot.child('answer/array/object/initialization/exam').val();
    	if(a=="object"){
        	if(g=="why") agent.add(whyInfo);
          	else if(f=="relation") agent.add(relationInfo);
          	else if(e=="declare") agent.add(declare);
          	else agent.add(initInfo);
        }
      else{
      	agent.add(destructInfo);
      }
    });
  }
  
  function handlecall(agent){
  	const a=agent.parameters.call;
    const b=agent.parameters.value;
    const c=agent.parameters.reference;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var referenceInfo=snapshot.child('answer/call/reference/idea').val();
      	var valueInfo=snapshot.child('answer/call/value/idea').val();
        if(c=="reference"){
        	agent.add(referenceInfo);
        }
      	else{
        	agent.add(valueInfo);
        }
      	});
  }
  function handleclass(agent){
  	const a=agent.parameters.class;
    const b=agent.parameters.how;
    const c=agent.parameters.mean;
    const d=agent.parameters.why;
    const e=agent.parameters.abstractclass;
    const f=agent.parameters.idea;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var howInfo=snapshot.child('answer/class/how').val();
      	var meanInfo=snapshot.child('answer/class/mean').val();
        var whyInfo=snapshot.child('answer/class/why').val();
        var absideaInfo=snapshot.child('answer/class/abstractclass/idea').val();
        if(b=="how"){agent.add(howInfo);}
      	else if(f=="idea"){agent.add(absideaInfo);}
       else if(d=="why"){agent.add(whyInfo);}
      else{agent.add(meanInfo);}
      	});
  }
  
  function handleconstructor(agent){
  	const a=agent.parameters.cstructor;
    const b=agent.parameters.order;
    const c=agent.parameters.why;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var orderInfo=snapshot.child('answer/constructor/order').val();
      	var whyInfo=snapshot.child('answer/constructor/why').val();
      	if(b=="order"){agent.add(orderInfo);}
      	else if(c=="why"){agent.add(whyInfo);}
    });
  }
  
  function handlecopy(agent){
   	const a=agent.parameters.copy;
    const b=agent.parameters.type;
    const c=agent.parameters.deep;
    const d=agent.parameters.shallow;
    const e=agent.parameters.how;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var deepInfo=snapshot.child('answer/copy/deep/how').val();
      	var shallowInfo=snapshot.child('answer/copy/shallow/how').val();
      	var typeInfo=snapshot.child('answer/copy/type').val();
      	if(c=="deep"&&e=="how"){agent.add(deepInfo);}
      	else if(d=="shallow"&&e=="how"){agent.add(shallowInfo);}
      	else {agent.add(typeInfo);}
    });
  }
  
  function handlecopyconstructor(agent){
  	const a=agent.parameters.copyconstructor;
    return admin.database().ref().once("value").then((snapshot)=>{
    	var ideaInfo=snapshot.child('answer/copyconstructor/idea');
      	agent.add(ideaInfo);
    });
  }
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('STLIntent',handleSTL);
  intentMap.set('abstractionIntent',handleabstraction);
  intentMap.set('vectorIntent',handlevector);
  intentMap.set('iteratorIntent',handleiterator);
  intentMap.set('genericIntent',handlegeneric);
  intentMap.set('mapIntent',handlemap);
  intentMap.set('staticallocationIntent',handlestaticallocation);
  intentMap.set('streamIntent',handlestream);
  intentMap.set('templateIntent',handletemplate);
  intentMap.set('upcastingIntent',handleupcasting);
  intentMap.set('overridingIntent',handleoverriding);
  intentMap.set('memoryallocationIntent',handlememoryallocation);
  intentMap.set('mallocIntent',handlemalloc);
  intentMap.set('reuseIntent',handlereuse);
  intentMap.set('dynamicbindingIntent',handledynamicbinding);
  intentMap.set('operatingoverloadingIntent',handleoperatingoverloading);
  intentMap.set('variableIntent',handlevariable);
  intentMap.set('thisIntent',handlethis);
  intentMap.set('stringIntent',handlestring);
  intentMap.set('destructorIntent',handledestructor);
  intentMap.set('arrayIntent',handlearray);
  intentMap.set('c++Intent',handlec);
  intentMap.set('callIntent',handlecall);
  intentMap.set('friendIntent',handlefriend);
  intentMap.set('classIntent',handleclass);
  intentMap.set('constructorIntent',handleconstructor);
  intentMap.set('copyIntent',handlecopy);
  intentMap.set('copyconstructorIntent',handlecopyconstructor);
  agent.handleRequest(intentMap);
});
