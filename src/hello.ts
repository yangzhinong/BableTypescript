import { setTimeout } from "timers";

var p = new Promise((r,j)=>{
    setTimeout(()=>{
        r("Hello");
    },2000);
});

$(document).ready(function(){
    p.then((r:string)=>{
        $('body').append(r);
    });
})
