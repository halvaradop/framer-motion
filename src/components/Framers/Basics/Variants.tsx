import { motion, Transition, Variants } from "framer-motion"

const variants: Variants = {
    animate: {
        x: 0,
        scale: 0.9,
    },
    initial: {
        x: 100,
        scale: 1.1,
    },
}

const transition: Transition = {
    duration: 0.5,
    ease: "easeOut"
}

const Variants = () => {

    return (
        <div>
            <motion.span 
                className="w-28 h-28 flex bg-blue-400"
                variants={variants}
                animate="animate"
                initial="initial"
                transition={transition}
            />
        </div>
    )
}

export { Variants }