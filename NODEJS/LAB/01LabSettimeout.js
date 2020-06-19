setTimeout(()=>{console.log('a');
    setTimeout(()=>{console.log('b');
        setTimeout(()=>{console.log('c');
            setTimeout(()=>{console.log('d');
            },1000)
        },1000)
    },1000)
},1000)