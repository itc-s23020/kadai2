// pages/_app.js

import '../app/globals.css' // globals.css をインポート
import '../app/page.module.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
