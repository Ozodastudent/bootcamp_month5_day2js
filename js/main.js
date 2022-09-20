var formEl = document.querySelector(".form");
var nameValEl = document.querySelector(".name_value");
var surnameValEl = document.querySelector(".surname_value");
var ageValEl = document.querySelector(".age_value");
var passportValEl = document.querySelector(".passport_value");
var moneyValEl = document.querySelector(".money_value");

var dollarInSums = 10955.07;

var dollarToSums = Math.round(moneyValEl * dollarInSums);
var btnEl = document.querySelector(".btn");

var nameEl = document.querySelector(".name_input");
var surnameEl = document.querySelector(".surname_input");
var ageEl = document.querySelector(".age_input");
var passportEl = document.querySelector(".passport_input");
var moneyEl = document.querySelector(".money_input");

formEl.addEventListener("submit", function (evt) {
  evt.preventDefault();

  nameEl.textContent = nameValEl.value;
  surnameEl.textContent = surnameValEl.value;
  ageEl.textContent = ageValEl.value;
  passportEl.textContent = passportValEl.value;
  moneyEl.textContent = Math.round(moneyValEl.value * 10.9186) + " " + "so'm";

  nameValEl.value = "";
  surnameValEl.value = "";
  ageValEl.value = "";
  passportValEl.value = "";
  moneyValEl.value = "";
});
