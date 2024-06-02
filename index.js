
let image = document.querySelector('img')
let description = document.querySelector('h2')
let text = document.querySelector('#gett')
let a = document.querySelector('a')

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomYear() {
    return getRandomArbitrary(2015, 2025)
}

function getRandomMonth() {
    let month = getRandomArbitrary(1, 13)

    if (month < 10) {
        return '0' + month
    } else {
        return month
    }
}

function getRandomDay() {
    let day = getRandomArbitrary(1, 29)

    if (day < 10) {
        return '0' + day
    } else {
        return day
    }
}
function get_image() {
    let date = getRandomYear() + '-' + getRandomMonth() + '-' + getRandomDay()
    text.innerText = 'Astronomy Picture of the Day' + ' ' + date
    const url = 'https://api.nasa.gov/planetary/apod?api_key=dwRxYd7VcPtD2GnWhwxDRE327vEj01zeyszPDFYz&date=' + date
    console.log(url)
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        image.src = data.hdurl
        description.innerText = data.explanation
        a.href = data.hdurl
    })

}