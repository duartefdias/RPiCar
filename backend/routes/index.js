module.exports = [];

console.log('Loading routes...');

const fs = require('fs');

function walk(dir, prefix){
    fs.readdirSync(dir + '/').forEach((file) => {
        if (fs.statSync(dir + '/' + file).isDirectory())
            walk(dir + '/' + file, prefix + file + '/');
        else if (file.match(/\.js$/) && file !== 'index.js') {
            var path = './' + prefix + file;
            module.exports.push(require(path));
        }
    });
}

walk(__dirname, '');
console.log(`Loaded routes from ${module.exports.length} files.`);
