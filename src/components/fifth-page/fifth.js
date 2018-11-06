const setHeight = () => {
  const h = document.querySelector(".part5").clientHeight;
  window.parent.document.querySelector(`.fifth-iframe`).style.height = `${h}px`;
};

window.onresize = setHeight();