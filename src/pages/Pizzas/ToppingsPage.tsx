import { Link } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import { useAppDispatch } from "../../app/hooks";
import { Pizza, addAllToppings } from "../../features/pizzasSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

const variantsContainer: Variants = {
    hidden: {
        x: "100vw",
        opacity: 0.2
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            delay: 0.4
        }
    }
}

const ToppingsPage = () => {
    const dispatch = useAppDispatch()
    const [toppings, setToppings] = useState<Pizza[]>([])
    const toppingsList = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

    const handleAddToppings = (name: string) => {
        setToppings([...toppings, {
            id: nanoid(),
            name
        }])
    }

    const handleNextPage = () => {
        dispatch(addAllToppings(toppings))
    }

    return (
        <section className="w-full h-full flex items-center justify-center flex-col overflow-hidden bg-purple-300">
            <motion.div variants={variantsContainer} animate="visible" initial="hidden">
                <h2 className="text-purple-600 text-2xl font-bold uppercase">Step 2: Choose Toppings</h2>
                <ul className="mt-4 flex items-center flex-col gap-y-3">
                    {toppingsList.map(topping => (
                        <li className="w-full hover:cursor-pointer" key={topping} onClick={() => handleAddToppings(topping)}>{topping}</li>
                    ))}
                </ul>   
                { toppings.length > 0 && <motion.button className="h-10 mt-2 px-4 text-white font-bold border-2 border-white rounded-md bg-transparent" onClick={handleNextPage}>
                    <Link to={{ pathname: "../order" }}>Order</Link>
                </motion.button>}
            </motion.div>
        </section>
    )
}

export { ToppingsPage }