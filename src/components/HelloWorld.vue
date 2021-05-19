<template>
    <div class="hello">
        <div class="topMain">
            <img alt="face" src="../assets/face.png" class="face">
            <div class="shadow"></div>
            <div class="buttonList">
                 <p class="tipFloor">请按您想去的楼层按钮</p>
                <div class="btnNum">
                    <a-button class="button" v-for="(data,index) in BtnListTop" :key="index" :ghost="true">{{" "+data+"  "}}
                    <img alt="face" src="../assets/arrowUp.png" class="btnUp" :class="{upBtn:!upList[index],upBtn2:upList[index]}" @click="handleClick(1,index)">
                    <img alt="face" src="../assets/arrowDown.png" class="btnDown" :class="{downBtn:!downList[index],downBtn2:downList[index]}" @click="handleClick(-1,index)">
                    </a-button>
                </div>
            </div>
            <div class="tip">
                <img alt="face" src="../assets/tip.png" class="tipPic">
                <p class="tipWord">小贴士(可以适当调整页面大小)<br/>1.在总控制台选择某楼层按钮后<br/>若某台电梯被分配驶向该楼层<br/>相当于该电梯此楼层按钮被选择<br/>我们统一将该电梯楼层按钮变量<br/>方便观察<br/>2.总控制台可以选择楼层<br/>每部电梯支持独自操作和选择取消操作哟！</p>
            </div>
         </div>
        <div class="a1">
            <Elevator :upWaitList="upList" :downWaitList="downList" :id="0" :reqList="eleReqList[0]" @udelecurfloor="getEleCurFloor" @udeledir="getEleDir" @udelestate="getEleState" @checkEleWait="checkWait" @checkEleArrival="checkArrival"></Elevator>
        </div>
        <div class="a2">
           <Elevator :upWaitList="upList" :downWaitList="downList" :id="1" :reqList="eleReqList[1]" @udelecurfloor="getEleCurFloor" @udeledir="getEleDir" @udelestate="getEleState" @checkEleWait="checkWait" @checkEleArrival="checkArrival"></Elevator>
        </div>
        <div class="a3">
           <Elevator :upWaitList="upList" :downWaitList="downList" :id="2" :reqList="eleReqList[2]" @udelecurfloor="getEleCurFloor" @udeledir="getEleDir" @udelestate="getEleState" @checkEleWait="checkWait" @checkEleArrival="checkArrival"></Elevator>
        </div>
        <div class="a4">
            <Elevator :upWaitList="upList" :downWaitList="downList" :id="3" :reqList="eleReqList[3]" @udelecurfloor="getEleCurFloor" @udeledir="getEleDir" @udelestate="getEleState" @checkEleWait="checkWait" @checkEleArrival="checkArrival"></Elevator>
        </div>
        <div class="a5">
            <Elevator :upWaitList="upList" :downWaitList="downList" :id="4" :reqList="eleReqList[4]" @udelecurfloor="getEleCurFloor" @udeledir="getEleDir" @udelestate="getEleState" @checkEleWait="checkWait" @checkEleArrival="checkArrival"></Elevator>
        </div>
    </div>
</template>
    
