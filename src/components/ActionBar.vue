<template>
<div class="main">
  <h1>freed.</h1>
</div>
</template>

<script>
export default {
  name: 'action-bar',
  data() {
    return {
      title: 'Hello World',
      user: {
        firstName: 'Tyler',
        lastName: 'Furby'
      },
      showName: false,
      items: [
        {title: 'Item One'},
        {title: 'Item Two'},
        {title: 'Item Three'}
      ]
    }
  },
  methods: {
    greet: function(greeting){
      alert(greeting);
    },
    pressKey: function(e){
      console.log(e.target.value);
    },
    enterHit: function(){
      console.log('You hit enter');
    }
  }
}
</script>

<style scoped>
.main {
  width: 100vw;
  height: 200px;
  background-color: #C70039;
  margin-top: -150px;
  margin-left: -8px;
}
  h1 {
    font-size: 160px;
    color: black;
    text-align: left;
    margin-top: 140px;
    margin-left: 30px;
    color: white;
  }
  p {
    font-family: 'Avenir';
    font-size: 40px;
    font-weight: bold;
    margin-top: -8%;
    float: right;
    color: white;
    padding-right: 30px;
  }
</style>
