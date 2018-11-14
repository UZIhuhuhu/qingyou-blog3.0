
<template>
  <div id="part6">
    <!-- <div class="animation-container"> -->
    <div class="animation-container animation-item1"></div>
    <div class="animation-container animation-item2"></div>
    <!-- </div> -->
    <div class="bcg1">
      <div class="bcg2">
        <div class="items">
          <div class="text">
            <div class="cube"></div>
            <br />
            <p>官方邮箱</p>
            <p>sast-service@njupt.edu.cn</p>
            <br /><br />
            <div class="cube"></div>
            <br />
            <div><a href="" style="color:#ffffff">开源仓库</a></div>
            <div><a href="" style="color: #ffffff">AUSTO认证</a></div>
          </div>
          <div class="QR-Code">
            <div>
              <img
                src="../assets/qrcode/qrcode.png"
                style="width:10rem;height:10rem"
              />
            </div>
            <p>官方QQ</p>
          </div>
        </div>
        <div class="bottom">
          <p>CopyRight @2017-2018 青柚工作室 qingyou.njupt.edu.cn</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: `Footer`
};
</script>


<style lang="sass" scoped>
#part6
  width: 100vw
  position: relative

*
  margin: 0
  padding: 0

.animation-container
  height: 100px
  width: 100%
  position: absolute

.animation-item1
  -webkit-animation: rotate1 7s ease-out infinite
  animation: rotate1 7s ease-out infinite
  background-color: #90dab9
  -webkit-transform-origin: right
  transform-origin: right
  top: -2px

.animation-item2
  top: 7px
  -webkit-animation: rotate2 7s ease-out infinite
  animation: rotate2 7s ease-out infinite
  -webkit-transform-origin: left
  transform-origin: left
  background-color: #58c796

.bcg1
  height: 35.875rem
  background-color: #90dab9
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-align: end
  -ms-flex-align: end
  align-items: flex-end

.bcg2
  width: 100vw
  height: 31rem
  background-color: #58c796
  position: relative

.items
  position: absolute
  top: 50%
  left: 50%
  margin: -6.7188rem -15rem
  width: 30rem
  height: 13.4375rem
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-pack: justify
  -ms-flex-pack: justify
  justify-content: space-between

.cube
  width: 2.5rem
  height: 0.625rem
  background-color: #ffffff

.items .text
  p
    font-size: 1.125rem
    color: #ffffff
  div
    margin-bottom: 0.5rem
    font-size: 1.125rem
    text-decoration: underline

.QR-Code
  div
    width: 10.9375rem
    height: 10.9375rem
    background-color: #ace3cb
    border-radius: 0.625rem
    margin-bottom: 0.75rem
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    -webkit-box-align: center
    -ms-flex-align: center
    align-items: center
    -webkit-box-pack: center
    -ms-flex-pack: center
    justify-content: center
  p
    text-align: center
    font-size: 1.125rem
    color: #ffffff

.bottom
  position: absolute
  bottom: 0
  width: 100vw
  height: 3.125rem
  border-top: 0.5px solid rgba(255,255,255,0.5)
  p
    text-align: center
    line-height: 3.125rem
    font-size: 0.875rem
    color: #ffffff

@media only screen and (max-width: 600px)
  .bcg1
    height: 45.875rem
  .bcg2
    height: 43.8125rem
  .items
    -webkit-box-orient: vertical
    -webkit-box-direction: normal
    -ms-flex-direction: column
    flex-direction: column
    -webkit-box-align: center
    -ms-flex-align: center
    align-items: center
    height: 32rem
    width: 13.4375rem
    margin: -16rem -6.7188rem

@-webkit-keyframes rotate1
  0%
    -webkit-transform: rotate(1.5deg)
    transform: rotate(1.5deg)

  10%
    -webkit-transform: rotate(1.2deg)
    transform: rotate(1.2deg)

  20%
    -webkit-transform: rotate(1deg)
    transform: rotate(1deg)

  30%
    -webkit-transform: rotate(0.5deg)
    transform: rotate(0.5deg)

  40%
    -webkit-transform: rotate(0.2deg)
    transform: rotate(0.2deg)

  50%
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)

  60%
    -webkit-transform: rotate(0.2deg)
    transform: rotate(0.2deg)

  70%
    -webkit-transform: rotate(0.5deg)
    transform: rotate(0.5deg)

  80%
    -webkit-transform: rotate(1deg)
    transform: rotate(1deg)

  90%
    -webkit-transform: rotate(1.2deg)
    transform: rotate(1.2deg)

  100%
    -webkit-transform: rotate(1.5deg)
    transform: rotate(1.5deg)


