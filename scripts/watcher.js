const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs-extra');

const PUBLIC_VIEWS_FOLDER_PATH = path.resolve(__dirname, '../src/views/public');
const PUBLIC_VIEW_FILES_PATH = path.resolve(__dirname, '../src/config/publicViews.json');
const PRIVATE_VIEWS_FOLDER_PATH = path.resolve(__dirname, '../src/views/private');
const PRIVATE_VIEW_FILES_PATH = path.resolve(__dirname, '../src/config/privateViews.json');
const EXCLUDED_FILES_AND_FOLDERS = ['notfound', 'config'];

const watcherOfPublicViews = chokidar.watch(PUBLIC_VIEWS_FOLDER_PATH, {});
const watcherOfPrivateViews = chokidar.watch(PRIVATE_VIEWS_FOLDER_PATH, {});
const watcherOfConfigFilesOfPublicViews = chokidar.watch(PRIVATE_VIEWS_FOLDER_PATH, {});
const watcherOfConfigFilesOfPrivateViews = chokidar.watch(PRIVATE_VIEWS_FOLDER_PATH, {});

const createConfigFileOfViews = (viewsFolderPath, viewFilesPath) => () => {
  fs.readdir(viewsFolderPath, (error, files) => {
    if (error) return console.log(error);

    const viewsConfigFileContent = getContentOfViewConfigFiles(files, viewsFolderPath);

    fs.outputJSON(viewFilesPath, viewsConfigFileContent, (error) => {
      if (error) return console.log(error);
    });
  });
};

const getContentOfViewConfigFiles = (fileNames, viewsFolderPath) => {
  const contentOfViewConfigFiles = [];

  fileNames.forEach(fileName => {
    const fileNameSplitted = fileName.split('.');

    if (!EXCLUDED_FILES_AND_FOLDERS.includes(fileNameSplitted[0].toLowerCase())) {
      createAdditionalConfigFileOfView(fileNameSplitted[0], viewsFolderPath);
      contentOfViewConfigFiles.push({
        name: fileNameSplitted[0],
        path: fileNameSplitted[0].toLowerCase() === 'minka' ? '/' : `/${upperCamelCaseToSlugCase(fileNameSplitted[0])}`,
        extension: fileNameSplitted[fileNameSplitted.length-1],
      });
    }
  });

  return contentOfViewConfigFiles;
}

const createAdditionalConfigFileOfView = (fileName, viewsFolderPath) => {
  const fileNameInLowerCamelCase = upperCamelCaseToLowerCamelCase(fileName);
  const path = `${viewsFolderPath}/config/${fileNameInLowerCamelCase}.js`;
  const data = `export default {};`

  if (!fs.pathExistsSync(path))
    fs.writeFile(path, data, (error) => {
      if (error) return console.log(error.message);
    }); 
}

const upperCamelCaseToSlugCase = (word) => {
  return word.replace(/([A-Z])/g, (match) => ` ${match.toLowerCase()}`).trim().replace(/\s/g, '-');
}

const upperCamelCaseToLowerCamelCase = (word) => {
  return word.replace(/([A-Z])/g, (match, another, index) => index === 0 ? match.toLowerCase() : match);
}

watcherOfPublicViews
.on('add', createConfigFileOfViews(PUBLIC_VIEWS_FOLDER_PATH, PUBLIC_VIEW_FILES_PATH))
.on('change', createConfigFileOfViews(PUBLIC_VIEWS_FOLDER_PATH, PUBLIC_VIEW_FILES_PATH))
.on('unlink', createConfigFileOfViews(PUBLIC_VIEWS_FOLDER_PATH, PUBLIC_VIEW_FILES_PATH));

watcherOfPrivateViews
.on('add', createConfigFileOfViews(PRIVATE_VIEWS_FOLDER_PATH, PRIVATE_VIEW_FILES_PATH))
.on('change', createConfigFileOfViews(PRIVATE_VIEWS_FOLDER_PATH, PRIVATE_VIEW_FILES_PATH))
.on('unlink', createConfigFileOfViews(PRIVATE_VIEWS_FOLDER_PATH, PRIVATE_VIEW_FILES_PATH));

watcherOfConfigFilesOfPublicViews
.on('add', createConfigFileOfViews(PUBLIC_VIEWS_FOLDER_PATH, PUBLIC_VIEW_FILES_PATH))
.on('change', createConfigFileOfViews(PUBLIC_VIEWS_FOLDER_PATH, PUBLIC_VIEW_FILES_PATH))
.on('unlink', createConfigFileOfViews(PUBLIC_VIEWS_FOLDER_PATH, PUBLIC_VIEW_FILES_PATH));

watcherOfConfigFilesOfPrivateViews
.on('add', createConfigFileOfViews(PRIVATE_VIEWS_FOLDER_PATH, PRIVATE_VIEW_FILES_PATH))
.on('change', createConfigFileOfViews(PRIVATE_VIEWS_FOLDER_PATH, PRIVATE_VIEW_FILES_PATH))
.on('unlink', createConfigFileOfViews(PRIVATE_VIEWS_FOLDER_PATH, PRIVATE_VIEW_FILES_PATH));

