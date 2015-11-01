var fs = require("fs-extra");
// var path = require("path");

var path = './.git/refs/tags';

// watch tags directory for a new one
fs.watch(path, getNewVersion);

function getNewVersion(event,file){
  console.log('event is: ' + event);
  if (file) {
    var newVersion = file.split("v");
    readPackage(newVersion[1]);
  } else {
    console.log('filename not provided');
  }
}

function readPackage(version){

  fs.readJson('./package.json', function(err, packageObj) {
    if(err) {
      console.log("Error: ", "Please check read file permissions. Try: sudo chmod 777 package.json");
    }else{
      // set version
      packageObj.version = version;
      // write new package object
      fs.writeJson('./package.json', packageObj, function(err){
        if(err) {
          console.log("Error: ", "Please check write file permissions. Try: sudo chmod 777 package.json");
        }else{
          console.log(packageObj.name + " update to version " + packageObj.version);
        }
      });
    }
  });


}
