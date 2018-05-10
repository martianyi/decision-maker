function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min 
}

Page({
  data: {
    logo: '../../images/logo.png',
    lists: [{}, {}]
  },
  addList: function () {
    var lists = this.data.lists
    lists.push({})  
    this.setData({
      lists: lists,
    })
  },
  delList: function () {
    var lists = this.data.lists
    lists.pop()  
    this.setData({
      lists: lists,
    })
  },
  bindKeyInput: function(e) {
    var lists = this.data.lists
    lists[e.target.dataset.id]['value'] = e.detail.value
    this.setData({
      lists: lists
    })
  },
  formSubmit: function (e) {
    var options = e.detail.value
    var indices = Object.keys(options)
    var minIndex = Math.min(...indices)
    var maxIndex = Math.max(...indices)
    var theIndex = getRandomInt(minIndex, maxIndex)
    var result = options[theIndex]
    if (result === ''){
      wx.showToast({
        title: '好像没有选项哦',
        image: this.data.logo
      })
      return
    }
    wx.showLoading({
      title: '决策姬正在思考',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading()
      wx.navigateTo({
        url: '../result/result?result=' + result
      })
    }, 1500)
  },
  formReset: function(e) {
    var lists = this.data.lists
    var newLists = []
    for (let i = 0; i < lists.length; i++) {
      newLists.push({})
    }
    this.setData({lists: newLists})
  },
  onShareAppMessage: function () {
    return {
      title: '决策姬 - 选择困难症终结者',
      desc: '',
      path: '/pages/index/index',
      imageUrl: '../../images/logo.png'
    }
  }
})
