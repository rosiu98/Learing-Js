'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 10000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
          </div >
        </article >
        ` ;
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
}

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
        navigator.geolocation.getCurrentPosition(resolve, reject)

    })
}
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg)
    countriesContainer.style.opacity = 1;
}


const whereAmI = async function () {
    try {
        const pos = await getPosition()

        const { latitude: lat, longitude: lng } = pos.coords;

        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

        if (!resGeo.ok) throw new Error('Problem getting location data')
        const dataGeo = await resGeo.json()

        // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

        const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);

        if (!resGeo.ok) throw new Error('Problem getting country')


        const data = await res.json()
        renderCountry(data[0])

        return `You are in ${dataGeo.city}, ${dataGeo.country}`
    } catch (err) {
        console.error(err)
        renderError(`${err.message}`)

        // Reject promise returned from async function
        throw err
    }
}

console.log('1: Will get location');
// whereAmI().then(city => console.log(city)).catch(err => console.error(err)).finally(() => console.log('3: Finished getting location'))

(async function () {
    try {
        const city = await whereAmI()
        console.log(city)
    } catch (err) {
        console.error(err.message)
    }
    console.log('3: Finished getting location')
})();

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`)

        return response.json()
    })
}


const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`)
        // const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`)
        // const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)

        // console.log([data1.capital, data2.capital, data3.capital])

        const data = await Promise.all([getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
        getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
        getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)])

        console.log(data.map(d => d[0].capital))
    } catch (err) {
        console.error(err)
    }
}
get3Countries('poland', 'canada', 'tanzania');

// Promise.race
(async function () {
    const res = await Promise.race([getJSON(`https://restcountries.eu/rest/v2/name/italy`), getJSON(`https://restcountries.eu/rest/v2/name/italy`), getJSON(`https://restcountries.eu/rest/v2/name/italy`)
    ])
    console.log(res[0])
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took to long!'))
        }, sec * 1000)
    })
}

Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    timeout(1)
]).then(res => console.log(res[0])).catch(err => console.error(err))

// Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success')
]).then(res => console.log(res));

Promise.all([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success')
]).then(res => console.log(res))
    .catch(err => console.error(err))

// Promise.any
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success')
]).then(res => console.log(res))
    .catch(err => console.error(err))
