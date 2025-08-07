const movableObject = document.getElementById("movable-object");

let x = 0;
let y = 0;
const step = 10;

document.addEventListener("keydown", (e) => {
  const objWidth = movableObject.offsetWidth;
  const objHeight = movableObject.offsetHeight;
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  if (e.key === "ArrowUp") {
    y = Math.max(y - step, 0);
  } else if (e.key === "ArrowDown") {
    y = Math.min(y + step, viewportHeight - objHeight);
  } else if (e.key === "ArrowLeft") {
    x = Math.max(x - step, 0);
  } else if (e.key === "ArrowRight") {
    x = Math.min(x + step, viewportWidth - objWidth);
  }
  movableObject.style.left = `${x}px`;
  movableObject.style.top = `${y}px`;
});

document.addEventListener("mousedown", (e) => {
  const objWidth = movableObject.offsetWidth;
  const objHeight = movableObject.offsetHeight;
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  console.log("x =", e.x, " Y = ", e.y);
  x = Math.min(e.x, viewportWidth - objWidth);
  y = Math.min(e.y, viewportHeight - objHeight);

  movableObject.style.left = `${x}px`;
  movableObject.style.top = `${y}px`;
});
