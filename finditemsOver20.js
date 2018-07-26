module.exports = function (list){
  let fruits = [];
  for(let i=0; i<list.length; i++)
  {
    if(list[i].qty > 20 )
    {
      	fruits.push(list[i]);
    }
  }
  return fruits.length;
}
