import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const baseUrl = process.env.REACT_APP_API_URL;
const { user } = useAuth0();

/*
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
*/

const saveScore = (score) => {
    let bodyFormData = new FormData();
    bodyFormData.append('uid', user.uid);
    bodyFormData.append('name', user.name);
    bodyFormData.append('score', score);
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

export default saveScore;
