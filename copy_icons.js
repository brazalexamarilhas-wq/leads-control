
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const logoPath = path.join(publicDir, 'logo.png');

if (fs.existsSync(logoPath)) {
    const sizes = ['64x64', '192x192', '512x512'];
    sizes.forEach(size => {
        fs.copyFileSync(logoPath, path.join(publicDir, `pwa-${size}.png`));
        console.log(`Created pwa-${size}.png`);

        if (size === '512x512') {
            fs.copyFileSync(logoPath, path.join(publicDir, `pwa-maskable-${size}.png`));
            console.log(`Created pwa-maskable-${size}.png`);
        }
    });
} else {
    console.log("Logo not found to copy.");
}
