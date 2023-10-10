import { motion, Target, Transition } from "framer-motion"

const Move = () => {

    const animate: Target = {
        x: "200%",
        opacity: 1
    }

    const initial: Target = {
        opacity: 0.4,
    }

    const transition: Transition = {
        type: "spring",
        stiffness: 2000
    }

    return (
        <div className="">
            <motion.span className="w-20 h-20 flex bg-sky-300" initial={initial} animate={animate} transition={transition} />
        </div>
    )
}

export { Move }