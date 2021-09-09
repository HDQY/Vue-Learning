<template>
  <div class="navigation">
    <a href="/" class="logo" >
      <img alt="img" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" height="24"/>
      <p class="logo-text">Phine Design - AEConsole</p>
    </a> 
     <el-menu
      :popper-append-to-body="false"
      :default-active="activeIndex"
      mode="horizontal"
      background-color=rgba(0,0,0,1.0)
      text-color="#606266"
      active-text-color="#fff"
      @select="handleSelect" style="margin-left:15%; min-width:450px;">
      <el-menu-item index="1" @click="sayHello">需求</el-menu-item>
      <el-menu-item index="2">迭代</el-menu-item>
      <el-menu-item index="3">缺陷</el-menu-item>
      <el-menu-item index="4">测试</el-menu-item>
      <el-menu-item index="5">文档</el-menu-item>
      <el-menu-item index="6">下载</el-menu-item>
    </el-menu> 
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      activeIndex: "6",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    sayHello() {
      alert("Hello");
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  display: flex;
  flex-direction: row;
  width: 100%;
  height:64px;
  background-color: black;
  color: #fff; 
}

.logo
{
  display: flex;
  vertical-align: middle;
  display: inline-block;
  margin-left:5%; 

  min-width: 260px;
}

.logo-text
{
  vertical-align: middle;
  display: inline-block;
  margin:0% 0% 0% 5%; 
  font-size:16px;
  height:64px; 
  line-height:64px; 
  color: #fff;

  font-family:Microsoft YaHei;
}

.navigation /deep/ .el-menu.el-menu--horizontal{
  border-bottom: solid 0px #f00;
}

.navigation /deep/ .el-menu-item, .el-menu-item{
  background-color: black !important; 
}

.navigation /deep/ .el-menu-item:focus, .el-menu-item:hover{
  color: #fff !important; 
}

.navigation /deep/ .el-submenu:focus .el-submenu__title {
  background-color: transparent !important;
}

.navigation /deep/ .el-submenu:hover .el-submenu__title {
  background-color: transparent !important;
}

.navigation /deep/ .el-menu--horizontal>.el-menu-item {
  border-bottom: 0px !important;
  font-size: 15px;
}

.navigation /deep/ .el-menu--horizontal>.el-submenu.is-active .el-submenu__title
{
  border-bottom-color: transparent !important;
}
</style>
