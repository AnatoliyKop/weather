import {configureStore} from "@reduxjs/toolkit";
import weatherInfo from "../feauters/weatherSlice/weatherSlice.js"
import message from "../feauters/messsage/messageSlice.js";
export const store=configureStore({
    reducer:{
        weatherInfo,message
    }
})