import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "./slices/counterSlice";
import { baseApi } from "../services/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// as export export only to one can give any name to counterSlice.reducer

// export const store = configureStore({
//     reducer:{counter : counterReducer},
// })

export const store = configureStore({
    reducer:{[baseApi.reducerPath]: baseApi.reducer,},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)



