"use strict"

        window.addEventListener("load", fetchData)
        document.getElementById("gen").addEventListener("click", fetchData)

        function fetchData() {
            fetch('https://randomuser.me/api')
                .then(Response => Response.json())
                .then(data => {
                    console.log(data.results[0].picture.medium)
                    // const image=document.getElementById("img")
                    // let x =`${data.results[0].picture.medium}`
                    // image.setAttribute("src", x)


                    document.querySelector(".text").innerHTML = `
                            <img src='${data.results[0].picture.large}' height="128">
                            <h2><label>Name:- </label> ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h2>
                            <h3>Age:- ${data.results[0].dob.age} <br><br> Gender :- ${data.results[0].gender}</h3>
                            <h3>Email :- ${data.results[0].email}</h3>
                            <h3> Location :- ${data.results[0].location.state} ${data.results[0].location.country}</h3>
                            `

                    console.log(name)

                    // document.querySelector("h1").innerHTML= `hello <br> ${data.results[0].gender}`
                    console.log(data)
                })
        }


    