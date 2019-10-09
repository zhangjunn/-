<template>
    <div id="Oder">
        <div class="O_header">
            <div class="O_top">
                行程定制
            </div>
            <div class="O_bottom">
                <van-steps :active="active" active-icon="arrow" active-color="#ff585c">
                    <van-step style="margin-right: 1.625rem;">提交需求</van-step>
                    <van-step>等待联系</van-step>
                    <van-step>安排行程</van-step>
                    <van-step style="margin-right: 1.625rem;">确认付款</van-step>
                    <van-step>轻松出行</van-step>
                </van-steps>
            </div>
        </div>
        <div class="O_line">
            出游基本信息
        </div>
        <div class="O_container">
            <div class="form-item form-layout" style="line-height: 1.9933rem;">
                <div data-v-5ee3bfa0="" class="left"><em data-v-5ee3bfa0="">*</em><span data-v-5ee3bfa0="">目的地</span>
                </div>




                <!-- 弹窗 -->
                <div data-v-5ee3bfa0="" class="right"><span data-v-c91f2704="" data-v-5ee3bfa0="">
                        <!-- 点击出现滚动 -->
                        <van-cell is-link @click="showPopup" style="margin-top:-5px;color: #bbbbbb;">请选择</van-cell>
                        <van-popup v-model="show" close-icon="cross" close-icon-position="top-right" position="right"
                            :style="{ height: '100%', width: '100%' }">

                            <!-- 到了这个页面后返回功能 -->
                            <van-nav-bar title="" left-text="返回" right-text="确认" left-arrow @click-left="onClickLeft"
                                @click-right="onClickRight" />
                            <!-- 里面内容国家 -->
                            <van-index-bar>
                                <van-index-anchor index="热门国家/地区" class="country" :index-list="indexList" />
                                <div class="hot_city">
                                    <ul class="O_list">
                                        <li class="O_item">台湾（中国）</li>
                                        <li class="O_item">日本</li>
                                        <li class="O_item">韩国</li>
                                        <li class="O_item">泰国</li>
                                        <li class="O_item">法国</li>
                                        <li class="O_item">美国</li>
                                        <li class="O_item">澳大利亚</li>
                                    </ul>

                                </div>
                                <van-index-anchor index="A" class="country" />
                                <ul class="O_list">
                                    <li class="O_item">澳门（中国）</li>
                                    <li class="O_item">奥地利</li>
                                    <li class="O_item">阿根廷</li>
                                    <li class="O_item">爱尔兰</li>
                                    <li class="O_item">爱沙尼亚</li>
                                    <li class="O_item">阿塞拜疆</li>
                                    <li class="O_item">阿尔及利亚</li>
                                    <li class="O_item">安哥拉</li>
                                    <li class="O_item">埃及</li>
                                    <li class="O_item">埃塞俄比亚</li>
                                    <li class="O_item">澳大利亚</li>
                                    <li class="O_item">阿联酋</li>
                                    <li class="O_item">阿曼</li>
                                </ul>
                                <van-index-anchor index="B" class="country" />
                                <ul data-v-1c3619e4="" class="O_list">
                                    <li data-v-1c3619e4="" data-id="106" class="O_item">巴拿马</li>
                                    <li data-v-1c3619e4="" data-id="179" class="O_item">巴勒斯坦国</li>
                                    <li data-v-1c3619e4="" data-id="254" class="O_item">保加利亚</li>
                                    <li data-v-1c3619e4="" data-id="242" class="O_item">北爱尔兰</li>
                                    <li data-v-1c3619e4="" data-id="109" class="O_item">伯利兹</li>
                                    <li data-v-1c3619e4="" data-id="114" class="O_item">巴哈马</li>
                                    <li data-v-1c3619e4="" data-id="116" class="O_item">玻利维亚</li>
                                    <li data-v-1c3619e4="" data-id="123" class="O_item">巴西</li>
                                    <li data-v-1c3619e4="" data-id="125" class="O_item">冰岛</li>
                                    <li data-v-1c3619e4="" data-id="141" class="O_item">白俄罗斯</li>
                                    <li data-v-1c3619e4="" data-id="144" class="O_item">波兰</li>
                                    <li data-v-1c3619e4="" data-id="153" class="O_item">巴林</li>
                                    <li data-v-1c3619e4="" data-id="158" class="O_item">巴基斯坦</li>
                                    <li data-v-1c3619e4="" data-id="160" class="O_item">不丹</li>
                                    <li data-v-1c3619e4="" data-id="187" class="O_item">贝宁</li>
                                    <li data-v-1c3619e4="" data-id="188" class="O_item">博茨瓦纳</li>
                                    <li data-v-1c3619e4="" data-id="189" class="O_item">布隆迪</li>
                                    <li data-v-1c3619e4="" data-id="229" class="O_item">比利时</li>
                                    <li data-v-1c3619e4="" data-id="121" class="O_item">秘鲁</li>
                                    <li data-v-1c3619e4="" data-id="122" class="O_item">巴拉圭</li>
                                    <li data-v-1c3619e4="" data-id="158" class="O_item">巴基斯坦</li>
                                </ul>
                                <van-index-anchor index="C" class="country" />
                                <ul data-v-1c3619e4="" class="O_list" >
                                    <li data-v-1c3619e4="" data-id="163" class="O_item">朝鲜</li>
                                    <li data-v-1c3619e4="" data-id="195" class="O_item">赤道几内亚</li>
                                </ul>
                                <van-index-anchor index="D" class="country" />
                                <ul data-v-1c3619e4="" class="O_list">
                                    <li data-v-1c3619e4="" data-id="255" class="O_item">大溪地</li>
                                    <li data-v-1c3619e4="" data-id="127" class="O_item">丹麦</li>
                                    <li data-v-1c3619e4="" data-id="151" class="O_item">德国</li>
                                    <li data-v-1c3619e4="" data-id="214" class="O_item">多哥</li>
                                </ul>
                                <van-index-anchor index="E" class="country" />
                                <ul data-v-1c3619e4="" class="O_list">
                                    <li data-v-1c3619e4="" data-id="255" class="O_item">厄瓜多尔</li>
                                    <li data-v-1c3619e4="" data-id="127" class="O_item">俄罗斯</li>
                                </ul>
                                <van-index-anchor index="F" class="country" />
                                <ul data-v-1c3619e4="" class="O_list">
                                    <li data-v-1c3619e4="" data-id="128" class="O_item">法国</li>
                                    <li data-v-1c3619e4="" data-id="244" class="O_item">斐济</li>
                                    <li data-v-1c3619e4="" data-id="133" class="O_item">芬兰</li>
                                    <li data-v-1c3619e4="" data-id="164" class="O_item">菲律宾</li>
                                    <li data-v-1c3619e4="" data-id="136" class="O_item">梵蒂冈</li>
                                </ul>
                            </van-index-bar>

                        </van-popup>

                    </span><i data-v-c91f2704="" data-v-5ee3bfa0="" class="iconfont icon-icon10"></i></div>
            </div>
            <div class="form-item form-layout">
                <div data-v-5ee3bfa0="" class="left"><em data-v-5ee3bfa0="">*</em><span data-v-5ee3bfa0="">出游日期</span>
                </div>
                <div data-v-5ee3bfa0="" class="right"><span data-v-c91f2704="" data-v-5ee3bfa0="">
                        <span style="margin-right:15px;" @click="toggle()" v-show="open">请选择 ></span>
                        <input data-v-c91f2704="" data-v-5ee3bfa0="" type="date" placeholder="请选择"
                            style=" border: none;" v-show="close">
                    </span><i data-v-c91f2704="" data-v-5ee3bfa0="" class="iconfont icon-icon10"></i></div>
            </div>
            <div class="form-item form-layout" style=" border: none;">
                <div data-v-5ee3bfa0="" class="left"><em data-v-5ee3bfa0="">*</em><span data-v-5ee3bfa0="">游玩天数</span>
                </div>
                <div data-v-5ee3bfa0="" class="right"><span data-v-c91f2704="" data-v-5ee3bfa0="">
                        <van-stepper v-model="value" input-width="40px" button-size="32px" /></span><i
                        data-v-c91f2704="" data-v-5ee3bfa0="" class="iconfont icon-icon10"></i></div>
            </div>
        </div>
        <div class="O_line">
            出游者信息
        </div>
        <div class="O_container">
            <div class="form-item form-layout" style=" line-height: 2.0333rem;">
                <div data-v-5ee3bfa0="" class="left"><em data-v-5ee3bfa0="">*</em><span data-v-5ee3bfa0="">成人</span>
                </div>
                <div data-v-5ee3bfa0="" class="right"><span data-v-c91f2704="" data-v-5ee3bfa0="">
                        <van-stepper v-model="value2" input-width="40px" button-size="32px" /></span><i
                        data-v-c91f2704="" data-v-5ee3bfa0="" class="iconfont icon-icon10"></i></div>
            </div>
            <div class="form-item form-layout" style="line-height: 2.0333rem;">
                <div data-v-5ee3bfa0="" class="left"><span data-v-5ee3bfa0="">儿童</span>
                </div>
                <div data-v-5ee3bfa0="" class="right"><span data-v-c91f2704="" data-v-5ee3bfa0="">
                        <van-stepper min="0" v-model="value3" input-width="40px" button-size="32px" /></span><i
                        data-v-c91f2704="" data-v-5ee3bfa0="" class="iconfont icon-icon10"></i></div>
            </div>
            <div class="form-item form-layout" style=" line-height: 1.7333rem;">
                <div data-v-5ee3bfa0="" class="left"><em data-v-5ee3bfa0="">*</em><span data-v-5ee3bfa0="">预定人</span>
                </div>
                <div data-v-5ee3bfa0="" class="right"><span data-v-c91f2704="" data-v-5ee3bfa0="">
                        <input type="text" style=" border: none;text-align: right;" placeholder="姓名"></span><i
                        data-v-c91f2704="" data-v-5ee3bfa0="" class="iconfont icon-icon10"></i></div>
            </div>
            <div class="form-item form-layout" style="line-height: 1.7333rem;">
                <div data-v-5ee3bfa0="" class="left"><em data-v-5ee3bfa0="">*</em><span data-v-5ee3bfa0="">预定人</span>
                </div>
                <div data-v-5ee3bfa0="" class="right">
                    <span data-v-c91f2704="" data-v-5ee3bfa0="" class="red">+86</span>
                    <span data-v-c91f2704="" data-v-5ee3bfa0="">
                        <input type="tel" style=" border: none;text-align: right;" placeholder="手机号码"></span><i
                        data-v-c91f2704="" data-v-5ee3bfa0="" class="iconfont icon-icon10"></i></div>
            </div>
            <div class="form-item form-layout" style="border:none;">
                <div data-v-5ee3bfa0="" class="left"><span data-v-5ee3bfa0="">微信</span>
                </div>
                <div data-v-5ee3bfa0="" class="right">
                    <span data-v-c91f2704="" data-v-5ee3bfa0="">
                        <input type="text" style=" border: none;text-align: right;" placeholder="微信号"></span><i
                        data-v-c91f2704="" data-v-5ee3bfa0="" class="iconfont icon-icon10"></i></div>
            </div>
        </div>

        <div class="O_line">
            需要服务
        </div>
        <div data-v-c91f2704="" class="O_container">
            <h3 data-v-c91f2704="" class="title">选择你想要的服务类型（多选）</h3>
            <ul data-v-c91f2704="" class="tab-list">
                <li class="tab-li" :class="item.isSelected ?'Active' : '' " v-for="(item,index) in list"
                    @click="cutTabClick(index,item)" :key="index">{{item.name}}</li>
            </ul>
        </div>
        <div class="O_line">
            其他行程需求
        </div>
        <div data-v-c91f2704="" class="O_container"><textarea style="width:100%;height50px;margin-bottom:.625rem;"
                data-v-c91f2704="" placeholder="告诉我们你想要什么样的旅行吧！" class="textarea"></textarea>
        </div>

        <div class="line" style="margin-bottom:89px;width:100%; text-align: center;">
            <!-- {path:'/Country',query:{ id:item._id }} -->
            <router-link class="submit" :to="{}">
                提交
            </router-link>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'Oder',
        components: {

        },
        data() {
            return {
                active: 0,
                open: true,
                close: false,
                value: 3,
                value2: 1,
                value3: 0,
                show: false,
                indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                list: [{
                        name: '机场接送',
                        isSelected: false
                    },
                    {
                        name: '徒步向导',
                        isSelected: false
                    },
                    {
                        name: '包车向导',
                        isSelected: false
                    },
                    {
                        name: '定制行程',
                        isSelected: false
                    },
                    {
                        name: '机票代订',
                        isSelected: false
                    },
                    {
                        name: '商业翻译',
                        isSelected: false
                    },
                    {
                        name: '其他',
                        isSelected: false
                    }
                ],
                actiove: 0
            };
        },
        methods: {
            toggle: function () {
                // 开关
                this.open = !this.open
                this.close = !this.close
            },
            cutTabClick(index, item) {
                this.actiove = index
                //然后通过这个属性判断是否选中点亮和取消
                item.isSelected = !item.isSelected
            },
            showPopup() {
                this.show = true;
            },
            onClickLeft() {
                this.show = false;
            },
            onClickRight() {
                // console.log("e");
            }

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

    .O_top {
        height: 1.17333rem;
        line-height: 1.17333rem;
        text-align: center;
        margin: auto;
        font-size: 1.5rem;
        margin-top: .625rem;


    }

    .O_bottom {
        margin-top: 1.25rem;
        width: inherit;
        height: 2.36rem;
        text-align: center;
        padding: 0rem 0;
        border: 1px solid #bbbbbb;
        border-right: 0;
        border-left: 0;
        box-sizing: border-box;

    }

    .O_line {
        margin-top: 1.25rem;
        font-size: .9375rem;
        width: 100%;
        height: 2.7333rem;
        line-height: 2.7333rem;
        background-color: #f5f0f0;
        color: #888888;
        padding-left: 0.4rem;
    }

    .O_container {
        width: inherit;
        padding: 0.6rem;
        border: 1px solid #bbbbbb;
        border-right: 0;
        border-left: 0;
    }

    .O_container .form-item {
        padding-bottom: 0.46667rem;
        margin-bottom: 0.46667rem;
        border-bottom: 1px solid #bbbbbb;
    }

    .O_container .form-item .left {
        display: inline-block;
    }

    .O_container .form-item .left em {
        color: #ff585c;
        vertical-align: top;
        margin-right: 0.02667rem;
        font-style: normal
    }

    .O_container .form-item .right {
        float: right;
        color: #bbbbbb;
        vertical-align: top;
    }

    ::-webkit-input-placeholder {
        text-align: right;
    }

    .tab-list {
        display: flex;
        /* justify-content: space-around; */
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-left: 1.75rem;

    }

    .tab-list li {
        flex-basis: 30%;
        line-height: 1.875rem;
        text-align: center;
        margin: 0 0.4rem 0.4rem 0;
        border: 1px solid #bbbbbb;
        margin-top: 1.25rem;
        border-radius: 10px;
        color: #bbbbbb;
        border-radius: 0.27rem;
        color: #333333;
    }

    .Active {
        color: #ff585c;
        border-color: #ff585c;
        border: 2px solid #fd7522;
        background: #ff585c;
    }

    .O_container {
        width: inherit;
        padding: 0.4rem;
        border: 1px solid #bbbbbb;
        border-right: 0;
        border-left: 0;
    }

    .textarea {
        margin: 0;
        font: inherit;
        color: inherit;
        background-color: #fff;
        outline: 0;
        border: 0;
        width: inherit;
        height: 4.4rem;
    }

    /* 谷歌浏览器的placehoder向左移动 */
    .textarea::-webkit-input-placeholder {
        text-align: left;
        color: #bbbb;
    }

    .van-popup {
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
    }

    .submit {
        width: 100%;
        height: 2.5rem;
        background: #ff585c;
        margin-top: 2.625rem;
        display: block;
        text-align: center;
        line-height: 2.5rem;
        color: #f5f0f0;
        margin: auto;

    }

    .van-index-anchor {
        text-align: center;
    }

    .hot_city {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .O_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        text-align: right;
    }

    .O_list .O_item {
        flex-basis: 33%;
        text-align: center;
        color: #333333;
    }

    .van-index-anchor {
        width: inherit;
        width: 100%;
        color: #333333;
        background-color: #f7f5f5;

    }
</style>