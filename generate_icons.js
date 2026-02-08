
import fs from 'fs';
import path from 'path';
import { createCanvas, loadImage } from 'canvas';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateIcons() {
    const sizes = [64, 192, 512];
    const publicDir = path.join(__dirname, 'public');
    const logoPath = path.join(publicDir, 'logo.png');

    if (!fs.existsSync(logoPath)) {
        console.log('Logo not found, skipping icon generation.');
        return;
    }

    try {
        const image = await loadImage(logoPath);

        for (const size of sizes) {
            const canvas = createCanvas(size, size);
            const ctx = canvas.getContext('2d');

            // Draw background
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, size, size);

            // Draw logo centered
            const logoSize = size * 0.7;
            const offset = (size - logoSize) / 2;
            ctx.drawImage(image, offset, offset, logoSize, logoSize);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(path.join(publicDir, `pwa-${size}x${size}.png`), buffer);
            console.log(`Generated pwa-${size}x${size}.png`);
        }

        // Maskable icon (just bg)
        const maskCanvas = createCanvas(512, 512);
        const maskCtx = maskCanvas.getContext('2d');
        maskCtx.fillStyle = '#0f172a';
        maskCtx.fillRect(0, 0, 512, 512);
        // Draw simplified logo
        const mLogoSize = 512 * 0.6;
        const mOffset = (512 - mLogoSize) / 2;
        maskCtx.drawImage(image, mOffset, mOffset, mLogoSize, mLogoSize);

        fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), maskCanvas.toBuffer('image/png'));
        console.log('Generated pwa-maskable-512x512.png');

    } catch (e) {
        console.error('Error generating icons:', e);
    }
}

generateIcons();
