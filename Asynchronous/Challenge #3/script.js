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

// const request = fetch('https://restcountries.eu/rest/v2/name/poland')
// console.log(request)

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

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok)
//             throw new Error(`${errorMsg} (${response.status})`)

//         return response.json()
//     })
// }


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

// const getCountryData = function (country) {
//     // Country 1
//     getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
//         .then(data => {
//             renderCountry(data[0])
//             const neighbour = data[0].borders[0]

//             if (!neighbour) throw new Error('No neighbour found!')

//             // Country 2
//             return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found')
//         })
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
// getCountryData('australia')

// console.log('Test start');
// setTimeout(() => console.log('0 sec times'), 0)
// Promise.resolve('Resolved promise 1').then(res => console.log(res))

// Promise.resolve('Resolove promise 2').then(res => {
//     for (let i = 0; i < 1000000000; i++) { }
//     console.log(res)
// })

// console.log('Test end')

// const lotteryPromise = new Promise(function (resolve, reject) {

//     console.log('Lotter draw is happening..')
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You WIN!')
//         } else {
//             reject(new Error('You lost your money!'))
//         }
//     }, 2000)
// })

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))

// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000)
//     })
// }

// wait(2).then(() => {
//     console.log('I waited for 2 seconds')
//     return wait(1)
// }).then(() => console.log('I waited for 1 second'))

// Promise.resolve('abc').then(x => console.log(x))
// Promise.reject(new Error('Problem!')).catch(x => console.error(x))

// navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.error(err));

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
        navigator.geolocation.getCurrentPosition(resolve, reject)

    })
}

// getPosition().then(pos => console.log(pos))

const whereAmI = function () {
    getPosition().then(pos => {
        const { latitude: lat, longitude: lng } = pos.coords;

        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)

    }).then(response => {


        if (!response.ok) throw new Error('only 3 requests per second')

        return response.json()
    }).then(function (data) {
        console.log(data)
        console.log(`You are in ${data.state},${data.country}`)
        // getCountryData(data.country)

        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
    }).then(res => {
        if (!res.ok) throw new Error(`Country not found (${res.status})`)

        return res.json();
    }).then(data => renderCountry(data[0])).catch(err => console.error(err))
}


btn.addEventListener('click', whereAmI);

const imgContainer = document.querySelector('.images')

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}


const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img')
        img.src = imgPath

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        })

        img.addEventListener('error', function () {
            reject(new Error('Image not found'))
        })
    })
}

// let currentImg

// createImage('img/img-1.jpg').then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded')
//     return wait(2)
// }).then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg')
// }).then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded')
//     return wait(2)
// }).then(() => {
//     currentImg.style.display = 'none';
// }).catch(err => console.error(err));


const loadNPause = async function () {
    try {
        // Load image 1
        let img = await createImage('img/img-1.jpg')
        console.log('Image 1 loaded')
        await wait(2)
        img.style.display = 'none';

        // Load image 1
        img = await createImage('img/img-2.jpg')
        console.log('Image 2 loaded')
        await wait(2)
        img.style.display = 'none';

    } catch (err) {
        console.error(err)
    }
}
loadNPause()

// PART 2
const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img))
        console.log(imgs)

        const imgsEl = await Promise.all(imgs)
        console.log(imgsEl)
        imgsEl.forEach(img => img.classList.add('parallel'))
    } catch (err) {
        console.error(err)
    }
}
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])
//  ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']