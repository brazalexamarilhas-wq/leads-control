
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'src', 'components', 'ui');

function fixEmptyInterfaces(directory) {
    if (!fs.existsSync(directory)) {
        console.log(`Directory not found: ${directory}`);
        return;
    }

    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const filepath = path.join(directory, file);
        const stat = fs.statSync(filepath);

        if (stat.isDirectory()) {
            fixEmptyInterfaces(filepath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            let content = fs.readFileSync(filepath, 'utf-8');

            // Regex to find: export interface X extends Y {}
            // Replace with: export type X = Y
            const pattern = /export interface (\w+) extends ([^{]+) \{\}/g;

            if (pattern.test(content)) {
                console.log(`Fixing ${file}...`);
                const newContent = content.replace(pattern, 'export type $1 = $2');
                fs.writeFileSync(filepath, newContent, 'utf-8');
            }
        }
    });
}

console.log('Starting lint fix...');
fixEmptyInterfaces(targetDir);
console.log('Done.');
