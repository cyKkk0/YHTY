// pages/navi/navi.js
const innerAudioContext=wx.createInnerAudioContext()
const backgroundAudioManager = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    heng:[
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/轮播图1.jpg",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/轮播图2.jpg",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/轮播图3.jpg",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/轮播图5.jpg"
    ],
    ifPop: 0,
    Opacii: 1,
    Music:[
      {
        name:"成名在望",
        src:"cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/Dripice - Escape.mp3",
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
  changeIfpop: function(e){
    this.setData({
      ifPop: 0,
      Opacii: 1,
    })
    backgroundAudioManager.stop()
    console.log(this.data.ifPop)
  },
  ChangeSlide: function(e){
    var tot = backgroundAudioManager.currentTime
    console.log("Changeslide：",tot)
    console.log(tot)
    this.setData({
      currenttime: parseInt(tot),
      currenttot: parseInt(tot),
      currentsec: Math.floor(tot / 60),
      currentsec: Math.floor(tot % 60),
    })
  },
  changetot: function(e){
    var tot = e.detail.value
    console.log("Changetot:",tot)
    this.setData({
      currenttime: tot,
      currenttot: tot,
      currentsec: Math.floor(tot % 60),
      currentmin: Math.floor(tot / 60)
    })
    backgroundAudioManager.seek(tot)
  },
  MusicPlay:function(e){
    var cc = e.target.dataset.info
    console.log(cc%2)
    if(cc % 2 == 0)
    {
      var num = 0;
      backgroundAudioManager.title = this.data.Music[num].name
      backgroundAudioManager.src = this.data.Music[num].src      
      if(cc == 0)
      {
        // console.log(backgroundAudioManager.src)
        var dura = backgroundAudioManager.duration
        console.log(dura)
        var tot = parseInt(dura)
        var min = parseInt(dura / 60)
        var sec = parseInt(dura) - 60 * min 
        if(min < 10) min = "0" + min
        if(sec < 10) sec = "0" + sec
        this.setData({
        'dura.minn': min,
        'dura.sec': sec,
        'dura.tot': tot
       })        
      console.log(this.data.dura)
      }
      console.log("开始")
      // console.log(backgroundAudioManager.src)
      backgroundAudioManager.seek(this.data.currenttot)
    }
    else{
      console.log("暂停")
      backgroundAudioManager.stop()
    }
    this.setData({
      cnt: cc + 1
    })
  },
  MusicPause: function(e){
    backgroundAudioManager.pause()
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
    this.setData({
      ifPop: 1
    })
    backgroundAudioManager.title = this.data.Music[0].name
    backgroundAudioManager.src = this.data.Music[0].src
    backgroundAudioManager.onTimeUpdate((res) => {
      var tot = backgroundAudioManager.currentTime
      var min = Math.floor(tot / 60)
      var sec = Math.floor(tot % 60)
      if(min < 10) min = "0" + min
      if(sec < 10) sec = "0" + sec
      this.setData({
        currenttot: tot,
        currentmin: min,
        currentsec: sec
      })
    })
    // innerAudioContext.title = this.data.Music[0].name
    // innerAudioContext.src= this.data.Music[0].src
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    backgroundAudioManager.stop()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      Opacii: this.data.ifPop ? 0.5 : 1
    })
    console.log(this.data.Opacii)
    backgroundAudioManager.stop()
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