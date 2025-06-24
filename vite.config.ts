import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/Auth.tsx'),
      name: 'SupaLogin',
      fileName: (format) => `supa-login.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@supabase/supabase-js'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@supabase/supabase-js': 'supabase'
        }
      }
    }
  },
  resolve: {
    alias: {
      react: resolve(__dirname, "node_modules/react"),
      'react-dom': resolve(__dirname, "node_modules/react-dom"),
    }
  }
})
