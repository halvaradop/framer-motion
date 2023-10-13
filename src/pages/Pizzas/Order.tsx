import { Variants, motion } from "framer-motion"
import { useAppSelector } from "../../app/hooks"
import { selectAll } from "../../features/pizzasSlice"

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
            delay: 0.4,
            when: "beforeChildren"
        }
    },
}

const variantsChild: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    }
}


const OrderPage = () => {
    const toppings = useAppSelector(selectAll)
    const basicPlan = useAppSelector(state => state.pizzas.basic)

    return (
        <section className="w-full h-full flex items-center justify-center flex-col overflow-hidden bg-purple-300">
            <motion.div className="text-center" variants={variantsContainer} animate="visible" initial="hidden">
                <h2 className="text-purple-700 text-3xl font-bold uppercase">Thank you for your order :)</h2>
                <motion.p variants={variantsChild}>You ordered a  pizza with: {basicPlan}</motion.p>
                <motion.ul variants={variantsChild}>
                    {toppings.map(item => <li key={item.id}>{item.name}</li>)}
                </motion.ul>
            </motion.div>
        </section>
    )
}

export { OrderPage }