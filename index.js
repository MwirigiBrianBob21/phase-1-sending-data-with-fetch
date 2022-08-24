// // Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }
// // adding the HTTP verb POST
//     fetch("http://localhost:3000/dogs", {
//         method: "POST",
//         // // Adding the headers
//         headers: {
//             "Content-Type": "application/json",
//                     // Adding an header so that we can tell the server type of data we want
//             Accept: "application/json"
//         },
//         // adding data
//         // data sent in fetch MUST be stored in the body of the configuration object
//         body: JSON.stringify(formData),

//         //handling what happens after

        
//     })
//     .then(response => response.json()
//     )
//     .then(object => console.log(object));

//     // fetch("http://localhost:3000/dogs", configurationObject) // this was replaced by addung the anonymous object as the 2nd argument to fetch()


// solution

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }, 
        body: JSON.stringify({
            name,
            email,
        }),
    })

    .then((response) => {return response.json();
    })
    .then((object) => {
        document.body.innerHTML = object["id"];
    
    })
    .catch((error) => {
        document.body.innerHTML = error.message;
    });
}