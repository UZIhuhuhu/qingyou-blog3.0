const setHeight = () => {
  const h = document.querySelector(".part6").clientHeight;
  window.parent.document.querySelector(`.sixth-iframe`).style.height = `${h}px`;
};

setHeight();