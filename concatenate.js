const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/runtime.js',
'./dist/polyfills.js',
'./dist/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/caculator-app.js');
await fs.copyFile('./dist/styles.css', 'elements/styles.css')
// await fs.copy('./dist/angular-elements/assets/', 'elements/assets/' )
})()