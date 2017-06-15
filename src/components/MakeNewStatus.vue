<template>
  <div class="statusStyle">
      <div class="inputStyle">
        <input placeholder="What's on your mind?" type="text"/>
        <button class="submitStatusButton"><strong>Submit</strong></button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MakeNewStatus',
  data() {
    return {
      title: 'I am a MakeNewStatus component'
  }
}
}
</script>

<style scoped>
.statusStyle {
  margin-left: 25%;
  width: 50%;
  height: 260px;
  line-height: 80px;
  background-color: white;
  padding: 30px;
  margin-bottom: 1%;
  -webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
}

.inputStyle {
  float: left;
}

.inputStyle, input {
  border: 0;
  outline: 0;
  width: 1000px;
  -webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
}

.inputStyle .submitStatusButton {
  margin-top: 10px;
  margin-left: 982px;
}

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #a6a6a6;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #a6a6a6;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #a6a6a6;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #a6a6a6;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:    #a6a6a6;
}

.seperator {
  border-left:1px solid #000;
  height:600px;
  margin-left: 50%;
  margin-top: -25%;
  color: black;
}

.App-form-container {
  margin-left: 56%;
  margin-top: -22%;
}

input {
  font-size: 60px;
  margin-bottom: 50px;
  height: 100px;
  -webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
border-color: black;
color: black;
}

form {
  margin-top: 50px;
}

button {
  width: 300px;
  height: 100px;
  font-size: 30px;
  background-color:  #C70039;
  border: none;
  color: white;
  margin-top: 160px;
  margin-left: -300px;
  position: absolute;
  font-size: 60px;
  -webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
}

.App {
  background-color: #C70039;
  color: black;
}

.loadPretty {
  background-color: white;
  width: 100%;
  height: 100%;
}

.App-banner {
  font-size: 80px;
  background-color: #C70039;
  color: black;
  margin-top: -50px;
}

.App-banner h1 {
  margin-top: 50px;
  margin-left: 110px;
  color: white;
}

.App-intro {
  font-size: 60px;
  background-color: black;
  color: black;
}

.App-intro-container {
  margin-top: 12%;
  margin-left: 10%;
  margin-right: auto;
  text-align: left;
  width: 800px;
  font-size: 60px;
  color: black;
}

</style>
