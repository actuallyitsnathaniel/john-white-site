import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import preload from "vite-plugin-preload";
import graphqlLoader from "vite-plugin-graphql-loader";

// https://vitejs.dev/config/
// eslint-disable-next-line no-unused-vars
export default defineConfig(({ command, mode }) => {
  // eslint-disable-next-line no-undef
  return {
    base: "",
    plugins: [
      react(),
      svgr(),
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
        exclude: undefined,
        include: undefined,
        includePublic: true,
        logStats: true,
        ansiColors: true,
        svg: {
          multipass: true,
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  cleanupNumericValues: true,
                  removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                },
                cleanupIDs: {
                  minify: true,
                  remove: false,
                },
                convertPathData: false,
              },
            },
            "sortAttrs",
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
              },
            },
          ],
        },
        png: {
          // https://sharp.pixelplumbing.com/api-output#png
          quality: 66,
        },
        jpeg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 66,
        },
        jpg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 66,
        },
        tiff: {
          // https://sharp.pixelplumbing.com/api-output#tiff
          quality: 66,
        },
        // gif does not support lossless compression
        // https://sharp.pixelplumbing.com/api-output#gif
        gif: {},
        webp: {
          // https://sharp.pixelplumbing.com/api-output#webp
          lossless: true,
        },
        avif: {
          // https://sharp.pixelplumbing.com/api-output#avif
          lossless: true,
        },
      }),
      preload(),
      graphqlLoader(),
    ],
    build: {
      commonjsOptions: {
        transformMixedEsModules: false,
      },
      target: "ES2022",
      outDir: "./build",
    },
    server: {
      open: true,
      port: 3000,
    },
  };
});
