<template>
  <div class="loadPretty">
    <div class="profileNameBlock"></div>
    <div class="profileMoreBlock"></div>
    <div class="sentencesBlock"></div>
    <div class="sentencesBlock2"></div>
    <div class="sentencesBlock3"></div>
    <div class="sentencesBlock4"></div>
  </div>
</template>

<script>
export default {
  name: 'NewsFeedLoad',
  data() {
    return {
      title: 'I am a NewsFeedLoad component'
  }
}
}
</script>

<style scoped>
.loadPretty {
  margin-left: 640px;
  width: 50%;
  height: 260px;
  line-height: 80px;
  background-color: white;
  padding: 30px;
  margin-bottom: 1%;
  -webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
border: 5px;
border-color: black;
/* border-style: solid; */
}

.profileNameBlock {
  background-color: #E7E7E7;
  width: 100px;
  height: 100px;
}

.profileMoreBlock {
  background-color: #E7E7E7;
  width: 15%;
  height: 8%;
  margin-left: 9%;
  margin-top: -50px;
}

.sentencesBlock{
  background-color: #E7E7E7;
  width: 10%;
  height: 8%;
  margin-left: 9%;
  margin-top: -60px;
}

.sentencesBlock2 {
  background-color: #E7E7E7;
  width: 80%;
  height: 8%;
  margin-left: 0%;
  margin-top: 100px;
}

.sentencesBlock3 {
  background-color: #E7E7E7;
  width: 100%;
  height: 8%;
  margin-left: 0%;
  margin-top: 20px;
}

.sentencesBlock4 {
  background-color: #E7E7E7;
  width: 30%;
  height: 8%;
  margin-left: 0%;
  margin-top: 20px;
}
</style>
