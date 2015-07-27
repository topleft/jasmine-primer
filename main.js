exports.outputHelloWorld = function () {
  return "Hello, world!";
};

exports.calculate = function (amt){

  if (amt > 30) {
    var d = (amt - 30)*0.03;
    return d+2.2;
  }
  else if (amt > 20) {
    c = (amt - 20)*0.05;
    return c+1.7;
  }
  else if (amt > 10) {
    b = (amt - 10)*0.07;
    return b+1;
  }
  else {
    return amt*0.10;
  }

};

exports.findLeap = function (year){
  if (year %4 === 0 && year %100 === 0){
    return false;
  }
  else if (year % 4 === 0) {
    return true;
  }
};