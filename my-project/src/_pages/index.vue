<template>
  <!-- <div class="index-wrap">
    <div>
      <h1 style="margin-bottom: 16px;">五一假期去哪里玩</h1>
      <Button style="margin-bottom: 16px;" @click="button(flag)">{{flag ? '停止' :'我想一下'}}</Button>
      <h2>{{place[x]}}</h2>
      <img src="http://admin.inside.xiaoe-tech.com/punch_card/get_h5_qrcode/apppcHqlTPT3482/0/ac_5c7747509abdd_maGZyeRn" alt="">
    </div> -->
  <!-- </div> -->
  <div>
    <!-- <video class="video" controls src="http://1252524126.vod2.myqcloud.com/9764a7a5vodtransgzp1252524126/6b8babae5285890786435081820/drm/v.f230.m3u8"></video> -->
  <a href="http://wxdd198a901fa24220.h5.inside.xiaoe-tech.com/xiaoe_clock/calendar_clock/ac_5c9cc67550f12_owHJj5cp#/calendarClock">跳转测试</a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      place: ['在家呆着 ?','新加坡','马来西亚','张家界','加班','日本','印度','泰国','西藏','福建'],
      x: 0,
      flag: false,
      time: ''
    }
  },
  methods: {
    button (v) {
      this.flag = !v
      if (v) {
        clearInterval(this.time)
      } else {
        let n = this.place.length
        this.time = setInterval(()=>{
          let c = Math.ceil(Math.random() * n)
           if(c > 1) {
             this.x = c - 1
            }
        },10)
      }
    },
    popsort (arr) {
      if (arr instanceof Array) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {
                    var temp = arr[j+1];  
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
      } else {
        return
      }
    }

  },
}
</script>

<style scoped>
 .index-wrap {
   text-align: center;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
 }

 .video {
   width: 100vw;
   height: 350px;
 }
</style>
