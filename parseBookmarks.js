const fs = require('fs')
const { JSDOM } = require('jsdom')

let html = fs.readFileSync('bookmarks_6_23_21.html')
const dom = new JSDOM(html)
const { document } = dom.window
