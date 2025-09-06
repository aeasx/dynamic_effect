// 导入必要的模块
// QueryClient: 用于创建查询客户端实例
// QueryClientProvider: 用于将查询客户端提供给应用的上下文提供者
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// 导入 React 类型
import type { FC, ReactNode } from "react"
// 导入 React Query 开发者工具，用于在开发过程中调试查询
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

// 创建一个 QueryClient 实例，用于管理所有查询和缓存
// 配置默认选项：
// retry: 0 - 查询失败时不重试
// refetchOnWindowFocus: false - 窗口重新获得焦点时不重新获取数据
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    }
  }
})

// 定义组件的 props 接口
// ReactNode 类型表示任何可以被 React 渲染的内容
interface TanstackQueryClientProps {
  children: ReactNode
}

// 创建一个名为 TanstackQueryClient 的函数组件
// 使用 FC（FunctionComponent）类型并指定 props 类型为 TanstackQueryClientProps
// 该组件用于包装应用，提供 React Query 功能
export const TanstackQueryClient: FC<TanstackQueryClientProps> = ({ children }) => {
  return (
    // 使用 QueryClientProvider 包装子组件，将创建的 queryClient 实例传递给应用
    <QueryClientProvider client={queryClient}>
      {/* 渲染子组件，这些子组件将能够使用 React Query 的功能 */}
      {children}
      {/* 在开发环境中显示 React Query 开发者工具，方便调试查询状态 */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}