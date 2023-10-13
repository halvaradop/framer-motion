import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/hooks";

export interface Pizza {
    id: string,
    name: string
}

export type BasicType = "Classic" | "Crispy" | "Thick"

interface PizzasState {
    basic: BasicType
}

const pizzasAdapter = createEntityAdapter<Pizza>({
    selectId: pizza => pizza.id,
    sortComparer: (x, y) => x.id.localeCompare(y.id)
})

const pizzasSlice = createSlice({
    name: "pizzas",
    initialState: pizzasAdapter.getInitialState<PizzasState>({
        basic: "Classic"
    }),
    reducers: {
        chooseBasic: (state, action: PayloadAction<BasicType>) => {
            state.basic = action.payload
        },
        addAllToppings: pizzasAdapter.addMany
    }
})

export const { chooseBasic, addAllToppings } = pizzasSlice.actions

export const { selectAll } = pizzasAdapter.getSelectors<RootState>(state => state.pizzas)

export { pizzasSlice }