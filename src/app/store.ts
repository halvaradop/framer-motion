import { configureStore } from "@reduxjs/toolkit";
import { pizzasSlice } from "../features/pizzasSlice";

const store = configureStore({
    reducer: {
        pizzas: pizzasSlice.reducer
    }
})

export { store }