'use strict';

class ServiceRegistry {
    constructor(){
        this._services =[];
        this._timestamp = 30;
    }

    add(intent,ip,port){
        const key = intent+ip+port;
        if(!this._services[key]){
            this._services[key] = {};
            this._services[key].timestamp = Math.floor(new Date() /1000);
            this._services[key].ip = ip;
            this._services[key].intent = intent;
            this._services[key].port = port;
            this._cleanup();
            console.log(`Added service for intent ${intent} on ${ip}:${port}`);
            return;
        }
        this._services[key].timestamp = Math.floor(new Date() /1000);
        console.log(`Updated service for intent ${intent} on ${ip}:${port}`);
        this._cleanup();
    }

    remove(intent,ip,port){
        const key = intent+ip+port;
        delete this._services[key];
    }

    get(intent){
        this._cleanup();
        for(let key in this._services){
            if(this._services[key].intent == intent)
                return this._services[key];
        }
    }

    _cleanup(){
        const now = Math.floor(new Date() / 1000);
        for(let key in this._services){
            if(this._services[key].timestamp+ this._timestamp < now){

                console.log(`Removed service for intent ${this._services[key].inetent}`);
                delete this._services[key];

            }
        }
    }
}

module.exports = ServiceRegistry;