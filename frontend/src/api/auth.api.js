import axios from 'axios'

export async function signup(inName, inUsername, inEmail, inPassword) {
    try {
        const response = await fetch("http://localhost:4000/studentstash/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: inName, username: inUsername, email: inEmail, password: inPassword})
        })

        const data = response.json();
        if (!response.ok) {
            console.error("Error:", data); // Log error details if response status is not OK
        }
    
        return data;
        // const response = await axios.post("http://localhost:4000/studentstash/auth/signup", {
        //     name: inName,
        //     username: inUsername,
        //     email: inEmail,
        //     password: inPassword
        // }, {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer your-token", // Replace with your token // not needed for now

        //     }
        // });

        // // Response data from Axios is directly available in response.data
        // return response.data;
    } catch (error) {
        console.log(error)
    }
   
}
