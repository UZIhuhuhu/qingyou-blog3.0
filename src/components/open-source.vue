<template>
  <div class="part5">
    <div class="part-title-container">
      <div class="title-bubble bubble1"></div>
      <div class="title-bubble bubble2"></div>
      <span class="title-text">我们的开源</span>
    </div>
    <div class="image-container">
        <img src="../assets/open-source/qingyougit.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: `OpenSource`
};
</script>

<style lang="sass" scoped>
@import "../style/bubble.sass"
.part5
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  @media(min-width: 660px)
    margin-bottom: 205px
  .part-title-container
    margin: 0 auto
    width: 72%
    height: 4rem
    position: relative
    margin-top: 2rem
    .title-text
      font-size: 2.5rem
      @media(max-width: 660px)
        font-size: 1.5rem
      color: #222222
      font-weight: 600
  .image-container
    width: 72%
    margin-top: 4rem
    height: 13rem
    img
      width: 100%
      border: solid 1px rgba(151,151,151,0.2)
      border-radius: 0.5rem
      box-shadow: 0 3px 8px 2px #f5f5f5
</style>
