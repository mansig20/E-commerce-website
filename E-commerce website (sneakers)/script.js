const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// console.log(wrapper)

// wrapper.style.transform = "translateX(-300vw)"

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
