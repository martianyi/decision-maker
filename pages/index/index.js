//index.js
//获取应用实例
const app = getApp()
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min 
}

Page({
  data: {
    lists: [{}, {}],
  },
  onLoad: function () {
    console.log('page load')
  },
  addList: function () {
    var lists = this.data.lists
    var newData = {}
    lists.push(newData)//实质是添加lists数组内容，使for循环多一次  
    this.setData({
      lists: lists,
    })
  },
  delList: function () {
    var lists = this.data.lists
    lists.pop() //实质是删除lists数组内容，使for循环少一次  
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
  //事件处理函数
  formSubmit: function (e) {
    var answers = e.detail.value
    var quesition = answers['quesition']
    delete answers['question']
    console.log('question', quesition)
    console.log('answers', answers)
    var indices = Object.keys(answers)
    var minIndex = Math.min(...indices)
    var maxIndex = Math.max(...indices)
    var theIndex = getRandomInt(minIndex, maxIndex)
    var answer = answers[theIndex]
    wx.showToast({
      icon: 'none',
      title: '答案是: ' + answer,
      duration: 2000,
      mask: true
    })
  }
})
