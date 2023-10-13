import { Variants } from "../components/Framers/Basics/Variants"
import { Events } from "../components/Framers/Basics/Events"
import { Transitions } from "../components/Framers/Basics/Transitions"
import { Children } from "../components/Framers/Basics/Children"
import { KeyFrames } from "../components/Framers/Basics/KeyFrames"
import { Controls } from "../components/Framers/Basics/Controls"

const BasicsPage = () => {

    return (
        <section className="w-full h-full pb-10 bg-slate-300">
            <div className="w-11/12 mx-auto pt-10 grid gap-y-5">
                <Transitions />
                <Events />
                <Variants />
                <Children />
                <KeyFrames />
                <Controls />
            </div>
        </section>
    )
}

export { BasicsPage }