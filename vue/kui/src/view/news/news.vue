<style lang="less" scoped>
@imgnw:'../../assets/new';
.news{
	min-width: 1200px;
	height: 260px;
	background: url('@{imgnw}/new.png') no-repeat;
	.news_box {
		width: 1200px;
		height: 260px;
		margin: 0 auto;
		position: relative;
	   p{
		    position: absolute;
			left: 0;
			top: 120px;
			color: #666;
			font-size: 18px;
			font-weight: 700;
			span{
				color:#ea5b24;
			}
	   }
    }
}
.conten_map_box {
  min-width: 1200px;
  height: 43px;
  border-bottom: 1px solid #f3f3f3;
  .conten_map_nei {
    width: 1200px;
    margin: 0 auto;
    line-height: 43px;
    font-size: 12px;
    position: relative;
    .conten_map_next {
      position: absolute;
      right: 0;
      a {
        color: #666;
        &:hover {
          color: #ea5b24;
        }
      }
    }
  }
}
.new_tabs{
	width: 1200px;
	margin: 0 auto;
	.el-tabs__nav-wrap::after {
		width: 0;
		height: 0;
	}
	.el-tabs__item.is-active {

    }
	.el-tabs__item.is-top{
		 border-bottom-color: #333;
	}
}
.news_list{
	width: 1200px;
	margin: 0 auto;
	.news_list_li{
    width: 1200px;
    height: 160px;
    padding-top: 35px;
    border-bottom: 1px solid #eee;
    background: url('@{imgnw}/news_right.png') 20px 100px no-repeat;
    &:hover {
         background: url('@{imgnw}/news_right_h.png') 30px 100px no-repeat;
    }
	.news_list_li_left{
		width: 200px;
		height: 165px;
		padding-top: 15px;
		float: left;
		font-size: 16px;
		color: #b6b6b6;
		font-weight: normal;
	}
	.news_list_li_center{
		width: 660px;
		height: 180px;
		float: left;
		dt {
			width: 660px;
			height: 44px;
			line-height: 48px;
			margin-bottom: 10px;
			font-size: 18px;
			color: #333;
		   a {
				font-size: 18px;
				color: #333;
				&:hover {
                   color: #ea5b24;
                }
			 }

		  }
		  dd {
				width: 660px;
				height: 52px;
				line-height: 26px;
				font-size: 12px;
				color: #666;
				overflow: hidden;
			}
	}
	.news_list_li_right{
		width: 200px;
		height: 125px;
		float: right;
	}
	}
}
.loding{
    width: 380px;
    height: 36px;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    a{
      cursor: pointer;
      color: #ea5b24;
    }
}
</style>

<template>
	<div class="new">
	<div class="news">
          <div class="news_box">
			    <p><span>在这里</span>，见证我们成长</p>
		  </div>
	</div>
	 <div class="conten_map_box">
	  <div class="conten_map_nei">
	    <div class="conten_map_next">
	      <span>你的位置：</span>
	      <span><router-link to="/">首页</router-link></span>
	      <span>&gt;&gt;</span>
	      <span><router-link to="/news">新闻中心</router-link></span>
	    </div>
	  </div>
	</div>
	<template>
		<el-tabs class="new_tabs" @tab-click="show" >
		<el-tab-pane label="全部" name="first" ></el-tab-pane>
		<el-tab-pane label="公司新闻" name="second"></el-tab-pane>
		<el-tab-pane label="产品新闻" name="third"></el-tab-pane>
	   </el-tabs>
	   <div class="news_list">
	   <!-- 信息-->
     <div class="news_list_li" v-for="(item,index) in all" :key="index" v-if="index < max">
			<div class="news_list_li_left">{{item.time}}</div>
			<div class="news_list_li_center">
				<dl>
					<dt><a href="">{{item.title}}</a></dt>
					<dd>{{item.txt}}</dd>
				</dl>
			</div>
			<div class="news_list_li_right">
		  		<img :src="item.img" width="200" height="125" alt="">
		  	</div>
       <!-- 结束循环并判断-->
    </div>
     <!--加载-->
    <div class="loding">
    			<a herf="" id="newsMore" @click="Kong">加载更多</a>
    </div>

    </div>
	</template>

	</div>
