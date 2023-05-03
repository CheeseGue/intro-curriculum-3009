'use strict';
const fs = require('node:fs');

function ls(path){
  const promise = fs.promises.readdir(path, 'utf8');
  promise.then(files => {
    for (const file of files){
      console.log(file);
    }
  });
}

async function ls2(path){
  const files = await fs.promises.readdir(path, 'utf8');
  for (const file of files){
    console.log(file);
  }
}

function sleep(sec){
  return new Promise((resolve, reject) => {
    setTimeout(resolve, sec*1000);
  });
}

// function main(){
//   console.log("3秒後にお前は『おにぎりおいしい』という！");
//   sleep(3).then(() => {
//     console.log("おにぎりおいしい");
//     return new Promise((resolve, reject) => resolve());
//   }).then(() => {
//     return sleep(1);
//   }).then(() => {
//     console.log("…ハッ！");
//   });
// }

async function main(){
  console.log("3秒後にお前は『おにぎりおいしい』という！");
  await sleep(3)
  console.log("おにぎりおいしい");
  await sleep(1);
  console.log("…ハッ！");;
}

function writeToFile(content) {
  return new Promise((resolve, reject) => {
    fs.appendFile('dwango.txt', content, 'utf8', resolve);
  });
}

async function main(){
  for (let count = 0; count < 2525; count++){
    await writeToFile('ド');
    await writeToFile('ワ');
    await writeToFile('ン');
    await writeToFile('ゴ');
    await writeToFile('\n');
  }
}

function cat(fileName) {
  const content = fs.readFileSync(fileName, 'utf8');
  console.log(content);
}

cat(process.argv[2]);