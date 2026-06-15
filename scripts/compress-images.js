const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PRODUCT_DIR = 'public/images/products';
const HERO_BG = 'public/images/hero-bg.png';
const GALLERY_DATA = 'src/data/gallery-data.json';

async function compressImage(inputPath, outputPath, maxSizeKB, initialQuality = 80) {
    let quality = initialQuality;
    let buffer = await sharp(inputPath)
        .webp({ quality })
        .toBuffer();

    while (buffer.length > maxSizeKB * 1024 && quality > 10) {
        quality -= 5;
        buffer = await sharp(inputPath)
            .webp({ quality })
            .toBuffer();
    }

    await fs.promises.writeFile(outputPath, buffer);
    return {
        originalSize: fs.statSync(inputPath).size,
        newSize: buffer.length,
        quality
    };
}

async function walk(dir) {
    let results = [];
    const list = await fs.promises.readdir(dir);
    for (let file of list) {
        file = path.resolve(dir, file);
        const stat = await fs.promises.stat(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(await walk(file));
        } else {
            if (/\.(jpg|jpeg|png)$/i.test(file)) {
                results.push(file);
            }
        }
    }
    return results;
}

async function run() {
    console.log('Starting image compression...');
    const stats = [];

    // 1. Process Product Images
    const productImages = await walk(PRODUCT_DIR);
    console.log(`Found ${productImages.length} product images.`);

    for (const imgPath of productImages) {
        const relativePath = path.relative(process.cwd(), imgPath);
        const webpPath = imgPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        
        console.log(`Compressing ${relativePath}...`);
        const result = await compressImage(imgPath, webpPath, 300);
        
        // Remove original if different
        if (imgPath !== webpPath) {
            fs.unlinkSync(imgPath);
        }

        stats.push({
            file: relativePath,
            originalSize: (result.originalSize / 1024).toFixed(2) + ' KB',
            newSize: (result.newSize / 1024).toFixed(2) + ' KB',
            reduction: ((1 - result.newSize / result.originalSize) * 100).toFixed(2) + '%'
        });
    }

    // 2. Process Hero BG
    if (fs.existsSync(HERO_BG)) {
        console.log('Compressing Hero BG...');
        const heroWebp = HERO_BG.replace(/\.png$/i, '.webp');
        const result = await compressImage(HERO_BG, heroWebp, 200);
        
        fs.unlinkSync(HERO_BG);
        
        stats.push({
            file: HERO_BG,
            originalSize: (result.originalSize / 1024).toFixed(2) + ' KB',
            newSize: (result.newSize / 1024).toFixed(2) + ' KB',
            reduction: ((1 - result.newSize / result.originalSize) * 100).toFixed(2) + '%'
        });
    }

    // 3. Update Gallery Data JSON
    if (fs.existsSync(GALLERY_DATA)) {
        console.log('Updating gallery data references...');
        let content = fs.readFileSync(GALLERY_DATA, 'utf8');
        content = content.replace(/\.(jpg|jpeg|png)/g, '.webp');
        fs.writeFileSync(GALLERY_DATA, content);
    }

    console.log('\nCompression Summary:');
    console.table(stats);
    
    fs.writeFileSync('compression-report.json', JSON.stringify(stats, null, 2));
}

run().catch(console.error);
