import { motion, useAnimate } from "framer-motion"


const Controls = () => {
    const [scope, controls] = useAnimate<HTMLSpanElement>()

    const handleMoveRight = () => {
        controls(scope.current, {
            x: 100
        }, { duration: 5 })
    }   

    const handleMoveLeft = () => {
        controls(scope.current, {
            x: 0
        }, { duration: 5 })
    }

    const handleCircle = () => {
        controls(scope.current, {
            borderRadius: "50%"
        }, { duration: 2 })
    }

    const handleSquare = () => {
        controls(scope.current, {
            borderRadius: 0
        }, { duration: 2 })
    }
    

    return (
        <section>
            <div className="w-full flex items-center justify-between gap-x-5">
                <button className="h-8 px-3 text-white font-bold rounded-md bg-green-500" onClick={handleMoveRight}>Right</button>
                <button className="h-8 px-3 text-white font-bold rounded-md bg-green-500" onClick={handleMoveLeft}>Left</button>
                <button className="h-8 px-3 text-white font-bold rounded-md bg-green-500" onClick={handleSquare}>Square</button>
                <button className="h-8 px-3 text-white font-bold rounded-md bg-green-500" onClick={handleCircle}>Circle</button>
            </div>
            <motion.span 
                className="w-16 h-16 mt-4 flex bg-sky-500"
                ref={scope}
            />
        </section>
    )
}

export { Controls }