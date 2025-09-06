const MODE = import.meta.env.MODE
function Login() {
  const isByWechat = MODE == "development" || MODE == "test"
  
  return (
    <div className="w-full h-full justify-center">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {
        isByWechat
          ? <div>微信登陆</div>
          : <div>手机号登陆</div>
      }
    </div>
  )
}
export default Login