const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com",
      }),
}

function submitData() {
    return fetch('http://localhost:3000/users', configurationObject)
    .then(res => res.json())
    .then(object => document.querySelector('body').append(object.id))
    .catch(error => document.querySelector('body').append(error))
}




