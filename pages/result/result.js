Page({
  data: {
    logo: '../../images/logo.jpg',
    result: ''
  },
  onLoad: function (option) {
    console.log(option)
    var result = option.result
    this.setData({result: result})
  },
  bindBtnTap: function () {
    wx.navigateBack({
      delta: 1
    })
  }
})
