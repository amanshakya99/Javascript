  const scrollHeader = document.getElementById("scrollHeader");
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    if (window.scrollY > hero.offsetHeight - 80) {
      scrollHeader.classList.add("show");
    } else {
      scrollHeader.classList.remove("show");
    }
  });