module.exports = function (day){
  if(day.startsWith("S")){
    return "weekend"
  }
  else{
    return"week"
  }
};
