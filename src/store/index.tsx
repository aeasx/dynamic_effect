import { proxy } from "valtio"

/* ------全局错误状态处理-------------------------------------------------------------------- */
interface ErrorData {
  content: string,
  requestUrl: string
  status?: number
  requestId: string
  noMessage: boolean
}

export const globalErrorState = proxy({
  errorData: {
    content: '',
    requestUrl: '',
    requestId: ''
  } as ErrorData,

  setError(error: ErrorData) {
    this.errorData = error
  },

  clearError() {
    this.errorData = {
      content: '',
      requestUrl: '',
      status: undefined,
      requestId: '',
      noMessage: true
    }
  }
})