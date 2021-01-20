const ballImg = document.querySelector("img");
const question = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");


const getAnswer= () => {

    const answers = 
    [
    "Trudno powiedzieć", 
    "Może tak, może nie, nie wiem", 
    "Zdecydowanie tak", 
    "Zdecydowanie nie", 
    "Lepiej nie pytaj", 
    "Tak!", 
    "Nie!", 
    "Chyba tak", 
    "Chyba nie", 
    "Możliwe", 
    "Niemożliwe", 
    "Prawdopobne",
    "Prędzej zginiesz",
    "Raczej nie",
    "Oczywiście",
    "Nigdy w życiu",
    "***** ***",
    "Tak samo jak 70mln Sasina"
    ];

    const randomIndex = Math.floor(Math.random() * (answers.length-1))
    
    answer.textContent = answers[randomIndex];

}


const checkInput = () => {

    if (question.value.length <= 0) {
        error.textContent = "Musisz zadać pytanie"
    } else if (question.value.charAt(question.value.length-1) != "?") {
        error.textContent = "Pytanie musi kończyć się na '?' "
    } else {
        getAnswer()}
        
    ballImg.classList.remove("shake-animation")
}




const ballAnimation = () => {
    error.textContent = "";
    answer.textContent = ""; 
    ballImg.classList.add("shake-animation");
    setTimeout(checkInput, 1000)

}


ballImg.addEventListener("click", ballAnimation)
