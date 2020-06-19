const Em1 =require('./02EventEmit')
const em1 = new Em1();

//send event 
em1.emit1();

//listenner event from send
em1.on('onesec',(e)=>{
    console.log('test',e);
    
})
