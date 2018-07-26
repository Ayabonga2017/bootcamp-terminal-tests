module.exports = function (registration){
  let regN=registration.split(", ");
  let regstartingwithCJ= [];

  for (let i=0;i<regN.length;i++){
    if(regN[i].startsWith("CJ")){
       regstartingwithCJ.push(regN[i])

  }
}
  return regstartingwithCJ.length;
};
