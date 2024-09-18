const API_URL = "http://localhost:5063/api/Authorization";

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

export const LoginUser = async (email: any, password: any) => {
    try {
        const queryParams = new URLSearchParams({
            email: email,
            password: password
        }).toString();

        const response = await fetch(`${API_URL}?${queryParams}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });

        const data = await response.json();

        if (!response.ok) {
            // Throw an error if the response is not ok
            throw new Error(data.message || 'Login failed');
        }

        return data;

    } catch (error: any) {
        console.log("Error during login:", error.message);
        throw error; // Rethrow the error to handle it in the calling function
    }
};