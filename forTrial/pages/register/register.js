// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  register(e){
    let item = e.detail.value
    console.log('捕获到点击了注册按钮',item)
    if(!item.phone){
      wx.showToast({
      icon:'error',
      title:'请输入手机号',
      })
      return
    }
    if(!item.password){
      wx.showToast({
      icon:'error',
      title:'请输入密码',
      })
      return
    }
    if(!item.name){
      wx.showToast({
      icon:'error',
      title:'请输入姓名',
      })
      return
    }
    if(!item.gender){
      wx.showToast({
      icon:'error',
      title:'请输入性别',
      })
      return
    }


    wx.cloud.database().collection('user').add({
      data:{
        _id:item.phone,
      phone:item.phone,
      password:item.password, 
      nickName:item.name,
      abatarUrl:'https://www.teasoo.com/public/Wap/images/avatar.jpg'
    }
      }).then(res=>{
      console.log('注册结果',res)
    })
    wx.showToast({
      title:'注册成功', 
    })

      wx.navigateBack({
      delta:0,
      }).catch(res => {
      console.log('注册失败',res) 
      wx.showToast({
      icon: 'error',
      title:'手机号已注册过',
     })
  })
},

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})