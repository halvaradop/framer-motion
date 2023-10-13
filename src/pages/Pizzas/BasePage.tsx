import { MouseEvent, useState } from "react"
import { Target, Transition, Variants, motion } from "framer-motion"
import { useAppDispatch } from "../../app/hooks"
import { BasicType, chooseBasic } from "../../features/pizzasSlice"
import { Link } from "react-router-dom"

interface BasePlan {
    name: string,
    valuePlan: BasicType
}

const variantsButton: Variants = {
    hidden: {
        x: -100
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 150
        }
    }
}

const variantsContainer: Variants = {
    hidden: {
        x: "100vh",
        opacity: 0.2
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            delay: 0.4
        }
    },
}

const hoverItems: Target = {
    scale: 1.2,
    originX: 0 
}

const transitionItems: Transition = {
    type: "spring",
    stiffness: 150
}



const BasePage = () => {
    const dispatch = useAppDispatch()
    const [basePlan, setBasePlan] = useState<BasicType | undefined> ()
    const basesPlan: BasePlan[] = [{ name: "Classic", valuePlan: "Classic" }, { name: "Thin & Crispy", valuePlan: "Crispy" }, { name: "Thick Crust", valuePlan: "Thick" }]

    const handleChangePlan = (event: MouseEvent<HTMLLIElement>) => {
        const element = event.target as Element
        setBasePlan(element.getAttribute("data-value") as BasicType)
    }

    const handleNextPage = () => {
        dispatch(chooseBasic(basePlan as BasicType))
    }

    return (
        <motion.section className="w-full h-full flex items-center justify-center flex-col overflow-hidden bg-purple-300">
            <motion.div variants={variantsContainer} animate="visible" initial="hidden">    
                <h2 className="text-purple-600 text-2xl uppercase">Step 1: Choose Your Base</h2>
                <ul className="mt-4 flex items-center flex-col gap-y-3">
                    {basesPlan.map(({ name, valuePlan }) => (
                        <motion.li className="w-full text-white font-bold hover:cursor-pointer" key={valuePlan} data-value={valuePlan} onClick={handleChangePlan} whileHover={hoverItems} transition={transitionItems}>
                            {name}
                        </motion.li>
                    ))}
                </ul>
                { basePlan && <motion.button className="h-10 mt-8 px-4 text-white font-bold border border-purple-500 rounded-full bg-purple-500" variants={variantsButton} animate="visible" initial="hidden">
                    <Link to="../toppings" onClick={handleNextPage}>Toppings</Link>
                </motion.button>}
            </motion.div>
        </motion.section>
    )
}

export { BasePage }