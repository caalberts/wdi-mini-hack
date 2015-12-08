'use strict'

function createForm () {
  const form = document.querySelector('form')
  const townList = form.elements['town']
  const town = townList.options[townList.selectedIndex].text
  const roomList = form.elements['roomtype']
  const type = roomList.options[roomList.selectedIndex].text
  const submitBtn = document.querySelector('#submitBtn')

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    fetchFromURL(town, type)
  })
}

function fetchFromURL (town, type) {
  // function getBaseURL () {
  //   return window.location.protocol + '//' + window.location.hostname + (window.location.port && ':' + window.location.port) + '/'
  // }
  //
  // const url = getBaseURL() + 'flats?town=' + town + '&type=' + type
  const url = '/flats?town=' + town + '&type=' + type
  console.log('Fetching: ' + url)
  window.fetch(url)
    .then((res) => res.json())
    .then((data) => {
      var searchResult = JSON.parse(JSON.stringify(data))
      searchResult.forEach((elem) => {
        document.querySelector('#results').textContent = elem
        console.log(elem)
      })
    })
}

createForm()
