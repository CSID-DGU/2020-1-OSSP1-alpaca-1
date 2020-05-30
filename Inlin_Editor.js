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
    return admin.database().ref().once("value").then((snapshot)=>{
    	var ideaInfo=snapshot.child('answer/'+a+'/idea').val();
      	var codeInfo=snapshot.child('answer/'+a+'/need').val();
      	agent.add(ideaInfo+"이고 "+codeInfo+"를 추가하면 된다.");});
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
  agent.handleRequest(intentMap);
});
