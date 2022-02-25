let url = 'https://opentdb.com/api.php?amount=1&type=boolean&category=';

let = res = {}
let getQuestions= async (categoria, nivel) => {
    link = url + categoria + "&difficulty=" + nivel; 
    console.log(link);
    let response = await fetch(link);
    if (response.ok){
        res = await response.json();
        console.log(res.results);
        document.getElementById('question').innerHTML = res.results[0].question;
        document.getElementById('category').innerHTML = res.results[0].category;
        document.getElementById('difficulty').innerHTML = res.results[0].difficulty;

    }

}


function getOption() {
    selectCategory = document.querySelector('#select1');
    selectDifficulty = document.querySelector('#select2');
    categoria = selectCategory.value;
    nivel =  selectDifficulty.value;
    console.log(categoria)
    correct= getQuestions(categoria,nivel);
    document.getElementById('selector').hidden= true;
    document.getElementById('juego').hidden= false;
}


function guess(){
    let options = document.getElementsByName('options');
    for(i = 0; i < options.length; i++) {
        if(options[i].checked){
            console.log(options[i].value)
            if (options[i].value === res.results[0].correct_answer) {
                result.innerHTML = "That's the correct answer!:)";
              } else
                result.innerHTML = 'Sorry! :( You can try again';
            }
            document.getElementById('result').hidden=false;
        }
        

}




function start(){
    document.getElementById('selector').hidden= false;
    document.getElementById('juego').hidden= true;
    document.getElementById('result').hidden=true;
}
