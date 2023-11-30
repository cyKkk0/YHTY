// pages/ChildOfNavi/GeneralPage/GeneralPage.js
const backgroundAudioManager=wx.createInnerAudioContext({
  useWebAudioImplement: false
})
// 有这个设置才能正确执行 omtimeupdate 与小程序底层逻辑有关 我也不太懂
backgroundAudioManager.onCanplay( () => {
  backgroundAudioManager.paused
})

/*
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
*/
var app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    BackPic:[
      "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/分页/田园山水.png",
      "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/分页/边塞征战.png",
      "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/分页/羁旅思乡.png",
      "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/分页/忧国忧民.png",
      "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/分页/花前月下.png",
      "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/分页/咏物言志.png"
    ],
    // 背景图
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
    // 弹出小窗的封面图
    num : 0,
    Pagenum: app.globalData.currentpage,
    keywords: "",
    ifPop: 0,
    fangdajing: "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/分页/放大镜.png",
    Music:[
      {
        name: "気楽なお祭り日和",
        src: "cloud://yinhuaty-3g29vubsd10546f9.7969-yinhuaty-3g29vubsd10546f9-1319868389/？/music/梅林茂 - 気楽なお祭り日和.mp3",
        duration: 126
      },
    ],
    // 歌曲，后续要放到数据库里
    dura:{
      minn: "00",
      sec: "00",
      tot: 0
    },
    // 播放歌曲的时长
    currenttime: 0,
    currentsec: "00 ",
    currentmin: " 00",
    currenttot: 0,
    // 歌曲播放进度
    cnt: 0
    // 点击播放的次数，用于判断是要暂停还是播放歌曲
  },
  // 输入框获取输入内容  
  GetInput(e){
    this.setData({
      keywords: e.detail.value
    })
  },  
  // 点击放大镜后，显示弹窗，同时设置歌曲
  getpop(e){
    this.setData({
      ifPop: 1,
      num : Math.floor(Math.random() * 3)
    })
    /*
    backgroundAudioManager.title = this.data.Music[0].name
    backgroundAudioManager.src = this.data.Music[0].src
    backgroundAudioManager.stop()
    */

    // console.log(this.data.num)
  },
  // 页面跳转，进入详情页
  entrance(e){
    wx.navigateTo({
      url: '/pages/ChildOfNavi/show/show',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad(options) {
    // 每次已进入页面，都要设置该页面主题属于六个标题中的哪一个
    this.data.Pagenum = app.globalData.currentpage
    // console.log(this.data.Pagenum)
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
      Pagenum: app.globalData.currentpage,
      ifPop: 0
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    backgroundAudioManager.stop()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    backgroundAudioManager.stop()
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

  },
  // 隐藏页面，同时暂停播放歌曲
  changeIfpop: function(e){
    this.setData({
      ifPop: 0,
    })
    backgroundAudioManager.stop()
  },
  // 进度条的设置
  ChangeSlide: function(e){
    var tot = backgroundAudioManager.currentTime
    console.log("Changeslide：",tot)
    // console.log(tot)
    this.setData({
      currenttime: parseInt(tot),
      currenttot: parseInt(tot),
      currentsec: Math.floor(tot / 60),
      currentsec: Math.floor(tot % 60),
    })
  },
  // 拖拽进度条
  changetot: function(e){
    var tot = e.detail.value
    // console.log("Changetot:",tot)
    this.setData({
      currenttime: tot,
      currenttot: tot,
      currentsec: Math.floor(tot % 60),
      currentmin: Math.floor(tot / 60)
    })
    backgroundAudioManager.seek(tot)
  },
  // 音乐的播放与暂停
  MusicPlay:function(e){
    var cc = e.target.dataset.info
    // console.log(cc%2)
    if(cc % 2 == 0)
    {
      var Totmusic = this.data.Music.length
      // console.log(Totmusic)
      var num = parseInt(Math.random() * 100) % Totmusic
      backgroundAudioManager.title = this.data.Music[num].name
      backgroundAudioManager.src = this.data.Music[num].src
      backgroundAudioManager.play()
      // if(cc == 0)
      // {
        // console.log(backgroundAudioManager.duration)
        var dura = this.data.Music[num].duration
        // console.log(dura)
        var tot = Math.floor(dura)
        var min = Math.floor(dura / 60)
        var sec = Math.floor(dura) - 60 * min 
        if(min < 10) min = "0" + min
        if(sec < 10) sec = "0" + sec
        this.setData({
        'dura.minn': min,
        'dura.sec': sec,
        'dura.tot': tot
       })        
      backgroundAudioManager.seek(this.data.currenttot)
      
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
      
    }
    else{
      console.log("暂停")
      backgroundAudioManager.stop()
    }
    this.setData({
      cnt: cc + 1
    })
  },
  changemusic:function(e){
    this.setData({
      num : Math.floor(Math.random() * 10) % this.data.imgUrls[this.data.Pagenum-1].length,
      cnt : 0,
    })
  },
})