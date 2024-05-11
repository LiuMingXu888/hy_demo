<script setup>
    // 内置组件
    import { ref, reactive, toRefs, computed, watch, onMounted, onUnmounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { storeToRefs } from 'pinia'
    
    // 第三方库
    
    // 外部引用
    
    // 组件使用
    const route = useRoute()
    const router = useRouter()
    
    // 侧边导航索引
    const active = ref(0);

    // 侧边导航数据
    const obj = reactive({
        "男装": [
            { name: "男装1", price: 12 },
            { name: "男装2", price: 12331 },
            { name: "男装3", price: 12 }
        ],
        "女装": [
            { name: "女装1", price: 12 },
            { name: "女装2", price: 12331 },
            { name: "女装3", price: 12 },
            { name: "女装3", price: 12 },
        ],
        "童装": [
            { name: "女装1", price: 12 },
            { name: "女装2", price: 12331 },
            { name: "女装3", price: 12 },
        ],
        "电器": [
            { name: "女装1", price: 12 },
            { name: "女装2", price: 12331 },
            { name: "女装3", price: 12 },
        ],
        "鞋包": [
            { name: "女装1", price: 12 },
            { name: "女装2", price: 12331 },
            { name: "女装3", price: 12 },
            { name: "女装3", price: 12 },
            { name: "女装3", price: 12 },
            { name: "女装3", price: 12 },
            { name: "女装3", price: 12 },
        ],
    })
    
    // 获取ref列表
    const refList = ref([])
    const getRef = (value)=>{
        refList.value.push(value)
    }

    // 获取ref对应的offsetTop列表
    const refTop = ref([])
    const getTop = ()=>{
        refList.value.forEach((item)=>{
            refTop.value.push(item.offsetTop)
        })
    } 
    
    // 跳转到对应的位置
    let box = ref()
    let flag = ref(false)
    let currrnt = ref(0)
    const fn = (num)=>{
        flag.value = true
        currrnt.value = refTop.value[num]-21
        box.value.scrollTo({
            top: currrnt.value,
            behavior: "smooth",
        })
    }
    
    // 设置滚动事件
    let watchScroll = (el)=>{
        if (Math.ceil(box.value.scrollTop) === currrnt.value) flag.value = false
        if (flag.value) return 
        let top = Math.ceil(el.target.scrollTop)
        let index = refTop.value.length-1
        for(let i=0; i<refTop.value.length; i++){
            if(top < refTop.value[i]-21){
                index = i-1
                break
            }
        }
        active.value = index
    }
    
    onMounted(()=>{
        getTop()
        box.value.addEventListener("scroll", watchScroll)
    })
    onUnmounted(()=>{
        box.value?.removeEventListener("scroll", watchScroll)
    })
    
</script>

<template>
    <div class="favor">
        <div class="left">
            <van-sidebar v-model="active" @change="fn">
                <van-sidebar-item v-for="(value,key, index) in obj" :key="index" :title="key" />
            </van-sidebar>
        </div>
        <div class="right" ref="box">
            <div v-for="(value,key, index) in obj" :key="index" :title="key" :ref="getRef">
                <h1>这是{{ key }}</h1>
                <div v-for="(e, i) in value" :key="i" class="item">
                    <p>{{ e.name }}</p>
                    <p>{{ e.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .favor {
        display: flex;
        .left{ 
            width: 30vw;
        }
        .right{ 
            width: 70vw;
            height: 100vh;
            background-color: pink;
            overflow-y: auto;
            .item {
                height: 200px;
                background-color: green;
            }
        }
    }
    
</style>