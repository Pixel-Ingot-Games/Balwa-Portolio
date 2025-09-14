import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, '../public/images/projects');

// Get all project directories
const projectDirs = fs.readdirSync(projectsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

projectDirs.forEach(projectId => {
  const projectPath = path.join(projectsDir, projectId);
  const manifestPath = path.join(projectPath, 'manifest.json');
  
  // Get all image files in the project directory
  const imageFiles = fs.readdirSync(projectPath)
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
    })
    .sort(); // Sort alphabetically for consistent ordering
  
  // Create manifest
  const manifest = {
    images: imageFiles
  };
  
  // Write manifest file
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Generated manifest for ${projectId}: ${imageFiles.length} images`);
});

console.log('All manifests generated successfully!');
