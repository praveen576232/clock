setInterval(setClock,1000)

const second = document.getElementById('second-hand');
const minute = document.getElementById('minute-hand');
const hour = document.getElementById('hour-hand')

function setClock(){
    const curentDate = new  Date();
  const secondRatio =  curentDate.getSeconds()/60 ;
 const minuteRatio =   (secondRatio+ curentDate.getMinutes())/60 ;
    const hourRatio=( minuteRatio+curentDate.getHours())/12;
    setRotation(second,secondRatio);
    setRotation(minute,minuteRatio);
    setRotation(hour,hourRatio)
}

function setRotation(element,raoationRatio)  {
   
    element.style.setProperty('--rotation',raoationRatio * 360)
}

setClock()