const inputName = document.getElementById("inputForName");
const inputAge = document.getElementById("inputForAge");
const inputColor = document.getElementById("inputForColor");
const inputCountry = document.getElementById("inputForCountry");
const genderCollection = document.getElementsByName("inputForGender");
const inputContainer = document.getElementById("container");
// .getAttribute("check");
function addCard() {
  if (isValidationSucess()) {
    addInputsToCard();
    setCardBackgroundColor();
    // console.log(inputName.value);
    // console.log(inputAge.value);
    // console.log(inputColor.value);
    // console.log(inputCountry.value);
    console.log(getGenderCheckedValue());
  }
  reset();
}

function reset() {
  inputName.value = "";
  inputAge.value = "";
  inputColor.value = "#000000";
  inputCountry.value = "Select County";
}

function isValidationSucess() {
  if (inputAge.value < 0 || inputName.value.length < 2) {
    return false;
  } else {
    return true;
  }
}
function addInputsToCard() {
  inputContainer.innerHTML +=
    `
  <div class="card mb-3" style="width: 18rem" id ="myCard">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">` +
    inputName.value +
    `</li>
    <li class="list-group-item">` +
    inputAge.value +
    `</li>
    <li class="list-group-item">` +
    inputCountry.value +
    `</li>
    <li class="list-group-item">` +
    getGenderCheckedValue() +
    `</li>
  </ul>
</div>
  `;
}

function setCardBackgroundColor() {
  inputContainer.style.backgroundColor = inputColor.value;
  // document.getElementById("myCard").style.backgroundColor = inputColor.value;
}

function getGenderCheckedValue() {
  // for (let gender of genderCollection) {
  //   console.log(typeof gender);
  //   if (gender.checked) {
  //     return gender.value;
  //   }
  // }

  for (i = 0; i < genderCollection.length; i++) {
    if (genderCollection[i].checked) {
      console.log(genderCollection[i].value);
      return genderCollection[i].value;
    }
  }
}
