import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import preload from "vite-plugin-preload";
import graphqlLoader from "vite-plugin-graphql-loader";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
// eslint-disable-next-line no-unused-vars
export default defineConfig(() => {
  // eslint-disable-next-line no-undef
  return {
    base: "",
    plugins: [
      tailwindcss(),
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
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            motion: ['framer-motion']
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      minify: 'esbuild',
      sourcemap: false,
    },
    server: {
      open: true,
      port: 3000,
      hmr: {
        overlay: false,
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
      exclude: ['@vercel/analytics'],
    },
  };
});
