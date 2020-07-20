const fs = require('fs');
const path = require('path');

const prefix = 'src';
const packages = ['components', 'widgets']

function createIndexExport() {
  if (fs.existsSync('src/index.ts')) {
    fs.unlinkSync('src/index.ts');
  }
  const logStream = fs.createWriteStream('src/index.ts', {flags: 'a'});
  packages.forEach(async (path) => {
    const dir = await fs.promises.opendir(`${prefix}/${path}`);
    for await (const dirent of dir) {
      logStream.write(`export { default as ${dirent.name} } from './${path}/${dirent.name}'\n`);
    }
  });
}

createIndexExport();
