const inputName = document.getElementById("inputForName");
const inputAge = document.getElementById("inputForAge");
const inputColor = document.getElementById("inputForColor");
const inputCountry = document.getElementById("inputForCountry");
const genderCollection = document.getElementsByName("inputForGender");
const inputContainer = document.getElementById("container");
let counter = 0;
// .getAttribute("check");
function addCard() {
  if (isValidationSucess()) {
    addInputsToCard();
    counter += 1;
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
  if(inputAge.value < 0){
    alert("Invalid age");
    return false;
  }
  if(inputName.value.length < 2){
     alert("name must ne 2 and more characters")
     return false;
  }
  return true;
  // if (inputAge.value < 0 || inputName.value.length < 2) {
  //   return false;
  // } else {
  //   return true;
  // }
}
function addInputsToCard() {
  inputContainer.innerHTML +=
    `
    <style> 
    #card` +
    counter +
    ` .list-group-item{
      background-color: ` +
    inputColor.value +
    `;
    }
    </style>
  <div class="card mb-3" style="width: 18rem" id ="card` +
    counter +
    `">
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

function getGenderCheckedValue() {
  for (let gender of genderCollection) {
    console.log(typeof gender);
    gender.addEventListener("changed", getSelected(this));
  }

  function getSelected(e) {
    if (this.checked) {
      return this.value;
    }
  }
}
