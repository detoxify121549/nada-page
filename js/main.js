const cursor = document.querySelector(".cursor");
let x = 0, y = 0, tx = 0, ty = 0;

document.addEventListener("mousemove", e => {
  tx = e.clientX;
  ty = e.clientY;
});

function loop() {
  x += (tx - x) * 0.15;
  y += (ty - y) * 0.15;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(loop);
}
loop();
