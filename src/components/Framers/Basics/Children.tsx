import { Variants, motion } from "framer-motion"
import { useState } from "react"

const Children = () => {
    const [array] = useState([1, 2, 3])

    const boxVariant: Variants = {
        hidden: {
            x: "-100"
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when: "beforeChildren"
            }
        }
    }

    const childVariant: Variants = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    }

    return (
        <motion.section 
                className="w-full p-3 flex items-center justify-center flex-col gap-y-5 rounded-md bg-sky-200" 
                variants={boxVariant}
                animate="visible"
                initial="hidden"
        >
            {array.map(item => (
                <motion.span 
                    className="w-5 h-5 p-1 bg-white" 
                    key={item} 
                    variants={childVariant}
                />
            ))}
        </motion.section>
    )
}

export { Children }