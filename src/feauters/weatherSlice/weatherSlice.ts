import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeatherAction";
import {WeatherType} from "../../utils/typs";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {} as WeatherType,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (state, action) => action.payload)
    },
})
export default weatherSlice.reducer