import { basename, join, resolve } from 'path';
import { copy, copyFile } from '@alqmc/build-utils';
import glob from 'fast-glob';
import { buildOutpuPath, enterPath } from './utils/path';
const getTypeFiles = async () => {
  const rootPath = resolve(__dirname, '../dist/types');
  return glob('*.ts', { cwd: rootPath, absolute: true });
};

const moveType = async (target: 'es' | 'lib', files: string[]) => {
  files.forEach(async (x) => {
    await copyFile(x, join(`${buildOutpuPath}/${target}`, basename(x)));
  });
};
export const copyconfigFile = async () => {
  const files = await getTypeFiles();
  Promise.all([
    copyFile(
      resolve(enterPath, 'package.json'),
      join(buildOutpuPath, 'package.json')
    ),
    copy(`${enterPath}/style`,`${buildOutpuPath}/style`),
    moveType('es', files),
    moveType('lib', files),
  ]);
};
