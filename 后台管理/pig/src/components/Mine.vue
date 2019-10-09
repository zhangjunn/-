<template>
    <div id="Mine">
        <div class="M_header">
            <div class="M_info">
                <div class="avatar-wrap">
                    <van-image round width="4rem" height="4rem" class="image" @click="$router.push('/Login')"
                        src="https://pic.8pig.com/avatar/default/no_login_avatar.jpg@112w_112h__1e_1c.webp" />
                </div>
                <div class="user_name" @click="$router.push('/Login')">点击登录</div>
            </div>
        </div>
        <main class="M_main">
            <div class="tab">
                <ul class="M_tab">
                    <li class="M_li"><i>
                            <van-icon name="like-o" /></i><span>我的收藏</span></li>
                    <li class="M_li"><i>
                            <van-icon name="records" /></i><span>我的订单</span></li>
                    <li class="M_li"><i>
                            <van-icon name="home-o" /></i><span>我的保单</span></li>
                </ul>
            </div>
            <div class="Coupon">
                <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
                <!-- 优惠券列表 -->
                <van-popup v-model="showList" position="bottom">
                    <van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon" :show-exchange-bar="false"
                        :disabled-coupons="disabledCoupons" @change="onChange" @exchange="onExchange" />
                </van-popup>
            </div>
            <div class="M_Coupon1">
                <ul class="M_Coupon2">
                    <li class="M_Coupon3">
                        <p class="M_p">我的优惠券</p>
                        <span class="side">
                            <van-icon name="arrow" /></span>
                    </li>
                    <li class="M_Coupon3">
                        <p class="M_p">邀请好友，立享优惠</p>
                        <span class="side">
                            <van-icon name="arrow" /></span>
                    </li>
                    <li class="M_Coupon3">
                        <p class="M_p">联系客服</p>
                        <span class="side">
                            <van-icon name="arrow" /></span>
                    </li>
                </ul>
            </div>
             <div class="M_Coupon1">
                <ul class="M_Coupon2">
                    <li class="M_Coupon3">
                        <p class="M_p">下载8只小猪APP</p>
                        <span class="side">
                            <van-icon name="arrow" /></span>
                    </li>
                    <li class="M_Coupon3">
                        <p class="M_p">成为达人，赚取百万佣金</p>
                        <span class="side">
                            <van-icon name="arrow" /></span>
                    </li>
                    <li class="M_Coupon3">
                        <p class="M_p">关于我们</p>
                        <span class="side">
                            <van-icon name="arrow" /></span>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>
<script>
    const coupon = {
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
    };
    export default {
        name: "Mine",
        data() {
            return {
                showList: "",
                chosenCoupon: -1,
                coupons: [coupon],
                disabledCoupons: [coupon]
            }
        },
        methods: {
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange(code) {
                this.coupons.push(coupon);
            }

        }
    }
</script>
<style>
    .M_header .M_info {
        height: 7.2rem;
        line-height: 7.2rem;
        font-size: .98667rem;
        color: #fff;
        background: url(https://pic.8pig.com/img/h5/new/my/bg.png) 0 0 no-repeat;
        background-size: cover;

    }

    .M_header .M_info {

        display: flex;
        justify-content: flex-start;
        align-content: center;
    }

    .M_header .M_info .avatar-wrap {
        display: flex;
    }

    .M_header .M_info .avatar-wrap .image {
        align-self: center;
        margin-left: .625rem;
    }

    .M_header .M_info .user_name {
        margin-left: 1.625rem;
        font-size: 1.6rem;
    }

    .M_main .M_tab {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #ddd;
        padding: .625rem .625rem .625rem .625rem;
    }

    .M_main .M_tab .M_li {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #6666;
    }

    .M_main .M_tab .M_li i {
        font-size: 2rem;

    }

    .M_Coupon1 .M_Coupon2 {
        padding: .625rem .625rem .625rem .625rem;
        margin-top: .625rem;
        border-bottom: 1px solid #ddd;
        margin-bottom: 2.25rem;

    }

    .M_Coupon1 .M_Coupon2 .M_Coupon3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: .625rem;
    }
</style>