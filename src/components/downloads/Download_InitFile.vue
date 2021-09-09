<template>
  <div class="download_InitFile">
    <el-col :span="24" style="padding-left: 10%;">
      <div style="margin-top: 50px; padding: 0%; margin-left: -1.5%">
       <div :class="activeClass == 1 ? 'li_active':'li_normal'">
          <a :class="activeClass == 1 ? 'a_active':'a_normal'"  @click="test">安装包下载</a>
        </div>
        <div :class="activeClass == 2 ? 'li_active':'li_normal'">
          <a :class="activeClass == 2 ? 'a_active':'a_normal'"   @click="test">板卡初始化文件下载</a>
        </div>
      </div>
      <p style="margin-top: 180px"></p>
      <p style="width: 75%">
        下载 AEConsole（基于 FPGA 的 ASIC 验证平台控制软件）
      </p>
      <el-link type="primary" style="font-size: 1rem">版本 1.0.0 发布说明</el-link>
      <p>支持的功能：</p>
      <ul style="width: 66%; display: flex; flex-wrap: wrap; padding: 0px">
        <li class="p-list__item is-ticked">远程断上电</li>
        <li class="p-list__item is-ticked">FMC 电压配置</li>
        <li class="p-list__item is-ticked">PLL 时钟配置</li>
        <li class="p-list__item is-ticked">FPGA 逻辑加载</li>
        <li class="p-list__item is-ticked">FPGA 寄存器访问</li>
      </ul>
      <div style="display: flex">
        <div style="display: flex; flex-direction: column; flex-wrap: wrap; margin-left: -75px;">
          <el-button
            type="primary"
            disabled
            style="margin-left: 75px; margin-top: 50px; width: 200px"
            >Linux 安装包下载<i class="el-icon--right"></i
          ></el-button>
          <!-- <el-button type="primary" disabled style="margin-left:75px; margin-top:50px; width:200px;">安装包上传（Linux）<i class="el-icon--right"></i></el-button> -->
        </div>
        <div style="display: flex; flex-direction: column; flex-wrap: wrap">
          <el-button
            type="primary"
            style="margin-left: 75px; margin-top: 50px; width: 200px"
            >Windows 安装包下载<i class="el-icon--right"></i
          ></el-button>
          <!-- <el-button type="primary" style="margin-left:75px; margin-top:50px; width:200px;">安装包下载（Linux）<i class="el-icon--right"></i></el-button> -->
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "download_InitFile",
  data() {
    return {
      activeClass: 2,
    };
  },
  methods:{
    test:function(){
      this.$router.push({
            name: 'Download_Setup',
          });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download_InitFile {
  /* background-image: url(../../assets/201734115941.jpg); */
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
  margin: 0%;
  padding: 0%;
  width: 100%;
  height: 100%;
  min-height: 660px;
  text-align: left;
  color: black;
  font-size: 1rem;
}

.li_normal {
  float: left;
  width: 20%;
  border-bottom: 2px solid #cccccc;
  text-align: center;
  margin: 0 1.5%;
  list-style-type: none;
}

.li_active {
  float: left;
  width: 20%;
  border-bottom: 2px solid #000;
  text-align: center;
  margin: 0 1.5%;
  list-style-type: none;
}

.a_normal {
  font-size: 18px;
  color: #666666;
  line-height: 3;
  display: block;
  background: transparent;
  text-decoration: none;
  padding: 0;
  margin: 0;
}

.a_active {
  font-size: 18px;
  font-weight: bold;
  color: black;
  line-height: 3;
  display: block;
  background: transparent;
  text-decoration: none;
  padding: 0;
  margin: 0;
}

.p-list__item {
  display: inline-block;
  width: 100%;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
}

.is-ticked {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cg fill='none' fill-rule='nonzero'%3E%3Cpath fill='%230e8420' d='M8 1a7 7 0 110 14A7 7 0 018 1zm2.83 3.502L6.863 9.884 5.174 8.096l-1.09 1.03 2.92 3.096 5.034-6.83-1.208-.89z'/%3E%3Cpath fill='%23fff' d='M10.83 4.502l1.208.89-5.033 6.83-2.922-3.096 1.091-1.03 1.689 1.789z'/%3E%3C/g%3E%3C/svg%3E");
  background-position-y: 0.55rem;
  background-repeat: no-repeat;
  background-size: 0.875rem;
  padding-left: 2rem;
  list-style: none;
  margin-left: 0;
  width: 40%;
}

.download_InitFile /deep/ .el-button--primary {
  color: #fff;
  background-color: #0e8414;
  border-color: #0e8414;
  margin: 0%;
}

.download_InitFile /deep/ .el-button--primary:focus,
.el-button--primary:hover {
  background: #3e9d43;
  border-color: #3e9d43;
  color: #fff;
}
</style>
