<script setup>
    import { ref, reactive, toRefs, onMounted, computed} from 'vue'
    import { useRouter } from 'vue-router'
    import { getGo, putGo, delGo } from '@/services'
    const router = useRouter()
    const getList = async()=> {
      let { data: {data} } = await getGo()
      console.log(data);
    }
    const putList = async()=> {
      let data = await putGo()
      console.log(data);
    }
    const delList = async()=> {
      let data = await delGo("663779772b320000f80015e4")
      console.log(data);
    }
    const tiao = ()=>{
      router.push({
        path: '/about/11/22',
      })
    }
</script>

<template>
    <div id="home">
        <h1>home</h1>
        <button @click="getList">getList</button>
        <button @click="putList">putList</button>
        <button @click="delList">delList</button>
        <button @click="tiao">跳转</button>
        <h1>2.00</h1>
        <h1>2.01</h1>    
        <h1>2.0222</h1>  
    </div>
</template>

<style lang="less" scoped>

</style>
