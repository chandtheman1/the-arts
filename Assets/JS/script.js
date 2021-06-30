// DOM targeting for content injection
var testbench = document.getElementById('contentINJ');
var userQuery = document.getElementById('userQuery');

// Metropolitan Meseum API
var metUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search";
var metImg = "?primaryImage"
var imgCheck = "?hasimages=true"
var query = ''

function newSearch (url, param1, query) {   // URL source, Additional paramater, User search query
    fetch(url + param1 + query, {
        method: 'GET',
        // mode: 'no-cors',
    })
    .then(function (response) {             // Take response and parse it with JSON
        return response.json();
    })
    .then(function (data) {                 // Pull array of object ID's meeting criteria

        testbench.innerHTML = data.objectIDs;
    })
}

// newSearch(metUrl, imgCheck, '&q=' + query);   // Test use of metURL