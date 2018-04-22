const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function(context) {
  console.log(`New directory: ${process.cwd()}`);
  execSync("ng build --prod --base-href .",{stdio:[0,1,2]});
};