import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { AppLayout } from "./components/Layouts/AppLayout"
import { BasicsPage } from "./pages/BasicsPage"
import { NetNinja } from "./pages/NetNinja"
import { BasePage } from "./pages/Pizzas/BasePage"
import { ToppingsPage } from "./pages/Pizzas/ToppingsPage"
import { OrderPage } from "./pages/Pizzas/Order"
import { HomePage } from "./pages/Pizzas/HomePage"

const App = () => {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route path="basics" element={<BasicsPage />} />
            <Route path="netNinja" element={<NetNinja />}>
                <Route index element={<Navigate to="home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="base" element={<BasePage />} />
                <Route path="toppings" element={<ToppingsPage />} />
                <Route path="order" element={<OrderPage />} />
            </Route>
        </Route>
    ))
    
    return <RouterProvider router={router} />
}

export default App