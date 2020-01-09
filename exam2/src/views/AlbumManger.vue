<template>
  <div>
    <el-dialog title="相信信息" :visible.sync="infoDialogVisible" width="30%">
      <div>这是一段信息</div>
      <div>专辑id：{{info.album_id}}</div>
      <div>专辑名称：{{info.album_name}}</div>
      <div>发布时间:{{info.public_time}}</div>
      <div>发布周数:{{info.week}}</div>
      <div>价格：{{info.price}}</div>
      <div>歌手： <span v-for="singer in info.singers" :key="singer.singer_id">{{singer.singer_name}}、</span></div>
      <img :src="info.cover" alt="">
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>

    <el-dialog title="提示" :visible.sync="deleteDialogVisable" width="30%">
      <span>是否删除</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisable = false">取 消</el-button>
        <el-button type="primary" @click="deleteAlbum">确 定</el-button>
      </span>
    </el-dialog>

    <!-- <el-dialog title="添加歌手" :visible.sync="addSingerDialogVisible" width="30%">
      <el-form :inline="true" :model="singer" class="demo-form-inline">
        <el-form-item label="歌手名称">
          <el-input v-model="singer.name" placeholder="请输入歌手名称"></el-input>
        </el-form-item>
        <el-form-item label="歌手id">
          <el-input v-model.number="boosingerk.id" placeholder="请输入歌手id"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addSinger">添加歌手</el-button>
        </el-form-item>
      </el-form>
    </el-dialog> -->

    <el-table :data="albums" style="width: 80%">
      <el-table-column prop="album_id" label="ID" width="180">
      </el-table-column>
      <el-table-column prop="album_name" label="专辑名称" width="300">
      </el-table-column>
      <el-table-column prop="price" label="价格">
      </el-table-column>
      <el-table-column prop="singername" label="歌手名">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="album">
          <el-button @click="showInfo(album.row)" type="text" size="small">详细内容</el-button>
          <!-- <el-button @click="dialogVisible=true" type="text" size="small">编辑</el-button> -->
          <!-- <el-button @click="addSinger(album.row)" type="text" size="small">追加歌手</el-button> -->
          <el-button @click="beforeDeleteAlbum(album.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>

export default {
  name: "AlbumManger",
  created () {

    fetch(this.url, { type: "GET" })
      .then(res => res.json())
      .then(abs => this.albums = abs)
  },
  data () {
    return {
      url: "/albums",
      deleteDialogVisable: false,
      addSingerDialogVisible: false,
      willDeleteAlbum: {},
      willUpdateAlbum: {},
      singer: { singer_name: '', singer_id: '' },
      albums: [],
      info: {},
      infoDialogVisible: false
    }
  },
  watch: {
    albums: {
      handler (o) {
        if (o.length > 0) {
          o.forEach(i => {
            i.singername = i.singers.length > 1 ? i.singers[0].singer_name + '等人' : i.singers[0].singer_name
          })
        }
      },
      deep: true
    }
  },
  methods: {
    beforeDeleteAlbum (album) {
      this.deleteDialogVisable = true;
      this.willDeleteAlbum = album;
    },
    deleteAlbum () {
      let album = this.willDeleteAlbum;
      fetch(this.url + "/" + album._id, { method: "DELETE" })
        .then(res => res.json())
        .then(() => {
          let index = this.albums.findIndex(item => item._id == album._id)
          this.albums.splice(index, 1)
          this.deleteDialogVisable = false;
        })
    },
    // beforeAddSinger (album) {
    //   this.
    //   let album = this.willUpdateAlbum;

    // },
    // addSinger (album) {
    //   // fetch(this.url, {
    //   //   method: "POST", headers: { 'Content-Type': 'application/json' },
    //   //   body: JSON.stringify(this.book)
    //   // }).then(res => res.json())
    //   //   .then(nb => this.books.push(nb))
    // },
    showInfo (o) {
      this.info = o;
      this.infoDialogVisible = true;
    }
  },
  // computed: {
  //   priceTotal () {
  //     return this.books.reduce((prev, book) => prev + book.price, 0)
  //   }
  // }
}
</script>

<style scoped>
</style>