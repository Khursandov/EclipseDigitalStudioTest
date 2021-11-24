import axios from 'axios';

class Currency {
    async get() {
        try {
            const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(res => {
                return res.data
            });
            return response
        } catch (err) {
            return err
        }
    }
}

export const CurrencyApi = new Currency();
