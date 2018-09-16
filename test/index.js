const fs = require('fs')
const postcss = require('postcss')
const px2vw = require('..')

const test = fs.readFileSync('./test/test.css')

const css = postcss(px2vw()).process(test).css

fs.writeFileSync('./test/index.css', css)