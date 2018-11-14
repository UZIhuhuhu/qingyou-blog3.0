<template>
  <div class="part1-container">
    <div class="top">
      <div class="studio-icon"><img src="../assets/logo/qingyoulogo.svg" /></div>
      <button>Oauth认证</button>
    </div>
    <div class="part1">
      <div class="introduction">
        <div class="introduction-img"></div>
        <div class="introduction-text">
          <h1>『青柚』<br />创造可能</h1>
          <br />
          <p>
            青柚工作室成立于2017年10月，现已有超过30位成员分别负责技术、设计、运营推广等工作。截止到现在，青柚工作室已经开发“南京邮电大学”、
            “校谈”等微信小程序。其中，“南邮小程序”现已有超过3.9万用户，日均活跃量超过8千人次。
            <br />出于对技术的热爱和对设计的追求，青柚工作室成员本着为南邮学生服务的出发点，创造解决生活学习中存在痛点的可能，开发产品，服务同学，提升技术能力。青柚，我们在创造可能。
          </p>
        </div>
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

.part1-container
  background-image: url("../assets/background/wave-line_1.svg")
  background-repeat: no-repeat
  background-size: cover

.top
  width: 70%
  margin: 0 auto
  border: 0.375rem solid #a7e1c7
  border-top: none
  height: 5.125rem
  border-radius: 0 0 0.9375rem 0.9375rem
  display: flex
  justify-content: space-between
  align-items: center
  @media(max-width: 660px)
    margin-bottom: 40px
  .studio-icon
    margin-left: 2.25rem
  button
    font-size: 0.875rem
    width: 8.75rem
    height: 2.5rem
    margin-right: 1.3125rem
    color: white
    outline: none
    border: none
    border-radius: 2.5rem
    text-decoration: none
    background: linear-gradient(to right, #8bd21f, #d8d23e)
    box-shadow: 0.125rem 0.25rem 0.3125rem #f3f6ac
    cursor: pointer
    &:active
      transform: translateY(0.1875rem)
      box-shadow: 0.125rem 0.125rem 0.3125rem #f3f6ac

.introduction
  width: 70%
  margin: 0rem auto
  display: flex
  align-items: flex-end
  justify-content: center
  .introduction-img
    background-image: url("../assets/Illustrations/static_assets_rpm6.svg")
    background-size: 100% 100%
    width: 34.75rem
    height: 24.6875rem
    @media(max-width: 660px)
      display: none
  .introduction-text
    width: 23.8125rem
    margin-top: 5rem
    h1
      font-size: 3.5rem
      color: #22b574
    p
      text-align: justify
      font-size: 1.25rem
      color: #222222

@media only screen and (max-width: 804px)
  .top
    .studio-icon
      width: 7rem
      margin-left: 1rem
      img
        width: 6rem
    button
      width: 5rem
      margin-right: 0.7rem
  .introduction
    flex-direction: column
    align-items: center
    .introduction-img
      width: 100%
    .introduction-text
      width: 100%
      margin: 0rem auto
  .introduction-text h1
    text-align: center
</style>
