const express = require('express');
const app = express();

//service provider
function evenService() {
    let arr = [];
    let num = Math.random()*100;
    num = Math.floor(num);
    console.log(num);
    if(num%2==0){
        for (let i = num; i < 10; i += 2) {
            arr.push(i);
        }
    }
    else{
        num = num+1;
        for (let i = num; i < 10; i += 2) {
            arr.push(i);
        }
    }
    return arr;
}

module.exports = evenService;