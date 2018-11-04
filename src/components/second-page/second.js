const setHeight = () => {
  const h = document.querySelector(".part2").clientHeight;
  window.parent.document.querySelector(`.second-iframe`).style.height = `${h}px`;
};

setHeight();