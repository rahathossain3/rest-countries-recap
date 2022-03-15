const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(responce => responce.json())
        .then(data => displayCountries(data))
    // .catch(err => console.log(err));
}

const displayCountries = countries => {
    console.log(countries);
    const countryHTML = countries.map(country => getContryElement(country));
    const container = document.getElementById('countries');
    container.innerHTML = countryHTML;


    // console.log(countryHTML)
}

const getContryElement = country => {
    return `
    <div>
    <h2> ${country.name.common} </h2>
    </div>

    `
}

loadCountries();