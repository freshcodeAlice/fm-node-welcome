'use strict';

const fs = require('fs').promises;

fs.readFile('./text.txt','utf-8')
            .then(content => {
                const newContent = `OLD content: ${content} and NEW content: 'Again hello'`;
               fs.writeFile('./newfile.txt', newContent, 'utf-8'); //writeFile - перезаписує
              //  fs.appendFile('./newfile.txt', 'AND APPEND', 'utf-8'); //append додає в кінець файлу
            });