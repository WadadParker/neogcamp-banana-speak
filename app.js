var button = document.querySelector("#btn");
var textArea = document.querySelector("#textArea");
var outputText = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/minion.json";

// function clickEventHandler(text) {
// var text= textArea.value;
// outputText.innerText= text;
// }
function callApi(text) {
    return url + "?" + "text=" + text
}


function clickEventHandler() {
    var text1 = textArea.value;

    fetch(callApi(text1))
        .then(res1 => res1.json())
        .then(res2 => {

            outputText.innerText = res2.contents.translated;
            console.log('Click is gettining listened');
        })
}

button.addEventListener("click", clickEventHandler);