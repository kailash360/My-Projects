console.log("JavaScript file attatched succesfully")
var wordField = document.getElementById("word")
var btn = document.getElementById("btn")
var wordContainer = document.getElementById("wordContainer")

//String modification function to change first letter into uppercase
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

btn.addEventListener('click', () => {
    //Fetching the data using URL
    console.log("Fetching URL")
    url = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/' + wordField.value;
    fetch(url).then((response) => {
        return response.json()
    }).then((myJson) => {
        console.log(myJson)

        //Staring to extract objects
        let meanings = [myJson[0].meanings][0]
        let phonetics = [myJson[0].phonetics][0]
        console.log(meanings)
        console.log(phonetics)

        //Clear the display container
        wordContainer.innerHTML = ""

        let numberOfPartsOfSpeech = meanings.length

        //Extracting data of phonetics
        let pronounciation = phonetics[0].text

        //Making the card containing the word which was searched
        let card = '<div class="container" style="width: 50%;padding-top:2%;align-items:center"><div class="card my-2 shadow mb-3 bg-light rounded my-0" style="border-radius:10px;"><div class="card-body" style="display:flex;flex-direction:row"><h4 class="card-title px-1 " style="font-size: 270%; ">' + capitalizeFirstLetter(String(wordField.value)) + '</h4><h6 class="card-subtitle mb-2 text-muted mx-3 my-3" style="font-size:130%">' + pronounciation + '</h6><button class="btn btn-light mx-0 my-3" style="margin-bottom:0px" id="speak">🔊</button></div></div>'

        //Adding up other parts by extracting data
        for (index in meanings) {
            let partofSpeech = meanings[index].partOfSpeech
            console.log(partofSpeech) //Part of speech

            let definitions = meanings[index].definitions //object of all definitons categorised on part of speech

            //Making the card of meanings from here 
            card += '<div class="card my-2 shadow mb-3 bg-white rounded my-0" style="border-radius:10px"><div class="card-body"><h5 class="card-title" style="font-size:180%">' + capitalizeFirstLetter(String(meanings[index].partOfSpeech)) + '</h5><hr class="dropdown-divider"><ul>'

            // Making list of the synonyms by tarting from here
            let synos = '<p class="card-text mx-2" style="font-size:150%;font-weight:2px;margin-bottom:0.2%;font-weight:500">Similar Words</p><p class="card-text mx-2" style="margin-bottom:5%;font-size:125%;justify-content:center;">';
            let isPresent = false;

            let synonyms;
            for (item in definitions) {
                console.log(definitions[item]); //Each definition object
                //Extracting items from each definition object
                let meaning = definitions[item].definition;
                let rawExample = definitions[item].example
                synonyms = definitions[item].synonyms
                let example = capitalizeFirstLetter(String(rawExample))
                if (example == "Undefined") {
                    example = ""
                }
                console.log(meaning)
                console.log(example)
                console.log(synonyms)
                console.log(pronounciation)

                //Function to add synonyms
                if (synonyms != undefined) {
                    synonyms.forEach(function(item) {
                        if (item != undefined) {
                            synos += (item + ',&nbsp')
                            isPresent = true;
                        }
                    })
                }


                // Adding all definitions of same part of speech to each card 
                card += '<li><p class="card-text" style="font-size:150%;font-weight:2px;margin-bottom:0.2%;font-weight:500">' + meaning + '</p><p class="card-text" style="margin-bottom:5%;font-size:120%"><i>' + example + '</i></p></li>'

            }
            if (isPresent) {
                synos += 'etc.</p>';
                card += '</ul><hr class="dropdown-divider">';
            } else {
                synos = ""
            }
            //Adding list of synonyms
            card += synos;

            //Finished making one card
            card += '</div></div>'
        }
        wordContainer.innerHTML += card
        wordField.value = ""

        fetch(String(phonetics[0].audio))
        let speakBtn = document.getElementById("speak");
        speakBtn.addEventListener('click', () => {
            let song = new Audio();
            song.src = String(phonetics[0].audio);
            song.play();
        })
    })
})