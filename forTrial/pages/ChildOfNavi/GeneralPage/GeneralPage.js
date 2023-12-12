// pages/ChildOfNavi/GeneralPage/GeneralPage.js
var app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    condition1:1,
    condition2:2,
    condition3:3,
    condition4:4,
    condition5:5,
    condition6:6,
		imgUrls6: [
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/ywyzpage1.png",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/ywyzpage2.png",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/ywyzpage3.png"
    ],
    imgUrls5: [
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/hqyxpage1.png",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/hqyxpage2.png",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/hqyxpage3.png"
    ],
    

    imgUrls:[
      ['cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/sstypage1.png',
      'cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/sstypage2.png',
      'cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/sstypage3.png'
    ],
      [],
      ['cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/jlsxpage1.png',
      'cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/jlsxpage2.png',
      'cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/jlsxpage3.png'
    ],
      [],
      [
        'cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/hqyxpage1.png',
        'cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/hqyxpage2.png',
        'cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/hqyxpage3.png'
      ],
      [
        'cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/ywyzpage1.png',
        'cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/ywyzpage2.png',
        'cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/ywyzpage3.png'
      ]

    ],
    BackPic:[
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/山水田园搜索底图.png",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/边塞征战搜索底图.png",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/羁旅思乡搜索底图.jpg",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/忧国忧民搜索底图.jpg",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/花前月下搜索底图.png",
      "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/咏物言志搜索底图.png"
    ],
    Pagenum: app.globalData.currentpage,
    keywords: "",
    fangdajing: "cloud://cloud1-1g4i847ibeee4260.636c-cloud1-1g4i847ibeee4260-1320121817/我的放大镜.jpg"
  },
  GetInput(e){
    this.setData({
      keywords: e.detail.value
    })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    Pagenum: app.globalData.currentpage,
    function(options){
      
    };
    console.log(app.globalData.currentpage)
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