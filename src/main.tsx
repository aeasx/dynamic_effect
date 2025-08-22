import '@ant-design/v5-patch-for-react-19';
import { createRoot } from 'react-dom/client';
import RootApp from './App.tsx';
import './index.css';

// const theme: ConfigProviderProps["theme"] = {
//   token: {
//     fontSize: 16,
//     colorTextQuaternary: '#333'
//   }
// }

// /** 主题定制 */
// export const ThemeProvider = () => {
//   return (
//     <ConfigProvider locale={zhCN} theme={theme} componentSize="middle">
//       {/* 提供重置样式和提供上下文消费环境 */}
//       <App>
//         <RootApp />
//       </App>
//     </ConfigProvider>
//   )
// };

const root = document.getElementById('root')!
createRoot(root).render(<RootApp />)
