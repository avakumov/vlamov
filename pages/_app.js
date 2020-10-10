import '../styles/global.css'
import 'antd/dist/antd.css'

import { Provider } from 'next-auth/client'

export default function App({ Component, pageProps }) {
    const { session } = pageProps
    return (
        <Provider session={session}>
            <Component {...pageProps} />
        </Provider>
    )
}
