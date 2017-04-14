import Constants from "../constants";

function call(url) {
    return new Promise((resolve, reject) => {
        fetch(Constants.BASE_URL + "/api/1/" + url, {
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


