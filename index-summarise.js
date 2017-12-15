#!/usr/bin/env node
'use strict';
const program = require('commander');
let Table = require('cli-table');
const fs = require('fs');
let outputTable = new Table({
    colWidths: [50, 50]
});

function summarise(filename){
    fs.readFile(filename,'utf-8',function(err,text){
        if (err){
            console.log("error: File does not exist!!");
            process.exit(1);
        }
        text = text.substring(0,text.length-1);
        let numbers = text.split(',');
        let sum = numbers.reduce((a,b)=>(parseFloat(a)+parseFloat(b)));
        let avg =sum/numbers.length;
        outputTable.push(['# of entries',numbers.length]);
        outputTable.push(['Min value',Math.min(...numbers)]);
        outputTable.push(['Max value',Math.max(...numbers)]);
        outputTable.push(['Avg value',avg]);
        console.log(outputTable.toString());
        
    });    
}
program.action(summarise)
        .parse(process.argv);