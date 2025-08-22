import { App, ConfigProvider } from 'antd';
import type { ConfigProviderProps } from 'antd/lib/index';
import zhCN from 'antd/locale/zh_CN';
import { createRoot } from 'react-dom/client';
import RootApp from './App.tsx';
import './index.css';

const theme: ConfigProviderProps["theme"] = {
  token: {
    fontSize: 16,
    colorTextQuaternary: '#333'
  }
}

/** 主题定制 */
export const ThemeProvider = () => {
  return (
    <ConfigProvider locale={zhCN} theme={theme} >
      {/* 提供重置样式和提供上下文消费环境 */}
      <App>
        <RootApp />
      </App>
    </ConfigProvider>
  )
};

createRoot(document.getElementById('root')!).render(<RootApp />)
