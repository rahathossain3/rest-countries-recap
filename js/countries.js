const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(responce => responce.json())
        .then(data => displayCountries(data))
    // .catch(err => console.log(err));
}

const displayCountries = countries => {
    console.log(countries[0].flags);
    const countryHTML = countries.map(country => getContryElement(country));
    const container = document.getElementById('countries');
    container.innerHTML = countryHTML.join('');

    // console.log(countryHTML)
}

// Array.join('ja diye join kore ischuk')

const getContryElement = country => {
    return `
    <div class="country">
    <h2> ${country.name.common} </h2>
    <img src="${country.flags.png}">
    </div>

    `
}

loadCountries();