<style lang="less" scoped>
@imgdo:'../../assets/down'; /* 背景图路径*/

.down{
	min-width:1200px;
	height: 726px;
	background: url('@{imgdo}/app_bg.png') center center no-repeat ;
	background-color: pink;
	.down_box{
		width: 1200px;
		padding-top:65px;
		margin:0 auto;
		.down_box_li{
			width: 1160px;
			padding:20px;
			height: 120px;
			margin-bottom:60px;
			background: url('@{imgdo}/app_box_bg.png') repeat;
			.li_left{
				width:120px;
				height: 120px;
				float: left;
				margin-right: 20px;
			}
			.li_center {
				width:630px;
				height:120px;
				float:left;
				dt{
					width: 640px;
					height: 40px;
					font-size: 22px;
					color: #464646;
				}
				dd{
					width: 630px;
			        height: 120px;
				    font-size: 12px;
					color: #666;
				}
			}
			.li_erweima{
					width: 120px;
					height: 110px;
					padding-top: 10px;
					float: left;
					margin-left: 50px;
					img{
						width: 121px;
						height: 100px;
					}
			}
			.li_right{
				width: 152px;
				height: 120px;
				float: left;
				margin-left:40px ;
				.android{
					width: 152px;
					height: 40px;
					margin-bottom: 20px;
					margin-top: 10px;
				}
				.ios{
					width: 152px;
                    height: 40px;
				}
				a{
					width: 102px;
					height: 38px;
					line-height: 38px;
					padding-left: 48px;
					border: 1px solid #ea5b24;
					font-size: 14px;
					color: #666;
					display: block;
					border-radius: 3px;
					background: url('@{imgdo}/android.png') 16px center no-repeat;
					&:hover{
						background-image: url('@{imgdo}/android_h.png')  no-repeat;
						background-position: 16px center;
						background-color: #ea5b24;
						color: #fff;
					}
				}
			}
		}
	}
}

</style>

<template>
	<div class="down">
		 <div class="down_box">
			  <template v-for="(item,index) in down" >
			 	  <div class="down_box_li" :key="index" >
			 	 		<div class="li_left"><img :src="item.img" title="" alt=""/></div>
					    <div class="li_center">
							<dl>
								<dt>{{item.title}}</dt>
								<dd>{{item.txt}}</dd>
							</dl>
						</div>
						<div class="li_erweima"><img :src="item.erweima" title="" alt="" /></div>
						<div class="li_right">
							<div class="android"><router-link :to="item.android" tag="a">Android下载</router-link></div>
							<div class="ios"><router-link :to="item.ios" tag="a">ISO下载</router-link></div>
						</div>
			 	 </div>
			 </template>
		 </div>



	</div>
</template>

<script>
export default{
	name:"down",
	data(){
		return{
			down:[]
		}
	},
	created(){
		this.down=this.$store.state.down;
		console.log(this.down)
	}
}
</script>

<style scoped>

</style>
