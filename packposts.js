// packposts.js
// creates a posts index file fort he posts directory
var PATH = 'assets/posts';

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
var fs = require('fs');
var files = fs.readdirSync(`src/${PATH}/`);
var paths = [];
files
  .filter( f => f !== 'index.txt')
  .forEach(f => {
    paths.push(`${PATH}/${f}`);
  });
var fileContents = paths.join(`\r\n`);

fs.writeFileSync(`src/${PATH}/index.txt`, fileContents, err => {
    if (err) {
      console.error(`Error creating post index: ${err}`);
      return -1;
    }
    console.log(`Created posts index for ${files.length} posts.`);
  });

  return 0;