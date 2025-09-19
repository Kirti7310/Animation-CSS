const text = document.querySelector(".para-main");
const colors = ["#ff12b7", "#ff69d2", "#12fff2", "#ffe112", "#12ff7e"];

text.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  text.style.color = randomColor;
  text.style.textShadow = `0 0 20px ${randomColor}, 0 0 40px ${randomColor}`;
});

document.body.addEventListener("click", (e) => {
  if (!text.contains(e.target)) {
    document.body.style.background = `linear-gradient(135deg, 
      hsl(${Math.random() * 360}, 70%, 30%), 
      hsl(${Math.random() * 360}, 70%, 20%), 
      #000)`;
  }
});
