<template>
  <div class="elevator">
        <div class="floorPicMain">
            <img alt="ele" src="../assets/backgroundEle.png" class="eleBaGd">
            <div class="floorBtnNum" :class="{btnBackGround}">
                <button class="buttonFlo" v-for="(data,index) in BtnList" :key="index" :class="{btnNUmFloor:isSelect[index]}" :ghost="true" @click="handleClick(index)">{{data+"  "}}</button>
            </div>
            <div class="flyPepAni">
                <img alt="ele" src="../assets/flyPep.png" :class="{flyPepDyc:isActive,flyPepStc:!isActive}">
            </div>
            <p class="line">~·~·~·~·~·~</p>
            <div class="foolrNUM">{{ctFloor+"F"}}</div>
            <div class="lightBcG">
                <div :class="{redBusy:redActive}"><br/>Busy</div>
                <div :class="{greenFree:greActive}"><br/>Free</div>
                <div :class="{yOpenDoor:yelOpenActive}">open<br/>Door</div>
                <div :class="{yCloseDoor:yelCloseActive}">close<br/>Door</div>
            </div>
            <div class="alert">
                <img alt="ele" class="alert" src="../assets/alert.png" :class="{alert:isAlert,alert2:!isAlert}" @click="alertSwing()">
            </div>
            <div class="Door">
                <img alt="od" class="odoor" src="../assets/openDoor.png" :class="{odoor:!openActive,odoor2:openActive}" @click="doorStart()">
                <img alt="cd" class="cdoor" src="../assets/closeDoor.png" @click="doorEnd()">
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    upWaitList:Array,                                  // 外部向上请求队列
    downWaitList:Array,
    reqList:Array,
    id:Number,
  },
  data() {
      return{
        BtnList:[...Array(20)].map((i,j)=>j+1),
        isSelect: [...Array(20)].map(()=>false),
        isActive:false,
        greActive:true,
        yelOpenActive:false,
        yelCloseActive:false,
        redActive:false,
        outSign:0,
        ctFloor: 1,                                 // 当前楼层
        destination: 0,                             // 最远端
        upList: [...Array(20)].map(()=>false),      // 外部向上请求队列
        downList: [...Array(20)].map(()=>false),    // 外部向下请求队列
        oldDir: 1,                                  // 上一次的方向 0不懂 1向上
        waitToRun:true,                             //就是表示当前电梯是否空闲：true空闲
        isAlert:true,
        numTimes:1,
        openActive:false,
        closeActive:false
      }
  },
  computed:{
      direction:function(){
          if(this.ctFloor===this.destination){
              return 0;
          }else if(this.ctFloor>this.destination){
              return -1;
          }else{
              // console.log("已经改变dir为1了");
              return 1;
          }
      }
  },
  methods:{
      handleClick:function(index){
          if(this.isSelect[index]==false){
             this.$set(this.isSelect,index,true);
             if((index+1>this.ctFloor&&this.oldDir)){
                this.destination=this.comTopDes();
             }
             else if(index+1<this.ctFloor){
                 // console.log("当前目的地为",this.destination);
                if(this.destination<this.ctFloor||this.waitToRun){
                    this.destination=this.comBotmDes();
                    this.oldDir=0;
                }
             }
             else if(index+1>this.ctFloor&&!this.oldDir){
                if(this.destination<this.ctFloor){
                    this.destination=this.comBotmDes();
                }
                else if(this.waitToRun){
                    this.destination=this.comBotmDes();
                }
             }
             else{
                 this.openDoor();
             }
             if(this.outSign==1){
                 this.outSign=0;
             }
          }
          else if(this.isSelect[index]==true&&this.outSign==0){
              this.$set(this.isSelect,index,false);
              if(index+1==this.destination){
                   this.destination=this.comTopDes();
                   if(this.destination==0){
                       this.destination=this.ctFloor;
                   }
                   else if(this.destination<this.ctFloor){
                       this.destination=this.comBotmDes();
                   }
               }
          }
          if(this.waitToRun){
              this.yelCloseActive=false;
              this.yelOpenActive=false;
              this.redActive=true;
              this.greActive=false;
              this.run();
              this.waitToRun=false;
              this.isActive=true;
          }
      },
      doorStart:function(){
          if(!this.redActive){
              this.openActive=true;
          }
          if(this.waitToRun){
              this.openDoor();
          }
      },
      doorEnd:function(){
          if(!this.redActive&&this.yelOpenActive&&this.waitToRun){
              this.closeDoor(false);
          }
      },
      run:function(){
          if(this.direction==1){
              this.oldDir=1;
              if(this.isSelect[this.ctFloor-1]){
                  this.openDoor(true);
              }
              else{
                  this.ctFloor++;
                  this.yelCloseActive=false;
                  this.yelOpenActive=false;
                  this.redActive=true;
                  this.greActive=false;
                  setTimeout(this.run,1000);
              }
          }
          else if(this.direction==-1){
              this.oldDir=0;
              if(this.isSelect[this.ctFloor-1]){
                  // 开门操作
                  this.openDoor(true);
              }
              else{
                  this.ctFloor--;
                  this.yelCloseActive=false;
                  this.yelOpenActive=false;
                  this.redActive=true;
                  this.greActive=false;
                  setTimeout(this.run,1000);
              }
          }
          else if(this.direction==0){
              this.isActive=false;
              this.waitToRun=true;
              if(this.isSelect[this.ctFloor-1]){
                  // 开门操作
                  if(this.oldDir){
                     for(let i=0;i<=this.ctFloor-1;i++){
                         this.isSelect[i]=false;
                     }
                    this.openDoor(false);
                  }
                  else{
                     for(let i=19;i>=this.ctFloor-1;i--){
                         this.isSelect[i]=false;
                     }
                    this.openDoor(false);
                  }
              }
              else if(this.destination==this.ctFloor){
                  for(let i=0;i<this.ctFloor-1;i++){
                      this.isSelect[i]=false;
                  }
                  console.log("不理解的部分");
                  this.yelCloseActive=false;
                  this.yelOpenActive=false;
                  this.redActive=false;
                  this.greActive=true;
              }
          }
      },
      setOpenActive:function(){
          this.openActive=false;
      },
      //开门
      openDoor:function(isContinue){
          if(this.openActive){
            setTimeout(() => {this.setOpenActive()},500);
          }
            this.isActive=false;
            this.isSelect[this.ctFloor-1]=false;
            this.yelCloseActive=false;
            this.yelOpenActive=true;
            this.redActive=false;
            this.greActive=false;
            this.$emit("checkEleArrival",this.ctFloor-1,this.direction,this.id);
            setTimeout(this.closeDoor,2000,isContinue);
      },
      //关门
      closeDoor:function(isContinue){
          // console.log("关门");
          // this.doorState=0;
          this.yelCloseActive=true;
          this.yelOpenActive=false;
          this.redActive=false;
          this.greActive=false;
          setTimeout(() => {this.block},500);
          if(this.direction==0){
              this.destination=0;
              // console.log(this.destination);
          }
          if(isContinue){
              this.isActive=true;
              setTimeout(this.run,1000);
          }
          if(!isContinue){
              this.yelCloseActive=false;
              this.yelOpenActive=false;
              this.redActive=false;
              this.greActive=true;
          }
          this.$emit("checkEleWait");
      },
      //从顶层计算最高楼层
      comTopDes:function(){
          var k=20;
          for(let i=19;i>=0;i--){
              if(this.isSelect[i]!=true){
                    k--;
              }
              else{
                  break;
              }
          }
          return k;
      },
      //从底层计算最低楼层
      comBotmDes:function(){
          var k=1;
          for(let i=0;i<20;i++){
              if(this.isSelect[i]!=true){
                    k++;
              }
              else{
                  break;
              }
          }
          return k;
      },
      //空函数
      block:function(){
          for(let i=0;i<100;i++){
              i++;
          }
      },
      //警铃
      alertSwing:function(){
          this.isAlert=!this.isAlert;
          if(this.numTimes%2==1){
            alert("发出警报,再点击铃铛就可以暂停奥");
          }
          this.numTimes++;
      }
  },
  watch:{
        upWaitList(){

                this.$emit("udelestate",this.id,this.waitToRun);
                this.$emit("udeledir",this.id,this.direction); 
                this.$emit("udelecurfloor",this.id,this.ctFloor);
        },
        dowWaitList(){
            this.$emit("udelestate",this.id,this.waitToRun);
            this.$emit("udeledir",this.id,this.direction); 
            this.$emit("udelecurfloor",this.id,this.ctFloor);
            // immediate:true;
        },
        reqList(newValue){
            // console.log("reqList启动");
            for(let i=0;i<20;++i){
                if(newValue[i]==true&&this.isSelect[i]==false){
                    this.outSign=1;
                    this.handleClick(i);
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 下面是一个电梯内部的设计 */
.floorPicMain{
    position: absolute;
    width: 900px;
    height: 600px;
    top: 50%;
    z-index: 1;
}
   /* 灯的总体背景 */
.lightBcG{
    position: absolute;
    width: 400px;
    height: 130px;
    opacity: .6;
    background:#2C3E50;
    left: 24.5%;
    top: 20%;
    border-radius: 10%;
    z-index: 3;
}
     /* 红灯busy */
.redBusy{
    position: absolute;
    width: 100px;
    height: 100px;
    background:crimson;
    left: 65.5%;
    top: 15%;
    border-radius: 50%;
    z-index: 3;
    font-weight: bold;
    font-size: 30px;
}
     /* 绿灯free */
.greenFree{
    position: absolute;
    width: 100px;
    height: 100px;
    background:chartreuse;
    left: 36.5%;
    top: 15%;
    border-radius: 50%;
    font-weight: bold;
    font-size: 30px;
    z-index: 3;
}
     /* 黄灯Door */
.yOpenDoor{
    position: absolute;
    width: 100px;
    height: 100px;
    background:gold;
    left: 8.5%;
    top: 15%;
    border-radius: 50%;
    z-index: 3;
    font-weight: bold;
    font-size: 35px;
}
.yCloseDoor{
    position: absolute;
    width: 100px;
    height: 100px;
    background:gold;
    left: 8.5%;
    top: 15%;
    border-radius: 50%;
    z-index: 3;
    font-weight: bold;
    font-size: 35px;
}
     /* 背景 */
.eleBaGd{
    position: absolute;
    width: 1000px;
    height: 600px;
    left: 15.5%;
    top: 0%;
    border-radius: 30%;
    z-index: 1;
}
    /* button数字 */
.floorBtnNum{
    position: absolute;
    left: 70.5%;
    top: 10%;
    font-size: 50px;
    color:indianred;
    z-index: 1;
}
    /* 小飞人 */
.flyPepDyc{
    position: absolute;
    width: 150;
    height: 225px;
    left: 35.5%;
    top: 45%;
    border-radius: 30%;
    z-index: 1;
    animation: fly 3s ease-in-out infinite;
}
.flyPepStc{
    position: absolute;
    width: 150;
    height: 225px;
    left: 35.5%;
    top: 45%;
    border-radius: 30%;
    z-index: 1;
}
    /* 小横线 */
.line{
    position: absolute;
    left: 68.5%;
    top: 65%;
    font-size: 50px;
    border-radius: 80%;
    color: #0066CC;
    z-index: 1;
}
    /* 数字显示 */
.foolrNUM{
    position: absolute;
    left: 72.5%;
    top: 50%;
    font-size: 150px;
    color:indianred;
    z-index: 1;
}
   /* button大小 */
.buttonFlo{
    font-size: 35px;
}

/* button点击之后效果 */
.btnNUmFloor{
    color:red;
    font-size: 35px;
    z-index: 1;
}
/* 警铃 */
.alert{
    position: absolute;
    width: 100;
    height: 100px;
    left: 100.5%;
    top: 25%;
    z-index: 1;
}
.alert2{
    position: absolute;
    width: 100;
    height: 100px;
    left: 100.5%;
    top: 25%;
    z-index: 1;
    animation: swing 1s linear infinite;
}
/* 开关门 */
.Door{
    position: absolute;
    width: 160px;
    height: 80px;
    left: 100.5%;
    top: 58%;
    z-index: 1;
}
.odoor{
    width: 80px;
    height: 80px;
}
.odoor2{
    width: 80px;
    height: 80px;
    padding:3px 3px 5px 5px #06c;
}
.cdoor{
    width: 80px;
    height: 80px;
}
@keyframes fly{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        transform: translateX(170px);
        opacity: 0.2;
    }
}
@keyframes bounce{
    50%{
        transform: translateY(-10px);
    }
}
@keyframes scale{
    50%{
        transform: scale(0.3);
    }
}
@keyframes swing{
    15%{
        transform: rotate(5deg);
    }
    30%{
        transform: rotate(-5deg);
    }
    45%{
        transform: rotate(10deg);
    }
    60%{
        transform: rotate(-10deg);
    }
    75%{
        transform: rotate(10deg);
    }
    90%{
        transform: rotate(-10deg);
    }
}
</style>
