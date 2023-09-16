const amount = document.querySelector("#amount");
const guests = document.querySelector("#guests");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector("#tip-amount");

calculate = () => {
  const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";
  if(tip === "NaN"){
    tipAmount.textContent = "Tip $0 each";
    showTipAmount();
  }
  else{
    tipAmount.textContent = "Tip $" + tip + " each";
    showTipAmount();
  }
}

  var x = document.querySelector("#tip-amount");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
