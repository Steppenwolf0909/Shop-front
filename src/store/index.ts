import {githubApi} from "./github.api";
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer
  }
})