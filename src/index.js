import Scene from "scenejs";
import "./truck.css";
import "./main.css";

function getDiffRect(rect1, rect2) {
  return {
    x: rect1.x - rect2.x,
    y: rect1.y - rect2.y,
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const truck = document.querySelector(".truck");
  const truckBounds = truck.getBoundingClientRect();
  const items = document.querySelectorAll(".items > .item");
  const scene = new Scene(
    {
      ".truck": {
        0: {
          transform: "translateX(0px) translateZ(0)",
        },
        4: {
          transform: "translateX(0px) translateZ(0)",
        },
        6: {
          transform: `translateX(${-window.innerWidth * 1.25}) translateZ(0)`,
        },
      },
      ".backdoor": {
        0: {
          transform: `rotateZ(100deg)`,
        },
        3: {
          transform: `rotateZ(100deg)`,
        },
        4: {
          transform: `rotateZ(0deg)`,
        },
      },
      ".items .item": (i) => {
        const itemBounds = items.item(i).getBoundingClientRect();
        const x1 =
          getDiffRect(truckBounds, itemBounds).x + itemBounds.width * 0.2;
        const y1 =
          getDiffRect(truckBounds, itemBounds).y -
          itemBounds.height +
          truckBounds.height;
        const x2 = x1 - truckBounds.width / 2;
        const y2 = y1 - truckBounds.height / 3;

        return {
          0: {
            transform: `translateX(0px) translateY(0px) scaleY(1.0) scaleX(1.0)`,
            opacity: 1.0,
          },
          0.5: {
            transform: `translateX(${x1}px) translateY(${y1}px) scaleY(0.4) scaleX(${
              (itemBounds.height / itemBounds.width) * 0.4
            })`,
          },
          1: {
            transform: `translateX(${x2}px) translateY(${y2}px)`,
            opacity: 1.0,
          },
          1.1: {
            opacity: 0.0,
          },
          options: {
            delay: 1 * i,
          },
        };
      },
    },
    {
      selector: true,
      duration: 15,
    }
  );

  scene.on("ended", () => {
    const modal = document.querySelector(".modal");
    const backdrop = document.querySelector(".backdrop");
    modal.classList.toggle("visible");
    backdrop.classList.toggle("visible");
  });

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
