import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { AppLayout } from "./components/Layouts/AppLayout"
import { BasicsPage } from "./pages/BasicsPage"

const App = () => {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route path="basics" element={<BasicsPage />} />
        </Route>
    ))
    
    return <RouterProvider router={router} />
}

export default App