/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
const config = {
    kit: {
        adapter: adapter({
            fallback: 'index.html'  // Enables SPA mode: generates index.html as fallback for all routes
        }),
    }
};

export default config;