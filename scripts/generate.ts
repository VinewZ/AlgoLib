import fs from 'fs'
import { skeleton } from './skeleton'

let currentDay: number = 1

if(!fs.existsSync('./src')){
  fs.mkdirSync('./src')
}

if(!fs.existsSync('./src/day1')){
  fs.mkdirSync('./src/day1')
} else {
  const srcDir = fs.readdirSync('./src')
  currentDay = srcDir.length + 1
  fs.mkdirSync(`./src/day${currentDay}`)
}

skeleton.forEach(script => {
  if(!fs.existsSync(script.name)){
    switch(script.type){
    case 'function':
      fs.writeFileSync(
        `./src/day${currentDay}/${script.fileName}.ts`,
        `/*\n${script.question}\n*/\n\n${script.tsType}\n\nexport default function ${script.name}(${script.parameters?.map(param => param)}):${script.returnType}{\n\n}`
      )
      break
    case 'class':
      fs.writeFileSync(
        `./src/day${currentDay}/${script.fileName}.ts`,
        `/*\n${script.question}\n*/\n\nexport default class ${script.name}{\n\n${script.methods?.map(method => `\n${method}\n` ).join('')}}`
      )
      break
    }
  }
})