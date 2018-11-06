const setHeight = () => {
  const h = document.querySelector(".part4").clientHeight;
  window.parent.document.querySelector(`.fourth-iframe`).style.height = `${h}px`;
};
const cardInfo1 = [{
    title: "前端",
    content: "负责团队项目的前端开发，掌握HTML/CSS，基本了解Javascript，能与团队其他成员友好交流。"
  },
  {
    title: "后端",
    content: "负责团队项目的后端开发，掌握爬虫的开发技巧，掌握至少一门后端开发语言，积极向上。"
  },
  {
    title: "ios | android",
    content: "完成团队项目的多终端部署计划，掌握Object-C，Swift，Java中任意一门语言，有较强的创新精神。"
  },
  {
    title: "测试工程师",
    content: "对团队的产品进行发布前的100%覆盖测试，有一定的全栈知识，能够预估产品Bug产生的原因。"
  }
]
const cardInfo2 = [{
    title: "UI | UX",
    content: "负责web/移动端的界面设计，能与前端的童鞋友好交流，并且具有一定读文档的能力，积极分享设计经验。"
  },
  {
    title: "画师",
    content: "负责web/移动端的界面设计，能与前端的童鞋友好交流，并且具有一定读文档的能力，积极分享设计经验。"
  },
  {
    title: "运营",
    content: "掌握新媒体运营的相关技术，对互联网具有较强的敏感性，擅长策划宣传工作，熟练使用平面设计相关软件。"
  }
]

getNode = (title, content) => {
  let container = document.createElement("div")
  let card1 = document.createElement("div")
  let card2 = document.createElement("div")
  let cardContent = document.createElement("div")
  let contentTitle = document.createElement("div")
  let contentText = document.createElement("div")

  container.className = 'content-card'
  card1.className = 'card-card card1'
  card2.className = 'card-card card2'
  cardContent.className = 'card-content'
  contentTitle.className = 'content-title'
  contentText.className = 'content-text'
  contentTitle.innerHTML = title
  contentText.innerHTML = content
  cardContent.append(contentTitle, contentText)
  container.append(card1, card2, cardContent)
  return container
}
const addCard = () => {
  let container1 = document.querySelector(`.card-container1`)
  let container2 = document.querySelector(`.card-container2`)
  cardInfo1.forEach(item => {
    container1.append(getNode(item.title, item.content))
  })
  cardInfo2.forEach(item => {
    container2.append(getNode(item.title, item.content))
  })
}

window.onresize = setHeight();
addCard();