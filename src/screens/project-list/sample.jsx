<template>
    <div class="g-parkCard">
        <header>
            < img
                src=""
                alt="" 
@click="handleBack" 
>
        </header>
        <main>
            <div class="m-time">
                {{ time }}
            </div>
            <div class="m-img">
                < img 
: src="userInfo.imgUrl"
                alt="" 
>
            </div>
            <div class="m-name">
                {{ userInfo.name }}
            </div>
            <div class="m-company">
                <span>{{ userInfo.corpName }}</span>
            </div>
            <div class="m-parkCardId">
                <span>卡号：{{ userInfo.cardNumber }}</span>
                < img
                    src=""
                    alt="" 
@click="handleCopy" 
>
            </div>
        </main>
        <footer>
            <div class="m-parkName">
                < img src="" alt="" >
                    <span>{{ userInfo.gardenName }}</span> 
</div> 
</footer> 
</div> 
</template>
    <script>
        import 'vant/lib/toast/style/less'
        import moment from 'moment'
        import {copyTextToClipboard} from '@/utils/util'
        import {getCardUserInfo} from '@/api/park'
        export default {
            data() { 
return {
            time: moment().format('hh:mm:ss'),
        timer: null,
        userInfo: { } 
} 
},
        mounted () {
            // 创建定时器 
            this.timer = setInterval(() => {
                this.toGetNowTime()
            }, 1000) 
// 获取园区卡信息 
this.toGetCardUserInfo() 
},
        destroyed () {
            // 销毁定时器 
            clearInterval(this.timer)
        },
        methods: {
            moment,
            toGetCardUserInfo() {
            getCardUserInfo().then(res => {
                this.userInfo = res.result
            })
        },
        copyTextToClipboard,
        // 返回 
        handleBack () {
            this.$router.back()
        },
        // 复制卡号 
        handleCopy () {
            copyTextToClipboard(this.userInfo.cardNumber, this.successCallback, this.failCallback)
        },
        // 复制成功回调 
        successCallback () {
            this.$toast({ type: 'success', message: '卡号复制成功' })
        },
        // 复制失败回调 
        failCallback () {
            this.$toast({ type: 'danger', message: '卡号复制失败' })
        },
        // 获取时间 
        toGetNowTime () {
            this.time = moment().format('hh:mm:ss')
        } 
} 
}
    </script>