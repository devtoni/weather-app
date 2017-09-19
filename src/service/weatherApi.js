import axios from 'axios'

const API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe'

export default {
  getForecast: (city) => {
    const URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&mode=json&appid=${API_KEY}`
    return axios.get(URL)
  }
}
