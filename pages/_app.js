// pages/_app.js

import '../styles/globals.css' // globals.css をインポート
import './page.module.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
