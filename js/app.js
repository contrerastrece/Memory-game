const drawCards = (allCards) => {
  const $gameContainer = document.querySelector(".game-container");
  const $fragment = document.createDocumentFragment();
  const $template = document.getElementById("template").content;

  let $clone_card;

  allCards.forEach((cardN) => {
    $template
      .querySelector("img")
      .setAttribute("src", `assets/png/${cardN}.png`);
    $template.querySelector(".card").dataset.id = cardN;
    $clone_card = document.importNode($template, true);
    $fragment.appendChild($clone_card);
  });

  $gameContainer.appendChild($fragment);
};

const getRandomNumber = (max = 150) => Math.floor(Math.random() * max + 1);

const generatePokeCards = () => {
  const currentCards = [];
  while (currentCards.length < 6) {
    let number = getRandomNumber();

    if (currentCards.includes(number)) {
      number = getRandomNumber();
    } else {
      currentCards.push(number);
    }
  }

  // obtener los cuatro pares
  const allCards = [...currentCards, ...currentCards].sort(
    () => Math.random() - 0.5
  );
  // desordenar los elementos del array
  // allCards.sort(()=>Math.random() - 0.5)

  currentCards.length < 6 ? generatePokeCards() : drawCards(allCards);
  console.log(allCards);
};
generatePokeCards();

const $gameContainer = document.querySelector(".game-container");
let firstSelection = 0;
let secondSelection = 0;

const setCardSelected = (firstElementSelected, secondElementSelected) => {
  if (firstElementSelected.dataset.id === secondElementSelected.dataset.id) {
    console.log("WIN");
    firstElementSelected.dataset.pokewin = "true";
    secondElementSelected.dataset.pokewin = "true";
  } else {
    console.log("Error");

    // despues de su transisión eliminar las clases cardShow
    // a los elementos seleccionados
    secondElementSelected.addEventListener(
      "transitionend",
      () => {
        firstElementSelected.classList.remove("card-show");
        secondElementSelected.classList.remove("card-show");
      },
      { once: true }
    );
  }
  firstSelection = 0;
  secondSelection = 0;
};

$gameContainer.addEventListener("click", (e) => {
  // si el selector es una card y también contiene el dataset===false,
  // con esto ultimo hacemos que ya no pueda coger datos del card ya volteada
  if (
    e.target.parentNode.classList.contains("card") &&
    e.target.parentNode.dataset.pokewin === "false"
  ) {
    e.target.parentNode.classList.add("card-show");

    if (firstSelection === 0) {
      firstSelection = e.target.parentNode;
      console.log(firstSelection, "first Selection");
    } else {
      // condicionamos que el primer click no tenga que ser igual que el segundo click
      // así logramos que el usuario no vuelva a selccionar la misma carta
      if (firstSelection !== e.target.parentNode) {
        secondSelection = e.target.parentNode;
        console.log(secondSelection, "Second Selection");

        setCardSelected(firstSelection, secondSelection);
      }
    }
  }
});
