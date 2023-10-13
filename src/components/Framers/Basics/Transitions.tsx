import { useState } from "react"
import { motion, Target, Transition, Tween } from "framer-motion"

const animate = (state: boolean): Target => {
    return {
        x: state ? "200%" : 0,
        opacity: state ? 1 : 0.4,
        scaleX: state ? 1 : 0.8,
        scaleY: state ? 1.2 : 0.6,
        rotate: state ? 290 : 0
    }
}

const initial: Target = {
    opacity: 0.4,
    scaleX: 0.8,
    scaleY: 0.6
}

const transition: Transition & Pick<Tween, "ease"> = {
    type: "spring",
    stiffness: 300,
    ease: "easeInOut"
}

const Transitions = () => {
    const [isAnimating, setIsAnimating] = useState(false)

    const handleAnimation = () => {
        setIsAnimating(!isAnimating)
    }

    return (
        <div className="">
            <motion.span className="w-20 h-20 flex bg-sky-300" 
                initial={initial} 
                animate={animate(!isAnimating)} 
                transition={transition} 
                onClick={handleAnimation} 
            />
        </div>
    )
}

export { Transitions }