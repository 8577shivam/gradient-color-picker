let colBtn = document.querySelector(".colorBtn");
let copyBtn = document.querySelector(".copyBtn");
let copiedBtn = document.querySelector(".copied");
let colText = document.getElementById("colorText");

getcolor = () => {
  let randomNum1 = Math.floor(Math.random() * 16777215);
  let randomNum2 = Math.floor(Math.random() * 16777215);
  let rndomHex1 = "#" + randomNum1.toString(16);
  let rndomHex2 = "#" + randomNum2.toString(16);
  document.body.style.background="linear-gradient(to right,"+rndomHex1+","+rndomHex2+")";
  // document.body.style.backgroundColor=rndomHex1
  colText.innerHTML = rndomHex1+","+rndomHex2;
  colText.style.color = rndomHex1

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(`${document.body.style.background}`);
    // const copyDiv = document.querySelector(".copied");

    copiedBtn.classList.add("animate");
  });
  copiedBtn.classList.remove("animate");
};

colBtn.addEventListener("click", getcolor);
getcolor();
