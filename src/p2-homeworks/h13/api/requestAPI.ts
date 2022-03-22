/*--- axios ---*/

// export const instance = axios.create({
//     baseURL: 'https://neko-cafe-back.herokuapp.com/',
// })
//
//
// export const requestAPI = {
//     authTest(value: boolean) {
//         return instance.post('auth/test', {
//             success: value
//         });
//     }
// };


/*--- fetch ---*/

export async function request(value: boolean) {

    let data = {
        success: value
    };

    return await fetch('https://neko-cafe-back.herokuapp.com/auth/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}

