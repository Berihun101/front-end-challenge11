
const confirmbtn=document.querySelector(".confirm-btn-form");
const thankYouCard=document.querySelector(".thank-u-card");
const thankYouConfirmbtn=document.getElementById('confirm-thankyou')
const form=document.querySelectorAll("input")
const holderName=document.getElementById('holder-name')
const formBox=document.querySelector(".input-form")
const alert=document.querySelectorAll('.corrector');
const cardNumber=document.getElementById('card_num');
const nameofholder=document.getElementById('name-of-person');
const month=document.getElementById('month');
const monthDate=document.getElementById('month-date')
const year=document.getElementById('year');
const dateOfYear=document.getElementById('year0fDate')
const cvc=document.getElementById('cvc-number')
const cvcnumber=document.getElementById('cvcNumber')
const cardnum1=document.getElementById('number_card1')
const cardnum2=document.getElementById('number_card2')
const cardnum3=document.getElementById('number_card3')
const cardnum4=document.getElementById('number_card4')

const subNumbers=[];
const subname=[];
const len=4;

cardNumber.addEventListener('input', function() {
  const cardValue = cardNumber.value;
  if (cardValue.length === 16) {
    subNumbers.length = 0; // clear the subNumbers array
    const str = cardValue.toString();
    for (let i = 0; i < str.length; i += len) {
      subNumbers.push(str.substr(i, len));
    }
    cardnum1.innerHTML = subNumbers[0];
    cardnum2.innerHTML = subNumbers[1];
    cardnum3.innerHTML = subNumbers[2];
    cardnum4.innerHTML = subNumbers[3];
    alert[1].classList.add("corrector")
  }
  else if(cardValue.length >16){
    alert[1].classList.remove("corrector")
  }
  else {
    // clear the subNumbers array and the cardnum elements
    subNumbers.length = 0;
    cardnum1.innerHTML = "";
    cardnum2.innerHTML = "";
    cardnum3.innerHTML = "";
    cardnum4.innerHTML = "";
  }
});
holderName.addEventListener('input', function() {
  const cardholder = holderName.value;
  subname.length = 0; // clear the subname array
  for (let i = 0; i < cardholder.length; i++) {
    subname.push(cardholder.charAt(i));
  }
  nameofholder.innerHTML = subname.join("");
});
month.addEventListener('input', function(){
  if(month.value<=12){
    monthDate.innerHTML=month.value;
  }

})

year.addEventListener('input', function(){
dateOfYear.innerHTML=year.value;
})

cvc.addEventListener('input', function(){
  if(cvc.value.length<=4){
    cvcnumber.innerHTML=cvc.value;
  }

})


var count = false;

confirmbtn.addEventListener("click", function() {
  for (var i = 0; i < form.length; i++) {
    if (form[i].value === '') {
      alert[i].classList.remove("corrector");
      form[i].classList.add("border");
      count = false;
    } else {
      form[i].classList.remove("border");
      alert[i].classList.add("corrector");
    }
  }

  if (count) {
    if(cardNumber.value.length<16){
      alert[1].classList.remove("corrector");
      form[1].classList.add("border");
      cardNumber.addEventListener('input', function() {
        alert[1].classList.add("corrector");
        form[1].classList.remove("border");
      })
    }
    else{
      formBox.classList.add("form-page");
      thankYouCard.classList.remove("thank-u-card");
        thankYouCard.classList.add("thank-u-card-page");

      confirmbtn.fadeIn(100).fadeOut(100).fadeIn(100);
    }

  } else {
    count = true; // reset count to true for next click
  }
});
thankYouConfirmbtn.addEventListener('click', function(){
  thankYouCard.classList.add("thank-u-card");
  formBox.classList.remove("form-page");
})
