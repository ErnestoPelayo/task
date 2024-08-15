import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Layout_main from "./Layouts/Layout_main"

function AppRouter() {

  return ( 
    <BrowserRouter>
      <Routes >
          <Route element={<Layout_main />}  >
            <Route element={<Index />} path="/" index />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
