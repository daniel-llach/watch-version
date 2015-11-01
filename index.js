var fs = require("fs-extra");

// watch tags directory for a new one
var path = './.git/refs/tags';
fs.watch(path, getNewVersion);

function getNewVersion(event,file){
  // check if start with a v
  if (file) {
    console.log("file: ", file);
    var substr = "v";
    if(file.indexOf(substr) > -1){
      // is a tag version name
      var newVersion = file.split("v");
      console.log("newVersion[1]: ", newVersion[1]);
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
  console.log("act!");
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
