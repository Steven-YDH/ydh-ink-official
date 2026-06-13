const fs = require('fs');
const path = require('path');

const RAW_ASSETS_DIR = path.join(__dirname, '../raw_assets');
const PUBLIC_DIR = path.join(__dirname, '../public/images/products');
const DATA_OUTPUT_PATH = path.join(__dirname, '../src/data/gallery-data.json');

// Ensure output directories exist
function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Copy file helper
function copyFile(src, dest) {
  ensureDirExists(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

// Built-in map for standard categories to keep consistency
const CATEGORY_MAP = {
  '0 Mineral Oil Offset Ink': { name: '礦物油膠印油墨', key: 'Mineral Oil', target: 'mineral-oil' },
  'Mineral Oil Offset Ink': { name: '礦物油膠印油墨', key: 'Mineral Oil', target: 'mineral-oil' },
  'Soy Oil Offset Ink': { name: '大豆環保油墨', key: 'Soy Oil', target: 'soy-oil' },
  'UV Offset Ink': { name: 'UV 膠印油墨', key: 'UV Offset', target: 'uv-offset' },
  'Light Fastness Offset Ink': { name: '耐光膠印油墨', key: 'Light Fastness', target: 'light-fastness' },
  'POP Offset Ink': { name: 'POP 膠印油墨', key: 'POP Offset', target: 'pop-offset' }
};

// Pinyin mapping for common Chinese characters used in industrial categories
const PINYIN_DICT = {
  '環': 'huan', '保': 'bao', '大': 'da', '豆': 'dou', '系': 'xi', '列': 'lie',
  '特': 'te', '種': 'zhong', '油': 'you', '墨': 'mo', '耐': 'nai', '光': 'guang',
  '礦': 'kuang', '物': 'wu', '綠': 'lv', '色': 'se', '高': 'gao', '精': 'jing',
  '密': 'mi', '膠': 'jiao', '印': 'yin', '速': 'su', '乾': 'gan', '燥': 'zao',
  '固': 'gu', '化': 'hua', '水': 'shui', '無': 'wu', '防': 'fang', '偽': 'wei',
  '金': 'jin', '銀': 'yin'
};

function slugify(text) {
  return text
    .toString()
    .split('')
    .map(char => {
      if (/[a-zA-Z0-9]/.test(char)) {
        return char.toLowerCase();
      }
      if (PINYIN_DICT[char]) {
        return PINYIN_DICT[char];
      }
      if (/[\s_-]+/.test(char)) {
        return '-';
      }
      if (/[\u4e00-\u9fa5]/.test(char)) {
        return char; // keep Chinese if pinyin is not found
      }
      return '';
    })
    .join('')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function capitalizePinyin(text) {
  let result = [];
  let lastWasChinese = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (/[a-zA-Z0-9]/.test(char)) {
      result.push(char);
      lastWasChinese = false;
    } else if (PINYIN_DICT[char]) {
      const p = PINYIN_DICT[char];
      const capped = p.charAt(0).toUpperCase() + p.slice(1);
      if (result.length > 0 && lastWasChinese) {
        result.push(' ');
      }
      result.push(capped);
      lastWasChinese = true;
    } else if (/\s+/.test(char)) {
      result.push(' ');
      lastWasChinese = false;
    } else {
      result.push(char);
      lastWasChinese = false;
    }
  }
  return result.join('').replace(/\s+/g, ' ').trim();
}

function run() {
  console.log('Starting assets synchronization...');
  
  if (!fs.existsSync(RAW_ASSETS_DIR)) {
    console.error(`Error: Raw assets directory not found at ${RAW_ASSETS_DIR}`);
    process.exit(1);
  }

  // Scan all directories in RAW_ASSETS_DIR
  const dirNames = fs.readdirSync(RAW_ASSETS_DIR).filter(file => {
    return fs.statSync(path.join(RAW_ASSETS_DIR, file)).isDirectory();
  });

  const categories = dirNames.map(dirName => {
    if (CATEGORY_MAP[dirName]) {
      return {
        dirName,
        categoryName: CATEGORY_MAP[dirName].name,
        categoryKey: CATEGORY_MAP[dirName].key,
        targetSubdir: CATEGORY_MAP[dirName].target
      };
    } else {
      // Dynamic fallback for user created directories (e.g. "特種油墨" or "環保大豆系列")
      return {
        dirName,
        categoryName: dirName,
        categoryKey: capitalizePinyin(dirName),
        targetSubdir: slugify(dirName)
      };
    }
  });

  console.log(`Discovered ${categories.length} categories:`, categories.map(c => c.categoryName));

  const galleryItems = [];
  let globalId = 1;

  categories.forEach(cat => {
    const catPath = path.join(RAW_ASSETS_DIR, cat.dirName);
    if (!fs.existsSync(catPath)) {
      console.warn(`Category directory not found: ${catPath}`);
      return;
    }

    const groups = fs.readdirSync(catPath).filter(file => {
      return fs.statSync(path.join(catPath, file)).isDirectory();
    });

    console.log(`Found ${groups.length} groups in ${cat.dirName}`);

    groups.forEach(groupName => {
      const groupPath = path.join(catPath, groupName);
      const files = fs.readdirSync(groupPath).filter(file => {
        return /\.(jpg|jpeg|png)$/i.test(file);
      });

      if (files.length === 0) return;

      // Determine cover image
      const sortedByFileSize = [...files].sort((a, b) => {
        const sizeA = fs.statSync(path.join(groupPath, a)).size;
        const sizeB = fs.statSync(path.join(groupPath, b)).size;
        return sizeB - sizeA;
      });

      // Check specific preferred cover overrides first
      let coverFile = files.find(f => {
        const lower = f.toLowerCase();
        return lower.includes('fbbc1c72') || lower.includes('5dadd09b');
      });

      if (!coverFile) {
        // Look for explicit series / multi / cover indicators
        const coverCandidate = files.find(f => {
          const lower = f.toLowerCase();
          return lower.includes('系列') || 
                 lower.includes('合照') || 
                 lower.includes('合影') || 
                 lower.includes('多罐') ||
                 lower.includes('罐裝1') ||
                 lower.includes('袋装1') ||
                 lower.endsWith('1.jpg') ||
                 lower.endsWith('1.png') ||
                 f === '1.jpg' ||
                 f === '1.png';
        });

        // Fallback priority: explicit indicator -> largest file -> first file
        coverFile = coverCandidate || sortedByFileSize[0] || files[0];
      }

      // We copy all files to the public folder
      const webPaths = [];
      let coverWebPath = '';

      files.forEach(file => {
        const srcFilePath = path.join(groupPath, file);
        const relativeDest = path.join(cat.targetSubdir, groupName, file);
        const destFilePath = path.join(PUBLIC_DIR, relativeDest);
        
        // Copy the file
        copyFile(srcFilePath, destFilePath);

        const webPath = `/images/products/${relativeDest.replace(/\\/g, '/')}`;
        webPaths.push(webPath);

        if (file === coverFile) {
          coverWebPath = webPath;
        }
      });

      galleryItems.push({
        id: globalId++,
        category: cat.categoryName,
        categoryKey: cat.categoryKey,
        groupName: groupName,
        coverSrc: coverWebPath || webPaths[0],
        images: webPaths,
        aspect: "aspect-square"
      });
    });
  });

  // Ensure output directory for data exists
  ensureDirExists(path.dirname(DATA_OUTPUT_PATH));
  fs.writeFileSync(DATA_OUTPUT_PATH, JSON.stringify(galleryItems, null, 2), 'utf8');
  console.log(`Assets sync complete! Created data with ${galleryItems.length} groups.`);
  console.log(`Saved JSON data to ${DATA_OUTPUT_PATH}`);
}

run();
