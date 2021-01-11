import Scene from "scenejs";
import "./truck.css";

document.addEventListener("DOMContentLoaded", () => {
  const scene = new Scene({
    ".truck": {
      0: {
        transform: "translateX(0px) translateZ(0)",
      },
      1: {
        transform: `translateX(${-window.innerWidth * 1.25}) translateZ(0)`,
      },
    },
  });
  scene.setSelector(".truck");
  scene.setDuration(10);
  scene.play();
  console.log(scene);
  setTimeout(() => console.log(scene), 200);
});
