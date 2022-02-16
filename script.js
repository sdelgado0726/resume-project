let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.adviceslip.com/advice', true);
myRequest.send();

myRequest.onreadystatechange = function(){
    if (this.readyState == 4) {
        if (this.status == 200) {
            let myResponse = JSON.parse(this.responseText);

            let myDiv = document.getElementById('adviceWrapper');
            
            let adviceTitle = document.createElement('h4');
            adviceTitle.innerHTML = "Advice for the Day";

            let randomAdvice = document.createElement('p');
            randomAdvice.innerHTML = myResponse.slip.advice;

            myDiv.appendChild(adviceTitle);
            myDiv.appendChild(randomAdvice);

        } else{
            console.log("Error processing Request")
        }
    }
}


const increaseText = document.getElementById('increaseText');

increaseText.addEventListener('mouseenter', e => {
  increaseText.style.fontSize = 35 + "pt";
  
});

increaseText.addEventListener('mouseleave', e => {
  increaseText.style.fontSize = 30 + "pt";
  
});

const increaseText2 = document.getElementById('increaseText2');

increaseText2.addEventListener('mouseenter', e => {
    increaseText2.style.fontSize = 20 + "pt";

});

increaseText2.addEventListener('mouseleave', e => {
    increaseText2.style.fontSize = 15 + "pt";

});






