import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { FC, ReactNode } from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    }
  }
})

interface TanstackQueryClientProps {
  children: ReactNode
}

export const TanstackQueryClient: FC<TanstackQueryClientProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
