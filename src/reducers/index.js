import { createStore } from "redux";
import { pawPringReducer } from "./pawPrintReducer";

export const store = createStore(pawPringReducer);
