<template>
  <div class="main" @mousedown="startDrag" @touchstart="startDrag"
    @mousemove="onDrag" @touchmove="onDrag"
    @mouseup="stopDrag" @touchend="stopDrag" @mouseleave="stopDrag">
    <svg class="bg" width="320" height="560">
      <path :d="headerPath" fill="#C70039"></path>
    </svg>
    <h1>freed.</h1>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content" :style="contentPosition">
      <slot name="content"></slot>
    </div>
  </div>
  </div>
</template>

<script>
import dynamics from 'dynamics.js'
export default {
  data: function () {
    return {
      dragging: false,
      // quadratic bezier control point
      c: { x: 250, y: 250 },
      // record drag start point
      start: { x: 0, y: 0 }
    }
  },
  computed: {
    headerPath: function () {
      return 'M0,0 L3020,0 3020,250' +
        'Q' + this.c.x + ',' + this.c.y +
        ' 0,250'
    },
    contentPosition: function () {
      var dy = this.c.y - 250
      var dampen = dy > 0 ? 2 : 4
      return {
        transform: 'translate3d(0,' + dy / dampen + 'px,0)'
      }
    }
  },
  methods: {
    startDrag: function (e) {
      e = e.changedTouches ? e.changedTouches[0] : e
      this.dragging = true
      this.start.x = e.pageX
      this.start.y = e.pageY
    },
    onDrag: function (e) {
      e = e.changedTouches ? e.changedTouches[0] : e
      if (this.dragging) {
        this.c.x = 250 + (e.pageX - this.start.x)
        // dampen vertical drag by a factor
        var dy = e.pageY - this.start.y
        var dampen = dy > 0 ? 1.5 : 4
        this.c.y = 250 + dy / dampen
      }
    },
    stopDrag: function () {
      if (this.dragging) {
        this.dragging = false
        dynamics.animate(this.c, {
          x: 250,
          y: 250
        }, {
          type: dynamics.spring,
          duration: 700,
          friction: 280
        })
      }
    }
  }
}
</script>

<style scoped>
.bg {
  width: 100vw;
}
.main {
  width: 100vw;
  height: 0vh;
  background-color: #C70039;
  position: relative;
    margin-bottom: 20vh;
}
  h1 {
    font-size: 8vw;
    color: black;
    text-align: left;
    color: white;
    margin-top: -22vw;
    margin-left: 2vw;
  }
</style>
