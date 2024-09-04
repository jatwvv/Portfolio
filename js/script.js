//Circle
const circle = document.getElementById("circle");
5;
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  circle.style.left = `${x - 450}px`;
  circle.style.top = `${y - 450}px`;
});

const navList = document.querySelectorAll(".nav-list");
navList.forEach((navListi) => {
  navListi.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navListi.classList.add("active");
  });
});

// let sections = document.querySelectorAll("section");
// let navlinks = document.querySelectorAll(".nav-list");
// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.screenY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navlinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector(".nav-list")
//           .classList.add("active");
//       });
//     }
//   });
// };
const scrollTop = function () {
  //create a button in html page
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.setAttribute("id", "scroll-btn");
  document.body.appendChild(scrollBtn);
  //scroll function
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  };
  window.addEventListener("scroll", scrollBtnDisplay);
  //add the functionality
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};

scrollTop();