import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        host: '127.0.0.1', // Adresse de l'hôte local
        port: 5173, // Port utilisé par Vite
        open: true, // Ouvre automatiquement le navigateur
    },
});
