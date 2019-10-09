<template>
  <div id="About">
    <div class="A_header">
      <img src="https://pic.8pig.com/img/activity/about/page1.jpg" alt="">
    </div>
    <div class="A_main">
      <!-- scroll="{scrollTop:16px,isFixed:true}" -->
      <van-sticky>
        <van-button type="default" style="width:100%" scroll="{scrollTop:16px,isFixed:true}">
          <van-tabs v-model="active" title-active-color="red" style="margin-bottom:20px;text-align: left;"
            :sticky="false" scroll="{scrollTop:16px,isFixed:true}">
            <van-tab title="关于我们"  style="margin-bottom:90px;"> 
              <div class="content">
                <p class="title">8只小猪是谁</p>
                <p class="title_">WHO ARE WE</p>
                <img class="top_img" src="https://pic.8pig.com/img/activity/about/about.jpg">
                <p class="desc">
                  深圳市八戒旅游科技有限公司
                  8只小猪，分享式旅游第一品牌，在这里人们可以发布、发掘和预订世界各地的独特生活体验。无论是跟着日本农民一起在田野耕作，或是和哈佛留学生一起聆听名师讲座，或是去澳洲跟随渔民体验依山傍海的生活，亦或是与柏林马拉松发烧友一起奔跑，您都能享受到，由8只小猪全球130多个国家，800多个城市的上万当地人，为您带来的独一无二的生活体验。
                </p>
              </div>

            </van-tab>
            <van-tab title="公司团队" style="margin-bottom:90px;">
              <div class="content">
                <p class="title">公司团队</p>
                <p class="title_">TEAM</p>
                <img class="top_img" src="https://pic.8pig.com/img/activity/about/team.jpg">
                <p class="desc">
                  8只小猪由腾讯TOP300号员工+中青旅高管联合创办，成立于2015年3月，隶属于深圳市八戒旅游科技有限公司。团队融合了互联网+旅游业双重基因，核心团队60%来自腾讯，其他成员有来自迅雷等著名互联网公司和中青旅旅游行业精英。跨界、包容、开放是我们团队具备的素质。
                </p>
                <ul class="team_ul">
                  <li class="li1">
                    <div class="li_img">
                      <img class="team_li_img_" src="https://pic.8pig.com/img/activity/about/person-1-h5.jpg">
                    </div>
                    <div class="li_content">
                      <p class="team_li_name">黄卓生 <span class="li_ename">Joeson</span></p>
                      <p class="team_li_position">创始人兼CEO</p>
                      <p class="team_li_desc" style="padding-top: 19px;">
                        03年加入腾讯，担任无线商务拓展副总监、产品运营副总监；10年加入UC（现阿里移动事业群）担任运营总监。</p>
                    </div>
                  </li>
                  <li class="li2">
                    <div class="li_content">
                      <p class="team_li_name">邱会发 <span class="li_ename">Iron</span></p>
                      <p class="team_li_position">创始人兼CTO</p>
                      <p class="team_li_desc" style="padding-top: 19px;">
                        02年加入腾讯，前腾讯T4专家工程师，历任3G产品中心技术副总监、浏览器产品部技术总监、无线合作开发部运营总监等。</p>
                    </div>
                    <div class="li_img li_img2">
                      <img class="team_li_img_" src="https://pic.8pig.com/img/activity/about/person-2-h5.jpg">
                    </div>
                  </li>
                  <li class="li1">
                    <div class="li_img">
                      <img class="team_li_img_" src="https://pic.8pig.com/img/activity/about/person-2-h5-1.jpg">
                    </div>
                    <div class="li_content">
                      <p class="team_li_name">陈勇 <span class="li_ename">Philips</span></p>
                      <p class="team_li_position">联合创始人</p>
                      <p class="team_li_desc" style="padding-top: 19px;">
                        法语专业出身，多家顶级旅行社20年从业经验，走遍世界各大洲，精熟行业动向，为跨界互联网打下良好基础。</p>
                    </div>
                  </li>
                </ul>
                <div style="clear: both"></div>
              </div>
            </van-tab>
            <van-tab title="合作案例">
              <article id="cooperation" style="margin-bottom:90px;" class="content">
                <div class="fixed"></div>
                <section>
                  <p class="title">合作案例</p>
                  <p class="title_">COOPERATION</p>
                  <img class="top_img" src="https://pic.8pig.com/img/activity/about/event-1.jpg">
                  <p class="event_title">8只小猪&amp;中信银行深圳分行达成平台合作</p>
                  <p class="event_content">中信银行深圳分行日前与8只小猪达成合作，为其用户提供以当地人特色为主的自由行服务。
                    双方就全行特色旅游服务项目、出国金融特色游学服务、信用卡商城旅游商品合作以及全行员工出境游服务项目这四项展开深度合作。</p>
                  <div class="hr"></div>
                </section>
                <section>
                  <img class="top_img" src="https://pic.8pig.com/img/activity/about/event-2.jpg">
                  <p class="event_title">8只小猪&amp;途牛达成合作</p>
                  <p class="event_content">8只小猪已先后与携程、去哪儿、途牛等大型OTA达成合作，以8只小猪所倡导的“不旅行，去生活”的旅行方式，进一步推广深度体验当地特色的旅行方式。</p>
                  <div class="hr"></div>
                </section>
                <section>
                  <img class="top_img" src="https://pic.8pig.com/img/activity/about/event-3.jpg">
                  <p class="event_title">8只小猪&amp;飞猪——内容合作</p>
                  <p class="event_content">
                    目前，8只小猪已经全面入驻旅行头条，为飞猪提供优质当地攻略近700篇，涵盖马德里、巴塞罗那、多伦多、巴黎、里昂、曼彻斯特、毛里求斯、布达佩斯等80多个城市。</p>
                  <div class="hr"></div>
                </section>
                <section>
                  <img class="top_img" src="https://pic.8pig.com/img/activity/about/event-4.jpg">
                  <p class="event_title">8只小猪&amp;QQ浏览器——多时区全球跨年直播</p>
                  <p class="event_content">8只小猪携手QQ浏览器举办全球跨年直播盛宴，在世界不同地区围绕跨年主题进行18场直播，开创旅游界全球直播的先河，当天观看用户达180万。</p>
                  <div class="hr"></div>
                </section>
                <section>
                  <img class="top_img" src="https://pic.8pig.com/img/activity/about/event-5.jpg">
                  <p class="event_title">8只小猪&amp;凤凰科技&amp;深圳航空——新奇职业体验活动</p>
                  <p class="event_content">
                    新奇职业体验活动由8只小猪、深圳航空和凤凰科技联合推广、传播，活动共吸引6000+用户报名参加，20万人参与投票，活动获得参与者的一致好评，众多旅行大V赞誉有加。</p>
                  <div class="hr"></div>
                </section>
                <section>
                  <img class="top_img" src="https://pic.8pig.com/img/activity/about/event-6.jpg">
                  <p class="event_title">8只小猪&amp;凤凰科技——《环球tech行》直播栏目</p>
                  <p class="event_content">8只小猪与凤凰科技合作推出境外达人直播栏目《环球tech行》，由专业领域的达人深度带领观众体验当地特色内容。
                    至今已进行20余场直播，总观看人数超过500万，成为凤凰网主推栏目，目前已获得首页头条、科技头条等多个推荐位。</p>
                  <div class="hr"></div>
                </section>
                <section>
                  <img class="top_img" src="https://pic.8pig.com/img/activity/about/event-7.jpg">
                  <p class="event_title">8只小猪&amp;携程&amp;去哪儿——海外用车金牌供应商</p>
                  <p class="event_content">8只小猪与携程、去哪儿达成合作，成为携程海外用车Top 5供应商，月订单峰值3000单，接待能力强
                    <br>• OTA13个海外上线目的地城市用户平均4.9分的高分评价
                    <br>• 携程微领队金牌供应商</p>
                </section>
              </article>
            </van-tab>
            <van-tab title="媒体报道" style="margin-bottom:90px;">
              <article id="reoport" class="content reoport">
                <div class="fixed"></div>
                <section>
                  <p class="title">媒体报道</p>
                  <p class="title_ reoport_title_">REOPORT</p>
                  <p class="text_title">出境自助游的各种不便 这个团队没准都能解决（深圳商报报道）</p>
                  <time class="text_time">2017/3/18</time>
                  <a class="text_a" href="http://szsb.sznews.com/html/2017-03/18/content_3748647.htm">
                    <p>http://szsb.sznews.com/html/2017/03/18/content_3748647.htm</p>
                  </a>
                  <div class="hr"></div>
                </section>
                <section>
                  <p class="text_title">8只小猪与中信银行平台合作，共同打造出境游新玩法（齐鲁晚报报道）</p>
                  <time class="text_time">2017/2/27</time>
                  <a class="text_a" href="http://caijing.qlwb.com.cn/2017/0227/868950.shtml">
                    <p>http://caijing.qlwb.com.cn/2017/0227/868950.shtml</p>
                  </a>
                  <div class="hr"></div>
                </section>
                <section>
                  <p class="text_title">8只小猪运用留学生打造“体验式游学”（北青网报道）</p>
                  <time class="text_time">2017/1/11</time>
                  <a class="text_a" href="http://news.ynet.com/3.1/1701/11/12256986.html">
                    <p>http://news.ynet.com/3.1/1701/11/12256986.html</p>
                  </a>
                  <div class="hr"></div>
                </section>
                <section>
                  <p class="text_title">“8只小猪”被称为“旅游领域的淘宝”，用分享经济模式改变出境自由行玩法（南方日报报道）</p>
                  <time class="text_time">2016/12/19</time>
                  <a class="text_a" href="http://epaper.southcn.com/nfdaily/html/2016-12/19/content_7606199.htm">
                    <p>http://epaper.southcn.com/nfdaily/html/2016-12/19/content_7606199.htm</p>
                  </a>
                  <div class="hr"></div>
                </section>
                <section>
                  <p class="text_title">8只小猪牵手飞猪，全面入驻“旅行头条”（执惠报道）</p>
                  <time class="text_time">2016/11/10</time>
                  <a class="text_a" href="http://m.tripvivid.com/articles/8354?from=timeline&amp;isappinstalled=0">
                    <p>http://m.tripvivid.com/articles/8354?from=timeline&amp;isappinstalled=0</p>
                  </a>
                  <div class="hr"></div>
                </section>
                <section>
                  <p class="text_title">国庆出境游安全第一 8只小猪推出全球紧急救援服务（凤凰科技报道）</p>
                  <time class="text_time">2016/9/28</time>
                  <a class="text_a" href="http://tech.ifeng.com/a/20160928/44459336_0.shtml">
                    <p>http://tech.ifeng.com/a/20160928/44459336_0.shtml</p>
                  </a>
                  <div class="hr"></div>
                </section>
                <section>
                  <p class="text_title">旅游达人预约平台8只小猪获数千万元Pre-A轮融资（腾讯科技报道）</p>
                  <time class="text_time">2016/8/31</time>
                  <a class="text_a" href="http://tech.qq.com/a/20160831/003138.htm">
                    <p>http://tech.qq.com/a/20160831/003138.htm</p>
                  </a>
                  <div class="hr"></div>
                </section>
                <section>
                  <p class="text_title">8只小猪&amp;凤凰科技合作《环球Tech行》直播栏目：世界那么大 在这里看就够了</p>
                  <time class="text_time">2016/8/22</time>
                  <a class="text_a" href="http://tech.ifeng.com/a/20160822/44440199_0.shtml">
                    <p>http://tech.ifeng.com/a/20160822/44440199_0.shtml</p>
                  </a>
                  <div class="hr"></div>
                </section>
                <section>
                  <p class="text_title">8只小猪黄卓生：做一家没有导游的互联网旅游企业（亿欧网报道）</p>
                  <time class="text_time">2016/6/3</time>
                  <a class="text_a" href=" http://www.iyiou.com/p/27541">
                    <p>
                      http://www.iyiou.com/p/27541
                    </p>
                  </a>
                  <div class="hr"></div>
                </section>
                <section>
                  <p class="text_title">8只小猪与途牛达成战略合作 深耕自由行市场（猎云网报道）</p>
                  <time class="text_time">2016/3/22</time>
                  <a class="text_a" href="http://www.lieyunwang.com/archives/161859">
                    <p>http://www.lieyunwang.com/archives/161859</p>
                  </a>
                </section>
              </article>
            </van-tab>
          </van-tabs>
        </van-button>
      </van-sticky>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'About',
    data() {
      return {
        active: 0
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
      },
    }
  }
</script>
<style>
  body,
  html {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

  }

  .A_header img {
    width: 100%;
    height: 36.64rem
  }

  .van-tabs__line {
    height: 1px;
  }

  .content .title {
    color: #FF5F69;
    font-size: 18px;
    font-weight: bold;
    margin-top: .21333rem;
  }

  p {
    padding: 0;
    margin: .08rem 0;
  }

  .content .title_ {
    color: #999;
    font-weight: bold;
  }

  .content .top_img {
    width: 100%;
    margin-top: .67142rem;
  }

  .content .desc {
    font-size: 14px;
    margin-top: 1.0133rem;
    line-height: 1.5;
  }

  #about .contact {
    margin-top: .56rem;
  }
</style>