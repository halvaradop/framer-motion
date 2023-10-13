import { Link } from "react-router-dom"
import { Target, Transition, Variants, motion } from "framer-motion"


const variantsContainer: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const transitionContainer: Transition = {
    delay: 0.3,
    duration: 1.2,
    ease: "backIn",
}

const transitionTitle: Transition = {
    type: "spring",
    stiffness: 500
}

const variantsTitle: Variants = {
    visible: {
        y: -5,
        color: "purple",
        fontSize: "45px",
    }
}

const hoverButton: Target = {
    scaleY: 1.1,
    scaleX: 1.2,
    translateY: -2,
    boxShadow: "0 0 15px -2px purple"
}

const HomePage = () => {

    return (
        <motion.section className="w-full h-full flex items-center justify-center flex-col bg-purple-300" variants={variantsContainer} animate="visible" initial="hidden" transition={transitionContainer}>
            <motion.h2 className="text-3xl" variants={variantsTitle} animate="visible" transition={transitionTitle}>
                Welcome to Pizza Joint
            </motion.h2>
            <motion.button className="h-8 mt-8 px-3 text-white font-bold border border-purple-500 rounded-md bg-purple-500" whileHover={hoverButton}>
                <Link to="../base">Create Your Pizza</Link>
            </motion.button>
        </motion.section>
    )
}

export { HomePage }