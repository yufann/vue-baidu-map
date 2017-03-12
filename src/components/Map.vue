<template id="child-map">
  <div id="map" :style="style"></div>
</template>

<script>
  export default{
    data(){
      return{
        style:{
          width:'100%',
          height:this.m.height+'px'
        }
      }
    },
    /*props:{		//里面存放的也是数据，与data里面的数据不同的是，这里的数据是从其他地方得到的数据
      height:{
        type:Number,
        default:300
      },
      longitude:{
        type:Number,
        default:116.404
      },	//定义经度
      latitude:{//定义纬度
        type:Number,
        default:39.915
      }
    },*/
    props:['m'],
    mounted(){
      // var map = new BMap.Map("map");
      // var point = new BMap.Point(this.longitude,this.latitude);
      // map.centerAndZoom(point, 12);
      // var marker = new BMap.Marker(point);// 创建标注
      // map.addOverlay(marker);
      var map = new BMap.Map("map");
    	var point = new BMap.Point(this.m.longitude,this.m.latitude);
    	map.centerAndZoom(point, 15);
    	var marker = new BMap.Marker(point);  // 创建标注
    	map.addOverlay(marker);               // 将标注添加到地图中
    	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    }
  }
</script>
