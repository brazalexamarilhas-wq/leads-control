// vite.config.ts
import { defineConfig } from "file:///C:/Users/braza/Downloads/Leads%20control/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/braza/Downloads/Leads%20control/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/braza/Downloads/Leads%20control/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\braza\\Downloads\\Leads control";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.ico', 'logo.png', 'robots.txt'],
    //   devOptions: {
    //     enabled: false, // Desabilitado em dev para evitar conflito com HMR/Tela branca
    //   },
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'], // Cache geral de assets
    //     runtimeCaching: [
    //       {
    //         urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'google-fonts-cache',
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 dias
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200]
    //           }
    //         }
    //       },
    //       {
    //         urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'gstatic-fonts-cache',
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 dias
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200]
    //           }
    //         }
    //       }
    //     ]
    //   },
    //   manifest: {
    //     name: 'Leads Control',
    //     short_name: 'LeadsCtrl',
    //     description: 'Gerenciador de Assinantes e Cobranças por WhatsApp',
    //     theme_color: '#0f172a',
    //     background_color: '#0f172a',
    //     display: 'standalone',
    //     orientation: 'portrait',
    //     start_url: '/',
    //     icons: [
    //       {
    //         src: 'pwa-64x64.png',
    //         sizes: '64x64',
    //         type: 'image/png'
    //       },
    //       {
    //         src: 'pwa-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: 'pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any'
    //       },
    //       {
    //         src: 'pwa-maskable-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'maskable'
    //       }
    //     ]
    //   }
    // })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxicmF6YVxcXFxEb3dubG9hZHNcXFxcTGVhZHMgY29udHJvbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYnJhemFcXFxcRG93bmxvYWRzXFxcXExlYWRzIGNvbnRyb2xcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2JyYXphL0Rvd25sb2Fkcy9MZWFkcyUyMGNvbnRyb2wvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCI6OlwiLFxuICAgIHBvcnQ6IDgwODAsXG4gICAgaG1yOiB7XG4gICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCksXG4gICAgLy8gVml0ZVBXQSh7XG4gICAgLy8gICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAvLyAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5pY28nLCAnbG9nby5wbmcnLCAncm9ib3RzLnR4dCddLFxuICAgIC8vICAgZGV2T3B0aW9uczoge1xuICAgIC8vICAgICBlbmFibGVkOiBmYWxzZSwgLy8gRGVzYWJpbGl0YWRvIGVtIGRldiBwYXJhIGV2aXRhciBjb25mbGl0byBjb20gSE1SL1RlbGEgYnJhbmNhXG4gICAgLy8gICB9LFxuICAgIC8vICAgd29ya2JveDoge1xuICAgIC8vICAgICBnbG9iUGF0dGVybnM6IFsnKiovKi57anMsY3NzLGh0bWwsaWNvLHBuZyxzdmcsd29mZjJ9J10sIC8vIENhY2hlIGdlcmFsIGRlIGFzc2V0c1xuICAgIC8vICAgICBydW50aW1lQ2FjaGluZzogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvZm9udHNcXC5nb29nbGVhcGlzXFwuY29tXFwvLiovaSxcbiAgICAvLyAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAvLyAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgICAgICAgY2FjaGVOYW1lOiAnZ29vZ2xlLWZvbnRzLWNhY2hlJyxcbiAgICAvLyAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgIC8vICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwLFxuICAgIC8vICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NSAvLyA8PT0gMzY1IGRpYXNcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgY2FjaGVhYmxlUmVzcG9uc2U6IHtcbiAgICAvLyAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF1cbiAgICAvLyAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgdXJsUGF0dGVybjogL15odHRwczpcXC9cXC9mb250c1xcLmdzdGF0aWNcXC5jb21cXC8uKi9pLFxuICAgIC8vICAgICAgICAgaGFuZGxlcjogJ0NhY2hlRmlyc3QnLFxuICAgIC8vICAgICAgICAgb3B0aW9uczoge1xuICAgIC8vICAgICAgICAgICBjYWNoZU5hbWU6ICdnc3RhdGljLWZvbnRzLWNhY2hlJyxcbiAgICAvLyAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgIC8vICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwLFxuICAgIC8vICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NSAvLyA8PT0gMzY1IGRpYXNcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgY2FjaGVhYmxlUmVzcG9uc2U6IHtcbiAgICAvLyAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF1cbiAgICAvLyAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgXVxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1hbmlmZXN0OiB7XG4gICAgLy8gICAgIG5hbWU6ICdMZWFkcyBDb250cm9sJyxcbiAgICAvLyAgICAgc2hvcnRfbmFtZTogJ0xlYWRzQ3RybCcsXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiAnR2VyZW5jaWFkb3IgZGUgQXNzaW5hbnRlcyBlIENvYnJhblx1MDBFN2FzIHBvciBXaGF0c0FwcCcsXG4gICAgLy8gICAgIHRoZW1lX2NvbG9yOiAnIzBmMTcyYScsXG4gICAgLy8gICAgIGJhY2tncm91bmRfY29sb3I6ICcjMGYxNzJhJyxcbiAgICAvLyAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxuICAgIC8vICAgICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyxcbiAgICAvLyAgICAgc3RhcnRfdXJsOiAnLycsXG4gICAgLy8gICAgIGljb25zOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiAncHdhLTY0eDY0LnBuZycsXG4gICAgLy8gICAgICAgICBzaXplczogJzY0eDY0JyxcbiAgICAvLyAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6ICdwd2EtMTkyeDE5Mi5wbmcnLFxuICAgIC8vICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAvLyAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLFxuICAgIC8vICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAvLyAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogJ3B3YS1tYXNrYWJsZS01MTJ4NTEyLnBuZycsXG4gICAgLy8gICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgIC8vICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICBdXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgXS5maWx0ZXIoQm9vbGVhbiksXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1QsU0FBUyxvQkFBb0I7QUFDN1UsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUhoQyxJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUyxpQkFBaUIsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBMkU1QyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
