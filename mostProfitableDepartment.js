module.exports = function(list){
  var departments = [];
  var salesNumbers =[];
  for(let p = 0; p< list.length; p++)
  {
    salesNumbers.push(list[p].sales);
    let max = Math.max.apply(null, salesNumbers);
    if(max === list[p].sales)
       {
         var department = list[p].department;
       }
  }
  return department;

}
