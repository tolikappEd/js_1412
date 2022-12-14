const date_n = new Date();
let dtStr_n = date_n.getHours()+":"+date_n.getMinutes()+":"+date_n.getSeconds()+" _ "+date_n.getDay()+"."+date_n.getMonth()+"."+date_n.getFullYear();
document.getElementById('Date_Sh').innerHTML = dtStr_n;
  
function subShow(){
  if(document.getElementById('inpName').value!=""&&document.getElementById('inpMessage').value!=""){

  const date = new Date();
  let dtStr = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" _ "+date.getDay()+"."+date.getMonth()+"."+date.getFullYear();
  document.getElementById('Date_Sh').innerHTML = dtStr;
  document.getElementById('Name_Sh').innerHTML  = document.getElementById('inpName').value;
  document.getElementById('inpName').value = "";
  
  document.getElementById('Text_Sh').innerHTML  = document.getElementById('inpMessage').value;
  document.getElementById('inpMessage').value = "";
  }else{
    alert("You should put some more information !");
  }
}
