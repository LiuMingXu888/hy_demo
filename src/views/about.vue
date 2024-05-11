<script setup>
    import { ref, reactive, toRefs, onMounted, computed} from 'vue'
    import { useRoute } from 'vue-router'
    import dayjs from 'dayjs'
import { List } from 'vant';
    const route = useRoute()
    console.log(route)
    const date = ref(`${dayjs(Date.now()).format('MM-DD')} - ${dayjs(Date.now()+1000*60*60*24).format('MM-DD')}`);
    const chaDate = ref(1)
    const show = ref(false);

    const formatDate = (date) => dayjs(date).format('MM-DD') 

    const onConfirm = (values) => {
      const [start, end] = values;
      chaDate.value = dayjs(end).diff(start, 'day') + 1;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
    };
    const indexSlist = computed(()=> {
        let list = indexList.map(e=>e.name)
        list.unshift('#')
        return list
    } )
    const indexList = [
        {name: 'A', list: [ {"name": "刘洺旭"}, {"name": "sdad"},{"name": "dadad"},]},
        {name: 'B', list: [ {"name": "刘洺旭"}, {"name": "sdad"},{"name": "dadad"},]},
        {name: 'C', list: [ {"name": "刘洺旭"}, {"name": "sdad"},{"name": "dadad"},]},
        {name: 'D', list: [ {"name": "刘洺旭"}, {"name": "sdad"},{"name": "dadad"},]},
        {name: 'E', list: [ {"name": "刘洺旭"}, {"name": "sdad"},{"name": "dadad"},]},
        {name: 'F', list: [ {"name": "刘洺旭"}, {"name": "sdad"},{"name": "dadad"},]},
   ]
</script>

<template>
    <div id="about">
        <div class="date">
            <button @click="show = true">选择日期区间</button> <br>
            <span>日期：{{ date }}</span> <br>
            <span>他们之间的天数：{{ chaDate }}</span> <br>
            <van-calendar 
             v-model:show="show" position="left"
             :round="false"
             type="range" @confirm="onConfirm" />
        </div>
        <div class="data">
            <van-index-bar :index-list="indexSlist">
                <van-index-anchor index="热门"/>
                    <van-cell title="热门1" />
                    <van-cell title="热门2" />
                <template v-for="(e, i) in indexList" :key="i">
                    <van-index-anchor :index="e.name"/>
                    <template v-for="(e, i) in e.list" :key="i">
                        <van-cell :title="e.name" />
                    </template>
                </template>

            </van-index-bar>
        </div>
    </div>
</template>

<style lang="less" scoped>
    #about {
        .date {
            --van-calendar-popup-height: 100vh;
            height: 10vh;
            background-color: pink;
        }
        .data {
            height: 90vh;
            overflow-y: auto;
        }
    }
</style>