Page({
  data: {
    logo: '../../images/logo.jpg',
    result: ''
  },
  onLoad: function (option) {
    var result = option.result
    this.setData({result: result})
  }
})
