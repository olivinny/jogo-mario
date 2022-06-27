const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const start = document.querySelector(".start");
const restart = document.querySelector(".restart");
const reload = () => {
  location.reload();
};
function startGame() {
  start.classList.remove("active");
  restart.classList.remove("active");

  const jump = () => {
    mario.classList.add("jump");
    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  };

  const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
    const cloudsPosition = clouds.offsetLeft;
    if (pipePosition <= 120 && marioPosition < 100 && pipePosition > 0) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      clouds.style.animation = "none";
      clouds.style.left = `${cloudsPosition}px`;

      mario.src = "./assets/img/game-over.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "50px";
      clearInterval(loop);
      restart.classList.add("active");
      restart.addEventListener("click", reload);
    }
  }, 10);

  document.addEventListener("keydown", jump);
}

start.addEventListener("click", startGame);
