import { Link, Outlet } from "react-router-dom"

const AppLayout = () => {

    return (
        <div>
            <header className="w-full bg-slate-100">
                <nav className="w-11/12 h-20 mx-auto flex items-center justify-between">
                    <Link to="basics">Basic</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export { AppLayout }