"use strict"
const Data= require("../utils/GetTestData.js")
let fs= require('fs')
//import fs from 'fs'
 const getData=(()=>{

     
    let a = Data.getTestData()
    let jsonData= JSON.stringify(a);
    fs.writeFile("\\cypress\\e2e\\helper\\utils\\TestData.json",jsonData,function(err){
        if(err)
        {
            console.log(err);
        }
    });
  });



module.exports = {
    getData
};
