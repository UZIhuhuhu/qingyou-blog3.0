<template>
  <div class="part4">
    <div class="part-title-container">
      <div class="title-bubble bubble1"></div>
      <div class="title-bubble bubble2"></div>
      <span class="title-text">我们欢迎</span>
    </div>
    <div class="part-content">
      <div class="card-container card-container1">
        <div class="content-card" v-for="(item,index) in cardInfo1" :key="index">
          <div class="card-card card1"></div>
          <div class="card-card card2"></div> 
          <div class="card-content">
            <div class="content-title">{{item.title}}</div>
            <div class="content-text">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <img class="part-image" src="../assets/Illustrations/design_process_iqqg.svg">
    <div class="part-content">
      <div class="card-container card-container2">
        <div class="content-card" v-for="(item,index) in cardInfo2" :key="index">
          <div class="card-card card1"></div>
          <div class="card-card card2"></div>
          <div class="card-content">
            <div class="content-title">{{item.title}}</div>
            <div class="content-text">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `Recruit`,
  data() {
    return {
      cardInfo1: [
        {
          title: "前端",
          content:
            "负责团队项目的前端开发，掌握HTML/CSS，基本了解Javascript，能与团队其他成员友好交流。"
        },
        {
          title: "后端",
          content:
            "负责团队项目的后端开发，掌握爬虫的开发技巧，掌握至少一门后端开发语言，积极向上。"
        },
        {
          title: "ios | android",
          content:
            "完成团队项目的多终端部署计划，掌握Object-C，Swift，Java中任意一门语言，有较强的创新精神。"
        },
        {
          title: "测试工程师",
          content:
            "对团队的产品进行发布前的100%覆盖测试，有一定的全栈知识，能够预估产品Bug产生的原因。"
        }
      ],
      cardInfo2: [
        {
          title: "UI | UX",
          content:
            "负责web/移动端的界面设计，能与前端的童鞋友好交流，并且具有一定读文档的能力，积极分享设计经验。"
        },
        {
          title: "画师",
          content:
            "负责web/移动端的界面设计，能与前端的童鞋友好交流，并且具有一定读文档的能力，积极分享设计经验。"
        },
        {
          title: "运营",
          content:
            "掌握新媒体运营的相关技术，对互联网具有较强的敏感性，擅长策划宣传工作，熟练使用平面设计相关软件。"
        }
      ]
    };
  }
};
</script>


<style lang="sass" scoped>
@import "../style/bubble.sass"
.part4
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  .part-title-container
    margin: 0 auto
    width: 72%
    height: 40rem
    background-image: url('../assets/Illustrations/version_control_9bpv.svg')
    background-repeat: no-repeat
    background-position: center center
    background-size: 60%
    position: relative
    margin-top: 2rem
    @media(max-width: $phone)
      height: 15rem
    .title-text
      font-size: 2.5rem
      color: #222222
      font-weight: 600
      @media(max-width: $phone)
        font-size: 1.5rem
  .part-content
    width: 100%
    background-image: url('../assets/background/wave-line_4.svg')
    background-repeat: no-repeat
    background-size: 100%
    .card-container
      margin: 0 auto
      // height: 60rem
      display: flex
      flex-wrap: wrap
      flex-direction: row
      justify-content: space-between
      @media(min-width: $phone)
        width: 72%
      .content-card
        position: relative
        height: 25rem
        width: 25rem
        display: flex
        align-items: center
        justify-content: center
        @media(min-width: $phone)
          margin: 2rem
        .card-card
          background: #dcfbb5
          width: 20rem
          height: 20rem
          opacity: 0.5
          position: absolute
          transition: all .2s ease .2s
          @media(max-width: $phone)
            width: 16rem
            height: 16rem
        .card1
          transform: rotate(10deg)
        .card2
          transform: rotate(-100deg)
        .card-content
          height: 8rem
          width: 16rem
          display: flex
          justify-content: center
          align-items: center
          flex-direction: column
          text-align: justify
          .content-title
            font-size: 1.4rem
            font-weight: 500
            color: #22b574
            z-index: 1
          .content-text
            margin-top: 1rem
            color: #222222
            z-index: 1
        &:hover
          .card1,.card2
            transform: rotate(0)
            transition: all .2s ease-in-out .2s
  .part-image
    width: 72%
    margin: 0 0
    @media(min-width: $phone)
      height: 40rem
      margin: 5rem 0
</style>
