import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

/*
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
*/

export function saveScore(uid, name, score) {
    /*
    let bodyFormData = new FormData();
    console.log(score);
    bodyFormData.append('uid', uid);
    bodyFormData.append('name', name);
    bodyFormData.append('score', score);
    */

    let bodyFormData = { uid: uid, name: name, score: score };

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

export async function getScore(uid)   {
    let answer = "";
    await axios({
        method: 'get',
        url: baseUrl + '/highscore/' + uid,
    })
    .then((response) => {
        answer = response.data.highscore;
        console.log(answer);
    }, (error) => {
        console.log(error);
    });
    return answer;
}
