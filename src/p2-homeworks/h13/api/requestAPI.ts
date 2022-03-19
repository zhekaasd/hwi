import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})


export const requestAPI = {
    authTest(value: boolean) {
        return instance.post('auth/test', {
            success: value
        });
    }
};