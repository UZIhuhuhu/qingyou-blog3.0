<template>
  <div class="part3">
    <div class="part3-container">
      <div class="part3-header">
        <div class="part3-title-container">
          <div class="title-bubble bubble1"></div>
          <div class="title-bubble bubble2"></div>
          <div class="title-font">我们推出了</div>
        </div>
        <div class="header-image"></div>
      </div>
      <div class="part3-body">
        <div class="project-card">
          <div class="project-card-header">
            <div class="project-card-name">「南邮本科生小程序」</div>
            <div class="project-detail">出于对技术的热爱和对设计的追求，青柚工作室成员本着为南邮学生服务的出发点，创造解决生活学习中存在的痛点的可能，开发产品，服务同学，提升技术能力。青柚，我们在创造可能。</div>
          </div>
          <div class="project-card-body">
            <img src="../assets/product-intro/logo1.png" alt="" />
          </div>
        </div>
        <div class="project-card">
          <div class="project-card-header">
            <div class="project-card-name">「南邮研究生小程序」</div>
            <div class="project-detail">出于对技术的热爱和对设计的追求，青柚工作室成员本着为南邮学生服务的出发点，创造解决生活学习中存在的痛点的可能，开发产品，服务同学，提升技术能力。青柚，我们在创造可能。</div>
          </div>
          <div class="project-card-body">
            <img src="../assets/product-intro/logo2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `Project`
};
</script>

<style lang="sass" scoped>
@import "../style/bubble.sass"
.part3
  width: 100vw
  background-image: url('../assets/background/wave-line_3.svg')
  background-size: cover
  background-repeat: no-repeat
  display: flex
  justify-content: center
  background-position-y: -200px
  .part3-container
    width: 72%
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 97px
    @media(max-width: $phone)
      width: 100%
    .part3-header
      width: 100%
      display: flex
      justify-content: space-between
      margin-bottom: 3.5rem
      @media(max-width: $phone)
        width: 72%
        flex-direction: column
      .part3-title-container
        position: relative 
      .title-font
        font-weight: 600
        font-size: 2.5rem
        @media(max-width: $phone)
          font-size: 1.5rem
        color: #222222
      .header-image
        width: 540px
        height: 417px
        @media(max-width: $phone)
          width: 280px
          height: 210px
          margin: auto
        background-image: url('../assets/Illustrations/usability_testing_2xs4.svg')
        background-size: cover
    .part3-body
      width: 100%
      display: flex
      justify-content: space-between
      @media(max-width: $phone)
        align-items: center
        flex-direction: column
      .project-card
        width: 460px
        height: 345px
        border-radius: 10px
        position: relative
        @media(min-width: $phone)
          margin-right: 20px
        @media(max-width: $phone)
          margin-bottom: 40px
          width: 280px
          height: 210px
        &:hover
          .project-card-header
            transition: transform 0.4s ease-out
            transform: translateY(-90px)
            @media(max-width: $phone)
              transform: translateY(-65px)
          .project-card-body
            transition: transform 0.4s ease-out
            transform: scale(1.1) translateY(60px)
            @media(max-width: $phone)
              transform: scale(1.1) translateY(45px)
        .project-card-header
          border-top-left-radius: 10px
          border-top-right-radius: 10px
          width: 100%
          height: 82%
          position: absolute
          top: 0
          background-color: #22b574
          color: #ffffff
          .project-card-name
            margin-left: 36px
            padding-top: 24px
            margin-bottom: 16px
            @media(min-width: $phone)
              font-size: 24px
          .project-detail
            margin: auto
            line-height: 20px
            font-size: 90%
            @media(min-width: $phone)
              max-width: 390px
              font-size: 18px
              line-height: 24px
        .project-card-body
          width: 100%
          height: 82%
          border-radius: 10px
          position: absolute
          top: 60px
          background-color: #fafafa
          background-size: cover
          display: flex
          justify-content: center
          align-items: center
          img
            margin: auto
</style>

