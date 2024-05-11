<script setup>
    import { ref, reactive, toRefs, onMounted, computed} from 'vue'
    import load from '@/components/loadBox.vue'
    const active = ref(0);
    const icon = {
      active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactive:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
    };
</script>

<template>
    <div id="app">
      <load></load>
      <router-view ></router-view>
      <van-tabbar v-model="active" v-show="!$route.meta.flag" route>
        <van-tabbar-item badge="3" to="/home">
          <span>自定义</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search" to="/about/1/两面性">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/favor">标签</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<style lang="less" scoped>

</style>