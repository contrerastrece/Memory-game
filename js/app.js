const pokemons = [1, 2, 3, 4, 5, 6, 7, 8];


const drawCards = (allCards) => {
  const $gameContainer=document.querySelector(".game-container");
  const $fragment=document.createDocumentFragment();
  const $template=document.getElementById("template").content;

  let $clone_card;

  allCards.forEach(cardN=>{
    $template.querySelector("img").setAttribute("src",`assets/png/${cardN}.png`);

    $clone_card=document.importNode($template,true);
    $fragment.appendChild($clone_card);
  })  

  $gameContainer.appendChild($fragment);
};

const getRandomNumber = (max = 150) => Math.floor(Math.random() * max + 1);

const generatePokeCards = () => {
  const currentCards = [] ;
  while (currentCards.length < 4) {
    let number = getRandomNumber();

    if (currentCards.includes(number)) {
      number = getRandomNumber();
    } else {
      currentCards.push(number);
    }
  }

  // obtener los cuatro pares
  const allCards=[...currentCards,...currentCards].sort(()=>Math.random() - 0.5)
  // desordenar los elementos del array
  // allCards.sort(()=>Math.random() - 0.5)

  currentCards.length < 4 ? generatePokeCards() : drawCards(allCards);
  console.log(allCards)
};
generatePokeCards();

const $gameContainer = document.querySelector(".game-container");

$gameContainer.addEventListener("click", (e) => {
  console.log(e.target.parentNode);
  if (e.target.parentNode.classList.contains("card")) {
    e.target.parentNode.classList.add("card-show");
  }
});
