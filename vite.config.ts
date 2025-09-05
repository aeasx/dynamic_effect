import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from "path"
import { defineConfig } from 'vite'
import os from 'os'

/** 获取本地局域网的IP地址 */
const getLocalIPAddress = () => {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const interfaceKey of interfaces[name]! || []) {
      const { family, address, internal } = interfaceKey
      if (family === 'IPv4' && !internal) {
        return address
      }
    }
  }
  return null
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: getLocalIPAddress() ?? undefined,
    port: 9527,
    proxy: {
      '/smp-first': {
        target: 'https://smp-api-dev.gongpinniu.com',
        changeOrigin: true,
      },
      '/jms-auth': {
        target: 'https://smp-api-dev.gongpinniu.com',
        changeOrigin: true,
      },
      '/cts': {
        target: 'https://smp-api-dev.gongpinniu.com',
        changeOrigin: true,
      },
      '/dms': {
        target: 'https://smp-api-dev.gongpinniu.com',
        changeOrigin: true,
      }
    }
  },
  // resolve 用于配置模块解析相关的设置
  resolve: {
    // 路径别名配置对象，用于创建路径映射，简化导入语句
    alias: {
      // 将 ~ 映射到项目的src目录
      // __dirname 表示当前配置文件所在目录
      // resolve() 函数将相对路径解析为绝对路径
      '~': resolve(__dirname, './src'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils')
    }
  },
  envDir: path.resolve(__dirname, './src/config')
})
