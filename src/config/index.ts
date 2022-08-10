import path from 'path';

const pathRoot = process.cwd();
const pathApp = path.join(pathRoot, 'src');
const pathPublic = path.join(pathRoot, 'public');
const pathImages = path.join(pathPublic, 'images'); 

const absolutePathPublic = path.join();
const absolutePathImages = path.join(absolutePathPublic, 'images');

export const productId = 140;

export const config = {
  pathRoot,
  pathApp,
  pathPublic,
  pathImages,
  absolutePathPublic,
  absolutePathImages
};