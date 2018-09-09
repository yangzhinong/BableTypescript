import { setTimeout } from "timers";

var p = new Promise((r,j)=>{
    setTimeout(()=>{
        r("Hello1");
    },500);
});

var p2= new Promise((r,j)=>{
    setTimeout(()=>{
        r("Hello2");
    },1500)
});
//this is smaple
$(document).ready(function(){

    Promise.all([p,p2]).then((res)=>{
        $('body').append(JSON.stringify(res));
        console.dir(res);
    }).catch((error)=>{
        console.log(error);
    })
    
});
