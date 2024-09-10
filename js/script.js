//Circle
const circle = document.getElementById("circle");
5;
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  circle.style.left = `${x - 450}px`;
  circle.style.top = `${y - 450}px`;
});

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navButtons = document.querySelectorAll('li');

  function setActiveSection() {
      let currentSectionId = sections[0].id;
      for (let section of sections) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop - 50) {
              currentSectionId = section.id;
          }
      }
      
      navButtons.forEach(li => {
          if (li.dataset.target === currentSectionId) {
              li.classList.add('active');
          } else {
              li.classList.remove('active');
          }
      });
  }
  window.addEventListener('scroll', setActiveSection);

  navButtons.forEach(li => {
      li.addEventListener('click', function() {
          const targetId = this.dataset.target;
          document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Initial call to set active section on page load
  setActiveSection();
});
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
        window.scrollTo(0, window.scrollY - 40);
        scrollWindow();
      }, 100);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};

scrollTop();