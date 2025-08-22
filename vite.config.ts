import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from "path";
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 9527
  },
  // resolve 用于配置模块解析相关的设置
  resolve: {
    // 路径别名配置对象，用于创建路径映射，简化导入语句
    alias: {
      // 将 ~ 映射到项目的src目录
      // __dirname 表示当前配置文件所在目录
      // resolve() 函数将相对路径解析为绝对路径
      '~/*': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils')
    }
  }
});
