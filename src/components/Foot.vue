<template>
  <div class="copyright-inner">
		<div class="copyright clearfix">
			<ul class="footer-links">
				<li><a target="_blank" href="https://www.baidu.com" style="margin-left: 30px;">服务协议</a></li>
				<li><a target="_blank" href="https://www.baidu.com">隐私政策</a></li>
				<li><a target="_blank" href="https://www.baidu.com">技术支持</a></li>
                <li><a href="mailto:xxx@xxx.cn">反馈建议</a></li>
			</ul>
			<div class="copyright-text">
				<span>Copyright © Phine Design All Rights Reserved</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copyright-inner {
    align-self: flex-end;
    width: 100%;
    height: 50px;
    background-color: black;
}

.copyright-inner .copyright {
    width: 1200px;
    margin: 0 auto;
    padding: 17px 0px 17px;
    font-size: 12px;
    text-align: left;
    color: #aeb6b9;
}

.clearfix {
    zoom: 1;
}

.copyright-inner .copyright .footer-links {
    width: 400px;
    text-align: left;
    padding: 0;
    margin: 0;
    float: left;
}

.footer-links {
    line-height: 1;
    margin-bottom: 10px;
    display: block;
    overflow: hidden;
}

.copyright-inner .copyright .copyright-text {
    float: right;
    margin-right: 30px;
}

.copyright-inner .copyright a:hover {
    color: #fff;
}

.copyright-inner .copyright a {
    outline: 0;
    color: #aeb6b9;
    text-decoration: none;
}

.copyright-inner .copyright .footer-links li {
    display: inline-block;
    margin-right: 10px;
}

</style>
