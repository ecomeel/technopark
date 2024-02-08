new Swiper(".slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Shipping dropDown
const shippingDrowDownBtnNode = document.getElementById('shippingDropDownBtn');
const shippingContentNode = document.getElementById('shippingContent');
function handleOpenShippingContent() {
  shippingContentNode.classList.toggle('hide-block')
  shippingDrowDownBtnNode.classList.toggle('rotate')
}
shippingDrowDownBtnNode.addEventListener('click', handleOpenShippingContent)

// Footer dropDown
const footerShortBodyNode = document.getElementById("footerShortBody");
const footerFullBodyNode = document.getElementById("footerFullBody");
const footerChangeVisibleBtnNode = document.getElementById(
  "footerChangeVisibleBtn"
);
function handleChangeVisibleFooter() {
  if (this.innerText === 'Read more') {
    this.innerText = 'Read less';
    footerFullBodyNode.classList.add('show-block');
    footerShortBodyNode.classList.add('hide-block')
  } else {
    this.innerText = 'Read more';
    footerFullBodyNode.classList.remove('show-block');
    footerShortBodyNode.classList.remove('hide-block')
  }
}
footerChangeVisibleBtnNode.addEventListener('click', handleChangeVisibleFooter)