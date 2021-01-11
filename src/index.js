import Scene from "scenejs";
import "./truck.css";
import "./main.css";

document.addEventListener("DOMContentLoaded", () => {
  const truck = document.querySelector(".truck");
  const scene = new Scene(
    {
      ".truck": {
        0: {
          transform: "translateX(0px) translateZ(0)",
        },
        1: {
          transform: "translateX(0px) translateZ(0)",
        },
        2: {
          transform: `translateX(${-window.innerWidth * 1.25}) translateZ(0)`,
        },
      },
      ".items .item": (i) => ({
        0: {
          transform: `translateX(0px) translateY(0px) scale(1.0)`,
        },
        1: {
          transform: `translateX(${
            truck.getBoundingClientRect().x
          }px) translateY(${truck.getBoundingClientRect().y}px) scale(0.2)`,
        },
        options: {
          delay: 0.5 * i,
        },
      }),
    },
    {
      selector: true,
      duration: 10,
    }
  );
  scene.play();
  console.log(scene);
  setTimeout(() => console.log(scene), 200);

  document.getElementById("toggle").addEventListener("click", () => {
    switch (scene.getPlayState()) {
      case "running":
        scene.pause();
        break;
      case "paused":
        scene.play();
        break;
    }
  });
});
