import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

function ErrorBoundary({ children }) {
  const [err, setErr] = React.useState(null)
  React.useEffect(() => {
    const onErr = (e) => setErr(e.error || new Error('Unknown error'))
    const onRej = (e) => setErr(e.reason || new Error('Promise rejection'))
    window.addEventListener('error', onErr)
    window.addEventListener('unhandledrejection', onRej)
    return () => {
      window.removeEventListener('error', onErr)
      window.removeEventListener('unhandledrejection', onRej)
    }
  }, [])
  if (err) {
    return <div style={{padding:16,fontFamily:'ui-sans-serif,system-ui'}}>
      <h1 style={{fontSize:24,fontWeight:700}}>App error</h1>
      <pre style={{whiteSpace:'pre-wrap',marginTop:12}}>{String(err?.stack || err?.message || err)}</pre>
    </div>
  }
  return children
}

const isProdBuild = import.meta.env.MODE === 'production'
const RouterComponent = isProdBuild ? BrowserRouter : HashRouter

console.log('[SEOScribe] Bootstrapping React app...', { mode: import.meta.env.MODE })

const rootEl = document.getElementById('root')
if (rootEl) rootEl.innerHTML = ''

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <RouterComponent>
      <ErrorBoundary>
        <React.Suspense fallback={<div style={{padding:16}}>Loading UI…</div>}>
          <App />
        </React.Suspense>
      </ErrorBoundary>
    </RouterComponent>
  </React.StrictMode>
)
