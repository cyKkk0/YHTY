// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:''
  },

  register(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  getPhone(e){
    console.log(e.detail.value)
    this.setData({
      phone:e.detail.value
    })
  },

  getPsw(e){
    console.log(e.detail.value)
    this.setData({
      password:e.detail.value
    })
  },

  login(){
    let phone = this.data.phone
    let password = this.data.password

    if(!phone){
      wx.showToast({
        title: '请输入手机号',
      })
      return
    }
    if(!password){
      wx.showToast({
        title: '请输入密码',
      })
      return
    }
    wx.cloud.database().collection('user')
   .where({
    phone, 
    password
            }).get().then(res => {
          console.log('登陆的结果',res)
          if(res.data&&res.data.length > 0){
            wx.setStorageSync('user', res.data[0])
            wx.showToast({
              title: '登录成功',
            })
            setTimeout(()=>{
            wx.navigateBack({
              delta:0,
            })
          },1000)
            
          }
          else{
            wx.showToast({
              icon:'error',
              title: '账号或密码错误',
            })
          }
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