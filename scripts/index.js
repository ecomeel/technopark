new Swiper(".slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

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