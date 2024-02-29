// pages/_app.js

import '../styles/globals.css' // globals.css をインポート

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
