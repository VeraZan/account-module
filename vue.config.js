// vue.config.js
module.exports = {
  // 选项...
  pages: {
    index: {
      // page 的入口
      entry: `./src/project/${process.env.VUE_APP_PROJECT}/main.js`,
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
    // bbb: 'src/project/bbb/main.js'
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      }         
    }
  },
  // 关闭代码检测
  lintOnSave: false
}