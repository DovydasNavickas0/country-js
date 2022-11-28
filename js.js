import allCountries from './data.js';

console.log(allCountries);
//console.log(allCountries.length)

const mainDiv = document.getElementById('mainDiv')

allCountries.map(country => {
//    console.log(country.name.common);


    const SingleCountryInfo = document.createElement('div');


    const countryName = document.createElement('h2');
    countryName.innerText = country.name.common;
    SingleCountryInfo.appendChild(countryName);


    const countryImg = document.createElement('img');
    countryImg.src = country.flags.png;
    SingleCountryInfo.appendChild(countryImg);


    const countryCapital = document.createElement('p')

    if(Array.isArray(country.capital)){
//        console.log(country.capital[0]);
        countryCapital.innerText = "Capital - " + country.capital[0];
    }else{
//        console.log("info nerasta");
        countryCapital.innerText = "Info nerasta";
    }

    SingleCountryInfo.appendChild(countryCapital);


    const countryContinent = document.createElement('button');
    countryContinent.classList.add("continent");
    countryContinent.innerText = country.region;

    if(country.region == "Africa"){
        countryContinent.style.backgroundColor = "#F2AF00";
        countryContinent.setAttribute('id', 'africa')
    }
    else if(country.region == "Europe"){
        countryContinent.style.backgroundColor = "#0956AC";
        countryContinent.setAttribute('id', 'europe')
    }
    else if(country.region == "Oceania"){
        countryContinent.style.backgroundColor = "#00CBF2";
        countryContinent.setAttribute('id', 'oceania')
    }
    else if(country.region == "Asia"){
        countryContinent.style.backgroundColor = "#FFF600";
        countryContinent.setAttribute('id', 'asia')
    }
    else if(country.region == "Antartica"){
        countryContinent.style.backgroundColor = "#D9D9D9";
        countryContinent.setAttribute('id', 'antartica')
    }
    else if(country.region == "Americas"){
        countryContinent.style.backgroundColor = "#A31414";
        countryContinent.setAttribute('id', 'americas')
    }

    SingleCountryInfo.appendChild(countryContinent);


    const countryLanguage = document.createElement('p');

    if( country.languages == null){
        countryLanguage.innerText = "info nerasta"
    }else{
        const vals = Object.keys(country.languages).map(key => country.languages[key]);
        countryLanguage.innerText = "Language/es - " + vals
    }

    SingleCountryInfo.appendChild(countryLanguage);


    const countryCurencies = document.createElement('p');
    for(let key in country.currencies) {
        countryCurencies.innerText = "Currency - " + key
    }
    SingleCountryInfo.appendChild(countryCurencies);

    mainDiv.appendChild(SingleCountryInfo);
})

const africa_button = document.getElementById('africa');
const europe_button = document.getElementById('europe');
const oceania_button = document.getElementById('oceania');
const asia_button = document.getElementById('asia');
const antartica_button = document.getElementById('antartica');
const americas_button = document.getElementById('americas');

// africa_button.addEventListener("click")
// europe_button.addEventListener("click")
// oceania_button.addEventListener("click")
// asia_button.addEventListener("click")
// antartica_button.addEventListener("click")
// americas_button.addEventListener("click")