const express  = require('express');
const app = express();


//service provider
function evenService() {
    let arr = [];
    let len = 0;
    let num = Math.random()*100;
    num = Math.floor(num);
    console.log(num);
    if(num%2==0){
        for (let i = num; len < 10; len++) {
            arr.push(i);
            i = i+2;
        }
        console.log(arr);
    }
    else{
        num = num+1;
        for (let i = num; len < 10; len++) {
            arr.push(i);
            i = i+2;
        }
        console.log(arr);
    }
    return arr;

}

module.exports =  evenService;