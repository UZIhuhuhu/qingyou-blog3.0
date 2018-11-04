const setHeight = () => {
  const h = document.querySelector(".part4").clientHeight;
  window.parent.document.querySelector(`.fourth-iframe`).style.height = `${h}px`;
};

setHeight();
