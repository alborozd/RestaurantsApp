import React from "react";
import {
    AsyncStorage
} from "react-native";

class DataStorage {

    set(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value))
    }

    get(key, cb) {
        AsyncStorage.getItem(key, (err, value) => {
            if (cb) {
                if (err) cb(err, null)
                else cb(null, value === null ? null : JSON.parse(value))
            }
        });
    }
}

export default new DataStorage();