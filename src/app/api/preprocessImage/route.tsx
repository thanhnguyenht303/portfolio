import fs from 'fs';
import path from 'path';

export async function GET() {
  const rootDir = path.resolve('./public', "climate-change-project-image/image-preprocess");

  let foldersData = [];
  
  if (fs.existsSync(rootDir)) {
    const folders = fs.readdirSync(rootDir).filter(f => fs.statSync(path.join(rootDir, f)).isDirectory());
    
    for (let folder of folders) {
      const folderPath = path.join(rootDir, folder);
      const imageFiles = fs.readdirSync(folderPath).filter(f => !fs.statSync(path.join(folderPath, f)).isDirectory());
      
      const mainImage = imageFiles.length > 0 ? `/climate-change-project-image/image-preprocess/${folder}/${imageFiles[0]}` : null;
      const secondaryImages = imageFiles.slice(1).map(file => `/climate-change-project-image/image-preprocess/${folder}/${file}`);


      foldersData.push({
        folder,
        mainImage,
        secondaryImages
      });
    }

  } else {
    console.log(`${rootDir} does not exist.`);
  }

  return Response.json(foldersData);
};
