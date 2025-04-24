import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './pages/homePage.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutPage } from './pages/layoutPage.tsx'
import './styled/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LayoutPage />}>
          <Route path={"homePage"} element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
