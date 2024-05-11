import Demo from '../axios'

const getGo = ()=>{
    return Demo.get({
        url: "/getGo"
    })
}
const putGo = ()=>{
    return Demo.post({
        url: "/addGo",
        // data  通过 req.body 进行接受
        data: { name: '123', age: 123 }
    })
}
const delGo = (_id)=>{
    return Demo.delete({
        url: '/delGo',
        // params 通过 req.params 进行接受
        params: { _id: _id }
    })
}

export { getGo, putGo, delGo }
