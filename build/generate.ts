import path, { join, resolve } from 'path';
import { readFile, writeFile } from 'fs/promises';
import { copyFile, emptyDir, mkdir } from 'fs-extra';
import camelcase from 'camelcase';
import glob from 'fast-glob';
import { format } from 'prettier';
import { log } from '@alqmc/build-utils';
import type { BuiltInParserName } from 'prettier';
import { buildOutpuPath, enterPath, enterSvgPath, rootpath } from './utils/path';

const PREFIX = 'k'

export const getSvgFiles = async () => {
  const rootPath = path.resolve(__dirname, './../svg');
  return glob('*.svg', { cwd: rootPath, absolute: true });
};

export const getName = (file: string) => {
  const filename = path.basename(file).replace('.svg', '');
  const componentName = camelcase(`${PREFIX}-${filename}`, { pascalCase: true });
  return {
    filename,
    componentName,
  };
};

const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  });

const transformToVueComponent = async (file: string) => {
  const content = await readFile(file, 'utf-8');
  const { filename, componentName } = getName(file);
  const vue = formatCode(
    `
<template>
${content}
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "${componentName}",
  })
</script>`,
    'vue'
  );
  writeFile(path.resolve(enterSvgPath, `${filename}.vue`), vue, 'utf-8');
};

const generateEntry = async (files: string[]) => {

  const outputs = files
  .map((file) => {
    const { filename, componentName } = getName(file);
    return `export { default as ${componentName} } from './${filename}.vue'`;
  })
  const warper = `export { default as ${camelcase(`${PREFIX}icon`, { pascalCase: true })} } from './icon.vue'`;
  outputs.push(warper);
  const code = formatCode( outputs.join('\n'));
  await writeFile(path.resolve(enterPath, './libs/index.ts'), code, 'utf-8');
};

const generateGlobalType = async (files: string[]) => {
  const code = files
    .map((file) => {
      const { componentName } = getName(file);
      return `${componentName}: typeof import('@kinfuy/icons')['${componentName}']`;
    })
    .join('\n');
  const globalType = formatCode(
    `declare module 'vue'{  export interface GlobalComponents {${code}}} export {};`
  );
  await mkdir(buildOutpuPath);
  await writeFile(
    path.resolve(buildOutpuPath, 'global.d.ts'),
    globalType,
    'utf-8'
  );
};

const createwarper =async ()=>{
  copyFile(
    resolve(rootpath, 'svg/icon.vue'),
    join(enterPath, 'libs/icon.vue')
  )
}

export const buildSvgVue = async () => {
  log.info('generating vue components');
  await emptyDir(enterSvgPath);
  const files = await getSvgFiles();
  log.info('generating vue files');
  await Promise.all(files.map((file) => transformToVueComponent(file)));
  log.info('generating entry file');
  await generateEntry(files);
  log.info('generating global.d.ts');
  await generateGlobalType(files);
  log.info('generating warper');
  await createwarper()
};
