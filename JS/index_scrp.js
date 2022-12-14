
let uval = 0;
document.getElementById('inp3.1').value = "Val 1";
document.getElementById('inp3.2').value = "Val 2";

function task1(){
  let inpStuff = document.getElementById('inp1');
  inpStuff.value = uval;
  uval+=1;

}

function task2(){
 
  document.getElementById('task2_out').innerHTML = document.getElementById('inp2').value;
}

function task3(){
  let inp1 = document.getElementById('inp3.1').value;
  let inp2 = document.getElementById('inp3.2').value;
  document.getElementById('inp3.1').value = inp2;
  document.getElementById('inp3.2').value = inp1;

}