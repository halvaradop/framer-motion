import { Variants, motion } from "framer-motion"

const KeyFrames = () => {

    const variants: Variants = {
        hidden: {},
        visible: {
            scale: [1, 1.4, 1.4, 1, 1 ],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            transition: {
                duration: 2
            }
        }
    }

    return (
        <div>
            <motion.span 
                className="w-16 h-16 flex bg-green-300"
                variants={variants}
                animate="visible"
                initial="hidden"
                whileHover="visible"
            />
        </div>
    )
}

export { KeyFrames }