'use strict';

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');
var urlCRegion = 'https://restcountries.eu/rest/v2/region/';
var urlCapital = 'https://restcountries.eu/rest/v2/capital/';

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
	var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
    .then(function(resp) {
    	return resp.json();
    })
    .then(showCountriesList);
}

function showCountriesList(resp) {
	countriesList.innerHTML = '';
    resp.forEach(function(item) {
    	var liEl = document.createElement('li');
    	var div = document.createElement('div');
    	liEl.innerText = item.name;
    	div.innerHTML = 'Capital: ' + item.capital + '<br/>' ;
    	div.innerHTML += 'Region: ' + item.region + '<br/>' ;
    	countriesList.appendChild(liEl);
    	countriesList.appendChild(div); 
    });
}

