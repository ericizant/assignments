export let trackPrices = (rawData, stateData) => {
    return rawData.map((coin, i) => {
        let coinCopy;
        let { price_usd } = rawData[i];
        if (stateData[i]) {
            coinCopy = { ...stateData[i], ...coin };
            let { prices, timeStamps } = coinCopy;
            prices.push(price_usd);
            timeStamps.push(new Date());
        } else {
            coinCopy = { ...rawData[i] }
            coinCopy.prices = [price_usd];
            coinCopy.timeStamps = [new Date()]
        }
        return coinCopy;
    });
}

export let loadInitialData = (dispatch, axios, coinUrl) => {
    axios.get(coinUrl)
        .then(response => {
            let { data } = response;
            dispatch({
                type: 'GET_COIN_DATA',
                data
            });
        })
        .catch(err => console.error(err))
}