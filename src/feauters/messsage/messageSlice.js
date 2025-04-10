import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeatherAction.js";

const  messageSlice=createSlice({
    name: "message",
    initialState: "Entry city name",
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchWeather.pending,()=>"Loading...")
        .addCase(fetchWeather.fulfilled,()=>"")
        .addCase(fetchWeather.rejected,()=>"")
    }
})

export default messageSlice.reducer;