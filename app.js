let yourArray = [];

let inputNumber = document.getElementById("insert-numbers");
let yourArrayP = document.getElementById("yourArray");
let outPutP = document.getElementById("outPut");

inputNumber.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    yourArray.push(inputNumber.value);
    inputNumber.value = "";
    yourArrayP.innerHTML = `<p id="yourArray">Your array = [ ${yourArray} ]</p>`;
  }
});

function sortTheArray() {
  for (let i = 0; i < yourArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
      if (yourArray[j] > yourArray[j + 1]) {
        let temp = yourArray[j];
        yourArray[j] = yourArray[j + 1];
        yourArray[j + 1] = temp;
      }
    }
  }
  outPutP.innerHTML = `<p id="yourArray">Your array = [ ${yourArray} ]</p>`;
  console.log(yourArray);
  return yourArray;
}
