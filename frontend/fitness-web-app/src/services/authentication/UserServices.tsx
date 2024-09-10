const API_URL = "http://localhost:5062/api/Authorization";

export const PostUserData = async (email: any, password: any) => {

    const userData = JSON.stringify({
        email: email,
        password: password
    });

    const myRequest = new Request(API_URL, {
        method: "POST",
        body: userData,
        headers: {"Content-Type": "application/json"},
    });

    try {
        const response = await fetch(myRequest);
        const result = await response.json();
        console.log("Success", result);
    } catch (error) {
        console.log("Error", error);
    }
};