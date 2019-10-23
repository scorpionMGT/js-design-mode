     //万能的链式运动框架
     function getstyle(obj,attr) {
      if(obj.currentStyle){
            return obj.currentStyle[attr];
      }else{return getComputerStyle(obj,false)[attr]
}   
 }
      function startmove(obj,bttr,iTarget,fn) {
      	clearInterval(obj.timer);
      	obj.timer=setInterval(function(){         
        //1，获 取当前的值
        var icur=0;
        if (bttr=='opacity') {
          icur=Math.round(parseFloat(getstyle(obj,bttr))*100);
        } else{
         icur=parseInt(getstyle(obj,bttr));   }
         //设置速度
      		var speed=(iTarget-icur)/8;
      		speed=speed>0?Math.ceil(speed):Math.floor(speed);
          //判断是否停止
      		if (icur==iTarget) {
      			clearInterval(obj.timer);
            if (fn) {
              fn();
            }
      		}
          else{
            if (bttr=='opacity') {
              obj.style.filter='alpha(opacity:'+(icur+speed)+')';
              obj.style.opacity=(icur+speed)/100;
            }else{
      			obj.style[bttr]=icur+speed+'px';
      			}
      		}
      		      	},30);
      
      }//万能的链式运动框架