const colors = ["#4A8ACF", "#8752A8", "#E6BE43"];

const body = document.querySelector("body");
body.style.backgroundColor = colors[0];

const handleBodyBgColor = () => {
  if (window.innerWidth < 480) {
    body.style.backgroundColor = colors[0];
  } else if (window.innerWidth < 720) {
    body.style.backgroundColor = colors[1];
  } else {
    body.style.backgroundColor = colors[2];
  }
};

window.addEventListener("resize", handleBodyBgColor);
