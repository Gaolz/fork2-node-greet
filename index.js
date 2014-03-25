// file: index.js

module.exports = function greet(name,drunk){
  if(drunk) {
    return "hello " + name + ", what a sunny day!";
  }
  else {
    return "hello, " + name;
  }
}
