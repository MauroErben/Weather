const API_KEY = process.env.REACT_APP_APIKEY;

export const getWeatherFromCoords = (lat, lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=es`)
        .then(res => res.json())
        .then(result => {
            return result;
        });
}

export const getWeatherFromCity = (ciudad) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${API_KEY}&lang=es`)
        .then(res => res.json())
        .then(result => {
            return result;
        })
}
