const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(responce => responce.json())
        .then(data => displayCountries(data))
    // .catch(err => console.log(err));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countryHTML = countries.map(country => getCountryElement(country));
    const container = document.getElementById('countries');
    container.innerHTML = countryHTML.join('');

    // console.log(countryHTML)
}

// Array.join('ja diye join kore ischuk')


//option 2------------
const getCountryElement = ({ name, flags, area, region }) => {
    //parameter er modde destructuring 
    return `
    <div class="country">
    <h2> ${name.common} </h2>
    <p>Area: ${area}</p>
    <p>Continent: ${region}</p>
    <img src="${flags.png}">
    </div>

    `;
}




//  Option 1------------
// const getCountryElement = country => {
//     //option 1 destructuring
//     const { name, flags } = country;
//     return `
//     <div class="country">
//     <h2> ${name.common} </h2>
//     <img src="${flags.png}">
//     </div>

//     `;
// } 
// 


//original --------
// const getCountryElement = country => {
//     return `
//     <div class="country">
//     <h2> ${country.name.common} </h2>
//     <img src="${country.flags.png}">
//     </div>

//     `;
// }



loadCountries();