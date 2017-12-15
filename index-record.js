#!/usr/bin/env node
'use strict';
const program = require('commander');
const fs = require('fs');

function record(filename){
    let params = [];
    if(!filename.endsWith(".txt"))
    {
      console.error("error: Enter name of file after record. Filename not supported");
      console.error("Filename must end with .txt");
      console.error("'Stats.exe' and 'Stats.exe help' list available subcommands and examples.")
      process.exit(1);
    }
    if(process.argv.length < 4)
    {
      console.log("error: Atleast one numeric value must be given to filename");
      process.exit(1);
    }
    for (let optionalIndex = 3; optionalIndex < process.argv.length; optionalIndex++ )
    {
        if(isNaN(process.argv[optionalIndex]))
        {
          console.error("error: values after filepath must be an integer");
          process.exit(1);
        }
        params.push(parseFloat(process.argv[optionalIndex]));
    }
    let appendInput = [...params]+',';
    fs.appendFile(filename,appendInput,function(err){
      if(err) throw err;
  }); 
    console.log('Saved value(s) to %s successfully!', filename);
}

program.arguments('<filename> [val]')
        .action(record)
        .parse(process.argv); 
  