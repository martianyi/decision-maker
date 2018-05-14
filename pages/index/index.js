function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min 
}

Page({
  data: {
    logo: '../../images/logo.png',
    lists: [{}, {}],
    optionCount: 0,
    curView: 0,
    result: ''
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
    var optionCount = 0
    Object.keys(lists).forEach(key => {
      if (lists[key]['value']) {
        optionCount += 1
      }
    })
    this.setData({
      lists: lists,
      optionCount: optionCount
    })
  },
  bindKeyInput: function(e) {
    var lists = this.data.lists
    lists[e.target.dataset.id]['value'] = e.detail.value
    var optionCount = 0
    Object.keys(lists).forEach(key => {
      if (lists[key]['value']) {
        optionCount += 1
      }
    })
    this.setData({
      lists: lists,
      optionCount: optionCount
    })
  },
  formSubmit: function (e) {
    var options = e.detail.value
    Object.keys(options).forEach((key) => {
      if (!options[key]) delete options[key]
    })
    if (Object.keys(options).length === 0) {
      wx.showToast({
        title: '好像没有选项哦',
        image: this.data.logo
      })
      return
    } else if (Object.keys(options).length === 1) {
      wx.showToast({
        title: '只有一个选项呢',
        image: this.data.logo
      })
      return
    }
    var indices = Object.keys(options)
    var minIndex = Math.min(...indices)
    var maxIndex = Math.max(...indices)
    var theIndex = getRandomInt(minIndex, maxIndex)
    var result = options[theIndex]
    this.setData({
      curView: 1,
      result: result,
    })
    setTimeout(() => {
      this.setData({
        curView: 2,
      })
    }, 2000)
  },
  formReset: function(e) {
    var lists = this.data.lists
    var newLists = []
    for (let i = 0; i < lists.length; i++) {
      newLists.push({})
    }
    this.setData({
      lists: newLists,
      optionCount: 0
    })
  },
  backToMain: function () {
    this.setData({
      curView: 0
    })
  },
  onShareAppMessage: function () {
    return {
      title: '决策姬 - 选择困难症终结者',
      desc: '',
      path: '/pages/index/index',
      imageUrl: '../../images/share.png'
    }
  }
})
