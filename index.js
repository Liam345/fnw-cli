#!/usr/bin/env node
'use strict';
const program = require('commander');
const fs = require('fs');
program
  .version('0.0.1')
  .description("An application to record numeric values in a text field and allow summary of values to be printed")
  .command('record <filename>','Appends numbers to a file')
  .command('summarise <filename>','Summarises numeric value of the file')
  program.on('--help', function(){
    console.log('\n');
    console.log('  Examples:');
    console.log('\n');
    console.log("    1)To record values in filename:");
    console.log("    Stats.exe record filename value [value 2, ... value n]");
    console.log('');
    console.log("    2)To summarise values in the file:");
    console.log("    Stats.exe summarise filename");
    console.log('\n');
  });
  
  program.parse(process.argv); 
  if (program.args.length === 0 || program.args.length === 1) program.help();
  
