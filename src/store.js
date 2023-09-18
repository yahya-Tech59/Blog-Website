import { useReducer } from "react";
import { userReducer } from "./features/UserSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
