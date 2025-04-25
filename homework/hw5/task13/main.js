// #mkGDenYnNjn.html
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400


const exchange = (sumUAH, currencyValues, exchangeCurrency) =>{
    let res ='';
    for (const item of currencyValues) {
        if (exchangeCurrency === item.currency) {
            res = Math.floor( sumUAH / item.value) + ' ' +exchangeCurrency;
        }
    }
    return  res;

}



console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'))
