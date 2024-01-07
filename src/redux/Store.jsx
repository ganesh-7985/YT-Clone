import { configureStore } from "@reduxjs/toolkit";
import youtubeSlice from '../redux/Slice/Slice1'

const Store=configureStore({
    reducer:{
      youtubeApp:youtubeSlice
    }
});

export default Store;