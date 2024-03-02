const statusElement = document.getElementById("status");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const audio = document.getElementById("audio");

let api = "https://api.dictionaryapi.dev/api/v2/entries/en/"

btn.onclick = async function () {
    if (input.value != '') {
        try {
            let word = input.value;
            console.log('getting data....');
            statusElement.innerText = 'please wait! getting data...'
            statusElement.classList.add("m-4");
            let res = await fetch(api + `${word}`)
            let data = await res.json();
            let resAudio = data[0].phonetics[0].audio;
            resAudio = new Audio(resAudio).play();
            statusElement.innerText = ''
            statusElement.classList.remove("m-4");
        } catch (error) {
            console.log(error);
        }

    } else {
        alert("enter a word!!")
    }
}


