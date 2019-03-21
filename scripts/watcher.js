const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs-extra');

const PUBLIC_VIEWS_ALIAS = 'views/public/';
const PUBLIC_VIEWS_PATH = path.resolve(__dirname, '../src/views/public');
const PUBLIC_VIEWS_CONFIG_FILE_PATH = path.resolve(__dirname, '../src/config/publicViews.json');
const PRIVATE_VIEWS_ALIAS = 'views/private/';
const PRIVATE_VIEWS_PATH = path.resolve(__dirname, '../src/views/private');
const PRIVATE_VIEWS_CONFIG_FILE_PATH = path.resolve(__dirname, '../src/config/privateViews.json');

var watcherOfPublicViews = chokidar.watch(PUBLIC_VIEWS_PATH, {});
var watcherOfPrivateViews = chokidar.watch(PRIVATE_VIEWS_PATH, {});

const createConfigFileOfViews = (viewsPath, viewsConfigFilePath, alias) => () => {
  fs.readdir(viewsPath, (error, files) => {
    if (error) return console.log(error);

    let viewsConfigFileContent = [];

    files.forEach(file => {
      const fileSplitted = file.split('.');
      
      if (fileSplitted[0].toLowerCase() !== 'notfound')
        viewsConfigFileContent.push({
          name: fileSplitted[0],
          path: fileSplitted[0].toLowerCase() === 'home' ? '/' : `/${upperCamelCaseToSlugCase(fileSplitted[0])}`,
          extension: fileSplitted[fileSplitted.length-1],
        });
    });

    fs.outputJSON(viewsConfigFilePath, viewsConfigFileContent, (error) => {
      if (error) return console.log(error);
    });
  });
};

const upperCamelCaseToSlugCase = (word) => {
  return word.replace(/([A-Z])/g, ($3) => ` ${$3.toLowerCase()}`).trim().replace(/\s/g, '-');
}

watcherOfPublicViews
.on('add', createConfigFileOfViews(PUBLIC_VIEWS_PATH, PUBLIC_VIEWS_CONFIG_FILE_PATH, PUBLIC_VIEWS_ALIAS))
.on('change', createConfigFileOfViews(PUBLIC_VIEWS_PATH, PUBLIC_VIEWS_CONFIG_FILE_PATH, PUBLIC_VIEWS_ALIAS))
.on('unlink', createConfigFileOfViews(PUBLIC_VIEWS_PATH, PUBLIC_VIEWS_CONFIG_FILE_PATH, PUBLIC_VIEWS_ALIAS));

watcherOfPrivateViews
.on('add', createConfigFileOfViews(PRIVATE_VIEWS_PATH, PRIVATE_VIEWS_CONFIG_FILE_PATH, PRIVATE_VIEWS_ALIAS))
.on('change', createConfigFileOfViews(PRIVATE_VIEWS_PATH, PRIVATE_VIEWS_CONFIG_FILE_PATH, PRIVATE_VIEWS_ALIAS))
.on('unlink', createConfigFileOfViews(PRIVATE_VIEWS_PATH, PRIVATE_VIEWS_CONFIG_FILE_PATH, PRIVATE_VIEWS_ALIAS));
