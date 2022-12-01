// put your globals here - hint: select elements from the HTML
const textInput = document.getElementById("text-area");
const wordcountBtn = document.getElementById("countBtn");
const wordCountResult = document.getElementById("wordCountInput");
const searchWord = document.getElementById("findWordInput");
const findBtn = document.getElementById("findBtn");
const numberWordsFound = document.getElementById("wordFoundInput");


countBtn.addEventListener("click", countWords);
findBtn.addEventListener("click", findWords);
// dont' forget to add event listeners to teh buttons

function countWords() {
  // your code here
  let listofWords = textInput.value.split(" ");
  const total = listofWords.length;
  wordCountResult.value = total;
  // call printData
}

function findWords() {
  // put your local variable for the empty array here
  // remainder of your code follows
  // call printData
  let listofWords = textInput.value.split(" ");
  let searchedWord = searchWord.value;
  count = 0;
    for (let i = 0; i < listofWords.length; i++) {
      if (listofWords[i] == searchedWord) {
        count = count + 1;
      }
    }
    numberWordsFound.value = count;
}

// change param1 and param2 to identifiers that make sense
function printData(param1, param2) {
  // your code here... one line!
}
