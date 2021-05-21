const $scoreBoard = document.getElementById("scoreBoard");
const $fragment = document.createDocumentFragment();

const dataPoints = [
  { name: "Victor", points: "20" },
  { name: "Alanís", points: "20" },
  { name: "Gabriel", points: "20" },
  { name: "Nii", points: "20" },
  { name: "Cristian", points: "20" },
  { name: "Muñoz", points: "20" },
  { name: "Yeison", points: "20" },
];

export  const drawScoreBoard = () => {
  dataPoints.map((data)=>{
    const $p=document.createElement("p");
    $p.textContent=`${data.name} - ${data.points}`
    $fragment.appendChild($p)
  })

  // for (const data in dataPoints) {
  //   const $p=document.createElement("p");
  //   $p.textContent=`${data.name}-${data.points}`
  //   $fragment.appendChild($p)
  // }
$scoreBoard.appendChild($fragment)
};
console.log(dataPoints)