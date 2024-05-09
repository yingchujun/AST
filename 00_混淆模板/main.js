const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const generator = require('@babel/generator').default
const types = require('@babel/types')
const traverse = require('@babel/traverse').default

let jscode = fs.readFileSync(path.join(__dirname + '/old_jscode.js'), { encoding: 'utf-8' })
let ast = parser.parse(jscode, {
  sourceMaps: 'unambigous',
})
console.time("处理完毕，耗时");



















let code = generator(ast, {
  retainLines: false,
  jsescOption: { "minimal": true } 
}).code
fs.writeFileSync(path.join(__dirname + '/new_jscode.js'), code, { encoding: 'utf-8' })
console.timeEnd("处理完毕，耗时");
