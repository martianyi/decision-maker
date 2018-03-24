Page({
  data: {
    logo: '../../images/logo.jpg',
    result: '',
    showNavigatar: false
  },
  onLoad: function (option) {
    console.log(option)
    var result = option.result
    this.setData({ result: result })
    if (/true/.test(option.sharing)) {
      this.setData({ showNavigatar: true})
    }
  },
  onShareAppMessage: function () {
    return {
      title: '我用决策姬做出了决策',
      path: '/pages/result/result?result=' + this.data.result + '&sharing=true'
    }
  }
})
