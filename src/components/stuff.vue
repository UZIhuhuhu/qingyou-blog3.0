<template>
  <div class="part2">
    <div class="part2-content-container">
      <div class="part2-container-title">
        <div class="title-bubble bubble1"></div>
        <div class="title-bubble bubble2"></div>
        <div class="title-font">我们有多强</div>
      </div>
      <div class="stuff-container" @scroll="scrollLeft">
        <div class="stuff-avatar">
          <div class="stuff-card" :style="{borderTopColor: `${borderColor(index)}`}" v-for="(item,index) in stuffInformation" :key="index" @mouseover="showCard(index)" @mouseout="closeCard">
            <div class="card-inner-block">
              <div class="stuff-card-avatar" :style="{backgroundImage: `url(${item.ImgUrl})`}"></div>
              <div class="stuff-card-name">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div v-if="cardShowStatus" :class="cardShowStatus ? 'detail-information-card animated fadeInUp' : 'detail-information-card' ">
          <div class="information-card-name"><span>姓名:</span>{{cardInfo.name}}</div>
          <div class="information-card-direction"><span>方向:</span>{{cardInfo.goodAt}}</div>
          <div class="information-card-introduction"><span>介绍:</span>{{cardInfo.description}}</div>
        </div>
      </div>
      <div class="scroll-bar">
        <div class="scroll-bar-button" :style="{left: `${leftDistance}px`}"></div>
        <div class="scroll-bar-line"></div>
      </div>
    </div>
  </div>
</template>


