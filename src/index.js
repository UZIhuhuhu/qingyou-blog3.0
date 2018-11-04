const wrapperIframe = () => {
  const iframe1 = document.createElement("iframe");
  const iframe2 = document.createElement("iframe");
  const iframe3 = document.createElement("iframe");
  const iframe4 = document.createElement("iframe");
  const iframe5 = document.createElement("iframe");
  const iframe6 = document.createElement("iframe");
  iframe1.setAttribute("src", "../src/components/first-page/first.html");
  iframe1.classList.add(`first-iframe`);
  iframe2.setAttribute("src", "../src/components/second-page/second.html");
  iframe2.classList.add(`second-iframe`);
  iframe3.setAttribute("src", "../src/components/third-page/third.html");
  iframe3.classList.add(`third-iframe`);
  iframe4.setAttribute("src", "../src/components/fourth-page/fourth.html");
  iframe4.classList.add(`fourth-iframe`);
  iframe5.setAttribute("src", "../src/components/fifth-page/fifth.html");
  iframe5.classList.add(`fifth-iframe`);
  iframe6.setAttribute("src", "../src/components/sixth-page/sixth.html");
  iframe6.classList.add(`sixth-iframe`);
  return [iframe1, iframe2, iframe3, iframe4, iframe5, iframe6];
};
const render = () => {
  const wrapperIframeInstance = wrapperIframe();
  wrapperIframeInstance.forEach(item => {
    document.querySelector(`#root`).appendChild(item);
  });
};
render();
