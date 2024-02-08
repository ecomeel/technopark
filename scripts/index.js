new Swiper(".slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Burger

// Items left
const itemsAmountNode = document.getElementById('itemsAmount');
const itemsRangeLeftNode = document.getElementById('itemsRangeLeft');
const startAmount = 100;
const leftAmount = 35;
const percentAmount = leftAmount * 100 / startAmount
itemsAmountNode.innerText = `${leftAmount} items left`;
itemsRangeLeftNode.style.width = `${percentAmount}%`


// Sale timer
let time = 12345;
const saleTimerNode = document.getElementById('saleTimer');
function updateTimer() {
  let hours = Math.floor(time / 3600);
  hours = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor(time / 60) - hours * 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = time % 60;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  saleTimerNode.innerText = `${hours}:${minutes}:${seconds}`;
  time--;
}
setInterval(updateTimer, 1000)

// Order Popup
const orderPopupNode = document.getElementById("orderPopup");
const openOrderPopupBtnNode = document.getElementById("openOrderPopupBtn");
const closeOrderPopupBtnNode = document.getElementById("closeOrderPopupBtn");
const confirmOrderBtnNode = document.getElementById("confirmOrderBtn");
function handlerClosePopup(node) {
  node.classList.remove('show-popup')
  document.body.classList.remove('body-scroll-fixed')
}
function handleOpenOrderPopup() {
  orderPopupNode.classList.add("show-popup");
  document.body.classList.add("body-scroll-fixed");
}
closeOrderPopupBtnNode.addEventListener("click", () =>
handlerClosePopup(orderPopupNode)
);
confirmOrderBtnNode.addEventListener("click", () => {
  alert("You confirmed your order!");
  handlerClosePopup(orderPopupNode);
});
openOrderPopupBtnNode.addEventListener("click", handleOpenOrderPopup);

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
