import {defineConfig} from "vite";
import {svelte} from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    root: '.',
    base: '/WebEngineeringProject/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: 'esbuild',
    },
    plugins: [
      svelte(),
    ],
    server: {
        open: true
    }
});