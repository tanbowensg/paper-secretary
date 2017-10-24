// 中文替换表
const replaceTableCN = [
  [/\n/g, ''],
  [/,/g, '，'],
  [/\./g, '。'],
  [/:/g, '：'],
  [/\(/g, '（'],
  [/\)/g, '）'],
  [/"([^"]*)"/g, '“$1”'],
  [/'([^"]*)'/g, '‘$1’']
]

const replaceTableEN = [
  [/\s+/g, ' '],
  [/\n/g, '']
]

export default {
  name: 'LandingPage',
  data () {
    return {
      tab: 'format',
      text: '',
      result: ''
    }
  },
  methods: {
    changeTab (tab) {
      this.tab = tab
    },
    format (type) {
      let result = this.text
      let replaceTable = []
      switch (type) {
        case 'cn':
          replaceTable = replaceTableCN
          break
        case 'en':
          replaceTable = replaceTableEN
          break
      }

      replaceTable.forEach(t => {
        result = result.replace(t[0], t[1])
      })

      this.result = result
    }
  }
}
