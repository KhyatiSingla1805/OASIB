let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let answer = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('the tx of button is', buttonText);

        if(buttonText == "C")
        {
            answer = "";
            screen.value = "";
        }
        else if(buttonText == "="){
            answer = eval(answer);
            screen.value = answer;
        }
        else{
            answer += buttonText;
            screen.value = answer; 
        }
        
    })

    
}

