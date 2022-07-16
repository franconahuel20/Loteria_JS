let cartonA = [12,20,40,71,83,1,29,53,65,84,13,36,46,66,72];
let cartonB = [15,23,53,71,83,28,37,58,68,85,4,16,39,49,73];

/*let bolillero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
    20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
    40,41,42,43,44,45,46,47,48,49,
    50,51,52,53,54,55,56,57,58,59,
    60,61,62,63,64,65,66,67,68,69,
    70,71,72,73,74,75,76,77,78,79,
    80,81,82,83,84,85,86,87,88,89,90];*/

let countRed = 0;
let countGreen = 0;

let valueA = 0;
let valueB =  90;

const resultMessage =
  document.getElementById('result');

const random =
  document.getElementById('randomNumber');

    document.querySelectorAll('.squaresRed')
    .forEach((element,i) => {
        
    for(let j=0;j<cartonA.length;j++){
        if(j===i)
        {
            element = cartonA[j];
        }
    }
    });

    document.querySelectorAll('.squaresGreen')
    .forEach((element,i) => {
        
    for(let j=0;j<cartonB.length;j++){
        if(j===i)
        {
            element = cartonB[j];
        }
    }
    });

    
    document.querySelectorAll('.squaresRed')
    .forEach((element,i) => {
        element.addEventListener('click',()=>{
          console.log(element);
          element.innerHTML = 'X';
          countRed++;
          if(countRed==15){
            resultMessage.innerHTML =
            'The winner is the Player Red';
          }
        }
        );
    });

    document.querySelectorAll('.squaresGreen')
    .forEach((element,i) => {
        element.addEventListener('click',()=>{
            console.log(element);
            element.innerHTML = 'X';
            countGreen++;
            if(countGreen==15){
              resultMessage.innerHTML =
              'The winner is the Player Green';
            }
        }
        );
    });



function randomValue()
{
    let value = Math.round(Math.random()*(valueB - valueA));
    console.log(value);
    random.innerHTML = value;
    /*
    document.querySelectorAll('.squaresGreen')
    .forEach((element,i) => {
        element.addEventListener('',()=>{
            if(element==value){
            element.innerHTML =
              'X';
            }
        }
        );
    });*/
}

function reset()
{
  document.querySelectorAll('.squaresRed')
  .forEach((element,i) => {
      
  for(let j=0;j<cartonA.length;j++){
      if(j===i)
      {
          element.innerHTML= cartonA[j];
      }
  }
  });

  document.querySelectorAll('.squaresGreen')
  .forEach((element,i) => {
      
  for(let j=0;j<cartonB.length;j++){
      if(j===i)
      {
        element.innerHTML= cartonB[j];
      }
  }
  });

  resultMessage.innerHTML = "";
  random.innerHTML = 0;
}