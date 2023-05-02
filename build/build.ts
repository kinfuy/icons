import path from 'path';
import { rollup } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import vue from '@vitejs/plugin-vue'
import { log } from '@alqmc/build-utils';
import { buildOutpuPath, enterPath } from './utils/path';
const getBundle = (minify: boolean) =>
  rollup({
    input: [path.resolve(enterPath, './libs/index.ts')],
    plugins: [
      vue(),
      esbuild({
        target: 'es2018',
        minify,
      }),
    ],
    external: ['vue'],
  });

const buildBundled = async (minify: boolean) => {
  const bundle = await getBundle(minify);
  const tasks = [
    bundle.write({
      format: 'iife',
      file: path.resolve(
        buildOutpuPath,
        `index.iife${minify ? '.min' : ''}.js`
      ),
      name: 'KICONS',
      globals: { vue: 'Vue' },
    }),
  ];
  if (!minify)
    tasks.push(
      bundle.write({
        format: 'cjs',
        file: path.resolve(buildOutpuPath, `index${minify ? '.min' : ''}.js`),
        globals: { vue: 'Vue' },
      }),
      bundle.write({
        format: 'esm',
        file: path.resolve(buildOutpuPath, `index${minify ? '.min' : ''}.mjs`),
      })
    );
  await Promise.all(tasks);
};

const buildUnbundled = async () => {
  const bundle = await getBundle(false);
  bundle.write({
    format: 'es',
    dir: path.resolve(buildOutpuPath, 'es'),
    preserveModules: true,
    entryFileNames: '[name].mjs',
  });
  bundle.write({
    format: 'cjs',
    dir: path.resolve(buildOutpuPath, 'lib'),
    preserveModules: true,
    entryFileNames: '[name].js',
    exports: 'named',
  });
};

export const buildIcon = async () => {
  log.info('building...');
  await Promise.all([
    buildUnbundled(),
    buildBundled(true),
    buildBundled(false),
  ]);
};
