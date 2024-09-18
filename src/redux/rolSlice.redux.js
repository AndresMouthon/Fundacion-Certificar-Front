import { createSlice } from "@reduxjs/toolkit";
import { crearStorage, removerStorage, usarStorage } from "../utils/localStorage/localStorage.util";

const key = "rol";
const localStorage = usarStorage(key);

const userEmpty = "";

export const RolSlice = createSlice({
    name: "roles",
    initialState: localStorage ? localStorage : userEmpty,
    reducers: {
        crearAcceso: (state, action) => {
            crearStorage(key, action.payload);
            return action.payload;
        },
        actualizarAcceso: (state, action) => {
            state.clave = action.payload
        },
        resetearAcceso: () => {
            removerStorage(key);
            return userEmpty;
        }
    }
});

export const { crearAcceso, actualizarAcceso, resetearAcceso } = RolSlice.actions;
export default RolSlice.reducer;