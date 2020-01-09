<!--  -->
<template>
  <pre style="text-align:left">
    GET http://localhost:3000/albums

    ###

    POST http://localhost:3000/albums
    content-type: application/json

    {
    "album_id": "3751588",
    "album_name": "东风破",
    "public_time": "2007-12-11",
    "week": 50,
    "price": 89,
    "cover":
    "http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg",
    "singers": [
    {
    "singer_id": "024",
    "singer_name": "周杰伦"
    }
    ]
    }

    # ###
    # DELETE http://localhost:3000/books/5e1596ac2527d22850c19dd8
  </pre>
</template>

<script>
export default {
  data () {
    //这里存放数据
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
}
</script>
<style scoped>
</style>