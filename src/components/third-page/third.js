const setHeight = () => {
  const h = document.querySelector(".part3").clientHeight;
  window.parent.document.querySelector(`.third-iframe`).style.height = `${h}px`;
};

setHeight();