let EventEmitter = require('events').EventEmitter;

let getIteration= (maxIteration)=>{
    let e = new EventEmitter();
    process.nextTick(()=>{
        let cnt =0; 
        let t = setInterval(()=>{
            e.emit('item', ++cnt);
            if(cnt == maxIteration){
                e.emit('finish',cnt);
                clearInterval(t);
            }
            // if(cnt ==8){
            //     e.emit('error');
            //     clearInterval(t);
            // }
        },500);
    });
    return e;
}

var eveEmter = getIteration(10);

eveEmter.on('item',currCnt=>console.log(`Received ${currCnt}`));
eveEmter.on('finish', finalCnt=> console.log(`Finished ${finalCnt}`));
eveEmter.on('error',()=>console.log(`Count Exceeded 8`));
console.log('Program Ended');