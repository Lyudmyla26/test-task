import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
const initialState = {
  filters: {
    status: "all",
  },
};
const rootReduser = (state = initialState, action) => {
    return state;
}
const enhancer = devToolsEnhancer()
export const store = createStore(rootReduser, enhancer)