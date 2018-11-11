<template>
 <div class="part1">
  <div class="top">
    <div class="studio-icon"><img src="../assets/logo/qingyoulogo.svg"></div>
    <button>Oauth认证</button>
  </div>
  <div class="introduction">
    <div class="introduction-img"></div>
    <div class="introduction-text">
      <h1>青柚<br>创造可能</h1><br>
      <p>青柚工作室成立于2017年10月，现已有超过30位成员分别负责技术、设计、运营推广等工作。截止到现在，青柚工作室已经开发“南京邮电大学”、
        “校谈”等微信小程序。其中，“南邮小程序”现已有超过3.9万用户，日均活跃量超过8千人次。
        <br>出于对技术的热爱和对设计的追求，青柚工作室成员本着为南邮学生服务的出发点，创造解决生活学习中存在痛点的可能，开发产品，服务同学，提升技术能力。青柚，我们在创造可能。
      </p>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: `Home`
};
</script>


<style lang="sass" scoped>
*
  margin: 0
  padding: 0

.part1
  height: 896px
  background-image: url('../assets/background/wave-line_1.svg')
  background-repeat: no-repeat
  background-size: cover;

.top
  margin: 0 auto
  border-left: 6px solid lightgreen
  border-right: 6px solid lightgreen
  border-bottom: 6px solid lightgreen
  height: 82px
  width: 70%
  border-radius: 0 0 15px 15px
  display: flex
  justify-content: space-between
  align-items: center
  .studio-icon
    margin-left: 36px
  button
    font-size: 14px
    width: 140px
    height: 40px
    margin-right: 21px
    color: white
    outline: none
    border: none
    border-radius: 40px
    text-decoration: none
    background: linear-gradient(to right, #8bd21f, #d8d23e)
    box-shadow: 2px 4px 5px #f3f6ac
    cursor: pointer
    &:active
      transform: translateY(3px)

.introduction
  margin: 0px auto
  // border: 1px solid black;
  display: flex
  align-items: flex-end
  justify-content: center
  .introduction-img
    background-image: url('../assets/Illustrations/static_assets_rpm6.svg')
    background-size: 100% 100%
    width: 556px
    height: 395px
  .introduction-text
    width: 381px
    margin-top: 80px
    h1
      font-size: 56px
      color: #22b574
    p
      line-height: 1.4375rem
      text-align: justify
      font-size: 1.25rem
      color: #222222
</style>
