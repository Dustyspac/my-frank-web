import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // 빌드된 파일들이 생성될 디렉토리
    sourcemap: true, // 소스 맵을 생성하여 디버깅 가능하게 함
  },
});
