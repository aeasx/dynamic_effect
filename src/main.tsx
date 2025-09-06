import '@ant-design/v5-patch-for-react-19'
import { createRoot } from 'react-dom/client'
import RootApp from './App.tsx'
import './index.css'
import { ConfigProvider, App, type ConfigProviderProps } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { GlobalError, TanstackQueryClient } from '~/components'

const theme: ConfigProviderProps['theme'] = {
  token: {
    fontSize: 16,
    colorTextQuaternary: '#333'
  }
}

const root = document.getElementById('root')!
createRoot(root).render((
  <>
    <ConfigProvider locale={zhCN} componentSize='small' theme={theme}>
      <TanstackQueryClient>
        <App>
          <RootApp />
          <GlobalError />
        </App>
      </TanstackQueryClient>
    </ConfigProvider>
  </>
))
