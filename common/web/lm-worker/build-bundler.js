/*
 * Note:  while this file is not meant to exist long-term, it provides a nice
 * low-level proof-of-concept for esbuild bundling of the various Web submodules.
 *
 * Add some extra code at the end of src/index.ts and run it to verify successful bundling!
 */

import esbuild from 'esbuild';
import { spawn } from 'child_process';

await esbuild.build({
  bundle: true,
  sourcemap: true,
  /*
   * https://esbuild.github.io/api/#sources-content would theoretically allow us to strip the source
   * while still keeping info useful for stack-tracing... but it doesn't pass through the sourcemap
   * concatenation setup.
   *
   * That said, we know how to 'nix it ourselves in post now, so... yeah.
   */
  sourcesContent: true,
  sourceRoot: "/",
  format: "esm",
  nodePaths: ['..', '../../models'],
  entryPoints: {
    'index': 'build/obj/index.js',
    'worker-main': 'build/obj/worker-main.js'
  },
  outdir: 'build/lib',
  outExtension: { '.js': '.mjs' },
  tsconfig: 'tsconfig.json',
  target: "es5"
});

// Bundled CommonJS (classic Node) module version
esbuild.buildSync({
  bundle: true,
  sourcemap: true,
  format: "cjs",
  nodePaths: ['..'],
  entryPoints: {
    'index': 'build/obj/index.js',
    'worker-main': 'build/obj/worker-main.js'
  },
  outdir: 'build/lib',
  outExtension: { '.js': '.cjs' },
  tsconfig: 'tsconfig.json',
  target: "es5"
});

// Direct-use version
esbuild.buildSync({
  bundle: true,
  sourcemap: true,
  format: "iife",
  nodePaths: ['..'],
  entryPoints: {
    'worker-main': 'build/obj/worker-main.js'
  },
  outdir: 'build/lib',
  tsconfig: 'tsconfig.json',
  target: "es5"
});