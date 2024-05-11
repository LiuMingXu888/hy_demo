<script setup>
    import { ref, reactive, toRefs, computed, watch, onMounted, onUnmounted } from 'vue'
    import { storeToRefs } from 'pinia'
    import useMainStore from '@/stores/modules/main'
    const mainStore = useMainStore()
</script>

<template>
    <div id="load" v-show="mainStore.loadFlag">
        load...
    </div>
</template>

<style lang="less" scoped>
    #load {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0; bottom: 0; left: 0; right: 0;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }
</style>