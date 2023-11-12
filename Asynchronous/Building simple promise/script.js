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
    // countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg)
    // countriesContainer.style.opacity = 1;
}


// const getCountryandNeighbour = function (country) {

//     // AJAX call contry 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)

//     request.send();

//     request.addEventListener('load', function () {
//         // console.log(this.responseText)

//         const [data] = JSON.parse(this.responseText)
//         console.log(data);

//         // Render country 1
//         renderCountry(data)

//         // Get neighbour country
//         const [neighbour] = data.borders;

//         if (!neighbour) return;

//         // AJAX call contry 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`)

//         request2.send();

//         request2.addEventListener('load', function () {
//             // console.log(this.responseText)
//             const data2 = JSON.parse(this.responseText)
//             console.log(data2)

//             renderCountry(data2, 'neighbour')
//         })


//     })
// }

// getCountryandNeighbour('poland')

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)

//     request.send();

const request = fetch('https://restcountries.eu/rest/v2/name/poland')
console.log(request)

// const getCountryData = function (country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (response) {
//         console.log(response)
//         return response.json()
//     }).then(function (data) {
//         console.log(data)
//         renderCountry(data[0])
//     })
// }
// getCountryData('poland')

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`)

        return response.json()
    })
}


// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => {
//         console.log(response)

//         if (!response.ok)
//             throw new Error(`Country not found (${response.status})`)

//         return response.json()

//     })
//         .then(data => {
//             renderCountry(data[0])
//             const neighbour = data[0].borders[0]

//             if (!neighbour) return;

//             // Country 2
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err}`)
//             renderError(`Something went wrong ${err.message}. Try again!`)
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })
// }

// btn.addEventListener('click', function () {
//     getCountryData('poland')
// })

const getCountryData = function (country) {
    // Country 1
    getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders[0]

            if (!neighbour) throw new Error('No neighbour found!')

            // Country 2
            return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found')
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err}`)
            renderError(`Something went wrong ${err.message}. Try again!`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
}



btn.addEventListener('click', function () {
    getCountryData('poland')
})
// getCountryData('australia')

// console.log('Test start');
// setTimeout(() => console.log('0 sec times'), 0)
// Promise.resolve('Resolved promise 1').then(res => console.log(res))

// Promise.resolve('Resolove promise 2').then(res => {
//     for (let i = 0; i < 1000000000; i++) { }
//     console.log(res)
// })

// console.log('Test end')

const lotteryPromise = new Promise(function (resolve, reject) {

    console.log('Lotter draw is happening..')
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You WIN!')
        } else {
            reject(new Error('You lost your money!'))
        }
    }, 2000)
})

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}

wait(2).then(() => {
    console.log('I waited for 2 seconds')
    return wait(1)
}).then(() => console.log('I waited for 1 second'))

Promise.resolve('abc').then(x => console.log(x))
Promise.reject(new Error('Problem!')).catch(x => console.error(x))