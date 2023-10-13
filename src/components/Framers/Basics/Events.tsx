import { useRef } from "react"
import { motion, Target, BoundingBox } from "framer-motion"

const hover: Target = {
    scale: 1.1
}

const tap: Target = {
    scale: 0.9,
    borderRadius: 50
}

const contraints: BoundingBox = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 200
}

const Events = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div className="" ref={containerRef}>
            <motion.span className="w-20 h-20 flex bg-sky-300"
                drag 
                dragConstraints={contraints}
                whileHover={hover}
                whileTap={tap}
            />
        </div>
    )
}

export { Events }