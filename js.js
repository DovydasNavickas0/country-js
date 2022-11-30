import allCountries from './data.js';

console.log(allCountries);
//console.log(allCountries.length)

const mainDiv = document.getElementById('mainDiv')

const continentsAll = ['all']

allCountries.map(country => {
    //    console.log(country.name.common);
    
        if(!continentsAll.includes(country.region)) continentsAll.push(country.region)
    
    
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
    
    
        const countryContinent = document.createElement('h4');
        countryContinent.classList.add("continent");
        countryContinent.innerText = country.region;
    
        if(country.region == "Africa"){
            countryContinent.style.backgroundColor = "#F2AF00";
        }
        else if(country.region == "Europe"){
            countryContinent.style.backgroundColor = "#0956AC";
        }
        else if(country.region == "Oceania"){
            countryContinent.style.backgroundColor = "#00CBF2";
        }
        else if(country.region == "Asia"){
            countryContinent.style.backgroundColor = "#FFF600";
        }
        else if(country.region == "Antartica"){
            countryContinent.style.backgroundColor = "#D9D9D9";
        }
        else if(country.region == "Americas"){
            countryContinent.style.backgroundColor = "#A31414";
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

const continents_buttons = document.querySelector('header');

//console.log(continentsAll)

continentsAll.forEach(continentsAll => {
    const menuButton = document.createElement('button');
    menuButton.innerText = continentsAll;
    menuButton.setAttribute('id', continentsAll);
    continents_buttons.appendChild(menuButton);
})

const my_buttons = document.getElementsByTagName('button');
const card_continents = document.getElementsByTagName('h4');

for (let one_category of my_buttons) {

    one_category.addEventListener('click',
        () => { getCountry(one_category.innerText) })
}

//console.log(my_buttons)

const getCountry = (continent) => {

    console.log(continent)
    //console.log(card_continents)
    //console.log(my_buttons)
    //console.log(continentsAll)

    for(let butt_cont in continentsAll){
        if(continentsAll == continent){
            console.log("continent1")
            document.querySelector('div').style.display = "inherit";
        }
        else{
            console.log("continent2")
            document.querySelector('div').style.display = "none";
        }
    }

}