import { configureStore } from "@reduxjs/toolkit";
import rolSlice from "./rolSlice.redux";

export const store = configureStore({
    reducer: {
        rol: rolSlice,
    }
});