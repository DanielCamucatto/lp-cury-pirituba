import { Dirent, readdir } from 'fs';

interface ImagesFromFolderProps {
  path:string
}

interface ImagesFromFolderReturn {
  file: string
}

export const imagesFromFolder = async (options:ImagesFromFolderProps): Promise<ImagesFromFolderReturn[]> => {
  const p = options.path;

  const data = await new Promise<Dirent[]>((resolve, reject) => readdir(p, {
    encoding: 'utf8',
    withFileTypes: true
  }, (err, files) => {
    if (!err) {
      resolve(files.filter(file => /.(jpg|jpeg)/.test(file.name)));
    } else {
      reject(err);
    }
  }));

  const fullFiles:ImagesFromFolderReturn[] = [];

  data.forEach(dirent => {
    if (dirent.isFile()) {
      fullFiles.push({
        file: dirent.name
      });
    }
  })

  return fullFiles;
}

