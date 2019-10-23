     //万能的完美同时运动框架
     function getstyle(obj,attr) {
      if(obj.currentStyle){
            return obj.currentStyle[attr];
      }
      else{
        return getComputedStyle(obj,false)[attr];
}  
 }
       //json={name1:key1,name2:key2}name为属性，key为目标值
      //startmove(obj,{bttr1:iTarget1,bttr2:iTarget2},fun)
       function startmove(obj,json,fn) {
      	clearInterval(obj.timer);
      	obj.timer=setInterval(function(){ 
        var flag=true;//flag（标杆）所有的运动都达到目标值结束 
        for(var bttr in json ){   //遍历json    
        //1，判断类型
        var icur=null;
        if (bttr=='opacity') {
          icur=Math.round(parseFloat(getstyle(obj,bttr))*100);
        } else{
         icur=parseInt(getstyle(obj,bttr));   }
         //2，设置速度
      		var speed=(json[bttr]-icur)/8;
      		speed=speed>0?Math.ceil(speed):Math.floor(speed);
          //3，检测是否停止
      		if (icur!=json[bttr]) {
            flag=false;
          }
            if (bttr=='opacity') {
              obj.style.filter='alpha(opacity:'+(icur+speed)+')';
              obj.style.opacity=(icur+speed)/100;
            }else{
      			obj.style[bttr]=icur+speed+'px';//icur当前的bttr属性值
      			}
          }
      		if (flag) {
            clearInterval(obj.timer);//当所有的运动都完成时，清除定时器
            if(fn)
              {
                fn();
              }
          }
      		      	},30);
      
      }//万能的完美同时运动框架