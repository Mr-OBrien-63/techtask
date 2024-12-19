import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        specPattern: 'tests/e2e/**/*.spec.ts',
        baseUrl: 'http://localhost:3000', // Adjust based on your app's URL
    },
});
