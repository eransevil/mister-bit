const axios = require('axios');


export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

function getRate(){
  return axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
  .then(function (res) {
    return res.data
  })
}

function getMarketPrice(){
    return axios.get('https://api.blockchain.info/charts/market-price?timespan=4months&format=json&cors=true')
  .then(function (res) {
    return res.data.values
  })
}

function getConfirmedTransactions(){
    console.log('getConfirmedTransactions')
}
