// pages/navi/navi.js
const innerAudioContext=wx.createInnerAudioContext()
const backgroundAudioManager = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    heng:[
      "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/横1.jpg",
      "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/横2.jpg",
      "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/横3.jpg",
      "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/横4.jpg"
    ],
    Music:[
      {
        name:"成名在望",
        src:"cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/music/五月天 - 成名在望 (Life Live).mp3",
      },
    ],
    dura:{
      minn: "00",
      sec: "00",
      tot: 0
    },
    currenttime: 0,
    currentsec: "00 ",
    currentmin: " 00",
    currenttot: 0,
    cnt: 0
  },
  navito:function(e){
    var app = getApp()
    app.globalData.currentpage = e.target.dataset.id
    console.log(app.globalData.currentpage)
    wx.navigateTo({
      url: '/pages/ChildOfNavi/GeneralPage/GeneralPage',
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