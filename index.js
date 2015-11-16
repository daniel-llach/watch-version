#!/usr/bin/env node

var fs = require("fs-extra");
var colors = require('colors');

// Starting
startWatch();

// watch tags directory for a new one
var pathTags = '.git/refs/tags';
fs.watch( pathTags , getNewVersion);

function getNewVersion(event,file){
  // check if start with a v
  if (file) {
    var substr = "v";
    if(file.indexOf(substr) > -1){
      // is a tag version name
      var newVersion = file.split("v");
      // check if newVersion has numbers
      if(newVersion[1].match(/^[0-9.]+$/) != null){
         // contains a number, is a valid version tag
         readPackage(newVersion[1]);
      } else{
         // does not contain a number, do nothing
      }
    }else{
      // isn't a tag version name, do nothing
    }
  } else {
    console.log('filename not provided');
  }
}

function readPackage(version){
  var pkg = 'package.json';
  fs.readJson(pkg, function(err, pkgObj) {
    if(err) {
      console.log("Error: ", "Please check read file permissions, try: sudo chmod 777 package.json and fix npm permission too: https://docs.npmjs.com/getting-started/fixing-npm-permissions");
    }else{
      // set version
      pkgObj.version = version;
      // write new package object
      fs.writeJson('./package.json', pkgObj, function(err){
        if(err) {
          console.log("Error: ", "Please check write file permissions, try: sudo chmod 777 package.json and fix npm permission too: https://docs.npmjs.com/getting-started/fixing-npm-permissions");
        }else{
          console.log(pkgObj.name + " package.json update to version " + pkgObj.version.green);
        }
      });
    }
  });
}

function startWatch(){
  var pkg = 'package.json';
  fs.readJson(pkg, function(err, pkgObj) {
    if(err) {
      console.log("Error: ", "Please check read file permissions, try: sudo chmod 777 package.json and fix npm permission too: https://docs.npmjs.com/getting-started/fixing-npm-permissions");
    }else{
      console.log("Starting to watch ".gray + pkgObj.name.blue + " project...".gray);
    }
  });
}
