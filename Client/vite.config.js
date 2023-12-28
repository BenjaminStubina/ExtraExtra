import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
// import mdx from '@mdx-js/rollup';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(),
      // { enforce: 'pre', ...mdx() }
    ],
    // assetsInclude: ['**/*.md']
  };
});