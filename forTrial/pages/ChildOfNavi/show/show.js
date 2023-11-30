// pages/ChildOfNavi/show/show.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      // 山水田园
      ['cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/山水田园/1-0.png',
      'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/山水田园/1-2.png',
      'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/山水田园/1-3.png',
      'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/山水田园/2-0.jpg',
      'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/山水田园/2-1.jpg',
      'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/山水田园/2-2.jpg',
      'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/山水田园/2-3.jpg'
      ],
      // 边塞征战
      [
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/边塞征战/1-0.jpg',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/边塞征战/1-1.jpg',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/边塞征战/1-2.jpg',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/边塞征战/1-3.jpg'
      ],
      // 羁旅思乡
      [
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/羁旅思乡/1-0.png',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/羁旅思乡/1-1.png',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/羁旅思乡/1-2.png',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/羁旅思乡/1-3.png'
      ],
      // 忧国忧民
      [
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/忧国忧民/1-0.png',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/忧国忧民/1-1.png',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/忧国忧民/1-2.png',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/忧国忧民/1-3.png'
      ],
      // 花前月下
      [
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/花前月下/1-0.png',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/花前月下/1-1.png',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/花前月下/1-2.png',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/花前月下/1-3.png'
      ],
      // 咏物言志
      [
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/咏物言志/1-0.png',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/咏物言志/1-1.jpg',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/咏物言志/1-2.jpg',
        'cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/咏物言志/1-3.jpg'
      ]
    ],
    Pagenum: 0
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
    this.setData({
      Pagenum: app.globalData.currentpage
      
    })
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