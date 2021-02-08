'use strict'
let formData = {
  name: '',
  address: '',
  phone: ''
}
function updateData(field) {
  formData[field] = document.querySelector('#' + field).value
}
function submitData() {
  console.log('this is the formdata', formData)
  fetch('https://localhost:3000/what', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => console.log('response:', response))
    .catch(err => console.log('error:', err))
}
