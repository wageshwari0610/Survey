import { configureStore } from "@reduxjs/toolkit";
import addNewQuestion from "./Reducer";

const store = configureStore({ reducer: addNewQuestion });

export default store;
