module.exports =function (itemList,threshold){

  let fruit = [];
  for(let k=0; k<itemList.length; k++)
  {
    if(itemList[k].qty > threshold)
    {
      	fruit.push(itemList[k]);
    }
  }
  return fruit.length;
};
