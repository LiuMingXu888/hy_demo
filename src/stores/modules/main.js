import { defineStore } from 'pinia'


const mainStore = defineStore("main",{
    state: ()=>{
        return  {
            loadFlag: false
        }
    },
})

export default mainStore