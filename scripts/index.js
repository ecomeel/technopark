// Slider
new Swiper(".slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Commons functions
function handlerChangeVisibilityPopup(node) {
  document.body.classList.toggle("body-scroll-fixed");
  node.classList.toggle("show-popup");
}

// Burger
const openBurgerBtnNode = document.getElementById("openBurgerBtn");
const closeBurgerBtnNode = document.getElementById("closeBurgerBtn");
const burgerPopupNode = document.getElementById("burgerPopup");
openBurgerBtnNode.addEventListener("click", () =>
  handlerChangeVisibilityPopup(burgerPopupNode)
);
closeBurgerBtnNode.addEventListener("click", () =>
  handlerChangeVisibilityPopup(burgerPopupNode)
);

// Items left
const itemsAmountNode = document.getElementById("itemsAmount");
const itemsRangeLeftNode = document.getElementById("itemsRangeLeft");
const startAmount = 100;
const leftAmount = 35;
const percentAmount = (leftAmount * 100) / startAmount;
itemsAmountNode.innerText = `${leftAmount} items left`;
itemsRangeLeftNode.style.width = `${percentAmount}%`;

// Sale timer
let time = 12345;
const saleTimerNode = document.getElementById("saleTimer");
function additionalZero(number) {
  return number < 10 ? `0${number}` : number;
}
function updateTimer() {
  let hours = Math.floor(time / 3600);
  hours = additionalZero(hours);
  let minutes = Math.floor(time / 60) - hours * 60;
  minutes = additionalZero(minutes);
  let seconds = time % 60;
  seconds = additionalZero(seconds);
  saleTimerNode.innerText = `${hours}:${minutes}:${seconds}`;
  time--;
}
setInterval(updateTimer, 1000);

// Order Popup
const orderPopupNode = document.getElementById("orderPopup");
const openOrderPopupBtnNode = document.getElementById("openOrderPopupBtn");
const closeOrderPopupBtnNode = document.getElementById("closeOrderPopupBtn");
const confirmOrderBtnNode = document.getElementById("confirmOrderBtn");
closeOrderPopupBtnNode.addEventListener("click", () =>
  handlerChangeVisibilityPopup(orderPopupNode)
);
confirmOrderBtnNode.addEventListener("click", () => {
  alert("You confirmed your order!");
  handlerChangeVisibilityPopup(orderPopupNode);
});
openOrderPopupBtnNode.addEventListener("click", () => {
  handlerChangeVisibilityPopup(orderPopupNode);
});

// Shipping dropDown
const shippingDrowDownBtnNode = document.getElementById("shippingDropDownBtn");
const shippingContentNode = document.getElementById("shippingContent");
function handleOpenShippingContent() {
  shippingContentNode.classList.toggle("hide-block");
  shippingDrowDownBtnNode.classList.toggle("rotate");
}
shippingDrowDownBtnNode.addEventListener("click", handleOpenShippingContent);

// Footer dropDown
const footerShortBodyNode = document.getElementById("footerShortBody");
const footerFullBodyNode = document.getElementById("footerFullBody");
const footerChangeVisibleBtnNode = document.getElementById(
  "footerChangeVisibleBtn"
);
function handleChangeVisibleFooter() {
  if (this.innerText === "Read more") {
    this.innerText = "Read less";
    footerFullBodyNode.classList.add("show-block");
    footerShortBodyNode.classList.add("hide-block");
  } else {
    this.innerText = "Read more";
    footerFullBodyNode.classList.remove("show-block");
    footerShortBodyNode.classList.remove("hide-block");
  }
}
footerChangeVisibleBtnNode.addEventListener("click", handleChangeVisibleFooter);
