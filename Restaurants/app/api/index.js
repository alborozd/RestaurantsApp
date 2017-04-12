import Constants from "../constants";

function call(url) {
    return new Promise((resolve, reject) => {
        fetch(Constants.API + url, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            resolve(response.json());

        }).catch(error => reject(error));
    });
}

export function getRestaurants() {
    return call("getCafeList");
}


