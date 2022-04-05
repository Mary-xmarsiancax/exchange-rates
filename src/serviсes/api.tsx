import axios from "axios";

export const getCurrentExchangeRatesApi = () => {
    return axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
}