@keyframes rotate1
  0%
    -webkit-transform: rotate(1.5deg)
    transform: rotate(1.5deg)

  10%
    -webkit-transform: rotate(1.2deg)
    transform: rotate(1.2deg)

  20%
    -webkit-transform: rotate(1deg)
    transform: rotate(1deg)

  30%
    -webkit-transform: rotate(0.5deg)
    transform: rotate(0.5deg)

  40%
    -webkit-transform: rotate(0.2deg)
    transform: rotate(0.2deg)

  50%
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)

  60%
    -webkit-transform: rotate(0.2deg)
    transform: rotate(0.2deg)

  70%
    -webkit-transform: rotate(0.5deg)
    transform: rotate(0.5deg)

  80%
    -webkit-transform: rotate(1deg)
    transform: rotate(1deg)

  90%
    -webkit-transform: rotate(1.2deg)
    transform: rotate(1.2deg)

  100%
    -webkit-transform: rotate(1.5deg)
    transform: rotate(1.5deg)


@-webkit-keyframes rotate2
  0%
    -webkit-transform: rotate(-1deg)
    transform: rotate(-1deg)

  5%
    -webkit-transform: rotate(-0.8deg)
    transform: rotate(-0.8deg)

  10%
    -webkit-transform: rotate(-0.6deg)
    transform: rotate(-0.6deg)

  15%
    -webkit-transform: rotate(-0.4deg)
    transform: rotate(-0.4deg)

  20%
    -webkit-transform: rotate(-0.2deg)
    transform: rotate(-0.2deg)

  25%
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)

  30%
    -webkit-transform: rotate(0.5deg)
    transform: rotate(0.5deg)

  35%
    -webkit-transform: rotate(1deg)
    transform: rotate(1deg)

  40%
    -webkit-transform: rotate(1.5deg)
    transform: rotate(1.5deg)

  45%
    -webkit-transform: rotate(2deg)
    transform: rotate(2deg)

  47.5%
    -webkit-transform: rotate(2.5deg)
    transform: rotate(2.5deg)

  50%
    -webkit-transform: rotate(2.5deg)
    transform: rotate(2.5deg)

  52.5%
    -webkit-transform: rotate(2.5deg)
    transform: rotate(2.5deg)

  55%
    -webkit-transform: rotate(2deg)
    transform: rotate(2deg)

  60%
    -webkit-transform: rotate(1.5deg)
    transform: rotate(1.5deg)

  65%
    -webkit-transform: rotate(1deg)
    transform: rotate(1deg)

  70%
    -webkit-transform: rotate(0.5deg)
    transform: rotate(0.5deg)

  75%
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)

  80%
    -webkit-transform: rotate(-0.2deg)
    transform: rotate(-0.2deg)

  85%
    -webkit-transform: rotate(-0.4deg)
    transform: rotate(-0.4deg)

  90%
    -webkit-transform: rotate(-0.6deg)
    transform: rotate(-0.6deg)

  95%
    -webkit-transform: rotate(-0.8deg)
    transform: rotate(-0.8deg)

  100%
    -webkit-transform: rotate(-1deg)
    transform: rotate(-1deg)


@keyframes rotate2
  0%
    -webkit-transform: rotate(-1deg)
    transform: rotate(-1deg)

  5%
    -webkit-transform: rotate(-0.8deg)
    transform: rotate(-0.8deg)

  10%
    -webkit-transform: rotate(-0.6deg)
    transform: rotate(-0.6deg)

  15%
    -webkit-transform: rotate(-0.4deg)
    transform: rotate(-0.4deg)

  20%
    -webkit-transform: rotate(-0.2deg)
    transform: rotate(-0.2deg)

  25%
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)

  30%
    -webkit-transform: rotate(0.5deg)
    transform: rotate(0.5deg)

  35%
    -webkit-transform: rotate(1deg)
    transform: rotate(1deg)

  40%
    -webkit-transform: rotate(1.5deg)
    transform: rotate(1.5deg)

  45%
    -webkit-transform: rotate(2deg)
    transform: rotate(2deg)

  47.5%
    -webkit-transform: rotate(2.5deg)
    transform: rotate(2.5deg)

  50%
    -webkit-transform: rotate(2.5deg)
    transform: rotate(2.5deg)

  52.5%
    -webkit-transform: rotate(2.5deg)
    transform: rotate(2.5deg)

  55%
    -webkit-transform: rotate(2deg)
    transform: rotate(2deg)

  60%
    -webkit-transform: rotate(1.5deg)
    transform: rotate(1.5deg)

  65%
    -webkit-transform: rotate(1deg)
    transform: rotate(1deg)

  70%
    -webkit-transform: rotate(0.5deg)
    transform: rotate(0.5deg)

  75%
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)

  80%
    -webkit-transform: rotate(-0.2deg)
    transform: rotate(-0.2deg)

  85%
    -webkit-transform: rotate(-0.4deg)
    transform: rotate(-0.4deg)

  90%
    -webkit-transform: rotate(-0.6deg)
    transform: rotate(-0.6deg)

  95%
    -webkit-transform: rotate(-0.8deg)
    transform: rotate(-0.8deg)

  100%
    -webkit-transform: rotate(-1deg)
    transform: rotate(-1deg)
</style>