</template>

<script>
  function pageCount (totalnum,limit){
      return totalnum > 0 ? ((totalnum < limit) ? 1 : ((totalnum % limit) ? (parseInt(totalnum / limit) + 1) : (totalnum / limit))) : 0;
  }


	export default{
		data(){
			return{
        init:5,
        lang:3,
        max:5,
        all:[],
				list:[],
				list1:[
        {"time":"2017-08-31 16:16:52","title":"从鹏城到魔都，豪恩给你新时代的生活体验！","txt":"精彩纷呈的深博会过后，相信还是有不少的观众觉得意犹未尽，不要紧，豪恩已经准备好下一场啦！ 9月5日至9月7日，上海国际智能家居展览会（SSHT 2017），我们将与您再聚，等你开启更多精彩！",
        "img":require("@/assets/new/1.png")},
        {"time":"2017-08-21 16:28:00","title":"强势围观丨深博会(IOTE 2017)开幕，专注感知“豪”有看头！","txt":"世界上最遥远的距离，就是我在你身边，却等不到你来。如果上海、广州、杭州……你都与我们擦身而过，这一次，就在深圳，豪恩主场，让我们来场最好的相遇！",
        "img":require("@/assets/new/2.png")},
        {"time":"2017-08-12 16:31:54","title":"专注智能感知，用心质造传感器","txt":"传感器是智能家居的基石。传感器的“感”来源于“感觉”一词，在智能家居系统中，传感器就是无处不在的“五官”，拥有全面感知的能力，时刻采集身边的家居环境信息，实现安全、智能的高品质生活。",
        "img":require("@/assets/new/3.png")},
        {"time":"2017-08-11 16:35:38","title":"豪恩安防携手恒明集团、仁恒集团，共造地标级百亿智慧产业新城","txt":"2017年8月5日上午，由深圳市恒明集团联合新加坡仁恒置地集团合作开发的回龙埔百万级的产业新城项目，举行了主题为“智敬未来，共创时代”的盛大奠基仪式暨重大项目签约仪式，豪恩安防作为行业代表受邀参与项目建设，与广大行业大咖共同见证这一历史时刻。",
        "img":require("@/assets/new/4.png")},
        {"time":"2017-08-07 16:38:48","title":"如何缔造高品质的“传感器”? 我们邀您一起聊！","txt":"8月10日，2017 中国智能家居集成趋势高峰论坛即将在上海爱菲尔会馆（滨江店）开幕,以“集智·未来”为主题的第四届CSHIA智能家居系统工程师同学会也将同期盛大举办。",
        "img":require("@/assets/new/5.png")},
        {"time":"2017-08-07 16:37:01","title":"IOTE 2017 即将开幕，豪恩携最强产品阵容登场亮相","txt":"8月16日-18日，第九届深圳国际物联网博览会（IOTE 2017）即将在深圳会展中心拉开序幕，这是豪恩安防今年首度在深圳本土展会亮相，届时我们将携全面的物联网产品阵容登场。",
        "img":require("@/assets/new/6.png")},
        {"time":"2017-06-13 16:42:35","title":"专注物联传感，共筑阿里 IoT新生态","txt":"继去年发布全球物联网 ( IoT ) 生态伙伴计划后，阿里巴巴第一次 IoT 合作伙伴计划大会 2017  ( ICA )  6 月 10 日在上海正式举行，中安消物联作为 ICA 联盟理事单位成员出席本次大会。",
        "img":require("@/assets/new/7.png")},
        {"time":"2017-05-27 16:45:39","title":"璀璨上海丨中安消物联荣膺安防产品行业杰出品牌、创新产品技术两项大奖","txt":"今天的上海，风和日丽、阳光明媚，就好像配合性地以最靓丽的姿态迎接安防行业盛会的五彩纷呈。第十七届上海国际公共安全产品博览会，在众多专业观众和行业领军企业、创新者和开发者的共同见证下正式落下帷幕",
        "img":require("@/assets/new/8.png")},
        {"time":"2017-05-25 16:47:40","title":"黄浦江畔，豪恩安防","txt":"5月24日，由公安部治安管理局、上海市公安局支持，上海安全防范报警协会主办的第十七届上海国际公共安全产品博览会（简称“上海安博会”）在上海世博展览馆盛大开幕。",
        "img":require("@/assets/new/9.png")},
        {"time":"2017-05-17 16:50:25","title":"用心解答，这道爱的数学题","txt":"儿时印象里 记忆最深刻的，就是妈妈煮的饭 那时候，馋嘴的你 在厨房跟前跟后，问东问西 还未正式开饭 妈妈就先让你第一时间“尝鲜”！",
        "img":require("@/assets/new/10.png")},
        {"time":"2017-05-07 16:52:00","title":"看上海丨“智造”引领新主流，豪恩安防即将亮相上海安博会","txt":"安全是所有智能化的基础，集合诸多技术的人工智能是安防产品和系统的发展趋势。在互联网发展对安防行业带来升级换代的大背景下，防盗报警、智能家居等传统安防与新增物联网、云存储等形成新的生态安防。",
        "img":require("@/assets/new/11.png")},
        {"time":"2017-04-28 16:53:07","title":"喜讯丨中安消物联摘得中国安防行业两项年度大奖","txt":"北京时间 4 月 26 日，由华强安防网主办的“ 2016-2017 年度中国安防行业优质供应商评选颁奖典礼”在深圳马哥孛罗好日子酒店隆重举行。",
        "img":require("@/assets/new/12.png")}
        ],
				list2:[{"time":"2016-09-27 13:05:08","title":"“豪恩二当家”携手京东微联，众筹破百万","txt":"3月9日，国内知名传感技术企业中安消物联传感（深圳）有限公司（A股代码：600654 原豪恩安防）在京东发布了首款物联网家用报警套装——“豪恩二当家” 并同时推出智能家居品牌iHORN。",
        "img":require("@/assets/new/13.png")}
        ]
			}
		},
    beforeCreate(){

    },
    methods:{
        show:function(tab,event){
           var that=this;
           /*初始化*/
           that.max=that.init;
           $(".loding").css({display:"block"})
          if(tab.name=='first'){
            that.all=that.list;
          }else if(tab.name=='second'){
             that.all=that.list1;
          }else if(tab.name=='third'){
            that.all=that.list2;
          }
        },
        Kong:function(){
             var all=this.all.length;
             var max=this.max;
             var lang=this.lang;
             this.max+=this.lang;
             if(max>=(all-lang+1)){
              $(".loding").css({display:"none"})
             }
        }

    },
    watch: {

    },
    created(){
        this.list=this.list1.concat(this.list2);
        this.all=this.list;
    },
    updated(){
          //79  用户
          // function show(){
          //   return ajax.get("https://www.apiopen.top/findStatistics?appKey=00d91e8e0cca2b76f515926a36db68f5");
          // }
          // //20  商品
          // function jie(){
          //   return ajax.get("https://www.apiopen.top/satinGodApi?type=1&page=1");
          // }
          // //    积分
          // function jing(){
          //   return ajax.get("https://www.apiopen.top/satinGodApi?type=1&page=1");
          // }
          //          ajax.all([kou()]).then(ajax.spread(function(){
          //              var arr1=arguments[0];
          //              console.log(arr1)
          //          })).catch(error=>{
          //              console.log("只要有一个请求失败")
          //          })
          //
    }
	}
</script>

<style>

</style>
