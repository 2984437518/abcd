const data = [
       "中奖2r",
       "谢谢惠顾",
       "谢谢惠顾",
       "滚吧",
       "谢谢惠顾",
       "一个货币",
       "玩游戏",
       "一个拉满",
       "一个货币",
       "一个半拉",
       "中奖0.5r",
       "啥也没有",
       "一个拉满",
       "谢谢惠顾",
       "中奖5r"]
       
       data.forEach(v=>{
         let stu = document.createElement("div")
         stu.className = "stu"
         stu.innerText = v
         document.body.appendChild(stu)
       })
     
       function start(){
          let put = document.getElementById("put").value;
          if(put=="llaksjsjsmks-ksdjjdjekskksjsjs-jsjjs-jsjsjjsjs-jsjsjj-sjsjsj"){
          let stu = document.querySelectorAll(".stu")
          let timer = setInterval(()=>{
            stu.forEach(v=>{
              v.classList.remove("ck")
            })
            stu[Math.floor(Math.random()*stu.length)].classList.add("ck")
          
          },200)
          setTimeout(()=>{
            clearInterval(timer)
            
          },2000);
          }else{
          alert("您输入的卡密不对哦");
          }
          
       }
