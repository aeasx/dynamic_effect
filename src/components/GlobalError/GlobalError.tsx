import { Modal } from "antd"
import { useSnapshot } from "valtio"
import { globalErrorState } from "~/store"
import Scrollbars from 'react-custom-scrollbars-2'
import { useEffect } from "react"
import useApp from "antd/es/app/useApp"

export const GlobalError = () => {
  const { notification } = useApp()
  const globalError = useSnapshot(globalErrorState)
  const { status, requestId, noMessage, content, requestUrl } = globalError.errorData
  useEffect(() => {
    if (status !== 400 && requestId) {
      if (noMessage) return
      notification.error({
        key: requestId,
        message: '异常提示',
        description: (
          <div>
            <Scrollbars autoHeight autoHeightMax={300}>
              <div>{content}</div>
            </Scrollbars>
            <div className="text-gray-600 mt-[10px]">
              {requestUrl}
            </div>
          </div>
        ),
        onClose() {
          globalError.clearError()
        },
        duration: 3
      })
    }
  }, [globalError.errorData])

  if (status !== 400 && requestId) {
    return null
  }
  return (
    <Modal title="异常提示" zIndex={9999} width={600} maskClosable={false} footer={null} open={Boolean(globalError.errorData.content)}>
      <Scrollbars autoHeight>
        <pre className="pr-[20px] text-[14px]">
          {globalError.errorData.content}
        </pre>
      </Scrollbars>
      <div>异常地址：{globalError.errorData.requestUrl}</div>
    </Modal>
  )
}
