const RTMClient = require('@slack/client').RTMClient;
const CLIENT_EVENTS = { RTM :{
    AUTHENTICATED : 'authenticated',
    MESSAGE : 'message'
}
};
let rtm=null;
let nlp = null;
const handleOnAuthenticated = (rtmStartData)=> {
    console.log(`logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to channel`)
};

const handleOnMessage = (message) =>{
    console.log(message);
    nlp.ask(message.text, (err,res)=>{
        if(err){
            console.log(err);
            return;
        }
        if(!res.intent)
        {
            return rtm.sendMessage('Sorry I did not understand...', message.channel);
        }
        else if(res.intent[0].value== 'time' && res.location){
            return rtm.sendMessage(`I dont yet know the time in ${res.location[0].value}`, message.channel);
        }
        else{
            console.log(res);
            return rtm.sendMessage(`Sorry, I dont know what you are talking about`,message.channel);
        }
        
    });
   
}

const addAuthenticatedHandler = (rtm,handler)=>{
    rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED,handler);
}

module.exports.init = (token,logLevel,nlpClient)=>{
rtm = new RTMClient(token,{logLevel:logLevel});
nlp = nlpClient;
addAuthenticatedHandler(rtm,handleOnAuthenticated);
rtm.on(CLIENT_EVENTS.RTM.MESSAGE,handleOnMessage);
return rtm;
}

module.exports.addAuthenticatedHandler = addAuthenticatedHandler;
// The client is initialized and then started to get an active connection to the platform
