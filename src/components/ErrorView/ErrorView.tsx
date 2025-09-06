import { Button, Result } from "antd"
import { useRouteError } from "react-router"

const ERROR_MESSAGE = "页面组件加载出现问题，请尝试重新加载页面"

/** The error that was thrown during route loading ,action execution, or rendering. */
export const ErrorView = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div>
      <Result
        status="warning"
        title="模块加载失败"
        subTitle={error ? error?.message : ERROR_MESSAGE}
        extra={
          <Button type="primary" onClick={handleReload}>
            重新加载
          </Button>
        }
      />
    </div>
  )
}