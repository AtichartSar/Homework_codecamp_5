const EventEmitter = require('events')
const em1 = new EventEmitter();
const em2 = new EventEmitter();

setInterval(() => em1.emit('once',{id:1,txt:'once sec'}),1000);
setInterval(() => em1.emit('two'),2000);
    
em1.on('once',(e)=>{
    console.log(`once Event 1.. ${e.id}`);
})
em1.on('once',(e)=>{
    console.log(`once Event 2.. ${e.id}`);
})
em2.on('two',()=>{
    console.log('From em2 two Event..');
})