<script>
import avatar1 from "../assets/stuff-avatar/yyl.jpg";
import avatar2 from "../assets/stuff-avatar/gy.jpg";
import avatar3 from "../assets/stuff-avatar/jzw.jpg";
import avatar4 from "../assets/stuff-avatar/zxf.jpg";
import avatar5 from "../assets/stuff-avatar/zcy.jpg";
import avatar6 from "../assets/stuff-avatar/tzh.jpg";
import avatar7 from "../assets/stuff-avatar/glj.jpg";
import avatar8 from "../assets/stuff-avatar/wxy.jpg";
import avatar9 from "../assets/stuff-avatar/wat.jpg";
import avatar10 from "../assets/stuff-avatar/lh.jpg";
import avatar11 from "../assets/stuff-avatar/zj.jpg";
import avatar12 from "../assets/stuff-avatar/pzf.jpg";
import avatar13 from "../assets/stuff-avatar/nhh.jpg";
import avatar14 from "../assets/stuff-avatar/tkw.jpg";
import avatar15 from "../assets/stuff-avatar/zmr.jpg";
import avatar16 from "../assets/stuff-avatar/zh.jpg";
import avatar17 from "../assets/stuff-avatar/ycm.jpg";
import avatar18 from "../assets/stuff-avatar/szx.jpg";
import avatar19 from "../assets/stuff-avatar/ahy.jpg";
import avatar20 from "../assets/stuff-avatar/lyc.jpg";
import avatar21 from "../assets/stuff-avatar/oyyx.jpg";
import avatar22 from "../assets/stuff-avatar/ly.jpg";
import avatar23 from "../assets/stuff-avatar/zhy.jpg";
import avatar24 from "../assets/stuff-avatar/hxy.jpg";
import avatar25 from "../assets/stuff-avatar/bk.jpg";
import avatar26 from "../assets/stuff-avatar/ltq.jpg";
import avatar27 from "../assets/stuff-avatar/zzy.jpg";
import avatar28 from "../assets/stuff-avatar/zyc.jpg";
import avatar29 from "../assets/stuff-avatar/tjh.jpg";
import avatar30 from "../assets/stuff-avatar/cky.jpg";
import avatar31 from "../assets/stuff-avatar/bcy.jpg";
import avatar32 from "../assets/stuff-avatar/zyj.jpg";
import avatar33 from "../assets/stuff-avatar/lyf.jpg";
import avatar34 from "../assets/stuff-avatar/zx.jpg";
import debounce from "../utils/debounce.js";
export default {
  name: `Stuff`,
  data() {
    return {
      stuffInformation: [
        {
          name: "严宇倞",
          goodAt: "Java，Web，Microservices",
          ImgUrl: avatar1,
          description:
            "中年程序员，低配全栈，想跨过山和大海，也想穿过人山人海。"
        },
        {
          name: "顾怡",
          goodAt: "房主",
          ImgUrl: avatar2,
          description: "青柚管理员，以前是前端，现在是房主。"
        },
        {
          name: "江子玮",
          goodAt: "前端",
          ImgUrl: avatar3,
          description: "骚还是我骚啊~"
        },
        {
          name: "朱晓峰",
          goodAt: "后端、数据分析",
          ImgUrl: avatar4,
          description: "世间草木皆美，人不是。中药很苦，你也是。"
        },
        {
          name: "张楚月",
          goodAt: "UI",
          ImgUrl: avatar5,
          description: "The unity of inner knowledge and action —"
        },
        {
          name: "唐子惠",
          goodAt: "UI、画师",
          ImgUrl: avatar6,
          description: "专注做个萌萌哒的吉祥物（求约稿啊！）"
        },
        {
          name: "顾刘健",
          goodAt: "运维",
          ImgUrl: avatar7,
          description: "大概专业打杂100年。"
        },
        {
          name: "王悉宇",
          goodAt: "后端，其他",
          ImgUrl: avatar8,
          description: "划水打杂。假装自己是后端，其实是咸鱼一条。"
        },
        {
          name: "吴爱天",
          goodAt: "后端",
          ImgUrl: avatar9,
          description: "切图，写写业务，啥杂都打打的万金油。。。。。"
        },
        {
          name: "李赫",
          goodAt: "UI",
          ImgUrl: avatar10,
          description: "电光微院大四学生，负责小程序部分UI设计。"
        },
        {
          name: "周捷",
          goodAt: "安全",
          ImgUrl: avatar11,
          description: "妈耶，这个站怎么日?"
        },
        {
          name: "彭泽凡",
          goodAt: "前端",
          ImgUrl: avatar12,
          description:
            "反正主页一般没人看，我就随便写写是不是也没人能发现，顺便，千万不要加江同学微信！切记。"
        },
        {
          name: "宁泓皓",
          goodAt: "前端",
          ImgUrl: avatar13,
          description: "对不起，02是我老婆…"
        },
        {
          name: "谭康威",
          goodAt: "UI、运营、其他",
          ImgUrl: avatar14,
          description:
            "南邮装修专业一个画UI的运营，承包青柚各种宣传推广和各种大活装修业务。"
        },
        {
          name: "赵明睿",
          goodAt: "后端",
          ImgUrl: avatar15,
          description:
            "基本上所有精力都放在了后端学习，日常有点颓废，有点懒，觉得自己什么都不会，想要健身的路上。然后单身。"
        },
        {
          name: "邹昊",
          goodAt: "前端",
          ImgUrl: avatar16,
          description:
            "邹缨齐紫，昊天罔极。我只想说为什么面向对象的程序员没有对象啊！人生真是寂寞如雪唉，恋爱是不可能的，还是好好学前端吧2333。"
        },
        {
          name: "杨丛铭",
          goodAt: "UI、前端",
          ImgUrl: avatar17,
          description: "在理性的代码和感性的设计中间找到平衡。"
        },
        {
          name: "史朝夕",
          goodAt: "运维",
          ImgUrl: avatar18,
          description:
            "负责工作室的运维工作，以操作Linux操作系统为主，对相关服务器进行基本环境的搭建，对服务的运行状况进行监控和管理，优化相关服务的效率。\n其实也是个拉拉人("
        },
        {
          name: "安泓烨",
          goodAt: "后端，其他",
          ImgUrl: avatar19,
          description: "业余写代码，擅长划水喊6，至今单身狗一枚。"
        },
        {
          name: "林禹辰",
          goodAt: "后端",
          ImgUrl: avatar20,
          description: "B160110班长，爱生活，爱运动，爱挑战，爱做饭，爱编程！！"
        },
        {
          name: "欧阳宇翔",
          goodAt: "安卓",
          ImgUrl: avatar21,
          description: "本工作室最菜，广告位招租，头像我老婆。"
        },
        {
          name: "刘源",
          goodAt: "后端",
          ImgUrl: avatar22,
          description: "大三计软件院咸鱼，赵明睿大佬的小弟"
        },
        {
          name: "赵恒远",
          goodAt: "前端",
          ImgUrl: avatar23,
          description: "爱好学习，喜欢熬夜，喜欢新奇的事情，喜欢湖人队和电影。"
        },
        {
          name: "黄兴源",
          goodAt: "前端",
          ImgUrl: avatar24,
          description: "在混乱邪恶的世界里爱我所爱,行我所行。"
        },
        {
          name: "鲍可",
          goodAt: "前端",
          ImgUrl: avatar25,
          description:
            "南京邮电大学17级计算机学院信息安全学生,主要方向是前端,不断学习中～"
        },
        {
          name: "梁天琦",
          goodAt: "前端",
          ImgUrl: avatar26,
          description: "JavaScript是世界上最混乱邪恶的语言"
        },
        {
          name: "郑致远",
          goodAt: "后端",
          ImgUrl: avatar27,
          description: "普通话二甲选手。"
        },
        {
          name: "朱逸尘",
          goodAt: "后端",
          ImgUrl: avatar28,
          description: "爱生活的我随手一打就是漂亮的十五字。"
        },
        {
          name: "谭嘉晖",
          goodAt: "前端",
          ImgUrl: avatar29,
          description: "会点js，立志成为一名成功的切图仔。"
        },
        {
          name: "陈康扬",
          goodAt: "前端",
          ImgUrl: avatar30,
          description:
            "参与本科生小程序前端开发，希望认识更多有趣的灵魂，大家都加油！"
        },
        {
          name: "柏超宇",
          goodAt: "HR",
          ImgUrl: avatar31,
          description: "狒狒大渣男，校草快脱单"
        },
        {
          name: "张佑杰",
          goodAt: "后端",
          ImgUrl: avatar32,
          description: "张佑杰，男，1999年生，现年18岁，马上19岁，明年20岁。"
        },
        {
          name: "李懿峰",
          goodAt: "运营",
          ImgUrl: avatar33,
          description:
            "万分感谢青柚工作室收容very vegetable的我。希望这个世界因为我而变得好一点，在那之前先努力自我救赎吧。"
        },
        {
          name: "周馨",
          goodAt: "运营",
          ImgUrl: avatar34,
          description: "等待就是浪费青春"
        }
      ],
      borderColorArray: [`#22b574`, `#9dd647`, `#d9db61`],
      cardInfo: {},
      cardShowStatus: false,
      disappearStatus: false,
      leftDistance: 0
    };
  },
  methods: {
    showCard(index) {
      debounce(
        (() => {
          this.cardInfo = this.stuffInformation[index];
          this.cardShowStatus = true;
        })()
      );
    },
    closeCard() {
      this.cardShowStatus = false;
      this.disappearStatus = true;
    },
    borderColor(index) {
      if ((index + 1) % 3 === 0) {
        return this.borderColorArray[2];
      } else if ((index + 1) % 3 === 2) {
        return this.borderColorArray[1];
      }
    },
    scrollLeft() {
      const maxWidth = document.querySelector(`.stuff-container`).clientWidth;
      const innerWidth = document.querySelector(`.stuff-avatar`).clientWidth;
      const leftDistance = document.querySelector(`.stuff-container`)
        .scrollLeft;
      const bodyWidth = document.querySelector(`body`).clientWidth;
      if (bodyWidth < 996) {
        this.leftDistance = leftDistance / (innerWidth / maxWidth);
      } else {
        this.leftDistance = leftDistance;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../style/animate.sass"
@import "../style/bubble.sass"
.part2
  width: 100vw
  // min-height: 861px
  background-image: url("../assets/background/wave-line_2.svg")
  background-size: cover
  background-repeat: no-repeat
  margin-bottom: 3.3125rem
  display: flex
  justify-content: center
  .part2-content-container
    width: 72%
    position: relative
    @media(max-width: $phone)
      width: 87%
    .part2-container-title
      margin-bottom: 3.5rem
      margin-top: 5.75rem
      position: relative
      .title-font
        font-weight: 600
        font-size: 2.5rem
        color: #222222
        @media(max-width: $phone)
          font-size: 1.5rem
    .stuff-container
      margin: auto
      width: 100%
      overflow-x: scroll
      overflow-y: hidden
      @media(min-width: $phone)
        max-width: 53.875rem
        max-height: 43rem
      .detail-information-card
        position: absolute
        bottom: 15%
        left: 0
        right: 0
        margin: auto
        min-height: 9.375rem
        background: #ffffff
        box-shadow: 0px 0px 0.375rem 0px rgba(0, 0, 0, 0.15)
        border-image: linear-gradient(to right, #22b574, #9dd647,#d9db61)
        border-bottom-left-radius: 0.625rem
        border-bottom-right-radius: 0.625rem
        box-sizing: border-box
        border-image-slice: 10
        border-top: 0.375rem solid #22b574
        @media(min-width: $phone)
          bottom: 5%
          width: 25rem
        div
          padding: 0.625rem
      .stuff-avatar
        width: 1650px
        overflow-x: scroll
        overflow-y: hidden
        max-height: 42.75rem
        // margin-bottom: 2.125rem
        display: inline-block
        .stuff-card
          margin-left: 0.1rem
          float: left
          display: inline-block
          width: 8.875rem
          height: 8rem
          box-sizing: border-box
          border-top: 0.375rem solid #22b574
          margin-right: 2.375rem
          margin-bottom: 3.5rem
          text-align: center
          background: #ffffff
          box-shadow: 0px 0px 0.375rem 0px rgba(0, 0, 0, 0.15)
          border-bottom-left-radius: 0.625rem
          border-bottom-right-radius: 0.625rem
          @media(max-width: $phone)
            margin-bottom: 1.5rem
          .card-inner-block
            width: 100%
            height: 100%
            display: flex
            flex-direction: column
            align-items: center
            .stuff-card-avatar
              margin-top: 0.875rem
              width: 3.5rem
              height: 3.5rem
              margin-bottom: 0.5rem
              border-radius: 50%
              background-image: linear-gradient(90deg, 100%)
              background-size: cover
            .stuff-card-name
              color: #222222
              font-size: 1.25rem
    .scroll-bar
      max-width: 53.875rem
      margin: auto
      margin-top: 2.125rem
      height: 1rem
      display: flex
      align-items: center
      position: relative
      .scroll-bar-button
        position: absolute
        left: 0
        width: 4rem
        height: 1rem
        border-radius: 0.5rem
        background-color: #22b574
      .scroll-bar-line
        background-color: rgba(191,197,204,0.5)
        height: 0.0625rem
        width: 100%
</style>
