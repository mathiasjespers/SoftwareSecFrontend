import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

/*
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
*/

export function saveScore(uid, name, score) {
    let bodyFormData = new FormData();
    bodyFormData.append('uid', uid);
    bodyFormData.append('name', name);
    bodyFormData.append('score', score);
    console.log(uid + " " + name + " " + score)
    axios({
        method: 'post',
        url: baseUrl + '/score',
        data: bodyFormData
    })
    .then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
}