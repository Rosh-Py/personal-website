import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Default to public/blog relative to the current working directory
const dir = path.resolve(process.argv[2] || path.join(process.cwd(), 'public', 'blog'));

async function convert() {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);
  let convertedCount = 0;
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.gif'].includes(ext)) {
      const input = path.join(dir, file);
      const output = path.join(dir, file.replace(new RegExp(`${ext}$`, 'i'), '.webp'));
      
      console.log(`Converting ${file} to webp...`);
      try {
        if (ext === '.gif') {
          await sharp(input, { animated: true }).webp({ quality: 80 }).toFile(output);
        } else {
          await sharp(input).webp({ quality: 85 }).toFile(output);
        }
        
        // Remove the original
        fs.unlinkSync(input);
        console.log(`Successfully converted and removed original: ${file}`);
        convertedCount++;
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err);
      }
    }
  }

  console.log(`Optimization complete. Converted ${convertedCount} image(s).`);
}

convert().catch(console.error);
