import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const Conferencias = lazy(() => import('./pages/Conferencias.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/conferencias"
          element={
            <Suspense fallback={<div style={{ padding: 48, textAlign: 'center', color: '#5A6C7D' }}>Cargando…</div>}>
              <Conferencias />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
