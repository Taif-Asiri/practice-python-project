function init() {
const url = 'http://api.weatherapi.com/v1/current.json?key=65a1cbc6f06f4e139db100556251009&q=Abha&aqi=no'
// Cache our elements
    const summaryElem = document.querySelector('#weatherSummary')
    const imgElem = document.querySelector('#weatherImg')

    // We need to wait for the response to come back
    // Asynchronous Function
    async function getWeather() {
        // await will wait for axios to return some data (kinda)
        const response = await axios.get(url)

        console.log(response)
        const weatherText = response.data.current.condition.text
        const locationName = response.data.location.name
        const iconUrl = `http:${response.data.current.condition.icon}`
        console.log(iconUrl)

        // The weather in {location} is currently {weather text}
        summaryElem.textContent = `The weather in ${locationName} is currently ${weatherText}`
        imgElem.src = iconUrl
    }

    getWeather()
}

document.addEventListener('DOMContentLoaded', init)