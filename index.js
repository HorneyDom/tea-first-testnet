const axios = require('axios');

async function getBitcoinPriceForAllTime() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max');
        
        // Extracting prices from the response data
        const prices = response.data.prices;
        
        // Calculate average price
        let totalPrice = 0;
        for (let i = 0; i < prices.length; i++) {
            totalPrice += prices[i][1]; // Price data format: [timestamp, price]
        }
        const averagePrice = totalPrice / prices.length;

        console.log('Average Bitcoin price for all time:', averagePrice.toFixed(2), 'USD');
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error.message);
    }
}

getBitcoinPriceForAllTime();
