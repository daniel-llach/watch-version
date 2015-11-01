var fs = require("fs-extra");

// Asynchronous read
fs.readJson('./package.json', function(err, packageObj) {
  if(err) {
    console.log("Error: ", "Please check read file permissions. Try: sudo chmod 777 package.json");
  }else{
    // get version
    var version = '0.0.2';
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
