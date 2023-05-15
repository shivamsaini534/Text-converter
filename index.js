const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

const url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
  // output.innerText = "kjsadjsandkjn banana " + input.value;
  return url + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured ", error);
  alert("something wrong with server! try again after sometime ");
}
function clickHandler() {
  var inputText = input.value; // input

  //processing
  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
}

btn.addEventListener("click", clickHandler);
