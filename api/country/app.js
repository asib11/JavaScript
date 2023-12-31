const countries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>  res.json())
    .then(data => displayData(data))
}

const displayData = data =>{
    console.log(data);
    const countriesName = document.getElementById('countries-name');
    data.forEach(country => {
        const countriesDetails = document.createElement('div');
        countriesDetails.classList.add('country') // class name add
        countriesDetails.innerHTML = `
        <h3> name: ${country.name.common} </h3>
        <h2>capital: ${country.capital? country.capital[0]: 'no capital'}</h2>
        <button onClick = "loadCountriesDetails('${country.cca2}')"class ="btn-name"> details </button>
        `
        countriesName.appendChild(countriesDetails);
    });
};

const loadCountriesDetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>showFlag(data[0]))
}

const showFlag = flag =>{
    const detailsContainer = document.getElementById('country-details');
    detailsContainer.innerHTML =`
    <h2>name: ${flag.name.common}</h2>
    <img src="${flag.flags.png}">
    `
}
countries();