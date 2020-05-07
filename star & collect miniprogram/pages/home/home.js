// pages/home/home.js
Page({
  data: {
    name:'rayhomie',
    students:[
      {id: 1,name:'zhangsan', age:18 },
      {id: 2, name: 'lisi', age: 20 },
      {id: 3, name: 'wangwu', age: 10 },
      {id: 4, name: 'liuqi', age: 15 }
    ],
    counter:0,
    list:[]
  },
  handleBtnClick(){
    //1.错误的，这不像vue，它是不是响应式的双向绑定
    //this.data.counter=this.data.counter+1
    //console.log(this.data.counter)
    //2.使用this.setDate()直接更改data中的数据的值
    this.setData({
      counter:this.data.counter+1
    })
    },
    onLoad:function(){
      console.log(this)
      wx.request({
        url: 'http://123.207.32.32:8000/home/multidata',
        success:(res)=>{
          console.log(res);
          const data=res.data.data.banner.list;
          this.setData({
            list:data
          })
        }, 
        fail:(err)=>{
          console.log(err)
        }
      })
    }
  
})