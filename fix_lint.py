
import os
import re

def fix_empty_interfaces(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".tsx") or file.endswith(".ts"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Regex to find: export interface X extends Y {}
                # Replace with: export type X = Y
                # Pattern needs to handle multiline potentially, but usually these are single line in shadcn
                
                # Pattern: export interface Name extends Extension {}
                pattern = r'export interface (\w+) extends ([^{]+) \{\}'
                
                if re.search(pattern, content):
                    print(f"Fixing {file}...")
                    new_content = re.sub(pattern, r'export type \1 = \2', content)
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)

if __name__ == "__main__":
    target_dir = r"c:\Users\braza\Downloads\Leads control\src\components\ui"
    fix_empty_interfaces(target_dir)
