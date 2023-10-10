import { Move } from "../components/Framers/Basics/Move"

const BasicsPage = () => {

    return (
        <section className="w-full h-[calc(100vh-5rem)] bg-slate-300">
            <div className="w-11/12 mx-auto pt-10 grid sm:grid-cols-2 md:grid-cols-2">
                <Move />
            </div>
        </section>
    )
}

export { BasicsPage }