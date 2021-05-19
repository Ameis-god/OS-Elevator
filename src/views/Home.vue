<template>
  <div class="home">
    <div>
        <img alt="Vue logo" src="../assets/tongji.png" class="TJ">
    </div>
    <div>
        <img alt="OS logo" src="../assets/OS.png" class="OSpic">
    </div>
    <div class="textElv">
       <p class="text">进程调度体验请选择下方按钮</p>
       <router-link to="/about" class="About">电梯调度</router-link></div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
.TJ{
    width: 450px;
    height: 400px;
}
.OSpic{
    width: 300px;
    height: 300px;
    font-size: 15px;
    top:50%;
    width:50;
    align-items:center;
}
.text{
text:center;
    font-size: 50px;
    font-weight: bold;
    color: #2c3e50;
}
.About{
    text:center;
    font-size: 35px;
    font-weight: bold;
    color:cornflowerblue;
}
</style>
