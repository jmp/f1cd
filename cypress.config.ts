import {defineConfig} from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents() {},
        viewportWidth: 1280,
        viewportHeight: 800,
        baseUrl: 'http://localhost:3000',
        video: false
    },
});
