import { defineConfig } from "vite";
import type { LibraryFormats } from "vite";
import dts from "vite-plugin-dts";
import { terser } from "rollup-plugin-terser";

const formats: LibraryFormats[] = ["es", "cjs", "umd"];

const getOutput = (formats: LibraryFormats[], min: boolean = true) => {
  const res: any[] = [];
  formats.forEach((formate) => {
    res.push({
      format: formate,
      entryFileNames: `[name].${formate}.js`,
      sourcemap: true,
      name: "index",
    });
    if (min) {
      res.push({
        format: formate,
        entryFileNames: `[name].${formate}.min.js`,
        plugins: [terser()],
        sourcemap: true,
        name: "index",
      });
    }
  });
  return res;
};

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "huxianc-utils",
      fileName: (format) => `index.${format}.js`,
      formats,
    },
    sourcemap: true,
    rollupOptions: {
      output: getOutput(formats),
    },
  },
  plugins: [dts()],
});