<script>
    import Elevator from "./elevator.vue"
    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
            stateList:[]
        },
        components:{
            Elevator
        },
        data(){
            return {
                BtnListTop:[...Array(20)].map((i,j)=>j+1<10?"0"+(1+j).toString():(1+j).toString()),
                upList:[...new Array(20)].map(()=>false),       // 向上请求
                downList:[...new Array(20)].map(()=>false),     // 向下请求
                eleStateList:[...new Array(5)].map(()=>true),   // false表示不可用 true表示可用
                eleStateWait:[...new Array(5)].map(()=>true),   // false表示不可用 true表示可用
                // eleDirList:[...new Array(5)].map(()=>0),     // 电梯方向
                eleOldDirList:[...new Array(5)].map(()=>1),     // 电梯上次方向 1向上 0向下
                eleCurFloorList:[...new Array(5)].map(()=>0),   //电梯当前楼层
                cancel:-1,
                ignoreList:[false,true,true,true,true],
                eleWaitList:[...new Array(20)].map(()=>0),      //0为不等待 -1为向下等待  1为向上等待
                eleReqList:[...new Array(5)].map(()=>[...new Array(20)].map(()=>false)),
                maxFloor:0,
                minFloor:100,
                dir:0,
                index:0
            }
        },
        methods:{
            getEleCurFloor:function(id,curFloor){
                this.$set(this.eleCurFloorList, id, curFloor);
                console.log("当前楼层：",this.eleCurFloorList[id],id);
            },
            getEleState:function(id,curState){
                this.$set(this.eleStateList, id, curState);
                this.$set(this.eleStateWait, id, curState);
                console.log("当前状态：",this.eleStateWait[id]);
            },
            getEleDir:function(id,oldDir){
                this.$set(this.eleOldDirList, id, oldDir);
                console.log("上一次方向：",this.eleOldDirList[id]);
            },
            checkArrival:function(curFloor,oldDir,id){
                var k=20;
                if(id>0){
                    console.log("yes");
                }
                // this.$set(this.eleReqList[id],curFloor,false);
                if(oldDir==1&&curFloor+1==this.maxFloor){
                    k=20;
                    for(let i=19;i>=0;i--){
                        if(this.upList[i]!=true){
                              k--;
                        }
                        else{
                            break;
                        }
                    }
                    this.maxFloor=k;
                }
                else if(oldDir==-1&&curFloor+1==this.minFloor){
                    k=1;
                    for(let i=0;i<20;i++){
                        if(this.downList[i]!=true){
                              k++;
                        }
                        else{
                            break;
                        }
                    }
                    this.minFloor=k;
                }
                if(this.upList[curFloor]){
                    this.$set(this.upList,curFloor,false);
                }
                if(this.downList[curFloor]){
                    this.$set(this.downList,curFloor,false);
                }
            },
            checkWait:function(){
                // console.log("wait");
                for(let i=0;i<20;i++){
                    if(this.eleWaitList[i]==1){
                        this.checkElevator(1,i);
                        console.log("wait:",i);
                    }
                    else if(this.eleWaitList[i]==-1){
                        this.checkElevator(-1,i);
                        console.log("wait:",i);
                    }
                }
            },
            handleClick:function(dir,index){
                if(dir==1){
                    this.$set(this.upList,index,true);
                    if(this.maxFloor<index+1){
                        this.maxFloor=index+1;
                    }
                    setTimeout(() => {this.checkElevator(dir,index)},200); 
                }
                else if(dir==-1){
                    this.$set(this.downList,index,true);
                    if(this.minFloor>index+1){
                        this.minFloor=index+1;
                    }
                    setTimeout(() => {this.checkElevator(dir,index)},200); 
                }
                this.dir=dir;
                this.index=index;
                // console.log("最大楼层：",this.maxFloor);
                
            },
            checkElevator:function(dir,index){
                this.checkIsUseFul(index);
                var distanceUp=100;
                var distancedown=100;
                var upID=-1;
                var downID=-1;
                var k=0;
                for(let i=4;i>=0;i--){
                    if(this.eleStateList[i]==true){
                        if(dir==1&&this.eleOldDirList[i]==1){
                            if(this.eleCurFloorList[i]<=(index+1)){
                                k=index+1-this.eleCurFloorList[i];
                                if(k<=distanceUp){
                                    distanceUp=k;
                                    upID=i;
                                }
                            }
                        }
                        else if(dir==-1&&this.eleOldDirList[i]==-1){
                            if(this.eleCurFloorList[i]>=(index+1)){
                                k=this.eleCurFloorList[i]-index-1;
                                if(k<=distancedown){
                                    distancedown=k;
                                    downID=i;
                                }
                            }
                        }
                    }
                    // console.log("向上距离：",this.eleStateWait[i]); 
                }
                if(dir==1&&distanceUp==100){
                    for(let i=4;i>=0;i--){
                        console.log("等待状态：",i,this.eleStateWait[i]);
                        if(this.eleStateWait[i]==true){
                            k=((this.eleCurFloorList[i]>index+1)?(this.eleCurFloorList[i]-index-1):(index+1-this.eleCurFloorList[i]));
                            if(k<=distanceUp){
                                distanceUp=k;
                                upID=i;
                            }
                        }
                    }
                }
                else if(dir==-1&&distancedown==100){
                    for(let i=4;i>=0;i--){
                            if(this.eleStateWait[i]==true){
                            k=(this.eleCurFloorList[i]>index+1)?(this.eleCurFloorList[i]-index-1):(index+1-this.eleCurFloorList[i]);
                            if(k<=distancedown){
                                distancedown=k;
                                downID=i;
                            }
                        }
                    }
                }
                console.log("向上：选出来的结果：",distanceUp,upID);
                console.log("向下：选出来的结果：",distancedown,downID);
                if(distanceUp<100){
                    this.$set(this.eleStateWait,upID,false);
                    if(this.eleWaitList[index]==1){
                        this.$set(this.eleWaitList,index,0);
                    }
                    console.log("等待状态：",this.eleStateWait[upID]);
                    this.$set(this.eleReqList[upID],index,true);
                    setTimeout(() => {this.$set(this.eleReqList[upID],index,false)},500);
                }
                else if(dir==1){
                    this.eleWaitList[index]=1;
                }
                if(distancedown<100){
                    this.$set(this.eleStateWait,downID,false);
                    if(this.eleWaitList[index]==-1){
                        this.$set(this.eleWaitList,index,0);
                    }
                    this.$set(this.eleReqList[downID],index,true);
                    setTimeout(() => {this.$set(this.eleReqList[downID],index,false)},500);
                }
                else if(dir==-1){
                    this.eleWaitList[index]=-1;
                }
            },
            checkIsUseFul:function(index){
                for(let i=0;i<5;i++){
                    if(this.eleStateList[i]==false){
                        if(this.eleOldDirList[i]==1){
                            if(this.eleCurFloorList[i]<index+1){
                                this.eleStateList[i]=true;
                            }
                        }
                        if(this.eleOldDirList[i]==-1){
                            if(this.eleCurFloorList[i]>index+1){
                                this.eleStateList[i]=true;
                            }
                        }
                    }
                    else if(this.eleStateList[i]==true){
                        if(this.eleOldDirList[i]==1){
                            if(this.eleCurFloorList[i]>index+1){
                                this.eleStateList[i]=false; 
                            }
                        }
                        if(this.eleOldDirList[i]==-1){
                            if(this.eleCurFloorList[i]<index+1){
                                this.eleStateList[i]=false;
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 下面是页面top设计 */
.topMain{
    position: absolute;
    top:0%;
    z-index: 1;
    width: 700px;
    height: 500px;
    left: 10%;;
}
   /* 按钮菜单总设计 */
.buttonList{
    position: absolute;
    background-color:lightcyan ;
    width: 900px;
    height: 350px;
    border-radius: 30%;
    left: 25%;
    top: 6%;
    font-weight: bold;
    border: #2C3E50;
    z-index: 0;
    box-shadow:3px 3px 5px #06c;
}
  /* 上行按键设计 */
.BtnUP{
    position: absolute;
    left: 7%;
    top: 63%;
    z-index: 1;
}
.btnUp{
    width: 38px;
    height: 38px;
    opacity: 0.5;
}
.upBtn2{
    color: #FF0000;
    opacity: 0.8;
    border-radius: 50%;
    box-shadow:-3px -3px 5px #06c;
}
  /* 下行按键设计 */
.BtnDOWN{
    position: absolute;
    left: 9%;
    top: 76%;
    z-index: 1;
}
.btnDown{
    width: 35px;
    height: 35px;
    opacity: 0.5;
}
.downBtn2{
    color: #FF0000;
    opacity: 0.8;
    border-radius: 50%;
    box-shadow:3px 3px 5px #06c;
}
   /* 文字提示 */
.tipFloor{
    position: absolute;
    font-size: 40px;
    left: 20.5%;
    top: 3%;
    z-index: 1;
}
    /* 按钮设计 */
.btnNum{
    position: absolute;
    width: 650px;
    height: 300px;
    top: 35%;
    left:9%;
    z-index: 0;
    font-size: 32px;
    color:#777777;
}

   /* 笑脸 */
.face{
    position: absolute;
    width: 100px;
    height: 100px;
    background: #FCFCFC;
    top: 28%;
    left: 5%;
    z-index: 2;
    animation: bounce 2s linear infinite;
}
  /* 小贴士 */
.tip{
    position: absolute;
    width: 600px;
    height: 380px;
    top: 0%;
    left: 150%;
    z-index: 0;
    border-radius: 35%;
}
.tipPic{
    position: absolute;
    top: 0%;
    left: 26%;
    width: 500px;
    height: 480px;
    z-index: 0;
}
.tipWord{
    position: absolute;
    width: 450px;
    height: 260px;
    top: 18%;
    left: 30%;
    font-size: 32px;
    text-align:left;
    color:#2C3E50;
    font-family: "lisu";
    z-index: 0;
}
   /* 阴影 */
.shadow{
    position: absolute;
    width: 100px;
    height: 10px;
    opacity: .5;
    background: #777777;
    left: 5.5%;
    top: 50%;
    border-radius: 50%;
    z-index: 3;
    animation: scale 2s ease-in-out infinite;
}

.buttonFlo{
    font-size: 35px;
}


/* button点击之后效果 */
.btnNUmFloor{
    color:red;
    font-size: 35px;
    z-index: 1;
}

.a1{
    position: absolute;
    top: 55%;
    left: 0%;
    zoom:0.8;
}
.a2{
    position: absolute;
    top: 55%;
    left: 50%;
    zoom:0.8;
}
.a3{
    position: absolute;
    top: 105%;
    left: 0%;;
    zoom:0.8;
}
.a4{
    position: absolute;
    top: 105%;
    left: 50%;
    zoom:0.8;
}
.a5{
    position: absolute;
    top: 155%;
    left: 0%;
    zoom:0.8;
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
</style>
