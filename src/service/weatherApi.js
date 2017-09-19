import axios from 'axios'
import moment from 'moment'

const API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe'

export default {
  getForecast: (city) => {
    const URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&mode=json&appid=${API_KEY}`
    return axios.get(URL)
    .then(results => {
      const forecastDays = results.data.list
      console.log(forecastDays)
      const weatherData = forecastDays.map(day => {
        return {
          city: city,
          temp: day.temp.day,
          minTemp: day.temp.min,
          maxTemp: day.temp.max,
          humidity: day.humidity,
          description: day.weather[0].description,
          icon: `http://openweathermap.org/img/w/${day.weather[0].icon}.png`,
          day: moment.unix(day.dt).format('MMM Do YY')
        }
      })
      return weatherData
    })
  }

}
