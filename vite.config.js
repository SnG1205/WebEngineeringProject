import {defineConfig} from "vite";
import {sveltekit} from "@sveltejs/kit/vite";

export default defineConfig({
    root: '.',
    base: '/WebEngineeringProject/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: 'esbuild',
    },
    plugins: [
        sveltekit()
    ],
    server: {
        open: true
    }
});