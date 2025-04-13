// let text = document.createElement("div")

// const { query } = require("express")

// text.textContent="Bassirou"

// document.body.append(text)
// document.body.insertBefore(text,document.querySelector("body"))
// document.querySelector("h1").className="ma_class"
// let sup = document.querySelector("#a-supprimer").remove()
// let header = document.createElement("div")
// header.style.backgroundColor = "blue"
// header.textContent = "Bassirou"

// lien = document.createElement("div")
// lien.innerHtml 


// document.body.append(header)

// let bout = document.querySelector("button")

// bout.onmouseover= ()=>{
//     document.body.style.backgroundColor = "#d66b54"
// }

// bout.onmouseout= ()=>{
//     document.body.style.backgroundColor = "white"
// }
// bout.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor = "#d66b54"
// })
// bout.addEventListener("mouseout",()=>{
//     document.body.style.backgroundColor = "white"
// })
// bout.onclick = ()=>{

//     if(confirm("Etes vous sur ?")){
//         location.href="https://google.com"
//     }
// }
// setInterval("alert('Cliqué')",5000)

// let btn = document.querySelector("button")
// let seconde = 10;
// let interval;

// function stop(){
//     clearInterval(interval)
//     document.body.innerHTML+="STOP!"
// }


// function dec(){
//     seconde--;
//     if(seconde == 0){
//         stop()
//     }
//     else{
//         document.body.innerHTML+=seconde + "<br>"
//     }

// }

// function start(){
//     interval = setInterval(dec,1000)
// }

// btn.addEventListener("click",start)

// let btn = document.querySelector("button")
// let div = document.querySelector("div")
// let hidden = true

// div.style.display="none"

// btn.addEventListener('click',()=>{
//     if (hidden){
//         btn.textContent = "cacher"
//         div.style.display = "block"
//         hidden = false
//     }
//     else{
//         btn.textContent="afficher"
//         div.style.display = "none"
//         hidden = true
//     }
// })


// let citations = [
//     ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
//     ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
//     ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
//     ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
//     ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
//     ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
//     ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
//     ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
//     ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
//     ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
//     ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
//     ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
//     ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
//     ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
//     ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
//     ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
//     ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
//     ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
//     ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
//     ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
//     ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"]
//   ];

//   let citation = document.querySelector("#citation")
//   let auteur = document.querySelector("#auteur")
//   let nouveau = document.querySelector("#nouveau")

//   let dernier = 0
//   let Aleatoire = 0

//   nouveau.addEventListener("click",()=>{
//     for(let i = 0;i<citations.length;i++){
//         citation.textContent = citations[i]

//     }
    
//   })
//   function genererNombreEntier(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }

// Etape 1 - Sélectionner nos éléments
let input= document.querySelector("#prix")
let error =document.querySelector("small")
let formulaire = document.querySelector("#formulaire")

let nombreChoisi ;
let coup = 0

// Etape 2 - Cacher l'erreur
error.style.display = "none";
// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * Math.floor(1001));
console.log(nombreAleatoire)

function verifier(nombre){
    let instruction = document.createElement("div")
    document.body.append(instruction)

    if(nombre < nombreAleatoire){
        instruction.textContent= "#"+coup +"("+nombreChoisi+")"+" c'est plus"
        instruction.className = "instruction plus"
    }
    else if(nombre > nombreAleatoire){
        instruction.textContent= "#"+coup +"("+nombreChoisi+")"+" c'est moins"
        instruction.className = "instruction moins"
    }
    else{
        instruction.textContent= "#"+coup +"("+nombreChoisi+")"+" Bravo Felicitations vous avez réussi"
        instruction.className = "instruction fini"
    }
}





// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup",()=>{
    if(isNaN(input.value)){
        error.style.display ="inline";
    }
    else{
        error.style.display ="none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(isNaN(input.value)|| input.value == "" ){
        formulaire.style.border = "1px solid red"
    }
    else{
        coup++
        formulaire.style.border = "1px solid silver"
        nombreChoisi = input.value;
        input.value=""
        verifier(nombreChoisi)
    }
})
// Etape 6 - Créer la fonction vérifier