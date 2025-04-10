import {fetchWeather} from "../feauters/api/asyncWeatherAction.js";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../app/hooks";

const Form = () => {
    const dispatch = useAppDispatch();
    const handleGetWeather = e => {
        e.preventDefault()
        const city = e.currentTarget.city.value.trim();
        dispatch(fetchWeather(city));

    }
    return (
        <form onSubmit={handleGetWeather}>
            <input type={'text'} name={"city"}/>
            <button type={"submit"}>Get Weather</button>
        </form>
    );
};

export default Form;