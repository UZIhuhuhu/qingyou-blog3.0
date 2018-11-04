const setHeight = () => {
  const h = document.querySelector(".part1").clientHeight;
  window.parent.document.querySelector(`.first-iframe`).style.height = `${h}px`;
};

setHeight();
