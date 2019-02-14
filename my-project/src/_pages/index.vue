<template>
  <div class="index-wrap">
    <div>
      <h1 style="margin-bottom: 16px;">五一假期去哪里玩</h1>
      <Button style="margin-bottom: 16px;" @click="button(flag)">{{flag ? '停止' :'我想一下'}}</Button>
      <h2>{{place[x]}}</h2>
    </div>
    <video src="https://1252524126.vod2.myqcloud.com/fdae72e7vodtranshk1252524126/1e2b57785285890784159594703/drm/voddrm.token.YWRmZWMzMmZhZWRjZWM4Y1VMTmZJSkk3YVRFS1RoUkxjbUo0dVVodG9VZmM5ekxTT0dpeXBCZTFCMHN5VjJabg.v.f230.m3u8"></video>
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
</style>
