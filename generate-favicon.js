const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'public');
const logoPath = path.join(publicDir, 'fav.png');
const icoPath = path.join(publicDir, 'favicon.ico');

async function generateFavicon() {
  try {
    // Read the existing PNG
    const buffer = await sharp(logoPath)
      .resize(256, 256, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
      .png()
      .toBuffer();

    // For ICO format, we'll save as PNG (browser fallback) since sharp doesn't natively support ICO
    // Modern browsers prefer PNG format anyway
    await fs.promises.writeFile(icoPath, buffer);
    console.log(`✓ Favicon generated at ${icoPath}`);
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
