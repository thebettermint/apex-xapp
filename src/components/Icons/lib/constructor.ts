import fs from 'fs';
import path from 'path/posix';

const ICON_SOURCE_FOLDER = path.resolve(__dirname, '../svg');

// some helpful functions
const isSVG = (file: any) => /.svg$/.test(file);
const removeExtension = (file: any) => file.split('.')[0];
const toPascalCase = (string: any) => {
  return string
    .match(/[a-z]+/gi)
    .map((word: string) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('');
};

// getting all the icons
const icons = fs.readdirSync(ICON_SOURCE_FOLDER).filter(isSVG).map(removeExtension);

const indexContent = [
  "import React from 'react';",
  "import Icon from './icon';",
  '',
  icons
    .map(
      (icon: any) =>
        `export const ${toPascalCase(icon)} = (props:any) => <Icon {...props} name="${icon}" />;`
    )
    .join('\n'),
].join('\n');

fs.writeFileSync(path.resolve(__dirname, `../index.tsx`), indexContent);

//fs.writeFileSync(`index.js`, indexContent);

const iconMapContent = [
  icons.map((icon: any) => `import ${toPascalCase(icon)} from './${icon}.svg';`).join('\n'),
  '',
  'interface IIcon {',
  '[index: string]:React.FunctionComponent<React.SVGProps<SVGSVGElement> & {',
  'title?: string | undefined}>',
  '}',
  '',
  'const map:IIcon =  {',
  icons.map((icon: any) => `"${icon}": ${toPascalCase(icon)}, `).join('\n'),
  '};',
  'export default map',
].join('\n');

fs.writeFileSync(path.resolve(__dirname, `../svg/icon-map.tsx`), iconMapContent);

export default {};
