// put your globals here - hint: select elements from the HTML
const textarea = document.querySelector(".form-control");
const countBtn = document.getElementById("countBtn");
const findWords = document.getElementById("findWordInput");
const wordCountInput = document.getElementById("wordCountInput");
const str = string(textarea);
const words = textarea.split(' ');


countBtn.addEventListener("click", countWords);
findWords.addEventListener("click",findWords);
// dont' forget to add event listeners to teh buttons

function countWords() {
  // your code here
  wordCountInput.value = (
    words.length);
  // call printData
}

function findWords() {
  // put your local variable for the empty array here
  // remainder of your code follows
  // call printData
}

// change param1 and param2 to identifiers that make sense
function printData(param1, param2) {
  // your code here... one line!
}






function countWords(){
  

}